import img3 from "../../assets/img/web/CoLaborativo(5).png";

const Pricing = () => {
  return (
    <>
      <section className="relative lg:p-2 font-exo">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <h2 className="text-xl font-exo lg:text-5xl font-semibold">
            Co Marca Spaces <br />
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {" "}
            Nuestros servicios enfocados al desarrollo y productividad
            organizacional.
          </p>
        </div>
        <div className="container my-12 mx-auto px-4 md:px-12 ">
          <div className="flex flex-wrap -mx-1 lg:-mx-4 ">
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 ">
              <article className="overflow-hidden rounded-lg shadow-lg text-comarcaBlack transform transition duration-500 hover:scale-110">
                <img
                  alt="Placeholder"
                  className="block h-auto w-full"
                  src="https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/home%2FCoPrivado13.png?alt=media&token=ce200e54-7219-4ebe-a518-598995c0e333"
                />

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className=" font-exo font-semibold text-3xl no-underline  text-comarca">
                    Espacios Individuales
                  </h1>
                </header>
                <main className="p-4 text-justify  font-semibold text-sm">
                  {" "}
                  Espacios de trabajo equipados, todo incluido (servicios
                  directos e indirectos), con capacidad de una (1) a cuatro (4)
                  personas por espacio.
                </main>
                <footer className="p-4">
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
                    <a
                      href="/coprivado"
                      className="hover:underline hover:text-comarca font-semibold"
                    >
                      <span>Co Privado</span>
                    </a>
                  </li>
                  <br />

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

                    <a
                      href="/coprivado"
                      className="hover:underline hover:text-comarca font-semibold"
                    >
                      <span>Co Munidad</span>
                    </a>
                  </li>
                  <br />
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
                    <a
                      href="/coprivado"
                      className="hover:underline hover:text-comarca font-semibold"
                    >
                      <span>Co Creativo</span>
                    </a>
                  </li>
                  <br />
                </footer>
              </article>
            </div>

            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article className="overflow-hidden rounded-lg shadow-lg  text-comarcaBlack transform transition duration-500 hover:scale-110">
                <img
                  alt="Placeholder"
                  className="block h-auto w-full"
                  src={img3}
                />

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="font-exo font-semibold text-3xl text-comarcaBlue">
                    Espacios Grupales
                  </h1>
                </header>
                <main className="p-4 text-justify font-semibold text-sm">
                  Espacios de trabajo, todo incluido (servicios directos e
                  indirectos), con capacidad para grupos de cuatro (4) a veinte
                  (20) personas.{" "}
                </main>

                <footer className="p-4">
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

                    <a
                      href="/colaborativo"
                      className="hover:underline hover:text-comarcaBlue font-semibold"
                    >
                      <span>Co Laborativo</span>
                    </a>
                  </li>
                  <br />

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
                    <a
                      href="/coemprende"
                      className="hover:underline hover:text-comarcaBlue font-semibold"
                    >
                      <span>Co Emprende </span>
                    </a>
                  </li>
                  <br />
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
                    <br />
                    <a
                      href="/taller"
                      className="hover:underline hover:text-comarcaBlue font-semibold"
                    >
                      <span>Sala taller Co Emprende </span>
                    </a>
                  </li>
                  <br />
                </footer>
              </article>
            </div>

            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article className="overflow-hidden rounded-lg shadow-lg text-comarcaBlack  transform transition duration-500 hover:scale-110">
                <img
                  alt="Placeholder"
                  className="block h-auto w-full "
                  src="https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/home%2FESPACIOSVIRTUALES.png?alt=media&token=0c56c4ce-1e0e-426a-bffe-5a0cb1156e1a"
                />

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className=" font-exo font-semibold text-3xl text-comarcaPurple">
                    Espacios Virtuales
                  </h1>
                </header>
                <main className="p-4 text-justify font-semibold text-sm">
                  {" "}
                  Espacio remoto enfocado al desarrollo integral de una empresa
                  emergente, en busca de la formalidad y crecimiento.
                </main>

                <footer className="p-4">
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
                    <a
                      href="/virtual"
                      className="hover:underline hover:text-comarcaPurple font-semibold"
                    >
                      <span>Oficina Virtual</span>
                    </a>
                  </li>
                  <br />

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
                    <a
                      href="/domiciliacion"
                      className="hover:underline hover:text-comarcaPurple font-semibold"
                    >
                      <span>Domiciliación</span>
                    </a>
                  </li>
                  <br />
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
                    <a
                      href="/emprende"
                      className="hover:underline hover:text-comarcaPurple font-semibold"
                    >
                      <span>Co Marca Lab</span>
                    </a>
                  </li>
                  <br />
                </footer>
              </article>
            </div>

            {/* //-------------------------------------------------------------------------------- */}
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 ">
              <article className="overflow-hidden rounded-lg shadow-lg text-comarcaBlack transform transition duration-500 hover:scale-110">
                <img
                  alt="Placeholder"
                  className="block h-auto w-full"
                  src="https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/home%2FTEAMS.png?alt=media&token=7799a9e7-4c3f-4831-95c1-2f1e1a144e03"
                />

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className=" font-exo font-semibold text-3xl no-underline  text-comarcaBlack">
                    Teams
                  </h1>
                </header>
                <main className="p-4 text-justify font-semibold text-sm">
                  {" "}
                  Espacios de trabajo equipados, todo incluido (servicios
                  directos e indirectos) con capacidad para equipos de cinco (5)
                  hasta diez (10) personas.
                </main>
                <footer className="p-4">
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
                    <a
                      href="/emprendedor"
                      className="hover:underline hover:text-comarcaBlack font-semibold"
                    >
                      <span>Team Emprendedor</span>
                    </a>
                  </li>
                  <br />

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

                    <a
                      href="/corporativo"
                      className="hover:underline hover:text-comarcaBlack font-semibold"
                    >
                      <span>Team corporativo</span>
                    </a>
                  </li>
                  <br />
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
                    <a
                      href="/estudiante"
                      className="hover:underline hover:text-comarcaBlack font-semibold"
                    >
                      <span>Team estudiante</span>
                    </a>
                  </li>
                  <br />
                </footer>
              </article>
            </div>

            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article className="overflow-hidden rounded-lg shadow-lg  text-comarcaBlack transform transition duration-500 hover:scale-110">
                <img
                  alt="Placeholder"
                  className="block h-auto w-full"
                  src="https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/home%2FPAQUETES.png?alt=media&token=dcc62450-3820-41be-9b87-b683e45e095e"
                />

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="font-exo font-semibold text-3xl text-comarcaYellow">
                    Paquetes
                  </h1>
                </header>
                <main className="p-4 text-justify font-semibold text-sm">
                  Accesos a precios de una (1) hasta dos (2) horas gratuitas y
                  membresías con acceso a cien (100 horas) en cualquiera de los
                  servicios.
                </main>

                <footer className="p-4">
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

                    <a
                      href="/colaborativo"
                      className="hover:underline hover:text-comarcaBlue font-semibold"
                    >
                      <span>Tarifa Conjunta</span>
                    </a>
                  </li>
                  <br />

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
                    <a
                      href="/coemprende"
                      className="hover:underline hover:text-comarcaBlue font-semibold"
                    >
                      <span> Tarifa Plana </span>
                    </a>
                  </li>
                  <br />
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
                    <br />
                    <a
                      href="/taller"
                      className="hover:underline hover:text-comarcaBlue font-semibold"
                    >
                      <span>Sistema Rotativo</span>
                    </a>
                  </li>
                  <br />
                </footer>
              </article>
            </div>

            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article className="overflow-hidden rounded-lg shadow-lg text-comarcaBlack  transform transition duration-500 hover:scale-110">
                <img
                  alt="Placeholder"
                  className="block h-auto w-full "
                  src="https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/home%2FESPACIOAUDIOVISUAL.jpg?alt=media&token=20a77bab-0445-429c-bc6a-83300f28a9e2"
                />

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className=" font-exo font-semibold text-3xl text-comarcaOrange">
                    Espacio Audiovisual
                  </h1>
                </header>
                <main className="p-4 text-justify font-semibold text-sm">
                  {" "}
                  Espacio de trabajo equipado, todo incluido (servicios directos
                  e indirectos) con capacidad de dos (2) hasta cuatro (4)
                  personas. personas.
                </main>

                <footer className="p-4">
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
                    <a
                      href="/podcast"
                      className="hover:underline hover:text-comarcaPurple font-semibold"
                    >
                      <span>Co Marca Podcast</span>
                    </a>
                  </li>
                  <br />

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
                    <a
                      href="/laboratorio"
                      className="hover:underline hover:text-comarcaPurple font-semibold"
                    >
                      <span>Youtube</span>
                    </a>
                  </li>
                  <br />
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
                    <a
                      href="/emprende"
                      className="hover:underline hover:text-comarcaPurple font-semibold"
                    >
                      <span>Tik Tok</span>
                    </a>
                  </li>
                  <br />
                </footer>
              </article>
            </div>
          </div>
        </div>
        <section className="text-comarcaBlack rounded-lg shadow-lg ">
          <div className="container flex flex-col-reverse mx-auto lg:flex-row ">
            <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 bg-rose-600 text-gray-50">
              <div className="space-y-2">
                <h4 className="text-xl font-bold font-exo text-comarcaOrange">
                  Grupo
                </h4>
                <span className="font-bold text-3xl font-exo text-comarcaOrange">
                  Co Marca{" "}
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
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <br />
              <div className="flex space-x-2 sm:space-x-4">
                <p className="text-sm font-exo text-justify font-semibold ">
                  {" "}
                  El impacto que genera una nueva idea de negocio, en las
                  transformaciones ocupacionales, en los profesionales y
                  organizaciones que se traducen en innovaciones disruptivas
                  para el desarrollo de un país integrada con la aplicación de
                  la tecnología, son factores que han tomado mucho protagonismo
                  en el proceso de re adaptación y resiliencia, en las nuevas
                  maneras de hacer economía efecto de la pandemia.
                </p>
              </div>
              <div className="flex space-x-2 sm:space-x-4">
                <button
                  type="button"
                  className="px-8 py-3 font-semibold rounded-xl bg-comarcaOrange text-black hover:bg-white hover:text-comarcaBlack border border-comarcablack hover:border-comarcaBlack"
                >
                  <a href="/group">Detalles</a>
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 xl:w-3/5 bg-gray-100">
              <div className="flex items-center justify-center p-4 md:p-8 lg:p-12  transform transition duration-500 hover:scale-110">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/Services%2FGrupales%2Fcolaborativo%2FCoLaborativo3.png?alt=media&token=dffcafe6-282c-45d7-9298-4d2cdd70914f"
                  alt=""
                  className="rounded-lg shadow-lg bg-gray-500 aspect-video sm:min-h-96"
                />
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};
export default Pricing;
