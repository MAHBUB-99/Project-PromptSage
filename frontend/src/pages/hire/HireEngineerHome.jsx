import React from 'react';
import Navbar from '../../components/navbar/Navbar';
// Dummy data for top-rated engineers and category-wise engineers
const topRatedEngineers = [
  { id: 1, name: 'John Doe', imageUrl: 'https://example.com/john.jpg' },
  { id: 2, name: 'Jane Smith', imageUrl: 'https://example.com/jane.jpg' },
  { id: 3, name: 'John Doe', imageUrl: 'https://example.com/john.jpg' },
  { id: 4, name: 'Jane Smith', imageUrl: 'https://example.com/jane.jpg' },
  { id: 5, name: 'John Doe', imageUrl: 'https://example.com/john.jpg' },
  { id: 6, name: 'Jane Smith', imageUrl: 'https://example.com/jane.jpg' },
];

const categoryWiseEngineers = {
  'DALL-E Engineers': [
    { id: 3, name: 'Alice Johnson', imageUrl: 'https://example.com/alice.jpg' },
    { id: 4, name: 'Bob Wilson', imageUrl: 'https://example.com/bob.jpg' },
  ],
  'Mid-Journey Engineers': [
    { id: 5, name: 'Charlie Brown', imageUrl: 'https://example.com/charlie.jpg' },
    { id: 6, name: 'Diana Miller', imageUrl: 'https://example.com/diana.jpg' },
  ],
  'Stable Diffusion Engineers': [
    { id: 5, name: 'Charlie Brown', imageUrl: 'https://example.com/charlie.jpg' },
    { id: 6, name: 'Diana Miller', imageUrl: 'https://example.com/diana.jpg' },
  ],
};

function HireEngineerHome() {
  return (
    // <div className='bg-slate-900 h-screen'>
    //   <Navbar />
    //   <div className=' flex mt-5 '>
    //     <div className="w-2/3 text-white ml-40 ">
    //       <h1 className="text-4xl font-bold mb-2">Hire a Prompt Engineer</h1>
    //       <h1 className="text-3xl font-bold mb-4">For Your Next Project</h1>
    //       <p className="text-sm mb-">Commission custom prompts from top prompt engineers,</p>
    //       <p className="text-sm mb-8">or hire an engineer to work on your project.</p>
    //       <div className="flex justify-start space-x-4">
    //         <button className="border bg-gradient-to-r from-yellow-800 to-red-900 text-white px-6 py-3 rounded-lg transition duration-300">Hire an Engineer</button>
    //         <button className="border text-white px-6 py-3 rounded-lg transition duration-300">Become an Engineer</button>
    //       </div>
    //     </div>

    //     <div className="w-1/3 ml-8">
    //       <h2 className="text-2xl text-white mb-4">Popular Engineers</h2>
    //       {/* Add your popular engineer profiles here */}
    //       <div className="flex flex-col">
    //         <div className="flex items-center space-x-4 mb-4">
    //           <img src="engineer1.jpg" alt="Engineer 1" className="w-10 h-10 rounded-full" />
    //           <p className="text-white">Engineer 1</p>
    //         </div>
    //         <div className="flex items-center space-x-4 mb-4">
    //           <img src="engineer2.jpg" alt="Engineer 2" className="w-10 h-10 rounded-full" />
    //           <p className="text-white">Engineer 2</p>
    //         </div>
    //         {/* Add more engineer profiles as needed */}
    //       </div>
    //     </div>
    //   </div>

    // </div>

    <div className='bg-slate-900 h-screen'>
      <Navbar />
      <div className='flex mt-5 '>
        <div className="w-1/2 text-white ml-40">
          <h1 className="text-4xl font-bold mb-2">Hire a Prompt Engineer</h1>
          <h1 className="text-3xl font-bold mb-4">For Your Next Project</h1>
          <p className="text-sm mb-">Commission custom prompts from top prompt engineers,</p>
          <p className="text-sm mb-8">or hire an engineer to work on your project.</p>
          <div className="flex justify-start space-x-4">
            <button className="border bg-gradient-to-r from-yellow-800 to-red-900 text-white px-6 py-3 rounded-lg transition duration-300">Hire an Engineer</button>
            <button className="border text-white px-6 py-3 rounded-lg transition duration-300">Become an Engineer</button>
          </div>
        </div>

        <div className="w-1/2 ml-8">
          <h2 className="text-2xl text-white mb-4">Popular Engineers</h2>
          {/* Add your popular engineer profiles here */}
          <div className="flex flex-wrap">
            {topRatedEngineers.map((engineer) => (
              <div key={engineer.id} className="flex items-center space-x-4 mb-4 w-1/3">
                <img src={engineer.imageUrl} alt={engineer.name} className="w-10 h-10 rounded-full" />
                <p className="text-white">{engineer.name}</p>
              </div>
            ))}
            {/* Add more engineer profiles as needed */}
          </div>
        </div>
      </div>

    </div>
  );
}

export default HireEngineerHome;

