import { FaSearch, FaUserCircle, FaBars } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-black shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-800">
            LearnSphere
        </h1>
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">Explore Courses</li>
          <li className="hover:text-blue-600 cursor-pointer">My Learning</li>
          <li className="hover:text-blue-600 cursor-pointer">Profile</li>
        </ul>

        {/* Right Side Icons */}
        <div className="hidden md:flex items-center gap-5 text-xl">
          <FaSearch className="cursor-pointer hover:text-blue-600" />
          <FaUserCircle className="text-3xl text-blue-600 cursor-pointer" />
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-2xl">
          <FaBars />
        </div>

      </div>
    </nav>
  );
}

export default Navbar;