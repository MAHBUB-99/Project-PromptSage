import React from 'react';
import Navbar from '../../components/navbar/Navbar';

function EngineerProfile() {
    const samplePrompts = [
        { id: 1, name: 'Prompt 1', author: 'Author 1', best: true },
        { id: 2, name: 'Prompt 2', author: 'Author 2', best: false },
        { id: 3, name: 'Prompt 3', author: 'Author 3', best: true },
        { id: 4, name: 'Prompt 4', author: 'Author 4', best: false },
        { id: 5, name: 'Prompt 5', author: 'Author 5', best: false },
        { id: 6, name: 'Prompt 6', author: 'Author 6', best: true },
        { id: 7, name: 'Prompt 7', author: 'Author 6', best: true },
        { id: 8, name: 'Prompt 8', author: 'Author 6', best: true },
        { id: 1, name: 'Prompt 1', author: 'Author 1', best: true },
        { id: 2, name: 'Prompt 2', author: 'Author 2', best: false },
        { id: 3, name: 'Prompt 3', author: 'Author 3', best: true },
        { id: 4, name: 'Prompt 4', author: 'Author 4', best: false },

    ];

    return (
        <div className="bg-slate-900 min-h-screen">
            <Navbar />
            <div className="flex justify-between p-6">
                <div className="bg-slate-900 rounded-lg border ml-28 p-6 md:p-16 max-w-md w-full text-white">
                    <div className="text-center mb-4">
                        <img
                            src="https://img.freepik.com/free-photo/white-notebook-black-data-firewall_1150-1733.jpg?size=626&ext=jpg&ga=GA1.1.87170709.1707609600&semt=sph"
                            alt="Profile"
                            className="rounded-lg mx-auto mb-2"
                        />
                        <h1 className="text-3xl font-bold">John Doe</h1>
                        <p className="text-sm mt-2">Promot Engineer</p>
                    </div>
                    <div className="border-b border-gray-700 pb-2 mb-2">
                        <h2 className="text-lg font-semibold">Details</h2>
                    </div>
                    <div className="mt-4">
                        <div className="flex justify-between items-center mb-2">
                            <p className="text-sm text-gray-400">Username</p>
                            <p className="text-sm">johndoe</p>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <p className="text-sm text-gray-400">Email</p>
                            <p className="text-sm">johndoe@example.com</p>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <p className="text-sm text-gray-400">Platform</p>
                            <p className="text-sm">DALL-E</p>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <p className="text-sm text-gray-400">Followers</p>
                            <p className="text-sm">251</p>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <p className="text-sm text-gray-400">Following</p>
                            <p className="text-sm">15</p>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <p className="text-sm text-gray-400">Rating</p>
                            <p className="text-sm">4.8</p>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <p className="text-sm text-gray-400">Rank</p>
                            <p className="text-sm">2</p>
                        </div>
                    </div>
                    <div className="border-b border-gray-700 pb-2 mb-4 mt-">
                        <h2 className="text-lg font-semibold">Bio</h2>
                    </div>
                    <div className="mt-4">
                        <div className="flex justify-between items-center">
                            <p className="text-sm text-gray-400">Twitter</p>
                            <p className="text-sm">johndoe</p>
                        </div>
                    </div>
                    <div className="flex justify-around mt-4">
                        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                            <span class="relative px-8 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Follow
                            </span>
                        </button>     
                        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                            <span class="relative px-8 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Hire
                            </span>
                        </button>
                        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                            <span class="relative px-8 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Chat
                            </span>
                        </button>                   
                    </div>
                </div>


                <div className="flex flex-col w-full ml-4 mr-24">
                    {/* First Box */}
                    <div className="bg-slate-900 border rounded-lg p-8 md:p-8 max-w-full w-full text-white mb-4">
                        <h2 className="text-lg font-semibold mb-4">Top Prompts:</h2>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {samplePrompts.map((prompt) => (
                                <div key={prompt.id} className="relative group">
                                    <div
                                        style={{
                                            backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8U80XAvqnq-qRc01c-OlQniEeKgIo8ZHqZx9bTKJf2rav8k0deO1rmry_ctGprnPoUB0)',
                                        }}
                                        className="bg-cover bg-center rounded-lg p-4 h-28 flex flex-col justify-end cursor-pointer transform transition duration-300 group-hover:scale-105"
                                    >
                                        <p className="text-white font-semibold text-sm">{prompt.name}</p>
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
            </div>
        </div>
    );
}

export default EngineerProfile;