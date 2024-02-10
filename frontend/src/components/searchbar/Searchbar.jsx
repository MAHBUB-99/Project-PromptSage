import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

const Searchbar = () => {
  return (
    <form className="w-[340px] relative">
      <div className="relative mr-2">
        <input type="search" placeholder="Search a prompt" className="w-full h-[40px] p-4 rounded-full bg-slate-700 text-white"/>
        <button className="absolute right-1 top-1/2 -translate-y-1/2 p-3 rounded-full">
          <Link to="/">
          <AiOutlineSearch />
          </Link>
        </button>
      </div>
    </form>
  );
};

export default Searchbar;