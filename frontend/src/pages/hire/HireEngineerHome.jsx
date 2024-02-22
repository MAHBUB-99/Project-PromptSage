import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import { Link } from 'react-router-dom';

// Dummy data for top-rated engineers
const topRatedEngineers = [
  { id: 1, name: 'John Doe', imageUrl: 'https://img.freepik.com/free-photo/white-notebook-black-data-firewall_1150-1733.jpg?w=900&t=st=1706515656~exp=1706516256~hmac=cf8699dfe1843ed04a53830e9d1b6b11d37451a03bf65a21b476391beeb92a9d' },
  { id: 2, name: 'Jane Smith', imageUrl: 'https://img.freepik.com/free-photo/white-notebook-black-data-firewall_1150-1733.jpg?w=900&t=st=1706515656~exp=1706516256~hmac=cf8699dfe1843ed04a53830e9d1b6b11d37451a03bf65a21b476391beeb92a9d' },
  { id: 3, name: 'Bob Wilson', imageUrl: 'https://img.freepik.com/free-photo/white-notebook-black-data-firewall_1150-1733.jpg?w=900&t=st=1706515656~exp=1706516256~hmac=cf8699dfe1843ed04a53830e9d1b6b11d37451a03bf65a21b476391beeb92a9d' },
  { id: 4, name: 'Alice Johnson', imageUrl: 'https://img.freepik.com/free-photo/white-notebook-black-data-firewall_1150-1733.jpg?w=900&t=st=1706515656~exp=1706516256~hmac=cf8699dfe1843ed04a53830e9d1b6b11d37451a03bf65a21b476391beeb92a9d' },
  { id: 5, name: 'Charlie Brown', imageUrl: 'https://img.freepik.com/free-photo/white-notebook-black-data-firewall_1150-1733.jpg?w=900&t=st=1706515656~exp=1706516256~hmac=cf8699dfe1843ed04a53830e9d1b6b11d37451a03bf65a21b476391beeb92a9d' },
  { id: 6, name: 'Diana Miller', imageUrl: 'https://img.freepik.com/free-photo/white-notebook-black-data-firewall_1150-1733.jpg?w=900&t=st=1706515656~exp=1706516256~hmac=cf8699dfe1843ed04a53830e9d1b6b11d37451a03bf65a21b476391beeb92a9d' },
];

function HireEngineerHome() {
  return (
    <div className='bg-slate-900 h-screen'>
      <Navbar />
      <div className='flex flex-col md:flex-row mt-5 md:mx-8 lg:mx-16'>
        <div className="md:w-1/2 text-white md:ml-0 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-2">Hire a Prompt Engineer</h1>
          <h1 className="text-3xl font-bold mb-4">For Your Next Project</h1>
          <p className="text-sm mb-4">Commission custom prompts from top prompt engineers,</p>
          <p className="text-sm mb-8">or hire an engineer to work on your project.</p>
          <div className="flex justify-start space-x-4">
            <button className="border bg-gradient-to-r from-yellow-800 to-red-900 text-white px-6 py-3 rounded-lg transition duration-300">Hire an Engineer</button>
            <Link to='/sellprompt'><button className="border text-white px-6 py-3 rounded-lg transition duration-300">Become an Engineer</button></Link>
          </div>
        </div>

        <div className="md:w-1/2">
          <section className="w-full text-white mb-8">
            <h2 className="text-2xl font-semibold mb-4">Top Engineers:</h2>
            <div className="grid grid-cols-3 gap-4">
              {topRatedEngineers.map((engineer) => (
                <div key={engineer.id} className="rounded-lg overflow-hidden">
                  <div
                    className="bg-gradient-to-b from-slate-600 to-slate-900 p-4 h-32 flex flex-col justify-end cursor-pointer transform transition duration-300 group-hover:scale-105 relative"
                    // onClick={() => navigateToEngineerProfile(engineer.id)}
                  >
                    <p className="text-white font-semibold">{engineer.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default HireEngineerHome;
