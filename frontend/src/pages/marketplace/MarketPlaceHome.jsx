import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Filter from '../../components/filter/Filter';
import Searchbar from '../../components/searchbar/Searchbar';

function MarketPlaceHome() {
  const [prompts, setPrompts] = useState([]);
  const [type, setType] = useState("All");
  const [sort, setSort] = useState("Newest");
  const [engine, setEngine] = useState("All");
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState('');

  const navigate = useNavigate();
  useEffect(() => {
    const fetchPrompts = async () => {
      try {
        const url = `http://localhost:4000/api/v1/prompts/all-prompts/?type=${type}&sort=${sort}&engine=${engine}&category=${category}&search=${search}`;
        const response = await axios.get(url);
        setPrompts(response.data.prompts);
      } catch (error) {
        console.error('Error fetching prompts:', error);
      }
    };

    fetchPrompts();
  }, [ type, sort, engine, category, search ]);

  const navigateToPromptDetails = (promptId) => {
    navigate(`/marketplace/${promptId}`);
  };

  const handleFilterChange = (filterType, value) => {
    // Update the corresponding state based on the filterType
    switch (filterType) {
      case "type":
        setType(value);
        break;
      case "sort":
        setSort(value);
        break;
      case "engine":
        setEngine(value);
        break;
      case "category":
        setCategory(value);
        break;
      // Add other cases if needed
      default:
        break;
    }
  };

  return (
    <div className="bg-slate-900 min-h-[150vh]">
      <Navbar />
      <Filter onFilterChange={handleFilterChange}/>
      <div className="flex flex-col items-center mt-5">
        {/* Introduction Section */}
        <Searchbar onSearch={setSearch}/>
        <section className="text-center text-white mb-2 mt-6">
          <h3 className="text-xl font-bold mb-4">Explore Prompts</h3>
        </section>

        {/* Marketplace Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {prompts.map((prompt) => (
            <div key={prompt._id} className="relative group">
              <div className={`bg-gradient-to-b from-slate-600 to-slate-900 rounded-lg p-4 size-[12rem] flex flex-col justify-end cursor-pointer transform transition duration-300 group-hover:scale-105`}>
                <img src={prompt.cover_image.url} alt={prompt.title} className="w-full h-20 object-cover mb-2 rounded-lg" />
                <p className="text-white font-semibold">{prompt.title}</p>
                <p className="text-gray-300 text-sm">{prompt.engine}</p>
                {/* Add other prompt details as needed */}
              </div>
              {/* Add onClick handler to navigate to prompt details */}
              <div
                className="absolute inset-0 rounded-lg bg-transparent group-hover:bg-opacity-10 transition duration-300"
                onClick={() => navigateToPromptDetails(prompt._id)}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MarketPlaceHome;
