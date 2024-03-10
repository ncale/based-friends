import AuthButton from "./AuthButton";

export default function LogInPage() {
  return (
    <>
      {/* desktop view */}
      <main className="hidden md:flex md:flex-col md:items-center mt-32 text-white">
        <p className="mb-4"> </p>
        <p className="mb-4">Welcome to BasedFriends!</p>
        <p className="mb-4">
          BasedFriends is a friends list based on your Farcaster social graph
          that tells you who is online and who is onchain.
        </p>
        <div className="flex flex-col items-center">
          <div className="flex justify-center">
            <p>
              <span className="underline">Online</span>: Cast, Like,
              or Recast on Farcaster within the last 10 mins
            </p>
          </div>
          <div className="flex justify-center">
            <p className="mb-4">
              <span className="underline">Onchain</span>: Transaction on the
              Base Blockchain within the last 24 hours
            </p>
          </div>
        </div>
        <p>Simply Sign In with Farcaster in the top right to get started. </p>
      </main>
      {/* mobile view */}
      <main
        className="flex flex-col items-center justify-center mt-2 md:hidden text-white"
        style={{ height: "60vh" }}
      >
        <p className="mb-4">Welcome to BasedFriends!</p>
		<p className="mb-4">Connect with Farcaster to get started
        <AuthButton />
		</p>
      </main>
    </>
  );
}
