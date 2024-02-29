import FriendsList from "@/components/FriendsList";
import SideBar from "@/components/SideBar";

export default async function HomePage() {

  return (
    <main className="flex px-20">
      {/* side bar */}
      <SideBar />
      
      {/* main body */}
      <div className="w-full p-2">
        <FriendsList />
      </div>
    </main>
  )
}
