//import Card from "@material-tailwind/react/Card";
//import CardImage from "@material-tailwind/react/CardImage";
//import CardBody from "@material-tailwind/react/CardBody";
// //import Icon from "@material-tailwind/react/Icon";
// //import H4 from "@material-tailwind/react/Heading4";
//import H6 from "@material-tailwind/react/Heading6";
// //import LeadText from "@material-tailwind/react/LeadText";
// import Paragraph from "@material-tailwind/react/Paragraph";
// import StatusCard from "components/landing/StatusCard";
//import { TypeAnimation } from "react-type-animation";

import Carro from "../services/Carro";
import "@sl-codeblaster/react-3d-animated-card";
import AnimatedCard from "@sl-codeblaster/react-3d-animated-card";
import React from "react";
export default function WorkingSection() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <section>
        <div className="flex flex-wrap items-center mt-32">
          <div className="w-full md:w-5/12 px-4 mx-auto">
            <AnimatedCard
              config={{
                rotation: 50, // this value for the divide (window.innerWidth / 2 - e.pageX) / rotation && (window.innerWidth / 2 - e.pageY) / rotation
                transition: {
                  duration: 0.5,
                  timingMode: "ease",
                },
                transform: {
                  figureIcon: {
                    rotation: 20,
                    translateZ: 160,
                  },
                  titleTranslateZ: 140,
                  bodyTextTranslateZ: 100,
                  buttonTranslateZ: 80,
                },
              }}
            >
              <div className="card ">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-comarca p-8">
                  <h2 className="font-exo text-5xl py-12 font-semibold text-center grid grid-cols-1 divide-y">
                    Propósito
                  </h2>
                  <div className=" text-lg leading-relaxed mt-6 mb-6 text-justify">
                    <span className="w-5/24 h-4 block bg-comarca items-center"></span>
                  </div>
                  <p className="font-exo text-justify">
                    En <h3 className="text-3xl font-semibold">Co Marca</h3>{" "}
                    Desarrollamos
                    <h3 className="text-3xl font-semibold">un</h3> sistema
                    <h3 className="text-3xl font-semibold">
                      coworking con propósito
                    </h3>
                    cubriendo todas las necesidades tangibles e intangibles
                    propias de un emprendedor que le permita sostener su idea de
                    negocio, en cada etapa, acompañado por nosotros un colectivo
                    de contribución efectiva,
                    <h3 className="text-3xl font-semibold">
                      con todos los recursos necesarios
                    </h3>
                    desde una imagen empresarial, un espacio de trabajo
                    profesional, hasta servicios digitales corporativos,
                    reduciendo los altos índices de fracaso en etapa temprana
                    muy característico del sector.
                  </p>

                  <br />
                </div>
              </div>
            </AnimatedCard>
            <button
              className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setShowModal(true)}
            >
              Leer más
            </button>
            {showModal ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl font-semibold font-exo">
                          Un coworking bueno{" "}
                        </h3>
                        <button
                          className="p-1 font-exo ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModal(false)}
                        >
                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative p-6 flex-auto font-exo">
                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                          ddddddddddddddddddddddddddddddddddddddddd
                        </p>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Cerrar
                        </button>
                        <button
                          className="bg-emerald-500 text-white bg-comarca active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Ver más detalles
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          </div>

          {/* <div className=" md:w-4/12   mx-auto x justify-center lg:mt-0  ">
            <Carro />
          </div> */}
        </div>
      </section>
    </>
  );
}

