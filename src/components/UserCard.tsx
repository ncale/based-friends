import Image from "next/image";

export default function UserCard( props: { 
		pfpUrl: string | undefined, 
		username: string, 
		castTime: Date, 
		onchainTime: Date | null 
	} ) {
	return (
		<div className="bg-gray-200 w-72 mr-2 mb-2">
			<div className="flex p-2 items-center">
				{/* pfp */}
				{props.pfpUrl ? (
					<Image 
						src={props.pfpUrl} 
						alt={`${props.username} profile picture`}
						width={300}
						height={300}
						className="rounded-full max-w-14 max-h-14 w-14 h-14"
					/>
				) : (
					<></>
				)}
				{/* user info */}
				<div className="p-2">
					<h3 className="text-md font-bold leading-none">{props.username}</h3>
					<p className="text-sm leading-none">active?</p>
					<p className="text-sm leading-none">casted {props.castTime.toString()}</p>
					{props.onchainTime ? (
						<p className="text-sm leading-none">onchain {props.onchainTime.toString()}</p>
					) : (
						<></>
					)}
				</div>
			</div>
		</div>
	)
}