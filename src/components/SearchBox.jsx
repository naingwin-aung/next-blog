import { Search } from "lucide-react"

const SearchBox = () => {
  return (
    <div className='bg-gray-100 p-2 rounded-full flex items-center gap-2'>
        <Search/>
        <input type="text" placeholder="Search..." className="bg-transparent outline-none border-none flex-grow text-sm"/>
    </div>
  )
}

export default SearchBox