'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const Navigation = () => {

  return (
    <header className="fixed top-0 left-0 w-full bg-[#f5f5f572] z-50">
      <nav className="flex flex-col sm:flex-row justify-center items-center">
        <ul className="list-none flex flex-col sm:flex-row">
          <li className="hidden sm:block">
            <Link
                href="#"
                className="block text-center text-[#720000] font-pixelify-sans uppercase tracking-widest py-4 px-8 text-sm sm:text-lg transition-all duration-200 hover:bg-[#7200007b] hover:text-[#ffffff] hover:shadow-lg"
            >
                Link 1
            </Link>
          </li>
          <li className="hidden sm:block">
            <Link
                href="#"
                className="block text-center text-[#720000] font-pixelify-sans uppercase tracking-widest py-4 px-8 text-sm sm:text-lg transition-all duration-200 hover:bg-[#7200007b] hover:text-[#ffffff] hover:shadow-lg"
            >
                Link 2
            </Link>
          </li>
          <li className="hidden sm:block">
            <Link
                href="#"
                className="block text-center text-[#720000] font-pixelify-sans uppercase tracking-widest py-4 px-8 text-sm sm:text-lg transition-all duration-200 hover:bg-[#7200007b] hover:text-[#ffffff] hover:shadow-lg"
            >
                Link 3
            </Link>
          </li>

          <li className="sm:block py-4 px-8 cursor-pointer">
            <Link href="#">
              <Image
                src="/pokeball.png"
                alt="Pokeball"
                width={20}
                height={20}
                className="w-5 h-5 sm:w-7 sm:h-7 transition-transform transform hover:scale-110"
              />
            </Link>
          </li>

          <li className="hidden sm:block">
            <Link
                href="#"
                className="block text-center text-[#720000] font-pixelify-sans uppercase tracking-widest py-4 px-8 text-sm sm:text-lg transition-all duration-200 hover:bg-[#7200007b] hover:text-[#ffffff] hover:shadow-lg"
            >
                Link 4
            </Link>
          </li>
          <li className="hidden sm:block">
            <Link
                href="#"
                className="block text-center text-[#720000] font-pixelify-sans uppercase tracking-widest py-4 px-8 text-sm sm:text-lg transition-all duration-200 hover:bg-[#7200007b] hover:text-[#ffffff] hover:shadow-lg"
            >
                Link 5
            </Link>
          </li>
          <li className="hidden sm:block">
            <Link
                href="#"
                className="block text-center text-[#720000] font-pixelify-sans uppercase tracking-widest py-4 px-8 text-sm sm:text-lg transition-all duration-200 hover:bg-[#7200007b] hover:text-[#ffffff] hover:shadow-lg"
            >
                Link 6
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
