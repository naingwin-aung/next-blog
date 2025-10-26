import { Link } from "react-router-dom"
import Image from "./Image"

const PostListItem = () => {
  return (
    <div className='flex flex-col xl:flex-row gap-8'>
        {/* image */}
        <div className="md:hidden xl:block xl:w-1/3">
            <Image src="/featured1.jpeg" className="rounded-2xl object-cover"/>
        </div>
        {/* detail */}
        <div className="flex flex-col gap-4 xl:w-2/3">
            <Link to="/test" className="text-4xl font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>Written by</span>
                <Link className="text-blue-500">John Doe</Link>
                <span>on</span>
                <Link className="text-blue-500">Web Design</Link>
                <span>2 days ago</span>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sit cupiditate nesciunt sapiente. Fuga sunt repellat aperiam saepe perspiciatis consequuntur voluptatem modi, sed laborum? Libero quibusdam labore excepturi omnis corrupti! ...
            </p>
            <Link to="/test" className="hover:underline text-sm text-blue-800">See more</Link>
        </div>
    </div>
  )
}

export default PostListItem