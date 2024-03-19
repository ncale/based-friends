import AuthButton from "./AuthButton";

export default function LogInPage() {
  return (
    <>
      {/* desktop view */}
      <main className="hidden md:flex md:flex-col md:items-center mt-32 text-white">
        <p className="mb-4 text-5xl">Welcome to BasedFriends!</p>
        <p className="mb-4 max-w-lg text-center">
          BasedFriends is a friends list based on your Farcaster social graph
          that tells you who is <span className="underline">online</span> and
          who is <span className="underline">onchain</span>.
        </p>
        <div className="grid gap-y-1 border p-4 mb-4">
          <p>
            <span className="underline">Online</span>: Cast, Like, or Recast on
            Farcaster within the last 10 mins
          </p>
          <p>
            <span className="underline">Onchain</span>: Transaction on the Base
            Blockchain within the last 24 hours
          </p>
        </div>
        
        <p>Simply Sign In with Farcaster in the top right to get started. </p>
      </main>
      {/* mobile view */}
      <main
        className="flex flex-col items-center justify-center mt-2 md:hidden text-white"
>
        <p className="mb-20"> </p>
        <p className="mb-4 max-w-lg text-center">
          BasedFriends is a friends list based on your Farcaster social graph
          that tells you who is <span className="underline">online</span> and
          who is <span className="underline">onchain</span>.
        </p>
        <div className="grid gap-y-1 border p-4 mb-4">
          <p>
            <span className="underline">Online</span>: Cast, Like, or Recast on
            Farcaster within the last 10 mins
          </p>
          <p>
            <span className="underline">Onchain</span>: Transaction on the Base
            Blockchain within the last 24 hours
          </p>
        </div>
        <p className="mb-4">
          Connect with Farcaster to get started
        </p>
        <div>
          <AuthButton />
        </div>
      </main>
    </>
  );
}
