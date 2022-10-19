import React from "react";
import { useTimer } from "react-timer-hook";
import img1 from "../../assets/img/events/promo1.jpeg";
import img2 from "../../assets/img/events/halloween.jpeg";
import img3 from "../../assets/img/events/cashflow.jpeg";

function MyTimer({ expiryTimestamp }) {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div className="flex justify-center mt-10">
      <div className="text-sm">
        FALTAN:
        <br />
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
    </div>
  );
}

const Events = () => {
  const [showModal, setShowModal] = React.useState(false);
  const time = new Date();
  time.setSeconds(time.getSeconds() + 345600); // for second
  return (
    <section className="font-exo ">
      <div className="container my-12 mx-auto px-4 md:px-12 transform ease-in-out duration-150 transition-transform">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-110">
              <img
                alt="Placeholder"
                className="block h-auto w-full"
                src={img1}
              />

              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg align-center">
                  RECONCILIATE CON TU FUTURO
                </h1>
              </header>
              <main className="p-2 md:p-4 font-semibold">
                22 DE OCTUBRE
                <MyTimer expiryTimestamp={time} />
              </main>
              <footer className="flex items-center justify-between leading-none  md:p-4 ">
                <button
                  name="add"
                  type="button"
                  className="flex items-center justify-center w-full px-8 py-4 mt-4 rounded-xl bg-comarcaBlack"
                  onClick={() => setShowModal(true)}
                >
                  <span className="text-sm font-medium text-white">
                    Leer más
                  </span>
                </button>
              </footer>
            </article>
            {showModal ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                          RECONCILIATE CON TU FUTURO
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
                        <p className="my-4 text-slate-500 text-lg leading-relaxed text-justify">
                          Una sesión de taller imperdible por el mes de la mujer
                          Boliviana dedicada a su desarrollo personal. Una
                          sesión teórico práctico, con actividades dinámicas y
                          herramientas para enfrentar nuestros futuros con
                          compromiso y prioridad. Se llevará adelante el día
                          sábado 22 de octubre a HRS 9:00 a 13:00 el precio pre
                          venta hasta el 19 de octubre es de Bs 120 y a partir
                          del 20 de octubre es Bs 150 puede registrar su
                          asistencia en el siguiente formulario:
                          <br />
                          <button className="bg-comarca">
                            <a
                              href="  https://docs.google.com/forms/d/e/1FAIpQLSfu8V_w_gbJTzi_Ml03CfW8UfiP_JyJzY6kX4G-8uZBlDbKbA/viewform?usp=pp_url
                          "
                            >
                              formulario
                            </a>
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
          </div>

          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-110">
              <img
                alt="Placeholder"
                className="block h-auto w-full"
                src={img2}
              />

              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg align-center">COWORK EN HALLOWEEN</h1>
              </header>
              <main className="p-2 md:p-4 font-semibold">
                29 DE OCTUBRE
                <MyTimer expiryTimestamp={time} />
              </main>
              <footer className="flex items-center justify-between leading-none  md:p-4 ">
                <button
                  name="add"
                  type="button"
                  className="flex items-center justify-center w-full px-8 py-4 mt-4 rounded-xl bg-comarcaBlack"
                >
                  <span className="text-sm font-medium text-white">
                    Leer más
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
                src={img3}
              />

              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg align-center">
                  CAMPEONATO DE CASHFLOW 🏆
                </h1>
              </header>
              <main className="p-2 md:p-4 font-semibold">
                29 DE OCTUBRE
                <MyTimer expiryTimestamp={time} />
              </main>
              <footer className="flex items-center justify-between leading-none  md:p-4 ">
                <button
                  name="add"
                  type="button"
                  className="flex items-center justify-center w-full px-8 py-4 mt-4 rounded-xl bg-comarcaBlack"
                >
                  <span className="text-sm font-medium text-white">
                    Leer más
                  </span>
                </button>
              </footer>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Events;
