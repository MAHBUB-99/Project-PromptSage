import React, { useState } from 'react';
import { AiOutlinePicture } from 'react-icons/ai';
import Navbar from '../../components/navbar/Navbar';

function Discussion() {
    const [postContent, setPostContent] = useState('');
    const [imagePreview, setImagePreview] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [upvoteCount, setUpvoteCount] = useState(0);
    const [downvoteCount, setDownvoteCount] = useState(0);
    const [comment, setComment] = useState('');

    const handlePostContentChange = (e) => {
        setPostContent(e.target.value);
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(file);
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handlePost = () => {
        // Handle posting logic, including the image caption
        console.log('Post content:', postContent);
        console.log('Selected image:', selectedImage);
    };

    const handleUpvote = () => {
        setUpvoteCount(upvoteCount + 1);
    };

    const handleDownvote = () => {
        setDownvoteCount(downvoteCount + 1);
    };

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleComment = () => {
        // Handle comment logic
        console.log('Comment:', comment);
    };

    return (
        <div className='bg-slate-900 min-h-screen'>
            <Navbar />
            <div className="bg-slate-900 min-h-screen">
                <div className="flex flex-col items-center mt-5">
                    <div className="w-full max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl">
                        <div className="mb-8">
                            <h1 className="text-4xl font-bold text-white mb-4 text-center">
                                <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">Discussion</span>
                            </h1>
                            <div className="relative border-b border-white mb-4 flex items-center justify-between">
                                <textarea
                                    className="w-full h-28 bg-gray-800 text-white p-2 rounded-tl rounded-tr"
                                    placeholder="Write your post here..."
                                    value={postContent}
                                    onChange={handlePostContentChange}
                                />
                                <label className="absolute right-0 bottom-0 mb-2 mr-2 cursor-pointer text-white">
                                    <input type="file" className="hidden" onChange={handleImageUpload} />
                                    <AiOutlinePicture className="w-6 h-6" />
                                </label>
                            </div>
                            {imagePreview && (
                                <div className="mb-4">
                                    <img src={imagePreview} alt="Selected" className="w-64 h-64 object-cover rounded-md mb-2" />
                                </div>
                            )}

                            <button
                                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 float-right"
                                onClick={handlePost}
                            >
                                <span className="relative px-8 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Post
                                </span>
                            </button>

                        </div>



                        <div className="border mt-20 border-white p-4 rounded-md min-h-[5rem]">
                            <div className="flex items-center mb-2">
                                <p className="text-white font-semibold mr-2">Username</p>
                            </div>
                            <div className="bg-gray-300 h-0.5 w-full mb-2"></div>
                            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis urna vitae mauris varius, et facilisis lacus ultrices. Ut nec odio in magna dictum posuere. Sed rhoncus lacinia dolor, id eleifend nunc sollicitudin vel. Vivamus nec quam non tortor sollicitudin suscipit. Nam vitae ex auctor, molestie eros non, consectetur libero. Vestibulum nec rhoncus velit.</p>
                            <div className="bg-gray-300 h-0.5 w-full mt-2"></div>
                            <div className="flex mt-2">
                                <div className="flex">
                                    <button
                                        className="mr-2 relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                                        onClick={handleUpvote}
                                    >
                                        <span className="relative px-8 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                            Upvote ({upvoteCount})
                                        </span>
                                    </button>
                                    <button
                                        className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                                        onClick={handleDownvote}
                                    >
                                        <span className="relative px-8 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                            Downvote ({downvoteCount})
                                        </span>
                                    </button>
                                </div>
                                <div className="ml-auto flex">
                                    <input
                                        type="text"
                                        className="border border-white text-white rounded-md px-2 py-1 mr-2 bg-gray-800 focus:outline-none focus:border-pink-500"
                                        placeholder="Enter your comment"
                                        value={comment}
                                        onChange={handleCommentChange}
                                    />
                                    <button
                                        className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                                        onClick={handleComment}
                                    >
                                        <span className="relative px-8 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                            Comment
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="border mt-10 mb-10 border-white p-4 rounded-md min-h-[5rem]">
                            <div className="flex items-center mb-2">
                                <p className="text-white font-semibold mr-2">Username</p>
                            </div>
                            <div className="bg-gray-300 h-0.5 w-full mb-2"></div>
                            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis urna vitae mauris varius, et facilisis lacus ultrices. Ut nec odio in magna dictum posuere. Sed rhoncus lacinia dolor, id eleifend nunc sollicitudin vel. Vivamus nec quam non tortor sollicitudin suscipit. Nam vitae ex auctor, molestie eros non, consectetur libero. Vestibulum nec rhoncus velit.</p>
                            <div className="bg-gray-300 h-0.5 w-full mt-2"></div>
                            <div className="flex mt-2">
                                <div className="flex">
                                    <button
                                        className="mr-2 relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                                        onClick={handleUpvote}
                                    >
                                        <span className="relative px-8 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                            Upvote ({upvoteCount})
                                        </span>
                                    </button>
                                    <button
                                        className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                                        onClick={handleDownvote}
                                    >
                                        <span className="relative px-8 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                            Downvote ({downvoteCount})
                                        </span>
                                    </button>
                                </div>
                                <div className="ml-auto flex">
                                    <input
                                        type="text"
                                        className="border border-white text-white rounded-md px-2 py-1 mr-2 bg-gray-800 focus:outline-none focus:border-pink-500"
                                        placeholder="Enter your comment"
                                        value={comment}
                                        onChange={handleCommentChange}
                                    />
                                    <button
                                        className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                                        onClick={handleComment}
                                    >
                                        <span className="relative px-8 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                            Comment
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default Discussion;
