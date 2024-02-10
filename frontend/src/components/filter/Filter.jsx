import React from "react";

const Filter = ({ onFilterChange }) => {
  const types = [
    "All",
    "DALL-E",
    "GPT-3",
    "Midjourney",
    "Stable Diffusion",
    "Leonardo Ai",
    "Llama",
  ];
  const categories = [
    "All",
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
  types.sort();

//   const types = ["All", "Image", "Text"];
  const sortByOptions = ["Top", "Newest", "Oldest"];

  const handleFilterChange = (filterType, value) => {
    onFilterChange(filterType, value);
  };

  return (
    <div className="ml-3 h-auto w-[12%] bg-gradient-to-r from-slate-900 to-slate-800 absolute p-6">
      <div className="mb-4">
        <h1 className="text-white mb-2">Type</h1>
        {types.map((type) => (
          <label key={type} className="flex items-center text-white">
            <input
              type="checkbox"
              name="Type"
              value={type}
              onChange={() => handleFilterChange("type", type)}
            />{" "}
            <span className="ml-2">{type}</span>
          </label>
        ))}
      </div>

      <div className="mb-4">
        <h1 className="text-white mb-2">Sort By</h1>
        {sortByOptions.map((option) => (
          <label key={option} className="flex items-center text-white">
            <input
              type="radio"
              name="SortBy"
              value={option}
              onChange={() => handleFilterChange("sort", option)}
            />{" "}
            <span className="ml-2">{option}</span>
          </label>
        ))}
      </div>

      {/* <div className="mb-4">
        <h1 className="text-white mb-2">Engine</h1>
        {engines.map((engine) => (
          <label key={engine} className="flex items-center text-white">
            <input
              type="checkbox"
              name="Engine"
              value={engine}
              onChange={() => handleFilterChange("engine", engine)}
            />{" "}
            <span className="ml-2">{engine}</span>
          </label>
        ))}
      </div> */}

      <div>
        <h1 className="text-white mb-2">Category</h1>
        {categories.map((category) => (
          <label key={category} className="flex items-center text-white">
            <input
              type="checkbox"
              name="Category"
              value={category}
              onChange={() => handleFilterChange("category", category)}
            />{" "}
            <span className="ml-2">{category}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Filter;
