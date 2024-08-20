import { Appbar } from "../componets/Appbar"
import { BlogCard } from "../componets/BlogCard"

export const Blogs = () => {
    return <div>
        <Appbar/>
    <div className="flex justify-center pt-10">
    <div className="max-w-xl">
        <BlogCard
        authorName="Shiruvati"
        title="Today, I took a deep dive into the world of Next.js and 
        learned both client-side and server-side rendering. 🌐"
        content="Next.js is truly a game-changer for building modern web applications, offering the best of both worlds—blazing fast client-side experiences with , 
        providing a seamless user experience"
        publishedDate={"2nd Feb 2024"}
        />
        <BlogCard
        authorName="Kamalesh"
        title="Today, I took a deep dive into the world of Next.js and 
        learned both client-side and server-side rendering. 🌐"
        content="Next.js is truly a game-changer for building modern web applications, offering the best of both worlds—blazing fast client-side experiences with the power and flexibility of server-side rendering. 
        I explored how to build dynamic and interactive UIs that load quickly and render efficiently, 
        providing a seamless user experience"
        publishedDate={"2nd Feb 2024"}
        />
    </div>
    </div>
    </div>

}