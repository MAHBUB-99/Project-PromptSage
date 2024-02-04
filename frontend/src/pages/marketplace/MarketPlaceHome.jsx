import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function MarketPlaceHome() {
  const [prompts, setPrompts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchPrompts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/v1/prompts/all-prompts');
        setPrompts(response.data.prompts);
      } catch (error) {
        console.error('Error fetching prompts:', error);
      }
    };

    fetchPrompts();
  }, []);

  const navigateToPromptDetails = (promptId) => {
    navigate(`/marketplace/${promptId}`);
  };

  return (
    <div className="bg-slate-900 h-screen">
      <Navbar />

      <div className="flex flex-col items-center mt-5">
        {/* Introduction Section */}
        <section className="text-center text-white mb-10">
          <h1 className="text-4xl font-bold mb-4">Explore Top Prompts</h1>
          <p className="text-gray-300">
            Discover creative prompts from renowned artists in the field.
            Browse through the best prompts curated just for you!
          </p>
        </section>


        {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {samplePrompts.map((prompt) => (
            <div key={prompt.id} className="relative group">
              <div
                style={{
                    backgroundImage: 'url(https://img.freepik.com/free-photo/white-notebook-black-data-firewall_1150-1733.jpg?w=900&t=st=1706515656~exp=1706516256~hmac=cf8699dfe1843ed04a53830e9d1b6b11d37451a03bf65a21b476391beeb92a9d)',
                }}
                className="bg-cover bg-center rounded-lg p-4 h-32 flex flex-col justify-end cursor-pointer transform transition duration-300 group-hover:scale-105"
              >
                <p className="text-white font-semibold">{prompt.name}</p>
                <p className="text-gray-300 text-sm">{prompt.author}</p>
                {prompt.best && (
                  <div className="absolute bottom-2 right-2 bg-black text-white px-2 py-1 rounded-full">
                    Best
                  </div>
                )}
              </div>
              {/* Add onClick handler to navigate to prompt details */}
              {/* <div
                className="absolute inset-0 rounded-lg bg-transparent group-hover:bg-opacity-10 transition duration-300"
                onClick={() => navigateToPromptDetails(prompt.id)}
              ></div>
            </div>
          ))}
        </div> */} 





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
