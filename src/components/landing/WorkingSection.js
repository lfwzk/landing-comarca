//import Card from "@material-tailwind/react/Card";
//import CardImage from "@material-tailwind/react/CardImage";
//import CardBody from "@material-tailwind/react/CardBody";
// //import Icon from "@material-tailwind/react/Icon";
// //import H4 from "@material-tailwind/react/Heading4";
//import H6 from "@material-tailwind/react/Heading6";
// //import LeadText from "@material-tailwind/react/LeadText";
// import Paragraph from "@material-tailwind/react/Paragraph";
// import StatusCard from "components/landing/StatusCard";
import { TypeAnimation } from "react-type-animation";

import Carro from "../services/Carro";
// import "@sl-codeblaster/react-3d-animated-card";
// import AnimatedCard from "@sl-codeblaster/react-3d-animated-card";
import React from "react";
import icon from "../../assets/img/proposito.png";
export default function WorkingSection() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2">
          <div>
            <img src={icon} />
          </div>
          <div className="p-8">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full  bg-comarcaGray shadow-lg rounded-lg p-8">
              <p className="font-exo text-justify">
                En{" "}
                <h3 className="text-3xl font-semibold text-comarca">
                  Co Marca
                </h3>{" "}
                Desarrollamos
                <h3 className="text-3xl font-semibold text-comarcaPurple">
                  un
                </h3>{" "}
                sistema
                <h3 className="text-3xl font-semibold text-comarcaOrange">
                  coworking con propósito
                </h3>
                cubriendo todas las necesidades tangibles e intangibles propias
                de un emprendedor que le permita sostener su idea de negocio, en
                cada etapa, acompañado por nosotros un colectivo de contribución
                efectiva,
                <h3 className="text-3xl font-semibold text-comarcaBlue">
                  con todos los recursos necesarios
                </h3>
                desde una imagen empresarial, un espacio de trabajo profesional,
                hasta servicios digitales corporativos, reduciendo los altos
                índices de fracaso en etapa temprana muy característico del
                sector.
              </p>
              <div className="flex flex-row p-8">
                <>
                  <button
                    className="bg-comarcaBlack text-white font-exo text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 flex-row flex"
                    type="button"
                    onClick={() => setShowModal(true)}
                  >
                    Leer más📌
                  </button>
                  {showModal ? (
                    <>
                      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                          {/*content*/}
                          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                              <h3 className="text-3xl font-exo">Leer más📌</h3>
                              <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowModal(false)}
                              >
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                  ×
                                </span>
                              </button>
                            </div>
                            {/*body*/}
                            <div className="relative p-6 flex-auto">
                              <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                I always felt like I could do anything. That’s
                                the main thing people are controlled by!
                                Thoughts- their perception of themselves!
                                They're slowed down by their perception of
                                themselves. If you're taught you can’t do
                                anything, you won’t do anything. I was taught I
                                could do everything.
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
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                  ) : null}
                </>
                <button className="bg-comarcaBlack text-white font-exo text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 flex-row flex">
                  {" "}
                  Cuentame 🚀
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="container max-w-7xl mx-1 px-1 lg:pt-24 text-center ">
            <h1 className="text-4xl font-exo font-bold">Galeria de imagenes</h1>
          </div>
          <Carro />
        </div>
        <br />
      </div>
    </>
  );
}

/* <div className="container max-w-7xl mx-auto px-4">
<div className="flex flex-wrap items-center mt-32 row-auto">


---------------------------------
  <div className="flex flex-wrap items-center mt-32">
          <div className="w-full md:w-5/12 px-4 mx-auto">
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
                  reduciendo los altos índices de fracaso en etapa temprana muy
                  característico del sector.
                </p>

                <br />
              </div>
            </div>
          </div>

       <div className=" md:w-4/12   mx-auto x justify-center lg:mt-0  ">
            <Carro />
          </div> 
          </div>

---------------------------------





   
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
</section>
<--------------------------------------------------------------------------------------------->
 <section>
        <div class="container my-12 mx-auto px-4 md:px-12  ">
          <div class="flex flex-wrap -mx-1 lg:-mx-4">
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 group ">
              <a href="#" class="relative block bg-black ">
                <img
                  alt="Developer"
                  src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                  class="absolute inset-0 object-cover w-full h-full opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div class="relative p-8">
                  <p class="text-sm font-medium tracking-widest text-pink-500 uppercase ">
                    Developer
                  </p>

                  <p class="text-2xl font-bold text-white">Tony Wayne</p>

                  <div class="mt-64">
                    <div class="opacity-0 transition-all transform translate-y-8 group-hover:opacity-100 group-hover:translate-y-0">
                      <p class="text-sm text-white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Omnis perferendis hic asperiores quibusdam quidem
                        voluptates doloremque reiciendis nostrum harum.
                        Repudiandae?
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <a href="#" class="relative block bg-black group">
                <img
                  alt="Developer"
                  src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                  class="absolute inset-0 object-cover w-full h-full opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div class="relative p-8">
                  <p class="text-sm font-medium tracking-widest text-pink-500 uppercase">
                    Developer
                  </p>

                  <p class="text-2xl font-bold text-white">Tony Wayne</p>

                  <div class="mt-64">
                    <div class="opacity-0 transition-all transform translate-y-8 group-hover:opacity-100 group-hover:translate-y-0">
                      <p class="text-sm text-white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Omnis perferendis hic asperiores quibusdam quidem
                        voluptates doloremque reiciendis nostrum harum.
                        Repudiandae?
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <a href="#" class="relative block bg-black group">
                <img
                  alt="Developer"
                  src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                  class="absolute inset-0 object-cover w-full h-full opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div class="relative p-8">
                  <p class="text-sm font-medium tracking-widest text-pink-500 uppercase">
                    Developer
                  </p>

                  <p class="text-2xl font-bold text-white">Tony Wayne</p>

                  <div class="mt-64">
                    <div class="opacity-0 transition-all transform translate-y-8 group-hover:opacity-100 group-hover:translate-y-0">
                      <p class="text-sm text-white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Omnis perferendis hic asperiores quibusdam quidem
                        voluptates doloremque reiciendis nostrum harum.
                        Repudiandae?
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
<--------------------------------------------------------------------------------------------->

*/
