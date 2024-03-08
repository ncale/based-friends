import AuthButton from "./AuthButton"

export default function LogInPage() {
	return (
		<>
			{/* desktop view */}
			<main className="hidden md:flex md:flex-col md:items-center mt-20 text-white">
				<p>DESKTOP VIEW</p>
				<p>Please log in</p>
			</main>
			{/* mobile view */}
			<main className="flex flex-col items-center justify-center mt-2 md:hidden text-white" style={{height: "60vh"}}>
				<p>Welcome to BasedFriends!</p>
				<AuthButton/>
			</main>
		</>
	)
}