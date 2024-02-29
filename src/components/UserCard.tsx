import Image from "next/image";

export default function UserCard( props: { 
		pfpUrl: string | undefined, 
		username: string, 
		castTime: Date, 
		onchainTime: Date | null 
	} ) {

	function createCastMsg() {
		const milliseconds = Date.now() - new Date(props.castTime).getTime()
		if ((milliseconds / (1000)) < 60) {
			return `Casted seconds ago`
		} else if ((milliseconds / (1000*60)) < 60) {
			const mins = Math.round(milliseconds / (1000*60))
			return `Casted ${mins} min${(mins==1) ? '' : 's'} ago`
		} else if ((milliseconds / (1000*60*60)) < 24) {
			const hours = Math.round(milliseconds / (1000*60*60))
			return `Casted ${hours} hr${(hours==1) ? '' : 's'} ago`
		} else if ((milliseconds / (1000*60*60*24)) < 30) {
			const days = Math.round(milliseconds / (1000*60*60*24))
			return `Casted ${days} day${(days==1) ? '' : 's'} ago`
		} else if ((milliseconds / (1000*60*60*24*30)) < 6) {
			const months = Math.round(milliseconds / (1000*60*60*24*30))
			return `Casted ${months} mo${(months==1) ? '' : 's'} ago`
		} else {
			return 'Casted... a long time ago'
		}
	}
	const castMsg = createCastMsg()

	function createOnchainMsg() {
		if (!props.onchainTime) return 
		const milliseconds = Date.now() - new Date(props.onchainTime).getTime()
		if ((milliseconds / (1000)) < 60) {
			return `Casted seconds ago`
		} else if ((milliseconds / (1000*60)) < 60) {
			const mins = Math.round(milliseconds / (1000*60))
			return `Onchain ${mins} min${(mins==1) ? '' : 's'} ago`
		} else if ((milliseconds / (1000*60*60)) < 24) {
			const hours = Math.round(milliseconds / (1000*60*60))
			return `Onchain ${hours} hr${(hours==1) ? '' : 's'} ago`
		} else if ((milliseconds / (1000*60*60*24)) < 30) {
			const days = Math.round(milliseconds / (1000*60*60*24))
			return `Onchain ${days} day${(days==1) ? '' : 's'} ago`
		} else if ((milliseconds / (1000*60*60*24*30)) < 6) {
			const months = Math.round(milliseconds / (1000*60*60*24*30))
			return `Onchain ${months} mo${(months==1) ? '' : 's'} ago`
		} else {
			return 'Onchain... a long time ago'
		}
	}
	const onchainMsg = createOnchainMsg()

	return (
		<div className="bg-gray-200 rounded-md truncate">
			<div className="flex p-2 items-center">
				{/* pfp */}
				{props.pfpUrl ? (
					<Image 
						src={props.pfpUrl} 
						alt={`${props.username} profile picture`}
						width={300}
						height={300}
						className="rounded-full max-w-12 max-h-12 w-12 h-12"
					/>
				) : (
					<></>
				)}
				{/* user info */}
				<div className="pl-2">
					<h3 className="text-sm font-bold leading-none">{props.username}</h3>
					<p className="text-xs leading-none">active?</p>
					<p className="text-xs leading-none">{castMsg}</p>
					<p className="text-xs leading-none">{onchainMsg}</p>
				</div>
			</div>
		</div>
	)
}