import React, { useState } from 'react'
// import { AiOutlineSearch } from 'react-icons'

function Searchbar() {
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    return (
        <form>
            <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Generate</label>
            <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input type="search" id="search" class="mt-4 block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write here about prompt topic" required />
                <button type="submit" class="text-white absolute shadow-xl end-2.5 bottom-2.5 bg-black  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Generate</button>
            </div>
            <div class="mb-3">
                <textarea class="w-full form-control bg-slate-200 mt-5 border-solid" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                <a href="#">
                    <img class="rounded-lg ml-10" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description" />
                </a>
                <figcaption class="absolute px-4 text-lg text-white bottom-6">
                    <p>Do you want to get notified when a new component is added to Flowbite?</p>
                </figcaption>
            </figure>
        </form>
    )
}

export default Searchbar










{/* <button class="h-12 px-6 m-2 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">Large</button> */ }
