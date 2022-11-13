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
      <header className="border-b border-gray-100 bg-white fixed-top font-exo">
        <div className="flex items-center justify-between h-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8 ">
          <a className="block" href="/">
            <span className="sr-only">Home</span>

            <img src={logo} alt="logo" className="h-12 hidden  md:block" />
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
              <div className="flex items-center border-gray-100 divide-x divide-gray-100 border-x">
                <span className="relative inline-block">
                  <button onClick={() => setShowModal(true)}>
                    <a className="block p-6 border-b-4 border-transparent hover:border-comarcaBlue hover:text-current ">
                      {/* <span className="absolute top-2 right-0 px-2 py-1 text-xs font-bold leading-none text-white transform bg-comarca rounded-full">
                            0
                          </span> */}
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
                      {props.countCartItems ? (
                        <button className="absolute top-2 right-0 px-2 py-1 text-xs font-bold leading-none text-white transform bg-comarca rounded-full">
                          {props.countCartItems}
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

                <span>
                  <button
                    className="block p-6 border-b-4 border-transparent hover:border-comarcaPurple hover:border-current"
                    onClick={notify}
                    href="/"
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
                        d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64"
                      />
                    </svg>

                    <span className="sr-only"> Language </span>
                  </button>
                  <Toaster />
                </span>

                <span className="hidden sm:block">
                  <div className="sm:gap-4 sm:flex">
                    <a
                      className="block px-5 py-2.5 text-sm font-medium text-white bg-teal-600 hover:bg-comarca transition rounded-md shadow bg-comarcaBlack"
                      href="/login"
                      onClick={notify}
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
