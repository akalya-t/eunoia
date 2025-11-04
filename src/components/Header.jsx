import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useTheme } from "../context/ThemeContext";
import logo from "../assets/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const { theme } = useTheme(); // get theme so header text adapts

  const navItems = [
    { label: "How it Works", path: "/how-it-works" },
    { label: "About", path: "/about" },
    { label: "Preview", path: "/preview" },
  ];

  return (
    <header
      className={`w-full py-4 px-6 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-all duration-300 ${theme.bg} ${theme.text}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={logo}
            alt="Eunoia Logo"
            className="w-10 h-10 object-contain"
          />
          <span className="text-3xl font-bold tracking-tight">Eunoia</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-lg font-medium">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`transition hover:opacity-70 ${
                pathname === item.path
                  ? "font-semibold underline underline-offset-4"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Nav */}
      <div
        className={`md:hidden flex flex-col gap-4 px-6 pb-4 pt-2 font-medium overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`transition hover:opacity-70 ${
              pathname === item.path
                ? "font-semibold underline underline-offset-4"
                : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
