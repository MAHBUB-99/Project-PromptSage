import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';

function Home() {
  const [searchResult, setSearchResult] = useState('');

  const handleGenerate = (result) => {
    setSearchResult(result);
  };

  const navigateToPromptDetails = (promptId) => {
    // Implement navigation logic to prompt details page
    console.log(`Navigate to prompt details for prompt ID ${promptId}`);
  };

  const navigateToEngineerProfile = (engineerId) => {
    // Implement navigation logic to engineer profile page
    console.log(`Navigate to engineer profile for engineer ID ${engineerId}`);
  };

  // Sample data for prompts and engineers
  const samplePrompts = [
    { id: 1, name: 'Sample Prompt 1', author: 'DALL-E', best: true },
    { id: 2, name: 'Sample Prompt 2', author: 'MIDJOURNEY', best: false },
    { id: 3, name: 'Sample Prompt 3', author: 'STABLE DIFFUSION', best: true },
    { id: 4, name: 'Sample Prompt 4', author: 'DALL-E', best: true },
    { id: 5, name: 'Sample Prompt 5', author: 'MIDJOURNEY', best: false },
    { id: 6, name: 'Sample Prompt 6', author: 'DALL-E', best: true },
    { id: 7, name: 'Sample Prompt 7', author: 'MIDJOURNEY', best: false },
    { id: 8, name: 'Sample Prompt 8', author: 'STABLE DIFFUSION', best: true },
    { id: 9, name: 'Sample Prompt 9', author: 'DALL-E', best: true },
    { id: 10, name: 'Sample Prompt 10', author: 'MIDJOURNEY', best: false },
  ];

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
        <form className="w-full text-white max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mb-6">
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
        </form>

        {/* Top DALL-E Engineers Section */}
        <section className="w-full text-white max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mb-8">
          <h2 className="text-2xl font-semibold mb-4">Top DALL-E Engineers:</h2>
          <div className="grid grid-cols-5 gap-4">
            {sample_dalle_Engineers.map((engineer) => (
              <div key={engineer.id} className="rounded-lg overflow-hidden">
                <div
                  className="bg-gradient-to-b from-slate-600 to-slate-900 p-4 h-32 flex flex-col justify-end cursor-pointer transform transition duration-300  group-hover:scale-105 relative"
                  onClick={() => navigateToEngineerProfile(engineer.id)}
                >
                  <p className="text-white font-semibold">{engineer.name}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Top Midjourney Engineers Section */}
        <section className="w-full text-white max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mb-8">
          <h2 className="text-2xl font-semibold mb-4">Top Midjourney Engineers:</h2>
          <div className="grid grid-cols-5 gap-4">
            {sample_dalle_Engineers.map((engineer) => (
              <div key={engineer.id} className="rounded-lg overflow-hidden">
                <div
                  className="bg-gradient-to-b from-slate-600 to-slate-900 p-4 h-32 flex flex-col justify-end cursor-pointer transform transition duration-300 group-hover:scale-105 relative"
                  onClick={() => navigateToEngineerProfile(engineer.id)}
                >
                  <p className="text-white font-semibold">{engineer.name}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Top Stable Diffusion Engineers Section */}
        <section className="w-full text-white max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mb-8">
          <h2 className="text-2xl font-semibold mb-4">Top Stable Diffusion Engineers:</h2>
          <div className="grid grid-cols-5 gap-4">
            {sample_dalle_Engineers.map((engineer) => (
              <div key={engineer.id} className="rounded-lg overflow-hidden">
                <div
                  className="bg-gradient-to-b from-slate-600 to-slate-900 p-4 h-32 flex flex-col justify-end cursor-pointer transform transition duration-300 group-hover:scale-105 relative"
                  onClick={() => navigateToEngineerProfile(engineer.id)}
                >
                  <p className="text-white font-semibold">{engineer.name}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

export default Home;