/* <div className="container max-w-7xl mx-auto px-4">
<div className="flex flex-wrap items-center mt-32 row-auto">

   
  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-comarca">
    <Carro />
  </div>
  <br />
  <div className="w-full md:w-5/12   px-4 mx-auto">
  <h2 className="font-exo text-5xl py-12 font-semibold text-center grid grid-cols-1 divide-y">
      Propósito
    </h2>
   
    <div className=" text-lg leading-relaxed mt-6 mb-6 text-justify">
      <span className="w-5/24 h-4 block bg-comarca items-center"></span>
    </div>
    <p className="font-exo text-justify">
      En Co Marca Desarrollamos un sistema coworking con propósito,
      cubriendo todas las necesidades tangibles e intangibles propias de
      un emprendedor que le permita sostener su idea de negocio, en cada
      etapa, acompañado por nosotros un colectivo de contribución
      efectiva, con todos los recursos necesarios, desde una imagen
      empresarial, un espacio de trabajo profesional, hasta servicios
      digitales corporativos, reduciendo los altos índices de fracaso en
      etapa temprana muy característico del sector.
    </p>

    <a
      href="/services"
      className="font-medium text-red-500 mt-2 inline-block hover:text-comarcaBlue font-exo text-center "
    >
      Leer más
    </a>
  </div>
</div>
</div>
--------------------------------------------------------------------------------------------
<section className="pt-6  -mt-32">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center mt-32 row-auto">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-comarca">
            <Carro />
          </div>
          <br />
          <div className="w-full md:w-5/12   px-4 mx-auto">
            <h2 className="font-exo text-5xl py-12 font-semibold text-center grid grid-cols-1 divide-y">
              Propósito
            </h2>
            <p className="font-exo text-justify">
              En <h3 className="text-3xl font-semibold">Co Marca</h3>{" "}
              Desarrollamos
              <h3 className="text-3xl font-semibold">un</h3> sistema
              <h3 className="text-3xl font-semibold">
                coworking con propósito
              </h3>
              cubriendo todas las necesidades tangibles e intangibles propias de
              un emprendedor que le permita sostener su idea de negocio, en cada
              etapa, acompañado por nosotros un colectivo de contribución
              efectiva,
              <h3 className="text-3xl font-semibold">
                con todos los recursos necesarios
              </h3>
              desde una imagen empresarial, un espacio de trabajo profesional,
              hasta servicios digitales corporativos, reduciendo los altos
              índices de fracaso en etapa temprana muy característico del
              sector.
            </p>

            <a
              href="/services"
              className="font-medium text-red-500 mt-2 inline-block hover:text-comarcaBlue font-exo text-center "
            >
              Leer más
            </a>
          </div>
        </div>
      </div>
    </section>


*/

{
  /* <section>
<div className="flex flex-wrap items-center mt-32">
  <div className="w-full md:w-5/12 px-4 mx-auto">
    <AnimatedCard
      config={{
        rotation: 50, // this value for the divide (window.innerWidth / 2 - e.pageX) / rotation && (window.innerWidth / 2 - e.pageY) / rotation
        transition: {
          duration: 0.5,
          timingMode: "ease",
        },
        transform: {
          figureIcon: {
            rotation: 20,
            translateZ: 160,
          },
          titleTranslateZ: 140,
          bodyTextTranslateZ: 100,
          buttonTranslateZ: 80,
        },
      }}
      style={{
        width: 560, //container style (you can use className as well)
      }}
    >
      <div className="card">
        <h2 className="font-exo text-5xl py-12 font-semibold text-center grid grid-cols-1 divide-y">
          Propósito
        </h2>
        <div className=" text-lg leading-relaxed mt-6 mb-6 text-justify">
          <span className="w-5/24 h-4 block bg-comarca items-center"></span>
        </div>
        <p className="font-exo text-justify">
          En <h3 className="text-3xl font-semibold">Co Marca</h3>{" "}
          Desarrollamos
          <h3 className="text-3xl font-semibold">un</h3> sistema
          <h3 className="text-3xl font-semibold">
            coworking con propósito
          </h3>
          cubriendo todas las necesidades tangibles e intangibles
          propias de un emprendedor que le permita sostener su idea de
          negocio, en cada etapa, acompañado por nosotros un colectivo
          de contribución efectiva,
          <h3 className="text-3xl font-semibold">
            con todos los recursos necesarios
          </h3>
          desde una imagen empresarial, un espacio de trabajo
          profesional, hasta servicios digitales corporativos,
          reduciendo los altos índices de fracaso en etapa temprana muy
          característico del sector.
        </p>
        <br />
        <button
          type="button"
          className="px-8 py-3 font-semibold rounded-full bg-comarca text-white object-center content-center "
        >
          Leer más
        </button>
      </div>
    </AnimatedCard>
  </div>

  <div className="w-full md:w-4/12 p-8 px-8  mx-auto flex justify-center mt-24 lg:mt-0">
    <Carro />
  </div>
</div>
</section> */
}
