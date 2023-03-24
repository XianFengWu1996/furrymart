import { BiSearch } from 'react-icons/bi';

const Search = () => {
  return (
    <div className="relative flex-grow px-2 lg:mx-10">
      <input
        type="text"
        className="outline-slate-500 border-slate-600 border h-10 rounded-md px-5 w-full"
        placeholder="Search"
      />
      <BiSearch className="absolute right-5 top-[25%] translate-y-[-25%] lg:top-[50%] lg:translate-y-[-50%] text-2xl" />
    </div>
  );
};

export default Search;
