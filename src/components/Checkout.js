import React from "react";
const Checkout = () => {
  const [showModal, setShowModal] = React.useState(true);
  return (
    <div className="font-exo">
      <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap font-exo ">
        <a
          rel="noopener noreferrer"
          href="/group"
          className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b border-gray-600 text-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Volver</span>
        </a>
      </div>
      <section>
        <h1 className="sr-only">Checkout</h1>

        <div className="relative mx-auto max-w-screen-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-gray-50 py-12 md:py-24">
              <div className="mx-auto max-w-lg px-4 lg:px-8">
                <div className="flex items-center">
                  <span className="h-10 w-10 rounded-full bg-comarca"></span>

                  <h2 className="ml-4 font-medium">Username</h2>
                </div>

                <div className="mt-8">
                  <p className="text-2xl font-medium tracking-tight">Precio</p>
                  <p className="mt-1 text-sm text-gray-500">
                    Por reservar los siguientes servicios
                  </p>
                </div>

                <div className="mt-12">
                  <div className="flow-root">
                    <ul className="-my-4 divide-y divide-gray-200">
                      <li className="flex items-center justify-between py-4">
                        <div className="flex items-start">
                          <img
                            alt="jelo"
                            src="https://images.unsplash.com/photo-1565299999261-28ba859019bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                            className="h-16 w-16 flex-shrink-0 rounded-lg object-cover"
                          />

                          <div className="ml-4">
                            <p className="text-sm">Colaborativo </p>

                            <dl className="mt-1 space-y-1 text-xs text-gray-500">
                              <div>
                                <dt className="inline">reservar</dt>
                                <dd className="inline">1 hora</dd>
                              </div>

                              <div>
                                <dt className="inline">Desde</dt>
                                <dd className="inline">Bolivia</dd>
                              </div>
                            </dl>
                          </div>
                        </div>

                        <div>
                          <p className="text-sm">
                            $49.99
                            <small className="text-gray-500">x1</small>
                          </p>
                        </div>
                      </li>

                      <li className="flex items-center justify-between py-4">
                        <div className="flex items-start">
                          <img
                            alt="ettuce"
                            src="https://images.unsplash.com/photo-1640958904159-51ae08bd3412?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
                            className="h-16 w-16 flex-shrink-0 rounded-lg object-cover"
                          />

                          <div className="ml-4">
                            <p className="text-sm">Lettuce</p>

                            <dl className="mt-1 space-y-1 text-xs text-gray-500">
                              <div>
                                <dt className="inline">Size:</dt>
                                <dd className="inline">Big</dd>
                              </div>
                            </dl>
                          </div>
                        </div>

                        <div>
                          <p className="text-sm">
                            $25
                            <small className="text-gray-500">x2</small>
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white py-12 md:py-24">
              <div className="mx-auto max-w-lg px-4 lg:px-8">
                <form className="grid grid-cols-6 gap-4">
                  <div className="col-span-3">
                    <label
                      className="mb-1 block text-sm text-gray-600"
                      for="first_name"
                    >
                      Nombre
                    </label>

                    <input
                      className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                      type="text"
                      id="frst_name"
                    />
                  </div>

                  <div className="col-span-3">
                    <label
                      className="mb-1 block text-sm text-gray-600"
                      for="last_name"
                    >
                      Apellido
                    </label>

                    <input
                      className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                      type="text"
                      id="last_name"
                    />
                  </div>

                  <div className="col-span-6">
                    <label
                      className="mb-1 block text-sm text-gray-600"
                      for="email"
                    >
                      Correo electrónico
                    </label>

                    <input
                      className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                      type="email"
                      id="email"
                    />
                  </div>

                  <div className="col-span-6">
                    <label
                      className="mb-1 block text-sm text-gray-600"
                      for="phone"
                    >
                      Número de teléfono
                    </label>

                    <input
                      className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                      type="tel"
                      id="phone"
                    />
                  </div>

                  {/* <fieldset className="col-span-6">
                    <legend className="mb-1 block text-sm text-gray-600">
                      Card Details
                    </legend>

                    <div className="-space-y-px rounded-lg bg-white shadow-sm">
                      <div>
                        <label className="sr-only" for="card-number">
                          Card Number
                        </label>

                        <input
                          className="relative w-full rounded-t-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                          type="text"
                          name="card-number"
                          id="card-number"
                          placeholder="Card number"
                        />
                      </div>

                      <div className="flex -space-x-px">
                        <div className="flex-1">
                          <label className="sr-only" for="card-expiration-date">
                            Expiration Date
                          </label>

                          <input
                            className="relative w-full rounded-bl-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                            type="text"
                            name="card-expiration-date"
                            id="card-expiration-date"
                            placeholder="MM / YY"
                          />
                        </div>

                        <div className="flex-1">
                          <label className="sr-only" for="card-cvc">
                            CVC
                          </label>

                          <input
                            className="relative w-full rounded-br-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                            type="text"
                            name="card-cvc"
                            id="card-cvc"
                            placeholder="CVC"
                          />
                        </div>
                      </div>
                    </div>
                  </fieldset> */}

                  {/* <fieldset className="col-span-6">
                    <legend className="mb-1 block text-sm text-gray-600">
                      Billing Address
                    </legend>

                    <div className="-space-y-px rounded-lg bg-white shadow-sm">
                      <div>
                        <label className="sr-only" for="country">
                          Country
                        </label>

                        <select
                          className="relative w-full rounded-t-lg border-gray-200 p-2.5 text-sm focus:z-10"
                          id="country"
                          name="country"
                          autocomplete="country-name"
                        >
                          <option>England</option>
                          <option>Wales</option>
                          <option>Scotland</option>
                          <option>France</option>
                          <option>Belgium</option>
                          <option>Japan</option>
                        </select>
                      </div>

                      <div>
                        <label className="sr-only" for="postal-code">
                          ZIP/Post Code
                        </label>

                        <input
                          className="relative w-full rounded-b-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                          type="text"
                          name="postal-code"
                          id="postal-code"
                          autocomplete="postal-code"
                          placeholder="ZIP/Post Code"
                        />
                      </div>
                    </div>
                  </fieldset> */}

                  <div className="col-span-6">
                    <button
                      className="w-full rounded-lg bg-comarca p-2.5 text-sm text-white flex flex-row justify-center items-center"
                      type="submit"
                      onClick={() => setShowModal(true)}
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
                          d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z"
                        />
                      </svg>
                      Pago mendiante: QR
                    </button>
                    {showModal ? (
                      <>
                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                          <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                              {/*header*/}
                              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                <h3 className="text-3xl font-semibold">
                                  Pago{" "}
                                </h3>
                                <button
                                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                  onClick={() => setShowModal(true)}
                                >
                                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                  </span>
                                </button>
                              </div>
                              {/*body*/}
                              <div className="relative p-6 flex-auto">
                                <img
                                  alt="lofi"
                                  src="https://www.researchgate.net/publication/338621434/figure/fig1/AS:847806302539777@1579144182827/An-example-of-a-Quick-Response-QR-barcode-What-message-is-embedded-in-the-QR-code-shown.png"
                                />
                              </div>
                              {/*footer*/}
                              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                <button
                                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                  type="button"
                                  onClick={() => setShowModal(false)}
                                >
                                  Cerrar
                                </button>
                                <button
                                  className="bg-comarca text-white active:bg-comarca font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                  type="button"
                                  onClick={() => setShowModal(true)}
                                >
                                  Guardar
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                      </>
                    ) : null}
                    <br />
                    <button
                      className=" w-full rounded-lg bg-comarca p-2.5 text-sm text-white flex flex-row justify-center items-center"
                      type="submit"
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
                          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                        />
                      </svg>
                      Depósito Bancario
                    </button>
                    <br />

                    <button
                      className="w-full rounded-lg bg-comarca p-2.5 text-sm text-white flex flex-row justify-center items-center"
                      type="submit"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Pago mediante: LinkSer
                    </button>
                    <br />
                    <button
                      className=" w-full rounded-lg bg-comarca p-2.5 text-sm text-white flex flex-row justify-center"
                      type="submit"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#ffffff"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="M7 15h0M2 9.5h20" />
                      </svg>
                      Tarjeta de Crédito/Débito
                    </button>
                    <br />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Checkout;
