import Navbar from "components/Nav";
import Footer from "components/DefaultFooter";
const Coworker = () => {
  return (
    <>
      <Navbar />
      <div className="font-exo">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-6 sm:mx-auto sm:text-center md:mb-10 lg:max-w-2xl">
            <p className="mb-1 text-3xl font-semibold tracking-wide uppercase md:mb-2 ">
              Muy orgullosos de nuestros Coworkers
            </p>
            <p className="text-base text-gray-700 md:text-lg">
              Nuestros Coworkers son los mejores, y lo sabemos. Por eso,
              queremos que los conozcas.
            </p>
          </div>
          <section className="font-exo ">
            <div className="container my-12 mx-auto px-4 md:px-12 transform ease-in-out duration-150 transition-transform">
              <div className="flex flex-wrap -mx-1 lg:-mx-4">
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                  <article className="overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-110">
                    <img
                      alt="Placeholder"
                      className="block h-auto w-full"
                      src="https://1757140519.rsc.cdn77.org/blog/wp-content/uploads/sites/4/2018/04/historia-del-logotipo-de-LEGO.png"
                    />

                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                      <h1 className="text-lg align-center font-semibold">
                        LEGO
                      </h1>
                    </header>
                    <main className="p-2 md:p-4">
                      {" "}
                      Es una empresa destinada a la
                    </main>
                    <footer className="flex items-center justify-between leading-none  md:p-4 ">
                      <button
                        name="add"
                        type="button"
                        className="flex items-center justify-center w-full px-8 py-4 mt-4 rounded-xl "
                      >
                        <span className="text-sm font-medium text-white">
                          🚀
                        </span>
                      </button>
                      <button
                        name="add"
                        type="button"
                        className="flex items-center justify-center w-full px-8 py-4 mt-4 rounded-xl "
                      >
                        <span className="text-sm font-medium text-white">
                          🌎
                        </span>
                      </button>
                    </footer>
                  </article>
                </div>

                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                  <article className="overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-110">
                    <img
                      alt="Placeholder"
                      className="block h-auto w-full"
                      src="https://1757140519.rsc.cdn77.org/blog/wp-content/uploads/sites/4/2018/04/historia-del-logotipo-de-LEGO.png"
                    />

                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                      <h1 className="text-lg align-center font-semibold">
                        APPLE
                      </h1>
                    </header>
                    <main className="p-2 md:p-4">Ideas</main>
                    <footer className="flex items-center justify-between leading-none  md:p-4 ">
                      <button
                        name="add"
                        type="button"
                        className="flex items-center justify-center w-full px-8 py-4 mt-4 rounded-xl "
                      >
                        <span className="text-sm font-medium text-white">
                          🚀
                        </span>
                      </button>
                      <button
                        name="add"
                        type="button"
                        className="flex items-center justify-center w-full px-8 py-4 mt-4 rounded-xl "
                      >
                        <span className="text-sm font-medium text-white">
                          🌎
                        </span>
                      </button>
                    </footer>
                  </article>
                </div>

                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                  <article className="overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-110">
                    <img
                      alt="Placeholder"
                      className="block h-auto w-full"
                      src="https://1757140519.rsc.cdn77.org/blog/wp-content/uploads/sites/4/2018/04/historia-del-logotipo-de-LEGO.png"
                    />

                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                      <h1 className="text-lg align-center">Coworker</h1>
                    </header>
                    <main className="p-2 md:p-4">Hola soy Monopol</main>
                    <footer className="flex items-center justify-between leading-none  md:p-4 ">
                      <button
                        name="add"
                        type="button"
                        className="flex items-center justify-center w-full px-8 py-4 mt-4 rounded-xl "
                      >
                        <span className="text-sm font-medium text-white">
                          🚀
                        </span>
                      </button>
                      <button
                        name="add"
                        type="button"
                        className="flex items-center justify-center w-full px-8 py-4 mt-4 rounded-xl "
                      >
                        <span className="text-sm font-medium text-white">
                          🌎
                        </span>
                      </button>
                    </footer>
                  </article>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Coworker;
