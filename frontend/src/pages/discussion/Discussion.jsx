import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';

function Discussion() {
    const [discussion, setDiscussion] = useState([
        { id: 1, text: 'This is a discussion post.', upvotes: 10, downvotes: 2, comments: ['Comment 1', 'Comment 2'] },
        { id: 2, text: 'Another discussion post.', upvotes: 5, downvotes: 1, comments: ['Comment 3'] },
    ]);

    const handleUpvote = (id) => {
        // Handle upvoting logic
    };

    const handleDownvote = (id) => {
        // Handle downvoting logic
    };

    const handleComment = (id, comment) => {
        // Handle commenting logic
    };

    const handlePost = (text) => {
        // Handle posting new discussion
    };

    return (
        <div className="bg-slate-900 min-h-screen">
            <Navbar />
            <div className="flex flex-col items-center mt-5">
                <div className="w-full max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl">
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold text-white mb-4">Discussion Post</h1>
                        <div className="bg-gray-800 p-4 rounded-lg mb-4">
                            <textarea className="w-full h-32 bg-gray-700 text-white p-2 rounded" placeholder="Write your post here..." />
                            <div className="flex justify-between items-center mt-4">
                                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Post</button>
                                <input type="file" className="text-white" />
                            </div>
                        </div>
                    </div>
                    {discussion.map((post) => (
                        <div key={post.id} className="bg-gray-800 p-4 rounded-lg mb-4">
                            <p className="text-white">{post.text}</p>
                            <div className="flex justify-between items-center mt-4">
                                <div>
                                    <button onClick={() => handleUpvote(post.id)} className="mr-2 text-white">Upvote</button>
                                    <span className="text-green-500">{post.upvotes}</span>
                                    <button onClick={() => handleDownvote(post.id)} className="ml-2 text-white">Downvote</button>
                                    <span className="text-red-500">{post.downvotes}</span>
                                </div>
                                <div>
                                    <input type="text" className="bg-gray-700 text-white p-2 rounded" placeholder="Add a comment..." />
                                    <button onClick={() => handleComment(post.id, 'New Comment')} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Comment</button>
                                </div>
                            </div>
                            <div className="mt-4">
                                {post.comments.map((comment, index) => (
                                    <p key={index} className="text-gray-400">{comment}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                    {discussion.length === 0 && (
                        <p className="text-white text-center">No discussion posts yet.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Discussion;
