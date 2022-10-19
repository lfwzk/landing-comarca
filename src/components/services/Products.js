// import img1 from "../../assets/img/spaces/Colaborativa/colaborativo3.jpg";
// import img2 from "../../assets/img/spaces/Coemprendedor/coemprendedor1.jpg";
// import img3 from "../../assets/img/spaces/Comunidad/comunidad2.jpg";
// import img4 from "../../assets/img/spaces/Coprivada/coprivada1.jpg";
// import img5 from "../../assets/img/spaces/Cocreativo/comedor1.jpg";
//import img6 from "../../assets/img/spaces/Comarca/sala2.jpg";
//import Carro from "./Carro";
import img1 from "../../assets/img/web/COPRIVADA(8).png";
import img2 from "../../assets/img/web/COMUNIDAD(16).png";
import img3 from "../../assets/img/web/CoCreativo(3).png";

import img4 from "../../assets/img/web/CoLaborativo.png";
import img5 from "../../assets/img/web/CoEmprendedorTaller(4).png";
import img6 from "../../assets/img/web/CoEmprendedorTaller(10).png";
const Products = () => {
  return (
    <>
      <section className="font-exo ">
        <div className="px-4 py-3 text-white sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 text-center mx-4 space-y-2 rounded-lg bg-growing-underline ">
          <p className="text-center font-semibold sm:text-left  text-3xl tracking-tighter text-comarca">
            Coworker <br className="sm:hidden" />
            Individual
          </p>
        </div>

        <div className="container my-12 mx-auto px-4 md:px-12 transform ease-in-out duration-150 transition-transform">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article className="overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-110">
                <a href="/coprivado">
                  <img
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src={img1}
                  />
                </a>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a
                      className="no-underline hover:underline  text-comarca font-semibold"
                      href="/coprivado"
                    >
                      Oficina Co Privado
                    </a>
                  </h1>
                  <p className="text-grey-darker text-sm">Desde Bs. 35</p>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                  <button
                    name="add"
                    type="button"
                    className="flex items-center justify-center w-full px-8 py-4 mt-4 bg-comarca rounded-xl"
                  >
                    <a href="/checkout">
                      <span className="text-sm font-medium text-white">
                        Reservar
                      </span>
                    </a>
                    <svg
                      className="w-5 h-5 ml-1.5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#ffffff"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                  </button>
                </footer>
              </article>
            </div>

            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article className="overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-110">
                <a href="/comunidad">
                  <img
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src={img2}
                  />
                </a>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a
                      className="no-underline hover:underline text-comarca font-semibold"
                      href="/comunidad"
                    >
                      Co Munidad
                    </a>
                  </h1>
                  <p className="text-grey-darker text-sm">desde 25 Bs. hora </p>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                  <button
                    name="add"
                    type="button"
                    className="flex items-center justify-center w-full px-8 py-4 mt-4 bg-comarca rounded-xl"
                  >
                    <a href="/checkout">
                      <span className="text-sm font-medium text-white">
                        Reservar
                      </span>
                    </a>
                    <svg
                      className="w-5 h-5 ml-1.5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#ffffff"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                  </button>
                </footer>
              </article>
            </div>

            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article className="overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-110">
                <a href="/cocreativo">
                  <img
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src={img3}
                  />
                </a>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a
                      className="no-underline hover:underline text-comarca font-semibold"
                      href="/cocreativo"
                    >
                      Co Creativo
                    </a>
                  </h1>
                  <p className="text-grey-darker text-sm">Desde Bs.45 </p>
                </header>
                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                  <button
                    name="add"
                    type="button"
                    className="flex items-center justify-center w-full px-8 py-4 mt-4 bg-comarca rounded-xl"
                  >
                    <a href="/checkout">
                      <span className="text-sm font-medium text-white">
                        Reservar
                      </span>
                    </a>
                    <svg
                      className="w-5 h-5 ml-1.5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#ffffff"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                  </button>
                </footer>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="font-exo">
        <div className=" px-4 py-3 text-comarcaBlue sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 text-center mx-4 space-y-2 rounded-lg">
          <p className="text-center font-semibold sm:text-left  text-3xl tracking-tighter">
            Coworker <br className="sm:hidden" />
            Grupal
          </p>
        </div>

        <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article className="overflow-hidden rounded-lg shadow-lg  transform transition duration-500 hover:scale-110">
                <a href="/colaborativo">
                  <img
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src={img4}
                  />
                </a>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a
                      className="no-underline hover:underline text-comarcaBlue font-semibold"
                      href="/colaborativo"
                    >
                      Sala de reunión Co Laborativa
                    </a>
                  </h1>
                  <p className="text-grey-darker text-sm">Desde Bs. 75/h</p>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                  <button
                    name="add"
                    type="button"
                    className="flex items-center justify-center w-full px-8 py-4 mt-4 bg-comarcaBlue rounded-xl"
                  >
                    <a href="/checkout">
                      <span className="text-sm font-medium text-white">
                        Reservar
                      </span>
                    </a>
                    <svg
                      className="w-5 h-5 ml-1.5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#ffffff"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                  </button>
                </footer>
              </article>
            </div>

            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article className="overflow-hidden rounded-lg shadow-lg  transform transition duration-500 hover:scale-110">
                <a href="/coemprende">
                  <img
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src={img5}
                  />
                </a>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a
                      className="no-underline hover:underline text-comarcaBlue font-semibold"
                      href="/coemprende"
                    >
                      Sala de reunión Co emprendedor
                    </a>
                  </h1>
                  <p className="text-grey-darker text-sm">Desde Bs. 95/h</p>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                  <button
                    name="add"
                    type="button"
                    className="flex items-center justify-center w-full px-8 py-4 mt-4 bg-comarcaBlue rounded-xl"
                  >
                    <a href="/checkout">
                      <span className="text-sm font-medium text-white">
                        Reservar
                      </span>
                    </a>
                    <svg
                      className="w-5 h-5 ml-1.5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#ffffff"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                  </button>
                </footer>
              </article>
            </div>

            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article className="overflow-hidden rounded-lg shadow-lg  transform transition duration-500 hover:scale-110">
                <a href="/taller">
                  <img
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src={img6}
                  />
                </a>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a
                      className="no-underline hover:underline text-comarcaBlue font-semibold"
                      href="/taller"
                    >
                      Sala talleres Co Emprendedor
                    </a>
                  </h1>
                  <p className="text-grey-darker text-sm">Desde Bs.450 /3h </p>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                  <button
                    name="add"
                    type="button"
                    className="flex items-center justify-center w-full px-8 py-4 mt-4 bg-comarcaBlue rounded-xl"
                  >
                    <a href="/checkout">
                      <span className="text-sm font-medium text-white">
                        Reservar
                      </span>
                    </a>
                    <svg
                      className="w-5 h-5 ml-1.5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#ffffff"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                  </button>
                </footer>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="font-exo">
        <div className="text-comarcaPurple px-4 py-3  sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 text-center mx-4 space-y-2 rounded-lg">
          <p className="text-center font-semibold sm:text-left  text-3xl tracking-tighter">
            Coworker <br className="sm:hidden" />
            Virtual
          </p>
        </div>

        <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article className="overflow-hidden rounded-lg shadow-lg  transform transition duration-500 hover:scale-110">
                <a href="/virtual">
                  <img
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src="https://picsum.photos/600/400/?random"
                  />
                </a>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a
                      className="no-underline hover:underline text-comarcaPurple font-semibold"
                      href="/virtual"
                    >
                      Oficina Virtual
                    </a>
                  </h1>
                  <p className="text-grey-darker text-sm">Desde 350/m</p>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                  <button
                    name="add"
                    type="button"
                    className="flex items-center justify-center w-full px-8 py-4 mt-4 bg-comarcaPurple rounded-xl"
                  >
                    <span className="text-sm font-medium text-white">
                      Reservar
                    </span>

                    <svg
                      className="w-5 h-5 ml-1.5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#ffffff"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                  </button>
                </footer>
              </article>
            </div>

            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article className="overflow-hidden rounded-lg shadow-lg  transform transition duration-500 hover:scale-110">
                <a href="/laboratorio">
                  <img
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src="https://picsum.photos/600/400/?random"
                  />
                </a>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a
                      className="no-underline hover:underline text-comarcaPurple font-semibold"
                      href="/laboratorio"
                    >
                      Laboratorio Emprende
                    </a>
                  </h1>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                  <button
                    name="add"
                    type="button"
                    className="flex items-center justify-center w-full px-8 py-4 mt-4 bg-comarcaPurple rounded-xl"
                  >
                    <span className="text-sm font-medium text-white">
                      Ver más
                    </span>

                    <svg
                      className="w-5 h-5 ml-1.5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#ffffff"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                  </button>
                </footer>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="font-exo">
        <div className="text-comarcaYellow px-4 py-3 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 text-center mx-4 space-y-2 rounded-lg">
          <p className="text-center font-semibold sm:text-left  text-3xl tracking-tighter">
            Coworker <br className="sm:hidden" />
            ofertas
          </p>
        </div>

        <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article className="overflow-hidden rounded-lg shadow-lg  transform transition duration-500 hover:scale-110">
                <a href="/teamEmprendedor">
                  <img
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src="https://picsum.photos/600/400/?random"
                  />
                </a>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a
                      className="no-underline hover:underline text-black font-semibold"
                      href="/teamEmprendedor"
                    >
                      Team Emprendedor
                    </a>
                  </h1>
                  <p className="text-grey-darker text-sm">Desde Bs.2200/mes</p>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                  <button
                    name="add"
                    type="button"
                    className="flex items-center justify-center w-full px-8 py-4 mt-4 bg-comarcaYellow rounded-xl"
                  >
                    <span className="text-sm font-medium text-white">
                      Reservar
                    </span>

                    <svg
                      className="w-5 h-5 ml-1.5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#ffffff"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                  </button>
                </footer>
              </article>
            </div>

            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article className="overflow-hidden rounded-lg shadow-lg  transform transition duration-500 hover:scale-110">
                <a href="/teamCorporativo">
                  <img
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src="https://picsum.photos/600/400/?random"
                  />
                </a>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a
                      className="no-underline hover:underline text-black font-semibold"
                      href="/teamCorporativo"
                    >
                      Team Corporativo
                    </a>
                  </h1>
                  <p className="text-grey-darker text-sm">Desde Bs. 3200/mes</p>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                  <button
                    name="add"
                    type="button"
                    className="flex items-center justify-center w-full px-8 py-4 mt-4 bg-comarcaYellow rounded-xl"
                  >
                    <span className="text-sm font-medium text-white">
                      Reservar
                    </span>

                    <svg
                      className="w-5 h-5 ml-1.5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#ffffff"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                  </button>
                </footer>
              </article>
            </div>

            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article className="overflow-hidden rounded-lg shadow-lg  transform transition duration-500 hover:scale-110">
                <a href="/estudiante">
                  <img
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src="https://picsum.photos/600/400/?random"
                  />
                </a>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a
                      className="no-underline hover:underline text-black font-semibold"
                      href="/estudiante"
                    >
                      Team Estudiantil
                    </a>
                  </h1>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                  <button
                    name="add"
                    type="button"
                    className="flex items-center justify-center w-full px-8 py-4 mt-4 bg-comarcaYellow rounded-xl"
                  >
                    <span className="text-sm font-medium text-white">
                      Reservar
                    </span>

                    <svg
                      className="w-5 h-5 ml-1.5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#ffffff"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                  </button>
                </footer>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Products;
