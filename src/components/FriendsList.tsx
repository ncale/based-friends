"use client";

import UserCard from "@/components/UserCard";
import { fetchAirstackData } from "@/pages/api/friends";
import { useProfile } from "@farcaster/auth-kit";
import { type FormattedAirstackData } from "@/pages/api/friends";
import useSWR, { Fetcher } from "swr";

const fetcher: Fetcher<FormattedAirstackData[], string> = (fid: string) => fetchAirstackData(Number(fid))

export default function FriendsList() {

	const {
		isAuthenticated,
		profile: { username, fid }
	} = useProfile();

	const { data, error, isLoading } = useSWR(fid ? fid.toString() : undefined, fetcher)
	
	// console.log(fid, fid?.toString())
	// console.log(isAuthenticated)
	// console.log(username)

	if (!isAuthenticated || !fid) return <p>Please log in</p>
	if (isLoading) return <p>Loading...</p>
	if (error) return <p>Error...</p>
	if (!data) return <p>Friends not found. Refresh.</p>

	const userCards = data.map((user, i) => {
		return (
			<UserCard 
				key={i}
				pfpUrl={user.avatar} 
				username={user.username} 
				castTime={user.latestFarcasterAction} 
				onchainTime={user.latestBaseAction} />
		)
	})
	return (
		<section className="flex flex-wrap">
			{userCards}
		</section>
	)
}