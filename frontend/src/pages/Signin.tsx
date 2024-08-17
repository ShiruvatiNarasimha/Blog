import { Auth } from "../componets/Auth"
import { Quote } from "../componets/Quote"


export const Signin = () => {
    return <div>
        <div className="fixed top-0 left-0 w-full bg-white/30 backdrop-blur-md shadow-md z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16">
      <div className="flex-shrink-0 flex items-center font-extrabold from-zinc-950">
          Blog 
      </div>
      <div className="flex items-center">
        <a href="#" className="text-black px-3 py-2 rounded-md text-sm font-extrabold">Home</a>
        <a href="#" className="text-black px-3 py-2 rounded-md text-sm font-extrabold">About</a>
        <a href="#" className="text-black px-3 py-2 rounded-md text-sm font-extrabold">Contact</a>
      </div>
    </div>
  </div>
</div>
        <div className="h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 grid-cols-2">
            <div>
              <Auth type="signin"/>
            </div>
            <div className="invisible lg:visible">
                <Quote/>
            </div>
        </div>
    </div>
}


