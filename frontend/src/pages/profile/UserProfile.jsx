import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import axios from 'axios';

function UserProfile() {
    const [userData, setUserData] = useState(null);
    const [userPrompts, setUserPrompts] = useState([]);
    const [boughtPrompts, setBoughtPrompts] = useState([]);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/v1/users/current'); // Replace with your backend endpoint
                setUserData(response.data);
                setBoughtPrompts(response.data.boughtPrompts);
                setUserPrompts(response.data.soldPrompts);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <div className="bg-slate-900 min-h-screen">
            <Navbar />
            <div className="flex justify-between p-6">
                <div className="bg-slate-900 rounded-lg border ml-28 p-6 md:p-16 max-w-md w-full text-white">
                    {/* Render user data */}
                    {userData && (
                        <div className="text-center mb-4">
                            <img src={userData.profilePic} alt="Profile" className="rounded-lg mx-auto mb-2" />
                            <h1 className="text-3xl font-bold">{userData.name}</h1>
                            <p className="text-sm mt-2">{userData.role}</p>
                        </div>
                    )}
                    {/* Render user details */}
                    <div className="border-b border-gray-700 pb-2 mb-2">
                        {/* Render user details here */}
                    </div>
                    {/* Render user bio */}
                    <div className="border-b border-gray-700 pb-2 mb-4 mt-">
                        {/* Render user bio here */}
                    </div>
                    {/* Render user prompts */}
                    <div className="mt-4">
                        <h2 className="text-lg font-semibold mb-4">My Prompts:</h2>
                        <div>
                            {userPrompts.map((prompt) => (
                                <div key={prompt.id}>
                                    <p>{prompt.name}</p>
                                    <p>{prompt.author}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Render bought prompts */}
                    <div className="mt-4">
                        <h2 className="text-lg font-semibold mb-4">Bought Prompts:</h2>
                        <div>
                            {boughtPrompts.map((prompt) => (
                                <div key={prompt.id}>
                                    <p>{prompt.name}</p>
                                    <p>{prompt.author}</p>
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
