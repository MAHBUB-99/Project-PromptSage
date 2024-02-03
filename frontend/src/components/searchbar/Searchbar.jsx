import { AiOutlineSearch } from "react-icons/ai";

const Searchbar = () => {
  return (
    <form className="w-[340px] relative">
      <div className="relative mr-2">
        <input type="search" placeholder="Type Here" className="w-full h-[40px] p-4 rounded-full bg-slate-700 text-white"/>
        <button className="absolute right-1 top-1/2 -translate-y-1/2 p-3 rounded-full">
          <AiOutlineSearch />
        </button>
      </div>
    </form>
  );
};

export default Searchbar;