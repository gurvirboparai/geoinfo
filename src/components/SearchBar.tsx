import React, { useState } from 'react'
import axios from 'axios';


export default function SearchBar() {
    const [search, setSearch] = useState(false)


  return (
    <div>
        <div className=" bg-white w-[584px] min-h-[184px] rounded-3xl flex justify-center items-center shadow-sp flex-col">
            <div className='space-x-[3rem] p-3'>
                <input type="text" placeholder='Enter a country name' className='border-b border-black focus:outline-none w-[18rem] font-light' />
                <button className="w-[124px] h-[49px] rounded-3xl bg-[#A7C7E7] hover:bg-[#4e9ceb] duration-300 ease-in-out " onClick={() => setSearch(true)}  >Search</button>
            </div>
            <div className='flex flex-col mt-5'>
                { search ? <h1>hello</h1> : ""}

            </div>
        </div>
    </div>
  )
}

