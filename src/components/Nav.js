import React, { useState } from "react";
import { Transition } from "@headlessui/react";
//import img from "../assets/img/icons/cw15.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="border-b border-gray-100 bg-white fixed-top">
        <div className="flex items-center justify-between h-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
          <div className="flex items-center">
            {/* <button type="button" className="p-2 sm:mr-4 lg:hidden">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button> */}
            <div className="p-2 sm:mr-4 lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* <a href="" className="flex">
              <span className="inline-block w-32 h-10 bg-gray-200 rounded-lg"></span>
            </a> */}
          </div>

          <div className="flex items-center justify-end flex-1 ">
            <nav className="hidden lg:uppercase lg:text-gray-500 lg:tracking-wide lg:font-bold lg:text-xs lg:space-x-4 lg:flex ">
              <a
                href="/"
                className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-comarca hover:border-current"
              >
                Home
              </a>

              <a
                href="/services"
                className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-comarcaBlue hover:border-current"
              >
                Servicios
              </a>

              <a
                href="/group"
                className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-comarcaYellow hover:border-current"
              >
                Grupo
              </a>

              <a
                href="/blog"
                className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-comarcaPurple hover:border-current"
              >
                Blog
              </a>
            </nav>

            <div className="flex items-center ml-8">
              <div className="flex items-center border-gray-100 divide-x divide-gray-100 border-x">
                <span>
                  <a
                    href="/cart"
                    className="block p-6 border-b-4 border-transparent hover:border-comarcaBlue hover:text-current"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="10" cy="20.5" r="1" />
                      <circle cx="18" cy="20.5" r="1" />
                      <path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1" />
                    </svg>

                    <span className="sr-only">Cart</span>
                  </a>
                </span>

                <span>
                  <a
                    href="/profile"
                    className="block p-6 border-b-4 border-transparent hover:border-comarcaPurple hover:border-current"
                  >
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>

                    <span className="sr-only"> Account </span>
                  </a>
                </span>

                <span className="hidden sm:block">
                  <div className="sm:gap-4 sm:flex">
                    <a
                      className="block px-5 py-2.5 text-sm font-medium text-white bg-teal-600 hover:bg-comarcaOrange transition rounded-md shadow bg-comarca"
                      href="/login"
                    >
                      Login
                    </a>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="/"
                  className="hover:bg-comarcaOrange text-black block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </a>

                <a
                  href="/services"
                  className="text-gray-300 hover:bg-comarcaBlue hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Servicios
                </a>

                <button
                  href="#"
                  className="text-gray-300 hover:bg-comarcaPurple hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Grupo
                </button>

                <button
                  href="#"
                  className="text-gray-300 hover:bg-comarca hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Login
                </button>
              </div>
            </div>
          )}
        </Transition>
      </header>
    </>
  );
}
