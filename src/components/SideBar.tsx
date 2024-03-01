"use client";

import { LuSearch } from "react-icons/lu";
import { LuUserCheck2 } from "react-icons/lu";
import { LuUsers2 } from "react-icons/lu";
import { LuUserPlus2 } from "react-icons/lu";
import { LuHeart } from "react-icons/lu";
import { LuRefreshCcw } from "react-icons/lu";
import { LuMessagesSquare } from "react-icons/lu";
import { LuLayers } from "react-icons/lu";
import { MouseEvent } from "react";
import { FilterSelection } from "@/app/page";

export default function SideBar({ 
	searchInput, 
	onSearchChange,
	filterInput,
	onFilterChange,
}: {
	searchInput: string
	onSearchChange: (inputVal: string)=>void
	filterInput: FilterSelection
	onFilterChange: (e: MouseEvent)=>void
}) {

	return (
    <div className="fixed top-20 w-56 text-white mt-4">
			{/* Search Box */}
			<div className="mt-1 flex items-center">
				<LuSearch />
				<input 
					type="search" 
					placeholder="Search..."
					value={searchInput}
					onChange={(e) => onSearchChange(e.target.value)}
					className="leading-none rounded-sm shadow-sm w-full bg-transparent ml-1"
				/>
			</div>

			<hr className="w-full mb-1.5"/>

			{/* Filters */}
			<ul className="">
				<li className="text-sm leading-none mb-1 flex items-center">
					<LuUserCheck2 />
					<button
						type="button" 
						name="followingButton"
						value={"following"}
						onClick={onFilterChange}
						className={`cursor-pointer ml-1 ${(filterInput.followingFilter === "following" ? "text-blue-400" : "")}`}>
						Following
					</button>
				</li>
				<li className="text-sm leading-none mb-1 flex items-center">
					<LuUsers2 />
					<button 
						type="button" 
						name="mutualButton"
						value={"mutual"}
						onClick={onFilterChange}
						className={`cursor-pointer ml-1 ${(filterInput.followingFilter === "mutual" ? "text-blue-400" : "")}`}>
						Mutual
					</button>
				</li>
				<li className="text-sm leading-none mb-1 flex items-center">
					<LuUserPlus2 />
					<button 
						type="button" 
						name="doesntFollowButton"
						value={"not following"}
						onClick={onFilterChange}
						className={`cursor-pointer ml-1 ${(filterInput.followingFilter === "not following" ? "text-blue-400" : "")}`}>
						{"Doesn't Follow Back"}
					</button>
				</li> 
				<li className="text-sm leading-none mb-1">-</li>
				<li className="text-sm leading-none mb-1 flex items-center">
					<LuMessagesSquare />
					<button 
						type="button" 
						className="cursor-pointer hover:text-lightblue active:text-darkblue ml-1">
						Currently online
					</button>
				</li> 
				<li className="text-sm leading-none mb-1 flex items-center">
					<LuLayers />
					<button 
						type="button" 
						className="cursor-pointer hover:text-lightblue active:text-darkblue ml-1">
						Active onchain
					</button>
				</li>
			</ul>

			<hr className="w-full my-1.5"/>

			{/* Sorts */}
			<ul className="flex mb-1.5">
				<li className="text-sm leading-none">
					<label>
						<input type="radio" name="sort" value="most" checked={true} />
						<span className="ml-1">Most</span>
					</label>
				</li>
				<li className="text-sm leading-none ml-2">
					<label>
						<input type="radio" name="sort" value="least" />
						<span className="ml-1">Least</span>
					</label>
				</li>
			</ul>
			<ul className="">
				{/* <li className="text-sm leading-none mb-1 flex items-center">
					<LuHeart />
					<button type="button" className="ml-1">Mutual Likes</button>
				</li>
				<li className="text-sm leading-none mb-1 flex items-center">
					<LuRefreshCcw />
					<button type="button" className="ml-1">Mutual Recasts</button>
				</li> */}
				<li className="text-sm leading-none mb-1 flex items-center">
					<LuMessagesSquare />
					<button type="button" className="ml-1">Recently Casted</button>
				</li>
				<li className="text-sm leading-none mb-1 flex items-center">
					<LuLayers />
					<button type="button" className="ml-1">Recently Onchain</button>
				</li>
			</ul>
		</div>
	)
}