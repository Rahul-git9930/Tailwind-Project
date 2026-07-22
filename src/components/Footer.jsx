import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400">
            LearnSphere
          </h2>

          <p className="mt-4 text-gray-300">
            Learn new skills and achieve your career goals with our online learning platform.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Explore Courses</li>
            <li className="hover:text-white cursor-pointer">My Learning</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Follow Us
          </h3>

          <div className="flex gap-5 text-2xl">
            <FaFacebook className="hover:text-blue-400 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaLinkedin className="hover:text-blue-500 cursor-pointer" />
            <FaGithub className="hover:text-gray-400 cursor-pointer" />
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 text-center py-4 text-gray-400">
        © 2026 LearnSphere. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;