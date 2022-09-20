import Nav from "components/Nav";
import LeadText from "@material-tailwind/react/LeadText";
import { Button } from "@material-tailwind/react";

const Group = () => {
  return (
    <>
      <Nav />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen ">
          <div className="bg-background-comarca-services bg-cover bg-center absolute top-0 w-full h-full" />
          <div className="container max-w-8xl relative mx-auto font-serif">
            <div className="items-center flex flex-wrap ">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center  ">
                <h1 className="text-6xl text-gray-200 font-exo">
                  {" "}
                  Proximamente
                </h1>

                <div className="text-gray-200 font-exo">
                  <LeadText color="gray-200">
                    Estamos trabajando en esta sección.
                  </LeadText>
                  <div className="flex justify-center mt-10">
                    <Button
                      color="transparent"
                      className="bg-comarcaYellow text-white ml-4"
                      ripple="dark"
                    >
                      Volver
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="p-4 lg:p-8  font-exo">
          <div className="container mx-auto space-y-12">
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
              <img
                src="https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="h-80 bg-gray-500 aspect-video"
              />
              <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
                <span className="text-xs uppercase text-gray-600">
                  Emprendimiento
                </span>
                <h3 className="text-3xl font-bold">AKARU BOLIVIA 🔴🟡🟢</h3>
                <p className="my-6 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  aliquam possimus quas, error esse quos.
                </p>
                <div className=" justify-center">
                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    class="inline-block px-6 py-2.5 bg-comarcaYellow text-comarcaBlack font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    ℹMás información
                  </button>
                </div>
                <div class=" justify-center">
                  <button
                    href="https://akarubolivia.com/#/"
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    class="inline-block px-6 py-2.5 bg-comarca text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    🌎 Pagina Web
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
              <img
                src="https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="h-80 bg-gray-500 aspect-video"
              />
              <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
                <span className="text-xs uppercase text-gray-600">
                  Emprendimiento
                </span>
                <h3 className="text-3xl font-bold">ACADEMIA COMARCA 👨‍🎓👨‍🎓👨‍🎓</h3>
                <p className="my-6 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  aliquam possimus quas, error esse quos.
                </p>
                <div className=" justify-center">
                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    class="inline-block px-6 py-2.5 bg-comarcaYellow text-comarcaBlack font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    ℹMás información
                  </button>
                </div>
                <div class=" justify-center">
                  <button
                    href="https://akarubolivia.com/#/"
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    class="inline-block px-6 py-2.5 bg-comarca text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    🌎 Pagina Web
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
              <img
                src="https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="h-80 bg-gray-500 aspect-video"
              />
              <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
                <span className="text-xs uppercase text-gray-600">
                  Emprendimiento
                </span>
                <h3 className="text-3xl font-bold">AKARU BOLIVIA 🔴🟡🟢</h3>
                <p className="my-6 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  aliquam possimus quas, error esse quos.
                </p>
                <div className=" justify-center">
                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    class="inline-block px-6 py-2.5 bg-comarcaYellow text-comarcaBlack font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    ℹMás información
                  </button>
                </div>
                <div class=" justify-center">
                  <button
                    href="https://akarubolivia.com/#/"
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    class="inline-block px-6 py-2.5 bg-comarca text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    🌎 Pagina Web
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default Group;
