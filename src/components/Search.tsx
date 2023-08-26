//import React from 'react'
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"

const Search = () => {
  return (
    <div className="w-[100%] ">
        <div className="w-[100%] flex items-center h-8 ">
            <select
            className="h-8 w-14 bg-gray-300 text-black border text-xs xl:text-sm rounded-l"
            >
            <option>All</option>
            <option>Deals</option>
            <option>Amazon</option>
            <option>Fashion</option>
            <option>Computers</option>
            <option>Home</option>
            <option>Mobiles</option>
            </select>
            <input className=" w-[60%] flex items-center h-[100%] text-black" type="text"/>
            <button className="bg-purus-yellow rounded-r h-8 px-2">
                <MagnifyingGlassIcon className="h-5 text-black"/>
            </button>
        </div>
    </div>
  )
}

export default Search