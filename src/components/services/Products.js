// import img1 from "../../assets/img/spaces/Colaborativa/colaborativo3.jpg";
// import img2 from "../../assets/img/spaces/Coemprendedor/coemprendedor1.jpg";
// import img3 from "../../assets/img/spaces/Comunidad/comunidad2.jpg";
// import img4 from "../../assets/img/spaces/Coprivada/coprivada1.jpg";
// import img5 from "../../assets/img/spaces/Cocreativo/comedor1.jpg";
//import img6 from "../../assets/img/spaces/Comarca/sala2.jpg";
//import Carro from "./Carro";

const Products = () => {
  return (
    <>
      <section className="font-exo ">
        <div className="px-4 py-3 text-white sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 text-center mx-4 space-y-2 rounded-lg bg-growing-underline ">
          <p className="text-center font-semibold sm:text-left  text-3xl tracking-tighter text-comarcaBlack">
            Coworker <br className="sm:hidden" />
            Individual
          </p>
        </div>

        <div className="container my-12 mx-auto px-4 md:px-12 transform ease-in-out duration-150 transition-transform">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article className="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                  <img
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src="https://images.pexels.com/photos/6281724/pexels-photo-6281724.jpeg?auto=compress&cs=tinysrgb&w=600"
                  />
                </a>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a
                      className="no-underline hover:underline text-black"
                      href="/coprivate"
                    >
                      Oficina Co Privada
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
              <article className="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                  <img
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src="https://picsum.photos/600/400/?random"
                  />
                </a>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a
                      className="no-underline hover:underline text-black"
                      href="#"
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
              <article className="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                  <img
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src="https://picsum.photos/600/400/?random"
                  />
                </a>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a
                      className="no-underline hover:underline text-black"
                      href="#"
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

      <section className="font-exo">
        <div className="bg-comarcaBlue px-4 py-3 text-white sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 text-center mx-4 space-y-2 rounded-lg">
          <p className="text-center font-semibold sm:text-left  text-3xl tracking-tighter">
            Coworker <br className="sm:hidden" />
            Grupal
          </p>
        </div>

        <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article className="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                  <img
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src="https://picsum.photos/600/400/?random"
                  />
                </a>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a
                      className="no-underline hover:underline text-black"
                      href="#"
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
              <article className="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                  <img
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src="https://picsum.photos/600/400/?random"
                  />
                </a>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a
                      className="no-underline hover:underline text-black"
                      href="#"
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
              <article className="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                  <img
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src="https://picsum.photos/600/400/?random"
                  />
                </a>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a
                      className="no-underline hover:underline text-black"
                      href="#"
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

      <section className="font-exo">
        <div className="bg-comarcaPurple px-4 py-3 text-white sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 text-center mx-4 space-y-2 rounded-lg">
          <p className="text-center font-semibold sm:text-left  text-3xl tracking-tighter">
            Coworker <br className="sm:hidden" />
            Virtual
          </p>
        </div>

        <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article className="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                  <img
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src="https://picsum.photos/600/400/?random"
                  />
                </a>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a
                      className="no-underline hover:underline text-black"
                      href="#"
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
              <article className="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                  <img
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src="https://picsum.photos/600/400/?random"
                  />
                </a>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a
                      className="no-underline hover:underline text-black"
                      href="#"
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
        <div className="bg-comarcaYellow px-4 py-3 text-white sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 text-center mx-4 space-y-2 rounded-lg">
          <p className="text-center font-semibold sm:text-left  text-3xl tracking-tighter">
            Coworker <br className="sm:hidden" />
            ofertas🎁
          </p>
        </div>

        <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article className="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                  <img
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src="https://picsum.photos/600/400/?random"
                  />
                </a>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a
                      className="no-underline hover:underline text-black"
                      href="#"
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
              <article className="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                  <img
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src="https://picsum.photos/600/400/?random"
                  />
                </a>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a
                      className="no-underline hover:underline text-black"
                      href="#"
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
              <article className="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                  <img
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src="https://picsum.photos/600/400/?random"
                  />
                </a>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a
                      className="no-underline hover:underline text-black"
                      href="#"
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
