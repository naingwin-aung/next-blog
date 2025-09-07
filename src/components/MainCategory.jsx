import { ChevronLeft, ChevronRight, EllipsisVertical, Search } from "lucide-react";
import { Link } from "react-router-dom";

const MainCategory = () => {
const scrollLeft = () => {
    const container = document.getElementById('category-scroll');
    container.scrollBy({ left: -200, behavior: 'smooth' });
};

const scrollRight = () => {
    const container = document.getElementById('category-scroll');
    container.scrollBy({ left: 200, behavior: 'smooth' });
};

return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-md items-center justify-center gap-2 border border-gray-200 mt-4">
        <button 
            className="text-gray-500 hover:text-blue-800 focus:outline-none xl:hidden cursor-pointer"
            onClick={scrollLeft}
        >
            <ChevronLeft />
        </button>
        <div
            className="flex-1 flex items-center justify-between flex-nowrap gap-4 overflow-x-auto scrollbar-hide"
            id="category-scroll"
        >
            <Link
                to="/posts"
                className="bg-blue-800 text-white rounded-full px-4 py-2 text-nowrap"
            >
                All Posts
            </Link>
            <Link
                to="/posts?cat=web-design"
                className="hover:bg-blue-50 rounded-full px-4 py-2 text-nowrap"
            >
                Web Design
            </Link>
            <Link
                to="/posts?cat=development"
                className="hover:bg-blue-50 rounded-full px-4 py-2 text-nowrap"
            >
                Development
            </Link>
            <Link
                to="/posts?cat=database"
                className="hover:bg-blue-50 rounded-full px-4 py-2 text-nowrap"
            >
                Database
            </Link>
            <Link
                to="/posts?cat=search-engine"
                className="hover:bg-blue-50 rounded-full px-4 py-2 text-nowrap"
            >
                Search Engine
            </Link>
            <Link
                to="/posts?cat=marketing"
                className="hover:bg-blue-50 rounded-full px-4 py-2 text-nowrap"
            >
                Marketing
            </Link>
            <Link
                to="/posts?cat=marketing"
                className="hover:bg-blue-50 rounded-full px-4 py-2 text-nowrap"
            >
                Programming
            </Link>
        </div>
        <button 
            className="text-gray-500 hover:text-blue-800 focus:outline-none xl:hidden cursor-pointer"
            onClick={scrollRight}
        >
            <ChevronRight />
        </button>
        <span>
            <EllipsisVertical />
        </span>
        <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2 text-xs md:text-sm">
            <Search size={16} />
            <input
                type="text"
                placeholder="Search a post..."
                className="bg-transparent outline-none"
            />
        </div>
    </div>
);
};

export default MainCategory;
