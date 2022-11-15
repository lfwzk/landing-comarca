import React, { useState } from "react";
import { Transition } from "@headlessui/react";

import logo from "../assets/img/icons/cw15.png";

import toast, { Toaster } from "react-hot-toast";

export default function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = React.useState(false);

  const notify = () =>
    toast("English", {
      icon: "🗽",
    });

  return (
    <>
      <header className=" bg-white fixed-top font-exo">
        <div className="flex items-center justify-between h-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-4 ">
          <a className="block flex flex-row" href="/">
            <span className="sr-only">Home</span>

            <img src={logo} alt="logo" className="h-12 hidden  md:block" />
            <img
              src="https://i.pinimg.com/originals/62/9b/80/629b8098f130fdaf061a22bbe9d7d379.png"
              alt="logo"
              className="h-12 hidden  md:block"
            />
          </a>
          <div className="flex items-center">
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
          </div>

          <div className="flex items-center justify-end flex-1 ">
            <nav className="hidden lg:uppercase lg:text-gray-500 lg:tracking-wide lg:font-exo lg:text-xs lg:space-x-4 lg:flex ">
              <a
                href="/"
                className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-comarca hover:border-current"
              >
                Home⚽
              </a>

              <a
                href="/services"
                className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-comarcaBlue hover:border-current"
              >
                Servicios⚽
              </a>

              <a
                href="/group"
                className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-comarcaYellow hover:border-current"
              >
                Grupo⚽
              </a>

              <a
                href="/blog"
                className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-comarcaPurple hover:border-current"
              >
                Blog⚽
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
                  <button onClick={() => setShowModal(true)}>
                    <a className="block p-2 border-b-4 border-transparent ">
                      {/* <span className="absolute top-2 right-0 px-2 py-1 text-xs font-bold leading-none text-white transform bg-comarca rounded-full">
                            0
                          </span> */}
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
                          d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                        />
                      </svg>

                      <span className="sr-only">Cart</span>
                      {props.countCartItems ? (
                        <button className="absolute top-2 right-0 px-2 py-1 text-xs font-bold leading-none text-white transform bg-comarca rounded-full">
                          1
                        </button>
                      ) : (
                        ""
                      )}
                    </a>
                  </button>
                </span>
                {showModal ? (
                  <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                      <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          {/*header*/}
                          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                              Carrito de compras
                            </h3>
                            <button
                              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                              onClick={() => setShowModal(false)}
                            >
                              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                ×
                              </span>
                            </button>
                          </div>
                          {/*body*/}
                          <div className="relative p-6 flex-auto">
                            <p>Producto 1</p>
                          </div>
                          {/*footer*/}
                          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                              className="text-comarca  background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setShowModal(false)}
                            >
                              Close
                            </button>
                            <button
                              className="bg-comarca  text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setShowModal(false)}
                            >
                              Pagar
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                  </>
                ) : null}

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
        </Transition>
      </header>
    </>
  );
}
