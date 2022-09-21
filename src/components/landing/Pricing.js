const Pricing = () => {
  return (
    <>
      {/* <section className="p-8 dark:bg-gray-800 dark:text-gray-100 ">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <h2 className="text-4xl font-exo lg:text-5xl">
              Los servicios de Co Marca
            </h2>
          </div>

          <div className="flex flex-wrap items-stretch -mx-4 ">
            <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0  px-8">
              <div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-gray-900 bg-comarca text-white">
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold font-exo">Coworker</h4>
                  <span className="font-bold text-6xl font-exo">
                    Individuales{" "}
                  </span>
                </div>
                <p className="mt-3 leading-relaxed dark:text-gray-400 font-exo">
                  Ideal de 1 a 2 personas
                </p>
                <ul className="flex-1 mb-6 dark:text-gray-400 font-exo">
                  <li className="flex mb-2 space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="43"
                      height="43"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span>OFICINA CO PRIVADA</span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>ESTACIÓN DE TRABAJO CO MUNIDAD</span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>ESTACION DE TRABAJO CO CREATIVO</span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="inline-block font-exo px-5 py-3 tracking-wider text-center rounded dark:bg-violet-400 dark:text-gray-900"
                >
                  Leer más
                </button>
              </div>
            </div>

            <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0 px-8">
              <div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-comarcaBlue dark:text-gray-900 text-white font-exo">
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold">Coworker</h4>
                  <span className="text-6xl font-bold">Grupales</span>
                </div>
                <p className="leading-relaxed">Ideal de 4 a 20 personas </p>
                <ul className="flex-1 space-y-2">
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>SALA DE REUNIÓN CO LABORATIVA</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>SALA DE REUNIÓN CO EMPRENDEDOR</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>SALA TALLLER CO EMPRENDEDOR</span>
                  </li>
                </ul>
                <a
                  rel="noopener noreferrer"
                  href="/services"
                  className="inline-block w-full px-5 py-3 font-exo tracking-wider text-center rounded dark:bg-gray-800 dark:text-violet-400"
                >
                  Leer más
                </a>
              </div>
            </div>

            <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0 px-8">
              <div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-comarcaPurple dark:text-gray-900 text-white font-exo">
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold">Coworker</h4>
                  <span className="text-6xl font-bold">Virtuales</span>
                </div>
                <p className="leading-relaxed">Ideal para emprendedores</p>
                <ul className="flex-1 space-y-2">
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>OFICINAS VIRTUALES</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>LABORATORIO </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span></span>
                  </li>
                </ul>
                <a
                  rel="noopener noreferrer"
                  href="/services"
                  className="inline-block w-full px-5 py-3 font-exo tracking-wider text-center rounded dark:bg-gray-800 dark:text-violet-400"
                >
                  Leer más
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <div className="container my-12 mx-auto px-4 md:px-12 rounded-lg ">
        <div className="container max-w-7xl mx-1 px-1 lg:pt-24 text-center ">
          <h1 className="text-4xl font-exo font-bold p-8">Comarca Spaces</h1>
        </div>
        <section className="text-white bg-comarca rounded-lg shadow-lg ">
          <div className="container flex flex-col-reverse mx-auto lg:flex-row ">
            <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 bg-rose-600 text-white">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold font-exo">Coworker</h4>
                <span className="font-bold text-6xl font-exo">
                  Individuales{" "}
                </span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="43"
                height="43"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <p className="mt-3 leading-relaxed font-bold font-exo text-lg">
                Ideal de 1 a 2 personas
              </p>
              <br />
              <div className="flex space-x-2 sm:space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div className="space-y-2">
                  <p className="text-lg font-medium leading-snug font-exo">
                    OFICINA CO PRIVADA
                  </p>
                </div>
              </div>
              <div className="flex space-x-2 sm:space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div className="space-y-2">
                  <p className="text-lg font-medium leading-snug font-exo">
                    ESTACIÓN DE TRABAJO CO MUNIDAD
                  </p>
                </div>
              </div>
              <div className="flex space-x-2 sm:space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div className="space-y-2">
                  <p className="text-lg font-medium leading-snug font-exo">
                    ESTACION DE TRABAJO CO CREATIVO
                  </p>
                </div>
              </div>
              <div className="flex space-x-2 sm:space-x-4 rounded-xl">
                <button
                  type="button"
                  className="px-8 py-3 font-semibold rounded bg-comarca text-white hover:bg-white hover:text-comarcaBlack border border-black hover:border-comarcaBlack "
                >
                  Detalles
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 xl:w-3/5 bg-gray-100">
              <div className="flex items-center justify-center p-4 md:p-8 lg:p-12 transform transition duration-500 hover:scale-110">
                <img
                  src="https://images.pexels.com/photos/6476190/pexels-photo-6476190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="rounded-lg shadow-lg bg-gray-500 aspect-video sm:min-h-96"
                />
              </div>
            </div>
          </div>
        </section>
        <br />

        <section className="text-white bg-comarcaBlue rounded-lg shadow-lg">
          <div className="container flex flex-col-reverse mx-auto lg:flex-row">
            <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 bg-rose-600 text-gray-50">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold font-exo">Coworker</h4>
                <span className="font-bold text-6xl font-exo">Grupales </span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="43"
                height="43"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <p className="mt-3 leading-relaxed font-bold font-exo text-lg">
                Ideal de 4 a 20 personas
              </p>
              <br />
              <div className="flex space-x-2 sm:space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div className="space-y-2">
                  <p className="text-lg font-medium leading-snug font-exo">
                    SALA DE REUNIÓN CO LABORATIVA
                  </p>
                </div>
              </div>
              <div className="flex space-x-2 sm:space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div className="space-y-2">
                  <p className="text-lg font-medium leading-snug font-exo">
                    SALA DE REUNIÓN CO EMPRENDEDOR
                  </p>
                </div>
              </div>
              <div className="flex space-x-2 sm:space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div className="space-y-2">
                  <p className="text-lg font-medium leading-snug font-exo">
                    SALA TALLLER CO EMPRENDEDOR
                  </p>
                </div>
              </div>
              <div className="flex space-x-2 sm:space-x-4 rounded-xl">
                <button
                  type="button"
                  className="px-8 py-3 font-semibold rounded-xl bg-comarcaBlue text-white hover:bg-white hover:text-comarcaBlack border border-black hover:border-comarcaBlack "
                >
                  Detalles
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 xl:w-3/5 bg-gray-100">
              <div className="flex items-center justify-center p-4 md:p-8 lg:p-12  transform transition duration-500 hover:scale-110">
                <img
                  src="https://images.pexels.com/photos/5825371/pexels-photo-5825371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="rounded-lg shadow-lg bg-gray-500 aspect-video sm:min-h-96"
                />
              </div>
            </div>
          </div>
        </section>
        <br />

        <section className="text-white bg-comarcaPurple rounded-lg shadow-lg ">
          <div className="container flex flex-col-reverse mx-auto lg:flex-row">
            <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 bg-rose-600 text-gray-50">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold font-exo">Coworker</h4>
                <span className="font-bold text-6xl font-exo">Virtuales </span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="43"
                height="43"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
              </svg>
              <p className="mt-3 leading-relaxed font-bold font-exo text-lg">
                Ideal para emprendedores
              </p>

              <br />

              <div className="flex space-x-2 sm:space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div className="space-y-2">
                  <p className="text-lg font-medium leading-snug font-exo">
                    OFICINAS VIRTUALES
                  </p>
                </div>
              </div>
              <div className="flex space-x-2 sm:space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div className="space-y-2">
                  <p className="text-lg font-medium leading-snug font-exo">
                    LABORATORIO
                  </p>
                </div>
              </div>
              {/* <div className="flex space-x-2 sm:space-x-4">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div className="space-y-2">
                  <p className="text-lg font-medium leading-snug">
                    Lorem ipsum dolor sit amet
                  </p>
                </div>
              </div> */}
              <div className="flex space-x-2 sm:space-x-4 rounded-xl">
                <button
                  type="button"
                  className="px-8 py-3 font-semibold rounded-xl bg-comarcaPurple text-white hover:bg-white hover:text-comarcaBlack border border-black hover:border-comarcaBlack "
                >
                  Detalles
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 xl:w-3/5 bg-gray-100">
              <div className="flex items-center justify-center p-4 md:p-8 lg:p-12  transform transition duration-500 hover:scale-110">
                <img
                  src="https://images.pexels.com/photos/5825371/pexels-photo-5825371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="rounded-lg shadow-lg bg-gray-500 aspect-video sm:min-h-96"
                />
              </div>
            </div>
          </div>
        </section>

        <br />
        <section className="text-white bg-comarcaYellow rounded-lg shadow-lg ">
          <div className="container flex flex-col-reverse mx-auto lg:flex-row ">
            <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 bg-rose-600 text-gray-50">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold font-exo text-black">
                  Coworker
                </h4>
                <span className="font-bold text-6xl font-exo text-black">
                  Promociones{" "}
                </span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="43"
                height="43"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2L3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3.8 6h16.4M16 10a4 4 0 1 1-8 0" />
              </svg>
              <br />
              <div className="flex space-x-2 sm:space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div className="space-y-2">
                  <p className="text-lg font-medium leading-snug font-exo text-black">
                    TEAM EMPRENDEDOR
                  </p>
                </div>
              </div>
              <div className="flex space-x-2 sm:space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div className="space-y-2">
                  <p className="text-lg font-medium leading-snug font-exo text-black">
                    TEAM CORPORATIVO
                  </p>
                </div>
              </div>
              <div className="flex space-x-2 sm:space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div className="space-y-2">
                  <p className="text-lg font-medium leading-snug font-exo text-black">
                    TEAM ESTUDIANTIL
                  </p>
                </div>
              </div>
              <div className="flex space-x-2 sm:space-x-4">
                <button
                  type="button"
                  className="px-8 py-3 font-semibold rounded-xl bg-yellow text-black hover:bg-white hover:text-comarcaBlack border border-comarcablack hover:border-comarcaBlack"
                >
                  Detalles
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 xl:w-3/5 bg-gray-100">
              <div className="flex items-center justify-center p-4 md:p-8 lg:p-12  transform transition duration-500 hover:scale-110">
                <img
                  src="https://images.pexels.com/photos/6476188/pexels-photo-6476188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="rounded-lg shadow-lg bg-gray-500 aspect-video sm:min-h-96"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Pricing;
