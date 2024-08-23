import { Avatar } from "./BlogCard"
import { Link } from "react-router-dom"

export const Appbar = () => {
    return <div className="border-b flex justify-between px-10 py-4">
        <Link to={'/blogs'} className="flex flex-col justify-center cursor-pointer">
                Medium
        </Link>
        <div>
            <Link to={`/publish`}>
                <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">New</button>
            </Link>

            <Avatar size={"big"} name="harkirat" />
        </div>
    </div>
}

{/* <div className="fixed  w-full bg-white/30 backdrop-blur shadow-md z-50">
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
        </div>
      </div>
    </div>
  </div>
</div> */}