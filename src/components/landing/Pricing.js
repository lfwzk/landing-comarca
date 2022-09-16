const Pricing = () => {
  return (
    <>
      <section className="p-8 dark:bg-gray-800 dark:text-gray-100 ">
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
      </section>
    </>
  );
};
export default Pricing;
