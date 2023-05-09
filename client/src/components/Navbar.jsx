import { useState } from "react";
// import { FaBars } from "react-icons/fa";
// import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <nav className="bg-blue-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div>
          <a href="/" className="text-lg font-bold">
            My Application
          </a>
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            <li className="px-2 py-1 hover:bg-blue-600 rounded">
              <a href="/">Home</a>
            </li>
            <li className="px-2 py-1 hover:bg-blue-600 rounded">
              <a href="/about">About</a>
            </li>
            <li className="px-2 py-1 hover:bg-blue-600 rounded">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {/* {showMenu ? <AiOutlineClose /> : <FaBars />} */}
          </button>
        </div>
      </div>
      {showMenu && (
        <div className="md:hidden bg-blue-400 px-2 py-3">
          <ul className="flex flex-col space-y-2">
            <li className="px-2 py-1 hover:bg-blue-600 rounded">
              <a href="/">Home</a>
            </li>
            <li className="px-2 py-1 hover:bg-blue-600 rounded">
              <a href="/about">About</a>
            </li>
            <li className="px-2 py-1 hover:bg-blue-600 rounded">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
