const Emprende = () => {
  return (
    <>
      <section className="p-8 lg:p-8  font-exo">
        <div className="container mx-auto space-y-12">
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row bg-comarcaGray">
            <img
              alt="akaru"
              src="https://www.impaqto.net/wp-content/uploads/2019/11/Screen-Shot-2019-11-07-at-12.02.50-PM-1080x675.png"
              className="h-80 bg-comarcaGray aspect-video object-cover"
            />
            <div className="flex flex-col justify-center flex-1 p-6">
              <span className="text-xs uppercase text-comarca">
                Emprendimiento
              </span>
              <h3 className="text-3xl font-bold text-comarcaBlack">
                AKARU BOLIVIA
              </h3>
              <p className="my-6 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                aliquam possimus quas, error esse quos.
              </p>
              <div className="flex flex-row">
                <div className=" p-8">
                  <button
                    className="inline-block px-6 py-2.5 bg-academiaazul  text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    alt="akaru"
                  >
                    <a href="/akaru">📌Más información</a>
                  </button>
                </div>

                <div className="p-8">
                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block px-6 py-2.5 bg-academiaceleste  text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    <a href="https://akarubolivia.com/"> 🌎 Pagina Web</a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row bg-comarcaGray">
            <img
              src="https://www.impaqto.net/wp-content/uploads/2019/11/Screen-Shot-2019-11-07-at-12.02.50-PM-1080x675.png"
              alt="academia"
              className="h-80 bg-comarcaGray object-cover  aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
              <span className="text-xs uppercase text-comarcaBlue">
                Educación
              </span>
              <h3 className="text-3xl font-bold">ACADEMIA COMARCA 📕</h3>
              <p className="my-6 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                aliquam possimus quas, error esse quos.
              </p>
              <div className="flex flex-row">
                <div className=" justify-center p-8 ">
                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block px-6 py-2.5 bg-academiaazul text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    <a href="/academia">📌Más información</a>
                  </button>
                </div>
                <div className=" justify-center p-8 ">
                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block px-6 py-2.5 bg-academiaceleste text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    <a href="https://www.academiacomarca.com/">
                      {" "}
                      🌎 Pagina Web
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container my-12 mx-auto px-4 md:px-12 transform ease-in-out duration-150 transition-transform">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article className="overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-110">
                <img
                  alt="Placeholder"
                  className="block h-auto w-full"
                  src="https://www.impaqto.net/wp-content/uploads/2019/11/Screen-Shot-2019-11-07-at-12.02.50-PM-1080x675.png"
                />

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg align-center">MONOPOL</h1>
                </header>
                <main className="p-2 md:p-4">Hola soy Monopol</main>
                <footer className="flex items-center justify-between leading-none  md:p-4 ">
                  <button
                    name="add"
                    type="button"
                    className="flex items-center justify-center w-full px-8 py-4 mt-4 rounded-xl "
                  >
                    <span className="text-sm font-medium text-white">🚀</span>
                  </button>
                  <button
                    name="add"
                    type="button"
                    className="flex items-center justify-center w-full px-8 py-4 mt-4 rounded-xl "
                  >
                    <span className="text-sm font-medium text-white">🌎</span>
                  </button>
                </footer>
              </article>
            </div>
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article className="overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-110">
                <img
                  alt="Placeholder"
                  className="block h-auto w-full"
                  src="https://www.impaqto.net/wp-content/uploads/2019/11/Screen-Shot-2019-11-07-at-12.02.50-PM-1080x675.png"
                />

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg align-center">MONOPOL</h1>
                </header>
                <main className="p-2 md:p-4">Hola soy Monopol</main>
                <footer className="flex items-center justify-between leading-none  md:p-4 ">
                  <button
                    name="add"
                    type="button"
                    className="flex items-center justify-center w-full px-8 py-4 mt-4 rounded-xl "
                  >
                    <span className="text-sm font-medium text-white">🚀</span>
                  </button>
                  <button
                    name="add"
                    type="button"
                    className="flex items-center justify-center w-full px-8 py-4 mt-4 rounded-xl "
                  >
                    <span className="text-sm font-medium text-white">🌎</span>
                  </button>
                </footer>
              </article>
            </div>

            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article className="overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-110">
                <img
                  alt="Placeholder"
                  className="block h-auto w-full"
                  src="https://www.impaqto.net/wp-content/uploads/2019/11/Screen-Shot-2019-11-07-at-12.02.50-PM-1080x675.png"
                />

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg align-center">MONOPOL</h1>
                </header>
                <main className="p-2 md:p-4">Hola soy Monopol</main>
                <footer className="flex items-center justify-between leading-none  md:p-4 ">
                  <button
                    name="add"
                    type="button"
                    className="flex items-center justify-center w-full px-8 py-4 mt-4 rounded-xl "
                  >
                    <span className="text-sm font-medium text-white">🚀</span>
                  </button>
                  <button
                    name="add"
                    type="button"
                    className="flex items-center justify-center w-full px-8 py-4 mt-4 rounded-xl "
                  >
                    <span className="text-sm font-medium text-white">🌎</span>
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
export default Emprende;
