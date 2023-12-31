import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/images/Logo.png";
import { HeaderOptions } from "../constants/headerOptions";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [isActive, setIsActive] = useState(location.pathname);

  const navigate = useNavigate();
  const genericHamburgerLine = `h-1 w-6 my-0.5 rounded-full bg-yellow-500 transition ease transform duration-300`;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClick = (route: string) => {
    setIsActive(route);
    navigate(route);
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-dark-primary/50 backdrop-blur-md drop-shadow-md w-full border-b border-neutral-700 text-white flex h-20 justify-between items-center px-8 fixed top-0 left-0 z-50">
      <div
        className="w-12 md:w-16 cursor-pointer"
        onClick={() => handleClick("/")}
      >
        <img src={Logo} />
      </div>
      <ul className="md:flex font-medium hidden">
        {HeaderOptions.map((option) => (
          <li
            key={option.path}
            className={`py-2 px-12 hover:text-orange-primary hover:drop-shadow-2xl hover:shadow-white cursor-pointer transition-all ${
              isActive === option.path ? "text-orange-primary" : ""
            }`}
            onClick={() => handleClick(option.path)}
          >
            {option.name.toUpperCase()}
          </li>
        ))}
      </ul>
      <div className="md:flex flex-col items-center hidden">
        <h2 className="font-medium text-xl -mb-1">KEYPULSE</h2>
        <p className="text-sm text-gray-200">ESPORTS</p>
      </div>

      <button
        className="flex flex-col h-12 w-12 rounded justify-center items-center group md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div
          className={`${genericHamburgerLine} ${
            isMenuOpen
              ? "rotate-45 translate-y-3 group-hover:opacity-100"
              : " group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isMenuOpen ? "opacity-0" : "group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isMenuOpen
              ? "-rotate-45 -translate-y-1  "
              : " group-hover:opacity-100"
          }`}
        />
      </button>

      {isMenuOpen && (
        <div
          className="absolute top-20 left-0 w-full bg-[#1D1D1D]/95 bg-opacity-90 flex justify-center items-center"
          onClick={toggleMenu}
        >
          <ul className="text-white text-2xl flex flex-col gap-6 p-10">
            {HeaderOptions.map((option) => (
              <li
                key={option.path}
                className={`py-2 px-12 hover:text-orange-primary hover:drop-shadow-2xl hover:shadow-white cursor-pointer transition-all ${
                  isActive === option.path ? "text-orange-primary" : ""
                }`}
                onClick={() => handleClick(option.path)}
              >
                {option.name.toUpperCase()}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
