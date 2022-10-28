import img4 from "../../assets/img/web/CoLaborativo.png";
// import backend from "../../env/Main";
// import { useState } from "react";

const Products = () => {
  // const [cart, SetData] = useState([]);

  // fetch(backend.api + "space")
  //   .then((res) => res.json())
  // .then((res) => SetData(res.data));

  //   <tbody>
  //   {cart.map(categoria=> (
  //           <tr key={categoria.id}>
  //               <td>{categoria.id}</td>
  //               <td>{categoria.categspace_name}</td>
  //               <td>{categoria.categspace_state}</td>
  //               <td>
  //                   <button className='btn btn-warning' onClick={() => {console.log(categoria.id);}} >next</button>
  //                   {"  "}
  //                   <button className='btn btn-primary' onClick={() => {setModal(true);}} > <Lucide icon="Edit" className="w-4 h-4 mr-1" /></button>
  //                   {"  "}
  //                   <button className='btn btn-danger' > <Lucide icon="Delete" className="w-4 h-4 mr-1" /></button>
  //               </td>
  //           </tr>
  //       ))}
  // </tbody>

  return (
    <>
      <section className="font-exo ">
        <div className="px-4 py-3 text-white sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 text-center mx-4 space-y-2 rounded-lg bg-growing-underline ">
          <p className="text-center font-semibold sm:text-left  text-3xl tracking-tighter text-comarca">
            Espacios <br className="sm:hidden" />
            Individuales
          </p>
        </div>

        <div className="container my-12 mx-auto px-4 md:px-12 transform ease-in-out duration-150 transition-transform">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              {/* {cart.map((space) => (
                <tr key={space.id}>
                  <td>{space.id}</td>
                  <td>{space.name}</td>
                  <td>{space.precio}</td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        console.log(space.id);
                      }}
                    >
                      next
                    </button>
                  </td>
                </tr>
              ))} */}
              <article className="overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-110">
                <a href="/coprivado">
                  <img
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src="https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/Services%2FIndividuales%2Fcoprivado%2FCoPrivado1.png?alt=media&token=18de9ac4-6fdb-49d7-aa7a-950d6a359736"
                  />
                </a>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a
                      className="no-underline hover:underline  text-comarca font-semibold"
                      href="/coprivado"
                    >
                      Co Privado
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
                    src="https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/Services%2FGrupales%2Fcomunidad2%2FCoMunidad2.png?alt=media&token=1abe2c5b-605a-4d79-9ebb-45ce41b7a8d0"
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
                    src="https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/Services%2FIndividuales%2Fcocreativo%2FCoCreativo4.png?alt=media&token=10a4fc23-17ef-46dd-9d8c-348dc83faff0"
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
            Espacios <br className="sm:hidden" />
            Grupales
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
                      Co Laborativo
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
                    src="https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/Services%2FGrupales%2Fcoemprende%2FCoEmprende2.png?alt=media&token=74912317-a68f-4c07-beca-dc523539b5b2"
                  />
                </a>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a
                      className="no-underline hover:underline text-comarcaBlue font-semibold"
                      href="/coemprende"
                    >
                      Co emprendedor
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
                    src="https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/Services%2FGrupales%2Ftaller%2FSalaTaller2.png?alt=media&token=bd71815f-4592-40e9-ab83-697e19553950"
                  />
                </a>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a
                      className="no-underline hover:underline text-comarcaBlue font-semibold"
                      href="/taller"
                    >
                      Co Emprende Taller
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
            Espacios <br className="sm:hidden" />
            Virtuales
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
                    src="https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/Services%2FCowork%2FOFICINAVIRTUAL.png?alt=media&token=01a1f310-9028-465d-b0d7-2681493efc5b"
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
                <a href="/emprende">
                  <img
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src="https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/Services%2FCowork%2FCOMARCALAP.png?alt=media&token=7c03dd7c-42fa-4f94-96a3-9cee41f462dd"
                  />
                </a>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a
                      className="no-underline hover:underline text-comarcaPurple font-semibold"
                      href="/emprende"
                    >
                      Comarca Lab{" "}
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
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article className="overflow-hidden rounded-lg shadow-lg  transform transition duration-500 hover:scale-110">
                <a href="/domiciliacion">
                  <img
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src="https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/Services%2FCowork%2FDOMICILIACI%C3%93N.png?alt=media&token=7bfc129a-bdce-4949-9746-c0fc8b7817d4"
                  />
                </a>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a
                      className="no-underline hover:underline text-comarcaPurple font-semibold"
                      href="/domiciliacion"
                    >
                      Domiciliacion
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
          </div>
        </div>
      </section>

      <section className="font-exo">
        <div className="text-comarcaYellow px-4 py-3 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 text-center mx-4 space-y-2 rounded-lg">
          <p className="text-center font-semibold sm:text-left  text-3xl tracking-tighter">
            TEAMS
          </p>
        </div>

        <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article className="overflow-hidden rounded-lg shadow-lg  transform transition duration-500 hover:scale-110">
                <a href="/emprendedor">
                  <img
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src="https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/Services%2FCowork%2FTEAMEMPRENDEDOR.png?alt=media&token=6a1c29c8-92c0-4f51-bb58-29fa6fe6bf39"
                  />
                </a>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a
                      className="no-underline hover:underline text-black font-semibold"
                      href="/emprendedor"
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
                <a href="/corporativo">
                  <img
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src="https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/Services%2FCowork%2FTEAMCORPORATIVO.png?alt=media&token=ffbe8d8a-4fc7-468d-b61d-8960f491a248"
                  />
                </a>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a
                      className="no-underline hover:underline text-black font-semibold"
                      href="/corporativo"
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
                    src="https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/Services%2FCowork%2FTEAMESTUDIANTE.png?alt=media&token=36394296-df45-4f10-a5fa-c9d694f4035b"
                  />
                </a>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a
                      className="no-underline hover:underline text-black font-semibold"
                      href="/estudiante"
                    >
                      Team Estudiante
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
