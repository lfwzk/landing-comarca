import img1 from "../../assets/img/events/evento1.jpeg";
import img2 from "../../assets/img/events/evento2.jpg";
const Blog = () => {
  return (
    <>
      <div className="max-w-2xl mx-auto mb-16 text-center">
        <h2 className="text-xl font-exo lg:text-5xl font-semibold">
          Eventos <br />
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          {" "}
          Los mejores eventos de Co Marca en un solo lugar{" "}
        </p>
      </div>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 font-exo">
        <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
            <a href="/" aria-label="Article">
              <img
                src={img1}
                className="object-cover w-full h-64 rounded"
                alt=""
              />
            </a>
            <div className="py-5">
              <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                22 Octubre 2022
              </p>
              <a
                href="/"
                aria-label="Article"
                className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-2xl font-bold leading-5">
                  <p className="text-comarca">Taller</p>reconciliate con tu
                  futuro
                </p>
              </a>
              <p className="mb-4 text-gray-700">
                Un Talleres de 4 horas para que puedas conocer tu futuro y como
                puedes hacer para que sea el mejor.
              </p>
              {/* <div className="flex space-x-4">
                <a
                  href="/"
                  aria-label="Likes"
                  className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                >
                  <div className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                    >
                      <polyline
                        points="6 23 1 23 1 12 6 12"
                        fill="none"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                        fill="none"
                        stroke="currentColor"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </div>
                  <p className="font-semibold">7.4K</p>
                </a>
                <a
                  href="/"
                  aria-label="Comments"
                  className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                >
                  <div className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                    >
                      <polyline
                        points="23 5 23 18 19 18 19 22 13 18 12 18"
                        fill="none"
                        strokeMiterlimit="10"
                      />
                      <polygon
                        points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                        fill="none"
                        stroke="currentColor"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </div>
                  <p className="font-semibold">81</p>
                </a>
              </div> */}
              <button className="px-4 py-2 font-semibold text-white bg-comarca rounded hover:bg-comarca-dark">
                Ver mas{" "}
              </button>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
            <a href="/" aria-label="Article">
              <img
                src={img2}
                className="object-cover w-full h-64 rounded"
                alt=""
              />
            </a>
            <div className="py-5">
              <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                11 Nov 2022
              </p>
              <a
                href="/"
                aria-label="Article"
                className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-2xl font-bold leading-5">
                  <p className="text-comarca">Evento</p>Trabaja mientras ves el
                  mundial
                </p>
              </a>
              <p className="mb-4 text-gray-700">
                Un evento de 4 horas para que puedas conocer tu futuro y como
                puedes hacer para que sea el mejor.
              </p>
              {/* <div className="flex space-x-4">
                <a
                  href="/"
                  aria-label="Likes"
                  className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                >
                  <div className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                    >
                      <polyline
                        points="6 23 1 23 1 12 6 12"
                        fill="none"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                        fill="none"
                        stroke="currentColor"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </div>
                  <p className="font-semibold">100</p>
                </a>
                <a
                  href="/"
                  aria-label="Comments"
                  className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                >
                  <div className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                    >
                      <polyline
                        points="23 5 23 18 19 18 19 22 13 18 12 18"
                        fill="none"
                        strokeMiterlimit="10"
                      />
                      <polygon
                        points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                        fill="none"
                        stroke="currentColor"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </div>
                  <p className="font-semibold">81</p>
                </a>
              </div> */}
              <button className="px-4 py-2 font-semibold text-white bg-comarca rounded hover:bg-comarca-dark">
                Ver más
              </button>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
            <a href="/" aria-label="Article">
              <img
                src="https://okdiario.com/img/2017/10/24/la-espeluznante-historia-que-hay-detras-de-halloween.jpg"
                className="object-cover w-full h-64 rounded"
                alt=""
              />
            </a>
            <div className="py-5">
              <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                29 Oct 2022
              </p>
              <a
                href="/"
                aria-label="Article"
                className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-2xl font-bold leading-5">
                  <p className="text-comarca">Evento</p>Cowork Hallowerk
                </p>
              </a>
              <p className="mb-4 text-gray-700">
                Un evento de 4 horas para que puedas conocer tu futuro y como
                puedes hacer para que sea el mejor.
              </p>
              {/* <div className="flex space-x-4">
                <a
                  href="/"
                  aria-label="Likes"
                  className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                >
                  <div className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                    >
                      <polyline
                        points="6 23 1 23 1 12 6 12"
                        fill="none"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                        fill="none"
                        stroke="currentColor"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </div>
                  <p className="font-semibold">7.4K</p>
                </a>
                <a
                  href="/"
                  aria-label="Comments"
                  className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                >
                  <div className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                    >
                      <polyline
                        points="23 5 23 18 19 18 19 22 13 18 12 18"
                        fill="none"
                        strokeMiterlimit="10"
                      />
                      <polygon
                        points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                        fill="none"
                        stroke="currentColor"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </div>
                  <p className="font-semibold">81</p>
                </a>
              </div> */}
              <button className="px-4 py-2 font-semibold text-white bg-comarca rounded hover:bg-comarca-dark">
                Ver más
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
