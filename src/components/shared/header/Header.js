"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Youtube, Linkedin, Instagram, Facebook, Menu, Search, ShoppingCart, X } from 'react-feather';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const header = [
    { title: 'Common Admissions', link: '/' },
    { title: 'School Portal', link: '/' },
    { title: 'Find Schools', link: '/' },
    { title: 'Blog', link: '/' },
    { title: 'Login', link: '/' },
  ];

  return (
    <header className="border-b h-32 bg-gradient-to-t from-[#1c4a5a]  to-purple-500 relative">
      <div className="mx-auto container p-1 flex justify-between text-white">
        <h3 className="font-light text-center tracking-wide">
          mail@uniformapp.in
        </h3>
        <span className='flex space-x-2'><Facebook /><Linkedin /><Instagram /><Youtube /></span>
      </div>

      <div className="container mx-auto w-full flex gap-6 justify-between items-center mt-10">
        <Image
          width={150}
          src="https://uniformapp.in/images/small_logo.png"
          alt=""
          height={150}
        />
        <div className="hidden lg:flex gap-7 text-md items-center text-white ">
          {header.map((item, index) => (
            <ul key={index} className="flex justify-center">
              <Link
                href={item.link}
                className="hover:scale-125 duration-300 py-1 hover:text-green-400"
              >
                <li>{item.title}</li>
              </Link>
            </ul>
          ))}
        </div>
        <div className="flex justify-center items-center font-extrabold gap-2">
          <div className="flex gap-2 text-white">
            {searchOpen && (
              <input
                type="text"
                placeholder="search"
                className="border p-1.5 rounded-2xl text-sm font-light outline-none"
              />
            )}
            <Search
              onClick={toggleSearch}
              className="cursor-pointer hover:scale-125 duration-300"
            />
          </div>

          <button
            type="button"
            className="md:hidden flex justify-end"
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <X className="hover:scale-125 duration-300" />
            ) : (
              <Menu className="hover:scale-125 duration-300 text-white" />
            )}
          </button>
        </div>
      </div>

      <div className={`fixed inset-0 z-50 bg-gray-800 bg-opacity-50 transition-opacity ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleMenu}>
        <div className={`fixed top-0 left-0 h-full w-64 bg-gray-200 shadow-lg transform transition-transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="p-4 flex justify-between items-center border-b">
            <X onClick={toggleMenu} className="cursor-pointer hover:scale-125 duration-300" />
          </div>
          <nav className="p-4 space-y-2">
            {header.map((item, index) => (
              <Link key={index} href={item.link} className="block py-2 px-4 rounded hover:bg-gray-200">
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
