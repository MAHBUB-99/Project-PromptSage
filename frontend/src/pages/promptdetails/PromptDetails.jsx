import { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import { useAuth } from "../../AuthContext";
import { Link, useParams, useNavigate } from "react-router-dom";

function PromptDetails() {
  const { isLoggedIn, user } = useAuth();
  const [prompt, setPrompt] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPromptDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/v1/prompts/${id}`
        );
        setPrompt(response.data.prompt);
      } catch (error) {
        console.error("Error fetching prompt details:", error);
      }
    };
    fetchPromptDetails();
  }, [id, isLoggedIn]);

  const navigateEditPrompt = (promptid) => {
    navigate(`/edit-prompt/${promptid}`);
  };

  const navigateBuyPrompt = (promptid) => {
    navigate(`/buy-prompt/${promptid}`);
  };

  const handleLike = async () => {


    // try {
    //   const response = await axios.post(
    //     `http://localhost:4000/api/v1/prompts/${id}/like`,
    //     {},
    //     {
    //       headers: {
    //         Authorization: `Bearer ${user.token}`,
    //       },
    //     }
    //   );
    //   setPrompt(response.data.prompt);
    // } catch (error) {
    //   console.error("Error liking prompt:", error);
    // }
  }

  if (!prompt) {
    return (
      <div className="bg-slate-900 h-screen">
        <Navbar />
        <div className="flex items-center justify-center h-screen">
          <p className="text-white">Loading...</p>
        </div>
      </div>
    );
  }

  const handleAddToCart = async () => {
    // try {
    //   const response = await axios.post(
    //     `http://localhost:4000/api/v1/cart`,
    //     { prompt: prompt._id },
    //     {
    //       headers: {
    //         Authorization: `Bearer ${user.token}`,
    //       },
    //     } 
    //   );
    //   console.log(response.data);
    // }
    // catch (error) {
    //   console.error("Error adding prompt to cart:", error);
    // }
  };

  return (
    <div className="bg-slate-900 min-h-screen">
      <Navbar />
      <div className="flex flex-col lg:flex-row items-start lg:items-center lg:gap-8 mt-5 px-8 lg:ml-20 xl:ml-32">
        {/* Left Side - Prompt Details */}
        <div className="lg:w-9/12">
          {/* Cover Image */}
          <div className="relative mb-6">
            <img
              src={prompt.cover_image.url}
              alt={prompt.title}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
              style={{ filter: "drop-shadow(0px 10px 100px rgba(0, 0, 0, 0.5))" }}
            />
            <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 rounded-b-lg">
              <h2 className="text-white text-lg font-semibold mb-2">{prompt.title}</h2>
              {/* Like Button */}
              <div className="flex items-center justify-between text-gray-300">
                <p>Likes: {prompt.likes}</p>
                <button
                  onClick={handleLike}
                  className="bg-gradient-to-r from-red-500 to-red-700 text-white px-6 py-3 rounded-lg hover:from-red-700 transition-colors duration-300"
                >
                  Like
                </button>
              </div>
            </div>
          </div>

          {/* Description, Price, Buttons */}
          <div className="max-w-3xl bg-slate-900 p-2 rounded-lg shadow-lg mb-4">
            <p className="text-white mb-4">{prompt.description}</p>
            <div className="flex flex-col lg:flex-row items-center justify-between mb-4">
              <p className="text-white mb-2 lg:mb-0">Price: $6.00</p>

              <div className="flex flex-wrap gap-4 lg:gap-0">
                <button
                  onClick={() => navigateBuyPrompt(prompt._id)}
                  className="flex items-center justify-center p-0.5 mt-2 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-amber-500 to-rose-600 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                >
                  <span className="relative px-10 py-2.5 transition-all ease-in duration-75 bg-slate-800 text-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Get Prompt
                  </span>
                </button>

                <button
                  onClick={handleAddToCart}
                  className="flex items-center justify-center p-0.5 mt-2 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-amber-500 to-rose-600 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                >
                  <span className="relative px-10 py-2.5 transition-all ease-in duration-75 bg-slate-800 text-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Add to Cart
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="max-w-3xl bg-slate-900 p-2 rounded-lg shadow-lg mb-6">
            <h3 className="text-lg font-semibold text-white mb-4">Tips:</h3>
            <ul className="text-gray-300">
              {prompt.tipsToUse}
            </ul>
          </div>
        </div>

        {/* Right Side - Seller Engineer Info */}
        <div className="lg:w-1/2 lg:ml-8">
          {/* Seller Engineer Image */}
          <div className="relative mb-6">
            <img
              src="seller_engineer_image_url"
              alt="Seller Engineer"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 rounded-b-lg">
              <h2 className="text-white text-lg font-semibold mb-2">Seller Engineer Name</h2>
              {/* Add hover effect here */}
            </div>
          </div>

          {/* Seller Engineer ID */}
          <div className="max-w-3xl bg-slate-800 p-6 rounded-lg shadow-lg mb-6">
            <h3 className="text-lg font-semibold text-white mb-4">Seller Engineer ID</h3>
            <p className="text-gray-300">Engineer ID: XXXX</p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default PromptDetails;
