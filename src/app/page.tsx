"use client";

import FriendsList from "@/components/FriendsList";
import SideBar from "@/components/SideBar";
import LoadingPage from "../components/LoadingPage";
import LogInPage from "../components/LogInPage";
import ErrorPage from "../components/ErrorPage";
import { useState } from "react";
import { useProfile } from "@farcaster/auth-kit";
import useSWR, { Fetcher } from "swr";
import { DOMAIN } from "@/utils/config";
import { type FormattedAirstackData } from "@/pages/api/friends";
import { MouseEvent } from "react";

function filterByParams(data: FormattedAirstackData[], query: string, filterSelection: FilterSelection) {
  let filteredData: FormattedAirstackData[] = []
  // filter by following
  filteredData = data.filter((user) => {
    if (filterSelection.followingFilter === "following") {
      return true
    } else if (filterSelection.followingFilter === "mutual") {
      return (user.followsMe)
    } else if (filterSelection.followingFilter === "not following") {
      return (!user.followsMe)
    } else {return true}
  })
  // filter by online status
  if (filterSelection.filterIsOnline) {
    filteredData = filteredData.filter((user) => {
      const millisecondsDiff = Date.now() - new Date(user.latestFarcasterAction).getTime()
      return ((millisecondsDiff/(1000*60)) < 10)
    })
  }
  // filter by onchain status
  if (filterSelection.filterIsOnline) {
    filteredData = filteredData.filter((user) => {
      const millisecondsDiff = user.latestBaseAction ? Date.now() - new Date(user.latestBaseAction).getTime() : 1
      return ((millisecondsDiff/(1000*60)) < 10)
    })
  }
  // filter by search query
  const searchInput = new RegExp(query)
  return filteredData.filter((user) => searchInput.test(user.username))
}

const fetcher: Fetcher<FormattedAirstackData[], string> = (fid: string) => 
	fetch(`${DOMAIN}/api/friends?fid=${fid}`).then(res => res.json())

export interface FilterSelection {
  followingFilter: string // "following" | "mutual" | "not following"
  filterIsOnline: boolean
  filterIsOnchain: boolean
}

export default function HomePage() {

  // fetch data
  const {
		isAuthenticated,
		profile: { username, fid }
	} = useProfile();
	const { data, error, isLoading } = useSWR(fid ? fid.toString() : undefined, fetcher)
	
  // set sort & filter state
  const [filterInput, setFilterInput] = useState({followingFilter: "following", filterIsOnline: false, filterIsOnchain: false});
  const [searchInput, setSearchInput] = useState("");

  // sort & filter handler functions
	function handleFollowingFilterChange(e: MouseEvent) {
    setFilterInput({
      followingFilter: (e.target as HTMLButtonElement).value,
      filterIsOnline: false,
      filterIsOnchain: false,
    })
  }
  function handleSearchChange(val: string) {
		setSearchInput(val)
	}

  // return error pages
  if (!isAuthenticated || !fid) return <LogInPage />
  if (isLoading) return <LoadingPage />
  if (error) return <ErrorPage />
  if (!data) return <p>Unexpected Issue... Please Refresh</p>

  const results = filterByParams(data, searchInput, filterInput)

  return (
    <main className="flex px-20">
      {/* side bar */}
      <SideBar searchInput={searchInput} onSearchChange={handleSearchChange} filterInput={filterInput} onFilterChange={handleFollowingFilterChange}/>
      
      {/* main body */}
      <div className="w-full pl-2 ml-56">
        <FriendsList userList={results} />
      </div>
    </main>
  )
}
