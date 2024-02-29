export default async function SideBar() {
	return (
    <div className="w-56 text-white">
			{/* Search Box */}
			<div className="mt-1">
				<input 
					type="search" 
					placeholder="Search..."
					className="leading-none rounded-sm shadow-sm w-full bg-transparent"
				/>
			</div>

			<hr className="w-full mb-1"/>

			{/* Filters */}
			<ul className="">
				<li className="text-md leading-none mb-1">
					<button 
						type="button" 
						className="cursor-pointer hover:text-lightblue active:text-darkblue">
						Following
					</button>
				</li>
				<li className="text-md leading-none mb-1">
					<button 
						type="button" 
						className="cursor-pointer hover:text-lightblue active:text-darkblue">
						Mutual
					</button>
				</li>
				<li className="text-md leading-none mb-1">
					<button 
						type="button" 
						className="cursor-pointer hover:text-lightblue active:text-darkblue">
						Follows Me
					</button>
				</li>
			</ul>

			<hr className="w-full mb-1"/>

			{/* Sorts */}
			<ul className="flex mb-1">
				<li className="text-md leading-none">
					<label>
						<input type="radio" name="sort" value="most" checked={true} />
						<span className="ml-1">Most</span>
					</label>
				</li>
				<li className="text-md leading-none ml-2">
					<label>
						<input type="radio" name="sort" value="least" />
						<span className="ml-1">Least</span>
					</label>
				</li>
			</ul>
			<ul className="">
				<li className="text-md leading-none mb-1"><button type="button">Interactions</button></li>
				<li className="text-md leading-none mb-1"><button type="button">Recently Casted</button></li>
				<li className="text-md leading-none mb-1"><button type="button">Recently Onchain</button></li>
			</ul>
		</div>
	)
}