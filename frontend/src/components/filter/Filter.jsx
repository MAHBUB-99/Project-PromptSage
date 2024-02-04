import React from "react";

const Filter = () => {
  const engines = [
    "DALL-E",
    "GPT-3",
    "Midjourney",
    "Stable Diffusion",
    "Leonardo Ai",
    "Llama",
  ];
  const categories = [
    "3D",
    "Anime",
    "Animal",
    "Art",
    "Building",
    "Business",
    "Cartoon",
    "Celebrity",
    "Fantasy",
    "Fun",
    "Games",
    "Icons",
    "Wallpaper",
    "Writing",
  ];
  categories.sort();
  engines.sort();

  const types = ["All", "Image", "Text"];
  const sortByOptions = ["Top", "Newest"];

  return (
    <div className="ml-3 h-auto w-[12%] bg-gradient-to-r from-slate-900 to-slate-800 absolute p-4">
      <div className="mb-4">
        <h1 className="text-white mb-2">Type</h1>
        {types.map((type) => (
          <label key={type} className="flex items-center text-white">
            <input type="checkbox" name="Type" value={type} />{" "}
            <span className="ml-2">{type}</span>
          </label>
        ))}
      </div>

      <div className="mb-4">
        <h1 className="text-white mb-2">Sort By</h1>
        {sortByOptions.map((option) => (
          <label key={option} className="flex items-center text-white">
            <input type="radio" name="SortBy" value={option} />{" "}
            <span className="ml-2">{option}</span>
          </label>
        ))}
      </div>

      <div className="mb-4">
        <h1 className="text-white mb-2">Engine</h1>
        {engines.map((engine) => (
          <label key={engine} className="flex items-center text-white">
            <input type="checkbox" name="Engine" value={engine} />{" "}
            <span className="ml-2">{engine}</span>
          </label>
        ))}
      </div>

      <div>
        <h1 className="text-white mb-2">Category</h1>
        {categories.map((category) => (
          <label key={category} className="flex items-center text-white">
            <input type="checkbox" name="Category" value={category} />{" "}
            <span className="ml-2">{category}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Filter;
