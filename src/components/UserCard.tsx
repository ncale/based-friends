import { IconContext } from "react-icons";
import { LuLayers } from "react-icons/lu";
import { LuMessagesSquare } from "react-icons/lu";
import { LuInfo } from "react-icons/lu";
import { Avatar, Tooltip, Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";

export default function UserCard( props: { 
		displayName: string
		username: string
		fid: string
		pfpUrl: string | undefined
		castTime: Date
		followsMe: boolean
		onchainTime: Date | undefined
		onchainHash: string | undefined
	} ) {

	function createCastMsg(milliseconds: number) {
		if ((milliseconds / (1000)) < 60) {
			return `seconds ago`
		} else if ((milliseconds / (1000*60)) < 60) {
			const mins = Math.round(milliseconds / (1000*60))
			return `${mins} min${(mins==1) ? '' : 's'} ago`
		} else if ((milliseconds / (1000*60*60)) < 24) {
			const hours = Math.round(milliseconds / (1000*60*60))
			return `${hours} hr${(hours==1) ? '' : 's'} ago`
		} else if ((milliseconds / (1000*60*60*24)) < 30) {
			const days = Math.round(milliseconds / (1000*60*60*24))
			return `${days} day${(days==1) ? '' : 's'} ago`
		} else if ((milliseconds / (1000*60*60*24*30)) < 6) {
			const months = Math.round(milliseconds / (1000*60*60*24*30))
			return `${months} mo${(months==1) ? '' : 's'} ago`
		} else {
			return '... a long time ago'
		}
	}
	const castMillisDiff = Date.now() - new Date(props.castTime).getTime()
	const isOnline = ((castMillisDiff / (1000*60)) < 10)
	const castMsg = createCastMsg(castMillisDiff)

	function createOnchainMsg(milliseconds: number) {
		if ((milliseconds / (1000)) < 60) {
			return `seconds ago`
		} else if ((milliseconds / (1000*60)) < 60) {
			const mins = Math.round(milliseconds / (1000*60))
			return `${mins} min${(mins==1) ? '' : 's'} ago`
		} else if ((milliseconds / (1000*60*60)) < 24) {
			const hours = Math.round(milliseconds / (1000*60*60))
			return `${hours} hr${(hours==1) ? '' : 's'} ago`
		} else if ((milliseconds / (1000*60*60*24)) < 30) {
			const days = Math.round(milliseconds / (1000*60*60*24))
			return `${days} day${(days==1) ? '' : 's'} ago`
		} else if ((milliseconds / (1000*60*60*24*30)) < 6) {
			const months = Math.round(milliseconds / (1000*60*60*24*30))
			return `${months} mo${(months==1) ? '' : 's'} ago`
		} else {
			return '... a long time ago'
		}
	}
	let isActiveOnchain: boolean = false
	let onchainMsg: string = 'hmm... no base txns found'
	if (props.onchainTime) {
		const onchainMillisDiff = Date.now() - new Date(props.onchainTime).getTime()
		isActiveOnchain = ((onchainMillisDiff) / (1000*60*60)) < 24
		onchainMsg = createOnchainMsg(onchainMillisDiff)
	} 

	const castTooltip = (
		<div>
			<span className="block text-xs leading-none">{castMsg}</span>
		</div>
	)
	const baseTooltip = (
		<div>
			<span className="block text-xs leading-none">{onchainMsg}</span>
		</div>
	)
	const infoTooltip = (
		<div>
			<span className="block text-xs leading-none">fid: {props.fid}</span>
		</div>
	)
	const infoPopover = (
		<div>
			<span className="block text-md font-extrabold leading-none">fid: {props.fid}</span>
		</div>
	)

	return (
		<div className="bg-gray-200 rounded-md p-2 truncate flex justify-between">
			<a href={`https://warpcast.com/${props.username}`} target="_blank" className="cursor-default">
				{/* profile */}
				<div className="flex items-center">
					{/* pfp */}
					{props.pfpUrl ? (
						<Tooltip content={castTooltip} size="sm" radius="sm" closeDelay={10} offset={0} placement="bottom">
							<Avatar 
								isBordered
								color={isOnline ? "success" : "default"}
								src={props.pfpUrl}
								size="lg" />
						</Tooltip>
					) : (
						<></>
					)}
					{/* profile info */}
					<div className="flex flex-col ml-2">
						{/* display name */}
						<h3 className="text-md leading-none cursor-default font-extrabold overflow-hidden">{props.displayName}</h3>
						{/* username */}
						<div className="flex items-center">
							<span className="text-sm leading-none cursor-default">@{props.username}</span>
							{props.followsMe ? <span className="text-xs leading-none rounded-sm ml-1.5 cursor-default" style={{border: "1px solid black", padding: "1px"}}>follows you</span> : ''}
						</div>
						{/* online / active bar */}
						<div className="flex md:flex-row md:items-center flex-col items-start justify-start mt-1">
							{/* online button */}
							<div className="">
								<div className="hidden md:inline">
									<Tooltip content={castTooltip} size="sm" radius="sm" closeDelay={10} offset={0} placement="bottom-start">
										{isOnline ? (
											<span className="block py-0.5 text-xs leading-none rounded-md px-1 bg-green-400 text-green-950 font-bold">online</span>
										) : (
											<span className="block py-0.5 text-xs leading-none rounded-md px-1 bg-gray-300 text-gray-950 font-bold">offline</span>
										)}
									</Tooltip>
								</div>
								<div className="md:hidden">
									{isOnline ? (
										<span className="block text-xs leading-none rounded-md px-1 bg-green-400 text-green-950 font-bold">Seen {castMsg}</span>
									) : (
										<span className="block text-xs leading-none rounded-md px-1 bg-gray-300 text-gray-950 font-bold md:hidden">Seen {castMsg}</span>
									)}
								</div>
							</div>
							{/* onchain button */}
							<a href={`https://onceupon.gg/${props.onchainHash}`} target="_blank" className="block cursor-default">
								<Tooltip content={baseTooltip} size="sm" radius="sm" closeDelay={10} offset={0} placement="bottom-start">
									{isActiveOnchain ? (
										<span className="text-xs py-0.5 leading-none ml-0.5 rounded-md px-1 bg-blue-400 text-blue-950 font-bold hidden md:block ">
											active onchain
										</span>
									) : (
										<span className="text-xs py-0.5 leading-none ml-0.5 rounded-md px-1 bg-gray-300 text-gray-950 font-bold hidden md:block ">
											not active onchain
										</span>
									)}
								</Tooltip>
								<div className="md:hidden">
									{isActiveOnchain ? (
										<span className="block mt-1 text-xs leading-none rounded-md px-1 bg-blue-400 text-blue-950 font-bold">
											{`onchain ${onchainMsg}`}
										</span>
									) : (
										<span className="block mt-1 text-xs leading-none rounded-md px-1 bg-gray-300 text-gray-950 font-bold">
											{props.onchainTime ? `onchain ${onchainMsg}` : onchainMsg}
										</span>
									)}
								</div>
							</a>
						</div>
					</div>
				</div>
			</a>

			<a href={`https://warpcast.com/${props.username}`} target="_blank" className="block w-full h-auto cursor-default">
				
			</a>

			{/* icons */}
			<div className="hidden md:flex">
				<IconContext.Provider value={{size: '11px'}}>
					<a href={`https://onceupon.gg/${props.onchainHash}`} target="_blank" className="h-min">
						<span><LuLayers /></span>
					</a>
				</IconContext.Provider>
				<IconContext.Provider value={{size:'12px'}}>
					<a href="https://app.converse.xyz/conversation" target="_blank" className="h-min items-start ml-1">
						<span className="h-min"><LuMessagesSquare /></span>
					</a>
					<Tooltip content={infoTooltip} size="sm" radius="sm" closeDelay={10} offset={3} placement="right">
						<span className="ml-1 h-min cursor-pointer"><LuInfo /></span>
					</Tooltip>
				</IconContext.Provider>
			</div>
			<div className="flex md:hidden">
				<IconContext.Provider value={{size: '22px'}}>
					<a href={`https://onceupon.gg/${props.onchainHash}`} target="_blank" className="h-min">
						<span><LuLayers /></span>
					</a>
					<a href="https://app.converse.xyz/conversation" target="_blank" className="h-min items-start ml-2">
						<span className="h-min"><LuMessagesSquare /></span>
					</a>
					<Popover placement="left">
						<PopoverTrigger className="z-20">
							<span className="ml-2 h-min cursor-pointer"><LuInfo /></span>
						</PopoverTrigger>
						<PopoverContent>
							{infoPopover}
						</PopoverContent>
					</Popover>
				</IconContext.Provider>
			</div>
		</div>
	)
}