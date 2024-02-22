import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

function Home() {
  const [prompts, setPrompts] = useState([]);
  const [type, setType] = useState("All");
  const [sort, setSort] = useState("Newest");
  const [engine, setEngine] = useState("All");
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState('');

  const navigate = useNavigate();

  const handleGenerate = (result) => {
    setSearchResult(result);
  };

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
  }, [type, sort, engine, category, search]);


  const navigateToPromptDetails = (promptId) => {
    navigate(`/marketplace/${promptId}`);
    console.log(`Navigate to prompt details for prompt ID ${promptId}`);
  };

  const navigateToEngineerProfile = (engineerId) => {
    // Implement navigation logic to engineer profile page
    // navigate to engineer profile page
    navigate('/engineer-profile')
    console.log(`Navigate to engineer profile for engineer ID ${engineerId}`);
  };


  const sample_dalle_Engineers = [
    { id: 1, name: 'Engineer 1' },
    { id: 2, name: 'Engineer 2' },
    { id: 3, name: 'Engineer 3' },
    { id: 4, name: 'Engineer 4' },
    { id: 5, name: 'Engineer 5' },
  ];
  const sample_midjourney_Engineers = [
    { id: 1, name: 'Engineer 1' },
    { id: 2, name: 'Engineer 2' },
    { id: 3, name: 'Engineer 3' },
    { id: 4, name: 'Engineer 4' },
    { id: 5, name: 'Engineer 5' },
  ];
  const sample_stable_diffusion_Engineers = [
    { id: 1, name: 'Engineer 1' },
    { id: 2, name: 'Engineer 2' },
    { id: 3, name: 'Engineer 3' },
    { id: 4, name: 'Engineer 4' },
    { id: 5, name: 'Engineer 5' },
  ];

  return (
    <div className=' bg-slate-900 '>
      <Navbar />

      <div className="flex flex-col items-center mt-5">
        {/* Introduction Section */}
        <section className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white mb-4">Welcome to promptsage</h1>
          <p className="text-gray-300">
            Your one-stop marketplace for creative prompts and talented engineers.
            Explore top prompts, discover skilled engineers, and bring your projects to life!
          </p>
        </section>

        {/* Generate Prompt Section */}
        {/* <form className="w-full text-white max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mb-6">
          <h2 className="text-2xl font-semibold mb-4">Popular Prompts:</h2>
          <div className="grid grid-cols-5 gap-4">
            {samplePrompts.map((prompt) => (
              <div key={prompt.id} className="rounded-lg overflow-hidden">
                <div
                  className="bg-gradient-to-b from-slate-600 to-slate-900 p-4 h-32 flex flex-col justify-end cursor-pointer transform transition duration-300 group-hover:scale-105 relative"
                  onClick={() => navigateToPromptDetails(prompt.id)}
                >
                  <p className="text-white font-semibold">{prompt.name}</p>
                  <p className="text-gray-300 text-sm">{prompt.author}</p>
                  {prompt.best && (
                    <div className="absolute bottom-2 right-2 bg-black text-white px-2 py-1 rounded-full">
                      Best
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </form> */}

        {/* Top Popular prompt Section */}
        <div className="ml-24"> {/* Use margin-left to move the section to the right */}
          <h2 className="text-2xl font-semibold text-white mb-2">Popular Prompts:</h2> {/* Move the title here */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {/* Render popular prompts here */}
            {prompts.map((prompt) => (
              <div key={prompt._id} className="relative group">
                <div
                  style={{
                    backgroundImage: `url(${prompt.cover_image.url})`,
                    backgroundSize: 'cover', // Ensures the background image covers the entire container
                    backgroundPosition: 'center', // Centers the background image within the container
                    width: '220px', // Set the width of the container
                    height: '120px' // Set the height of the container
                  }}
                  className="bg-gradient-to-b rounded-lg  from-slate-600 to-slate-900 p-4 h-32 flex flex-col justify-end cursor-pointer transform transition duration-300 group-hover:scale-105 relative"
                  onClick={() => navigateToPromptDetails(prompt.id)}
                >
                  <p className="text-white font-semibold">{prompt.title}</p>
                  <p className="text-gray-300 text-sm">{prompt.engine}</p>
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

        {/* Top Midjourney Engineers Section */}
        <div className="ml-24 mt-6"> {/* Use margin-left to move the section to the right */}
          <h2 className="text-2xl font-semibold text-white mb-2">Top DALL-E Engineers:</h2> {/* Move the title here */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {/* Render top DALL-E engineers here */}
            {sample_dalle_Engineers.map((engineer) => (
              <div key={engineer.id} className="relative group">
                <div
                  style={{
                    backgroundImage: 'url(https://img.freepik.com/free-photo/white-notebook-black-data-firewall_1150-1733.jpg?w=900&t=st=1706515656~exp=1706516256~hmac=cf8699dfe1843ed04a53830e9d1b6b11d37451a03bf65a21b476391beeb92a9d)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '220px', // Set the width of the container
                    height: '120px' // Set the height of the container
                  }}
                  className="bg-gradient-to-b rounded-lg from-slate-600 to-slate-900 p-4 h-32 flex flex-col justify-end cursor-pointer transform transition duration-300 group-hover:scale-105 relative"
                // onClick={() => navigateToEngineerProfile(engineer.id)}
                >
                  <p className="text-white font-semibold">{engineer.name}</p>
                </div>
                {/* Add onClick handler to navigate to engineer profile */}
                <div
                  className="absolute inset-0 rounded-lg bg-transparent group-hover:bg-opacity-10 transition duration-300"
                onClick={() => navigateToEngineerProfile(engineer.id)}
                ></div>
              </div>
            ))}
          </div>
        </div>


        {/* Top Midjourney Engineers Section */}
        <div className="ml-24 mt-6"> {/* Use margin-left to move the section to the right */}
          <h2 className="text-2xl font-semibold text-white mb-2">Top Midjourney Engineers:</h2> {/* Move the title here */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {/* Render top DALL-E engineers here */}
            {sample_dalle_Engineers.map((engineer) => (
              <div key={engineer.id} className="relative group">
                <div
                  style={{
                    backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiOQvVdDh2qwI0l5cUyM3K9C2FohtkAKT2iJDeyvOtDx7ufaQxcyIszEZs3oA_Rx3KxIA)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '220px', // Set the width of the container
                    height: '120px' // Set the height of the container
                  }}
                  className="bg-gradient-to-b rounded-lg from-slate-600 to-slate-900 p-4 h-32 flex flex-col justify-end cursor-pointer transform transition duration-300 group-hover:scale-105 relative"
                // onClick={() => navigateToEngineerProfile(engineer.id)}
                >
                  <p className="text-white font-semibold">{engineer.name}</p>
                </div>
                {/* Add onClick handler to navigate to engineer profile */}
                <div
                  className="absolute inset-0 rounded-lg bg-transparent group-hover:bg-opacity-10 transition duration-300"
                onClick={() => navigateToEngineerProfile(engineer.id)}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Stable Diffusion  Engineers Section */}
        <div className="ml-24 mt-6"> {/* Use margin-left to move the section to the right */}
          <h2 className="text-2xl font-semibold text-white mb-2">Top Stable Diffusion Engineers:</h2> {/* Move the title here */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {/* Render top DALL-E engineers here */}
            {sample_dalle_Engineers.map((engineer) => (
              <div key={engineer.id} className="relative group">
                <div
                  style={{
                    backgroundImage: 'url(data:image/jpeg;base64,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)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '220px', // Set the width of the container
                    height: '120px' // Set the height of the container
                  }}
                  className="bg-gradient-to-b rounded-lg from-slate-600 to-slate-900 p-4 h-32 flex flex-col justify-end cursor-pointer transform transition duration-300 group-hover:scale-105 relative"
                // onClick={() => navigateToEngineerProfile(engineer.id)}
                >
                  <p className="text-white font-semibold">{engineer.name}</p>
                </div>
                {/* Add onClick handler to navigate to engineer profile */}
                <div
                  className="absolute inset-0 rounded-lg bg-transparent group-hover:bg-opacity-10 transition duration-300"
                onClick={() => navigateToEngineerProfile(engineer.id)}
                ></div>
              </div>
            ))}
          </div>
        </div>



      </div>
    </div>
  );
}

export default Home;

