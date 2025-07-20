"use client"
import { LiaSchoolSolid } from "react-icons/lia";
import { IoMenuSharp } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  return(
    <div>
      <header className="flex shadow-md py-4 px-4 sm:px-10 bg-white min-h-[70px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center justify-between gap-5 w-full">
        {/* <a href="javascript:void(0)" className="max-sm:hidden">
            <Image
              src="/images/logo1.png"
              alt="logo" 
              height = {50}
              width = {50}
              className="w-40" /></a> */}
    <div className="flex ">
        <LiaSchoolSolid  className="mr-2 w-8 h-8" />
       <h1 className="text-2xl italic font-bold text-green-900 font-serif ">Shah latif English School</h1>
       </div>

        {/* Desktop menu */}
        <div className="hidden lg:block">
          <ul className="flex gap-x-4">
            <li>
              <Link href='/' className="hover:text-blue-700 text-green-700 block font-semibold text-[15px]">Home</Link>
            </li>
            <li>
              <Link href='/Team' className="hover:text-blue-700 text-green-900 block font-semibold text-[15px]">Team</Link>
            </li>
            <li>
              <Link href='/Services' className="hover:text-blue-700 text-green-900 block font-semibold text-[15px]">Services</Link>
            </li>
            <li>
              <Link href='/Blog' className="hover:text-blue-700 text-green-900 block font-semibold text-[15px]">Blog</Link>
            </li>
            <li>
              <Link href='/About' className="hover:text-blue-700 text-green-900 block font-semibold text-[15px]">About</Link>
            </li>
            <li>
              <Link href='/contact' className="hover:text-blue-700 text-green-900 block font-semibold text-[15px]">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Mobile menu overlay */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex">
            <div className="bg-white w-3/4 max-w-xs h-full p-6 shadow-lg relative animate-slide-in-left">
              <button
                className="absolute top-4 left-4 rounded-full bg-gray-100 w-9 h-9 flex items-center justify-center border border-gray-200 cursor-pointer"
                onClick={() => { setMenuOpen(false); router.back(); }}
                aria-label="Back"
              >
                <IoArrowBack className="w-6 h-6 text-green-900" />
              </button>
              <button
                className="absolute top-4 right-4 rounded-full bg-gray-100 w-9 h-9 flex items-center justify-center border border-gray-200 cursor-pointer"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <IoMenuSharp />
              </button>
              <ul className="flex flex-col gap-y-4 mt-12">
                <li className="flex items-center justify-center mb-2">
                  <LiaSchoolSolid className="w-12 h-12 text-green-900" />
                </li>
                <li>
                  <Link href='/' className="hover:text-blue-700 text-green-700 block font-semibold text-[15px]" onClick={() => setMenuOpen(false)}>Home</Link>
                </li>
                <li>
                  <Link href='/Team' className="hover:text-blue-700 text-green-900 block font-semibold text-[15px]" onClick={() => setMenuOpen(false)}>Team</Link>
                </li>
                <li>
                  <Link href='/Services' className="hover:text-blue-700 text-green-900 block font-semibold text-[15px]" onClick={() => setMenuOpen(false)}>Services</Link>
                </li>
                <li>
                  <Link href='/Blog' className="hover:text-blue-700 text-green-900 block font-semibold text-[15px]" onClick={() => setMenuOpen(false)}>Blog</Link>
                </li>
                <li>
                  <Link href='/About' className="hover:text-blue-700 text-green-900 block font-semibold text-[15px]" onClick={() => setMenuOpen(false)}>About</Link>
                </li>
                <li>
                  <Link href='/contact' className="hover:text-blue-700 text-green-900 block font-semibold text-[15px]" onClick={() => setMenuOpen(false)}>Contact</Link>
                </li>
              </ul>
            </div>
            <div className="flex-1" onClick={() => setMenuOpen(false)} />
          </div>
        )}

        <div className="flex max-lg:ml-auto space-x-4">
          <a href="/login">
            <button
              className="px-4 py-2 text-sm rounded-full font-medium cursor-pointer tracking-wide text-green-900 border border-gray-400 bg-transparent hover:bg-gray-50 transition-all">Login</button>
          </a>
          <a href="/register">
            <button
              className="px-4 py-2 text-sm rounded-full font-medium cursor-pointer tracking-wide text-white border border-green-900 bg-green-900 hover:bg-green-700 transition-all">Sign up</button>
          </a>

          <button
            className="lg:hidden cursor-pointer"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
    </div>
  )
}