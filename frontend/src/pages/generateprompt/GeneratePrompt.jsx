import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';

function GeneratePrompt() {
  const [searchResult, setSearchResult] = useState('');

  const handleGenerate = (result) => {
    setSearchResult(result);
  };

  return (
    <div className='h-screen bg-slate-900'>
      <Navbar />

      <div className="flex flex-col items-center mt-10">
        <form className="w-full max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl">
          <label
            htmlFor="generate"
            className="mb-2 text-sm font-medium text-white sr-only dark:text-white"
          >
            Generate
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="generate"
              className="mt-0 block w-full p-4 ps-10 text-sm text-white border border-gray-300 rounded-lg bg-slate-900 focus:ring-blue-500 focus:border-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Prompt Topic"
              required
            />
            <button
              type="submit"
              className="text-white absolute shadow-xl end-2.5 bottom-2.5 bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => handleGenerate("Generated Result")} // Sample result for demonstration
            >
              Generate
            </button>
          </div>
        </form>

        <textarea
          className="w-full mt-5 rounded-lg bg-slate-900 border max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl"
          rows={5}
          disabled
        />

        <img
          className="mt-5 max-w-full h-auto rounded-lg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRViW48an-NWrdfa7jQJIUrwggBFmeFDvxKSS-dnyXbXYQK6-w1bwf0KPYJ16PrviIMfbw"  // Replace with the actual image URL
          alt="Sample Image"
        />

      </div>
    </div>
  );
}

export default GeneratePrompt;
