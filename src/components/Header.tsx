import AuthButton from "@/components/AuthButton";

export default async function Header() {
	return (
		<header className="px-20 pt-4 flex flex-col">
			<div className="flex justify-between items-end pb-1">
				<h1 className="text-5xl">
					<span style={{color: '#2954ED'}}>Based</span> <span className="text-white">Friends</span>
				</h1>
				<div className="">
					<AuthButton/>
				</div>
			</div>
			<hr className="w-full mb-2"/>
		</header>
	)
}            