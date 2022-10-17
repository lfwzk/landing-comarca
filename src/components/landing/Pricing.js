//import img1 from "../../assets/img/web/CoEmprendedorTaller(4).png";
import img2 from "../../assets/img/web/COPRIVADA(2).png";
//import img3 from "../../assets/img/v2/f28.jpeg";
import img3 from "../../assets/img/web/CoLaborativo(5).png";
import img4 from "../../assets/img/web/COMUNIDAD(13).png";
import img5 from "../../assets/img/web/CoEmprendedorTaller(12).png";

const Pricing = () => {
  return (
    <>
      <section className="relative py-20 p-8 font-exo">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <h2 className="text-xl font-exo lg:text-5xl font-semibold">
            Co Marca Spaces <br />
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {" "}
            Busca un espacio ideal para ti y tus necesidades🏠{" "}
          </p>
        </div>
        <div className="container my-12 mx-auto px-4 md:px-12 ">
          <div className="flex flex-wrap -mx-1 lg:-mx-4 ">
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 ">
              <article className="overflow-hidden rounded-lg shadow-lg text-comarcaBlack transform transition duration-500 hover:scale-110">
                <img
                  alt="Placeholder"
                  className="block h-auto w-full"
                  src={img2}
                />

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className=" font-exo font-semibold text-3xl no-underline  text-comarca">
                    Coworker Individual
                  </h1>
                </header>

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
                      <span>Oficina Co Privada</span>
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
                      <span>Estación de trabajo Co Munidad</span>
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
                      <span>Estación de trabajo Co Creativo</span>
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
                    Coworker Grupal
                  </h1>
                </header>

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
                    <span></span>
                    <a
                      href="/colaborativo"
                      className="hover:underline hover:text-comarcaBlue font-semibold"
                    >
                      <span>Sala de reunión Co Laborativo </span>
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
                      <span>Sala de reunión Co Emprendedor </span>
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
                      <span>Sala taller Co Emprendedor </span>
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
                  src={img4}
                />

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className=" font-exo font-semibold text-3xl text-comarcaPurple">
                    Coworker Virtual
                  </h1>
                </header>

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
                      <span>Oficinas virtuales</span>
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
                      <span>Laboratorio</span>
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
                      href="/virtualizacion"
                      className="hover:underline hover:text-comarcaPurple font-semibold"
                    >
                      <span>Virtualización</span>
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
                <p className="text-sm font-exo text-justify">
                  {" "}
                  En Co Marca Desarrollamos un sistema coworking con propósito
                  cubriendo todas las necesidades tangibles e intangibles
                  propias de un emprendedor que le permita sostener su idea de
                  negocio, en cada etapa, acompañado por nosotros un colectivo
                  de contribución efectiva, con todos los recursos necesarios
                  desde una imagen empresarial, un espacio de trabajo
                  profesional, hasta servicios digitales corporativos,
                  reduciendo los altos índices de fracaso en etapa temprana muy
                  característico del sector.
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
                  src={img5}
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
