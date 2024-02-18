import { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import axios from 'axios';
import { useAuth } from '../../AuthContext';

function UserProfile() {
    const { user } = useAuth();
    const [boughtPrompts, setBoughtPrompts] = useState([]);
    const [soldPrompts, setSoldPrompts] = useState([]);

useEffect(() => {
    const fetchPrompts = async () => {
        try {
            const boughtPromptsData = [];
            for (const id of user.boughtPrompts) {
                const response = await axios.get(`http://localhost:4000/api/v1/prompts/${id}`);
                boughtPromptsData.push(response.data.prompt);
            }
            setBoughtPrompts(boughtPromptsData);

            const soldPromptsData = [];
            for (const id of user.soldPrompts) {
                const response = await axios.get(`http://localhost:4000/api/v1/prompts/${id}`);
                soldPromptsData.push(response.data.prompt);
            }
            setSoldPrompts(soldPromptsData);
        } catch (error) {
            console.error("Error fetching prompt details:", error);
        }
    };
    fetchPrompts();
}, [user.boughtPrompts, user.soldPrompts]);


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
                        <h1 className="text-3xl font-bold">{user.username}</h1>
                        <p className="text-sm mt-2">{user.email}</p>
                    </div>
                </div>

                <div className="flex flex-col w-full ml-4 mr-24">
                    {/* First Box */}
                    <div className="bg-slate-900 border rounded-lg p-8 md:p-8 max-w-full w-full text-white mb-4">
                        <h2 className="text-lg font-semibold mb-4">My Prompts:</h2>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {soldPrompts.map(prompt => (
                                <div key={prompt._id} className="relative group">
                                    <div
                                        style={{ backgroundImage: `url(${prompt.cover_image.url})` }}
                                        className="bg-cover bg-center rounded-lg p-4 h-28 flex flex-col justify-end cursor-pointer transform transition duration-300 group-hover:scale-105"
                                    >
                                        <p className="text-white font-semibold text-sm">{prompt.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Second Box */}
                    <div className="bg-slate-900 border rounded-lg p-8 md:p-8 max-w-full w-full text-white">
                        <h2 className="text-lg font-semibold mb-4">Bought Prompts:</h2>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {boughtPrompts.map(prompt => (
                                <div key={prompt._id} className="relative group">
                                    <div
                                        style={{ backgroundImage: `url(${prompt.cover_image.url})` }}
                                        className="bg-cover bg-center rounded-lg p-4 h-28 flex flex-col justify-end cursor-pointer transform transition duration-300 group-hover:scale-105"
                                    >
                                        <p className="text-white font-semibold text-sm">{prompt.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
