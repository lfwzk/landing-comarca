import Nav from "components/Nav";
import LeadText from "@material-tailwind/react/LeadText";
import { Button } from "@material-tailwind/react";
//import Akaru from "../../assets/img/parnters/l1.png";

//import Academia from "../../assets/img/parnters/l7.png";
import background from "../../assets/img/portadagroup.jpg";
import Hub from "./Hub";

const Group = () => {
  return (
    <>
      <Nav />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen ">
          {/* <div className="bg-background-comarca-services bg-cover bg-center absolute top-0 w-full h-full" /> */}
          <div
            className="bg-cover bg-center absolute top-0 w-full h-full object-cover"
            style={{
              //backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.9)), url(${rocket})`,
              backgroundImage: `linear-gradient(180deg, rgba(0,0,0, 0) 12%, rgba(0,0,0, 0) 16%, rgba(0.0.0.1) 80% ), url(${background})`,
              height: `100vh`,
              backgroundSize: `cover`,
            }}
          ></div>
          <div className="container max-w-8xl relative mx-auto font-serif">
            <div className="items-center flex flex-wrap ">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center  ">
                <h1 className="text-6xl text-gray-200 font-exo">
                  {" "}
                  Un cowork con propósito
                </h1>

                <div className="text-gray-200 font-exo">
                  <LeadText color="gray-200">
                    demostramos que somos los mejores en lo que hacemos
                  </LeadText>
                  <div className="flex justify-center mt-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Hub />
        {/* <section className="p-8 lg:p-8  font-exo">
          <div className="container mx-auto space-y-12">
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row bg-comarcaGray">
              <img
                alt="akaru"
                src={Akaru}
                className="h-80 bg-comarcaGray aspect-video object-cover"
              />
              <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
                <span className="text-xs uppercase text-comarca">
                  Emprendimiento
                </span>
                <h3 className="text-3xl font-bold text-comarcaBlack">
                  AKARU BOLIVIA 🔴🟡🟢
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
                      <a href="https://akarubolivia.com/#/"> 🌎 Pagina Web</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row bg-comarcaGray">
              <img
                src={Academia}
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
        </section> */}
      </main>
    </>
  );
};
export default Group;
/* <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
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
                    className="inline-block px-6 py-2.5 bg-comarcaYellow text-comarcaBlack font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    ℹMás información
                  </button>
                </div>
                <div className=" justify-center">
                  <button
                    href="https://akarubolivia.com/#/"
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block px-6 py-2.5 bg-comarca text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    🌎 Pagina Web
                  </button>
                </div>
              </div>
            </div> */
