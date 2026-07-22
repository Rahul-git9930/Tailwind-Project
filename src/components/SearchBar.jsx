import { FaSearch } from "react-icons/fa";

function SearchBar({ search, setSearch }) {
  return (
    <div className="relative">

      <FaSearch className="absolute left-4 top-4 text-gray-500" />

      <input
        type="text"
        placeholder="Search Courses..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border rounded-xl pl-12 pr-4 py-3 shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
      />

    </div>
  );
}

export default SearchBar;