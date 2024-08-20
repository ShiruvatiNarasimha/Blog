import { Avatar } from "./BlogCard"



export const Appbar = () => {
    return <div>
        <div className="fixed  w-full bg-white/30 backdrop-blur shadow-md z-50">
  <div>
    <div className="flex justify-between h-16">
      <div className="flex-shrink-0 flex items-center font-extrabold from-zinc-950 pl-6">
          Welcome To Bloging 
      </div>
      <div className="flex items-center">
        <a href="#" className="text-black px-3 py-2 rounded-md text-sm font-extrabold">Home</a>
        <a href="#" className="text-black px-3 py-2 rounded-md text-sm font-extrabold">New</a>
        <a href="#" className="text-black px-3 py-2 rounded-md text-sm font-extrabold">Contact</a>
        <a href="#" className="text-black  py-2 rounded-md text-sm font-extrabold pl-4">Logout</a>
        <div className="pl-7">
        <Avatar name= "Hello"/>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
}