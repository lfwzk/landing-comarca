import React, { useState } from "react";
// import { Transition } from "@headlessui/react";

import logo from "../assets/img/icons/cw15.png";

import toast, { Toaster } from "react-hot-toast";

export default function Navbar(props) {
  const [isModalOpen, setModalOpen] = useState(false);

  const notify = () =>
    toast("English", {
      icon: "🗽",
    });

  return (
    <>
      <header className=" bg-white fixed-top font-exo">
        <div className="flex items-center justify-between h-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-4 ">
          <a className=" flex flex-row" href="/">
            <span className="sr-only">Home</span>

            <img src={logo} alt="logo" className="h-12 hidden  md:block" />
            <img
              src="https://cdn-icons-png.flaticon.com/512/3753/3753642.png"
              alt="logo"
              className="h-12 hidden  md:block"
            />
          </a>
          <div className="flex items-center">
            <div className="md:hidden p-2 sm:mr-4 lg:hidden">
              {isModalOpen ? (
                <div className=" bg-white fixed w-[24rem] right-0 top-0 h-[100vh] transition translate-x-[-1px] rounded-lg  text-white">
                  <div className="pt-5 pb-6 px-5">
                    <button
                      onClick={() => setModalOpen(!isModalOpen)}
                      className="-mr-2 float-right mb-3"
                    ></button>

                    <div className="mt-[5rem] z-10 relative text-comarcaBlack">
                      <nav className="grid gap-y-8">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                          <button>
                            <a
                              href="/"
                              className="hover:bg-comarcaOrange text-black block px-3 py-2 rounded-md text-base font-exo"
                            >
                              Home
                            </a>
                          </button>
                          <br />
                          <button>
                            <a
                              href="/services"
                              className="text-gray-300 hover:bg-comarcaBlue hover:text-white block px-3 py-2 rounded-md text-base font-exo"
                            >
                              Servicios
                            </a>
                          </button>
                          <br />

                          <button>
                            <a
                              href="/group"
                              className="text-gray-300 hover:bg-comarcaPurple hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                              Grupo
                            </a>
                          </button>
                          <br />

                          <button>
                            <a
                              href="/coworker"
                              className="text-gray-300 hover:bg-comarcaPurple hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                              Coworkers
                            </a>
                          </button>
                          <br />

                          <button>
                            <a
                              href="/login"
                              className="text-gray-300 hover:bg-comarca hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                              Login
                            </a>
                          </button>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
              ) : (
                <button onClick={() => setModalOpen(!isModalOpen)}></button>
              )}
            </div>
            <div className="p-2 sm:mr-4 lg:hidden">
              <button
                onClick={() => setModalOpen(!isModalOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isModalOpen ? (
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
          </div>

          <div className="flex items-center justify-end flex-1 ">
            <nav className="hidden lg:uppercase lg:text-gray-500 lg:tracking-wide lg:font-exo lg:text-xs lg:space-x-4 lg:flex ">
              <a
                href="/"
                className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-comarca hover:border-current"
              >
                Home🎄
              </a>

              <a
                href="/services"
                className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-comarcaBlue hover:border-current"
              >
                Servicios🎄
              </a>

              <a
                href="/group"
                className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-comarcaYellow hover:border-current"
              >
                Grupo🎄
              </a>

              <a
                href="/blog"
                className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-comarcaPurple hover:border-current"
              >
                Blog🎄
              </a>
              <a
                className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-comarcaPurple hover:border-current"
                href="/coworker"
              >
                Coworkers
                <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-exo leading-none text-comarcaBlack bg-comarcaYellow rounded-full">
                  vip
                </span>
              </a>
            </nav>

            <div className="flex items-center ml-8">
              <div className="flex items-center border-gray-100  ">
                <span>
                  <div className="flex flex-row ">
                    {" "}
                    <button
                      className="block p-2 border-b-4 border-transparent hover:border-current"
                      onClick={notify}
                      href="/"
                    >
                      <img
                        src="https://flagcdn.com/us.svg"
                        width="30"
                        alt="United States"
                        className="mr-2"
                      ></img>
                    </button>
                    <button
                      className="block p-2 border-b-4 border-transparent hover:border-current"
                      onClick={notify}
                      href="/"
                    >
                      <img
                        src="https://flagcdn.com/mx.svg"
                        width="30"
                        alt="Mexico"
                        className="mr-2"
                      ></img>
                    </button>
                  </div>
                  {/* <span className="sr-only"> Language </span> */}

                  <Toaster />
                </span>

                <span className="relative inline-block">
                  <a
                    href="/login"
                    className="block p-2 border-b-4 border-transparent "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>

                    <span className="sr-only"> Account </span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* <Transition
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
                <button>
                  <a
                    href="/"
                    className="hover:bg-comarcaOrange text-black block px-3 py-2 rounded-md text-base font-exo"
                  >
                    Home
                  </a>
                </button>
                <br />
                <button>
                  <a
                    href="/services"
                    className="text-gray-300 hover:bg-comarcaBlue hover:text-white block px-3 py-2 rounded-md text-base font-exo"
                  >
                    Servicios
                  </a>
                </button>
                <br />

                <button>
                  <a
                    href="/group"
                    className="text-gray-300 hover:bg-comarcaPurple hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Grupo
                  </a>
                </button>
                <br />

                <button>
                  <a
                    href="/coworker"
                    className="text-gray-300 hover:bg-comarcaPurple hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Coworkers
                  </a>
                </button>
                <br />

                <button>
                  <a
                    href="/login"
                    className="text-gray-300 hover:bg-comarca hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Login
                  </a>
                </button>
              </div>
            </div>
          )}
        </Transition> */}
      </header>
    </>
  );
}
