import React from 'react';
import Navbar from '../../components/navbar/Navbar';

function MarketPlaceHome() {
  const samplePrompts = [
    { id: 1, name: 'Sample Prompt 1', author: 'DALL-E', best: true },
    { id: 2, name: 'Sample Prompt 2', author: 'MIDJOURNEY', best: false },
    { id: 3, name: 'Sample Prompt 3', author: 'STABLE DIFFUSION', best: true },
    { id: 4, name: 'Sample Prompt 4', author: 'DALL-E', best: true },
    { id: 5, name: 'Sample Prompt 5', author: 'MIDJOURNEY', best: false },
    { id: 6, name: 'Sample Prompt 6', author: 'STABLE DIFFUSION', best: true },
    { id: 7, name: 'Sample Prompt 7', author: 'DALL-E', best: true },
    { id: 8, name: 'Sample Prompt 8', author: 'MIDJOURNEY', best: false },
    { id: 9, name: 'Sample Prompt 9', author: 'STABLE DIFFUSION', best: true },
    { id: 10, name: 'Sample Prompt 10', author: 'DALL-E', best: true },
  ];

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

        {/* Marketplace Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {samplePrompts.map((prompt) => (
            <div key={prompt.id} className="relative group">
              <div className={`bg-gradient-to-b from-slate-600 to-slate-900 rounded-lg p-4 h-32 flex flex-col justify-end cursor-pointer transform transition duration-300 group-hover:scale-105`}>
                <p className="text-white font-semibold">{prompt.name}</p>
                <p className="text-gray-300 text-sm">{prompt.author}</p>
                {prompt.best && (
                  <div className="absolute bottom-2 right-2 bg-black text-white px-2 py-1 rounded-full">
                    Best
                  </div>
                )}
              </div>
              {/* Add onClick handler to navigate to prompt details */}
              <div
                className="absolute inset-0 rounded-lg bg-transparent group-hover:bg-opacity-10 transition duration-300"
                // onClick={() => navigateToPromptDetails(prompt.id)}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MarketPlaceHome;
