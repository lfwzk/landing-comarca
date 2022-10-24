import Carro from "../services/Carro";
import React from "react";
import icon from "../../assets/img/proposito.png";
export default function WorkingSection() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <section className="py-6 text-gray-900">
        <div className="container mx-auto flex flex-col items-center justify-center max-w-lg p-4 lg:max-w-full sm:p-10 lg:flex-row">
          <div className="flex flex-col items-center justify-center flex-1 p-4 pb-8 sm:p-8 lg:p-16 bg-gray-50">
            <img src={icon} alt="iconProposito" />
          </div>
          <div className="flex flex-col items-center justify-center flex-1 p-4 pb-8 text-center rounded-md sm:p-8 lg:p-16  shadow-lg ">
            <p className="font-exo text-justify">
              En{" "}
              <h3 className="text-3xl font-semibold text-comarca">Co Marca</h3>{" "}
              Desarrollamos
              <h3 className="text-3xl font-semibold text-comarcaPurple">
                un
              </h3>{" "}
              sistema
              <h3 className="text-3xl font-semibold text-comarcaOrange">
                coworking con propósito
              </h3>
              cubriendo todas las necesidades tangibles e intangibles propias de
              un emprendedor que le permita sostener su idea de negocio, en cada
              etapa, acompañado por nosotros un colectivo de contribución
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
                            <p className="my-4 text-slate-500 text-lg leading-relaxed text-justify	">
                              Somos{" "}
                              <span className="font-semibold text-comarcaBlack">
                                CO MARCA CM Group
                              </span>
                              , una empresa con más de 4 años como actor
                              estratégico en el ecosistema emprendedor, logrando
                              una red de negocios multidisciplinaria mediante un
                              sistema coworking con{" "}
                              <span className="font-semibold text-comarcaBlack">
                                propósito
                              </span>
                              de contribución efectiva al emprendedor,
                              integrando a grandes y medianas empresas con
                              emprendedores que están en etapa inicial, logrando
                              así sinergias que involucren, complementen y
                              contribuyan al mismo.
                              <br />
                              <br />
                              <span className="font-semibold text-comarcaBlack">
                                Nuestro objetivo es articular para que las
                                empresas consolidadas sean parte de las nuevas
                                ideas de negocio logrando que se desarrollen y
                                despeguen en{""}
                              </span>
                              <button className="bg-comarcaBlack text-white rounded-xl">
                                <a href="/group">Co Marca Lab.</a>
                              </button>
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
                <a href="/group">Cuentame 🚀</a>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="">
        <div className="container max-w-7xl mx-1 px-1  text-center ">
          <h1 className="text-xl font-exo lg:text-5xl font-semibold">
            Co Marca Gallery{" "}
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            {" "}
            Imagenes de nuestro espacio de trabajo profesional y de nuestros
            eventos
          </p>
        </div>

        <Carro />
      </div>
    </>
  );
}
