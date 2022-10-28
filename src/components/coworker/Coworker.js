import Nav from "components/Nav";
import Footer from "components/DefaultFooter";
import React from "react";

const Coworker = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [showModal2, setShowModal2] = React.useState(false);
  const [showModal3, setShowModal3] = React.useState(false);

  return (
    <>
      <div className=" w-full z-20 fixed">
        <Nav />
      </div>
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
                      src="https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/Coworkers%2FDAOSYSTEMS.png?alt=media&token=19762c73-c4f7-458c-84a2-bf8003dda8e7"
                    />

                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                      <h1 className="text-lg align-center font-semibold">
                        DAO SYSTEMS LATINO AMERICA S.R.L.
                      </h1>
                    </header>

                    <footer className="flex items-center justify-between leading-none  md:p-4 ">
                      <button
                        name="add"
                        type="button"
                        className="flex items-center justify-center w-full px-8 py-4 mt-4 rounded-xl "
                        onClick={() => setShowModal(true)}
                      >
                        <span className="text-sm font-medium text-white">
                          🚀
                        </span>
                      </button>
                      {showModal ? (
                        <>
                          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                              {/*content*/}
                              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                  <h3 className="text-3xl font-semibold">
                                    Detalles
                                  </h3>
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
                                  <p className="my-4 text- text-sm text-justify leading-relaxed">
                                    Una empresa de{" "}
                                    <strong>consultoría tecnológica</strong> y
                                    asesoría estratégica que crea soluciones de
                                    valor mediante el uso de software avanzado
                                    para nuestros clientes en todo el mundo.
                                    Nuestro equipo cuenta con más de 16 años de
                                    experiencia en Hotelería y sector
                                    Inmobiliario, y ha participado en
                                    prácticamente todos los aspectos de las
                                    mismas incluyendo finanzas, gestión de
                                    activos, desarrollo, gestión del capital
                                    humano, controles internos y
                                    transformaciones estratégicas.
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
                    </footer>
                  </article>
                </div>

                {/* <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                  <article className="overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-110">
                    <img
                      alt="Placeholder"
                      className="block h-auto w-full"
                      src="https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/Coworkers%2FPOTENZA.png?alt=media&token=30f7b1a0-f22c-4e3e-bb76-2405348d9312"
                    />

                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                      <h1 className="text-lg align-center font-semibold">
                        POTENZA
                      </h1>
                    </header>
                    <main className="p-2 md:p-4 text-justify">
                      {" "}
                      Una empresa de Soporte Operativo y Técnico para procesos
                      productivos, parte del ECOSISTEMA de BPO CENTER,
                      especialista en BUSINESS PROCESS OUTSOURCING, que por más
                      de 42 años brinda un universo de oportunidades infinitas
                      que impactan positivamente en la productividad y en los
                      resultados perdurables de nuestros clientes, mediante la
                      integración del talento, los procesos y la tecnología.
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
                </div> */}

                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                  <article className="overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-110">
                    <img
                      alt="Placeholder"
                      className="block h-auto w-full"
                      src="https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/Coworkers%2FVESACTITUD.png?alt=media&token=aaeed8af-ff44-4261-b82a-08753694eb94"
                    />

                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                      <h1 className="text-lg align-center font-bold">
                        RABAJ VESACTITUD S.R.L.
                      </h1>
                    </header>

                    <footer className="flex items-center justify-between leading-none  md:p-4 ">
                      <button
                        name="add"
                        type="button"
                        className="flex items-center justify-center w-full px-8 py-4 mt-4 rounded-xl "
                        onClick={() => setShowModal3(true)}
                      >
                        <span className="text-sm font-medium text-white">
                          🚀
                        </span>
                      </button>
                      {showModal3 ? (
                        <>
                          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                              {/*content*/}
                              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                  <h3 className="text-3xl font-semibold">
                                    Detalles
                                  </h3>
                                  <button
                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    onClick={() => setShowModal3(false)}
                                  >
                                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                      ×
                                    </span>
                                  </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                  <p className="my-4 text- text-sm text-justify leading-relaxed">
                                    Acompaña en los procesos de creación de
                                    momentum de las personas, el desarrollo de
                                    líderes y visionarios, la puesta en marcha
                                    de estrategias disruptivas, y la innovación
                                    desde el SER.
                                  </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                  <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowModal3(false)}
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
                    </footer>
                  </article>
                </div>
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                  <article className="overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-110">
                    <img
                      alt="Placeholder"
                      className="block h-auto w-full"
                      src="https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/Coworkers%2FGUACHALLA.png?alt=media&token=eb4b6995-de4f-440f-b7be-e368ec777b22"
                    />

                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                      <h1 className="text-lg align-center font-bold">
                        GUACHALLA
                      </h1>
                    </header>

                    <footer className="flex items-center justify-between leading-none  md:p-4 ">
                      <button
                        name="add"
                        type="button"
                        className="flex items-center justify-center w-full px-8 py-4 mt-4 rounded-xl "
                        onClick={() => setShowModal2(true)}
                      >
                        <span className="text-sm font-medium text-white">
                          🚀
                        </span>
                      </button>
                      {showModal2 ? (
                        <>
                          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                              {/*content*/}
                              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                  <h3 className="text-3xl font-semibold">
                                    Detalles
                                  </h3>
                                  <button
                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    onClick={() => setShowModal2(false)}
                                  >
                                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                      ×
                                    </span>
                                  </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                  <p className="my-4 text- text-sm text-justify leading-relaxed">
                                    Es una empresa de Industria, desarrolladora
                                    y realizadora. Nuestros Project Managers han
                                    estado trabajando en las industrias de
                                    Petroleo & Gas, Telecoms y Minería y Metales
                                    por más de 50 años combinados. Y, con un
                                    grupo de trabajo más joven y entusiasta en
                                    nuestro departamento de desarrollo,
                                    emprendemos proyectos con una perspectiva
                                    fresca. Estamos enfocados en lograr mejores
                                    procesos para realizar nuestras tareas
                                    diarias. De manera más eficiente y
                                    confiable. De manera más segura.
                                  </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                  <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowModal2(false)}
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
                    </footer>
                  </article>
                </div>
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                  <article className="overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-110">
                    <img
                      alt="Placeholder"
                      className="block h-auto w-full"
                      src="https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/Coworkers%2FCAS.png?alt=media&token=a34e0fc6-261e-4676-b7b6-c8fc24a7f84b"
                    />

                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                      <h1 className="text-lg align-center font-bold">
                        SERGIO BELLOT CAS
                      </h1>
                    </header>

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
                    </footer>
                  </article>
                </div>
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                  <article className="overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-110">
                    <img
                      alt="Placeholder"
                      className="block h-auto w-full"
                      src="https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/Coworkers%2FLILIANAVEGA.png?alt=media&token=eeb63eb8-bf3d-45fb-98c8-0da95a07988e"
                    />

                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                      <h1 className="text-lg align-center font-bold">
                        LILIANA VEGA
                      </h1>
                    </header>

                    <footer className="flex items-center justify-between leading-none  md:p-4 ">
                      <button
                        name="add"
                        type="button"
                        className="flex items-center justify-center w-full px-8 py-4 mt-4 rounded-xl "
                        onClick={() => setShowModal3(true)}
                      >
                        <span className="text-sm font-medium text-white">
                          🚀
                        </span>
                      </button>
                      {showModal3 ? (
                        <>
                          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                              {/*content*/}
                              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                  <h3 className="text-3xl font-semibold">
                                    Detalles
                                  </h3>
                                  <button
                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    onClick={() => setShowModal3(false)}
                                  >
                                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                      ×
                                    </span>
                                  </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                  <p className="my-4 text- text-sm text-justify leading-relaxed">
                                    Psicóloga psicoterapeuta, especialista en
                                    terapia familiar, de pareja e individual.
                                    Especialista en trastorno de identidad
                                    disociativo y los trastornos por trauma
                                    complejo, Docente universitaria.
                                  </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                  <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowModal3(false)}
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
