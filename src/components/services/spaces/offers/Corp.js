import {
  EmailIcon,
  LinkedinIcon,
  PinterestIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

import Nav from "../../../Nav";
import Footer from "../../../DefaultFooter";
import React from "react";

const Corp = () => {
  return (
    <>
      <div className=" w-full z-20 fixed ">
        <Nav />
      </div>

      <section className="py-6 bg-white text-gray-900">
        <div className="container max-w-7xl mx-1 px-1 lg:pt-8">
          <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap font-exo ">
            <a
              rel="noopener noreferrer"
              href="/services"
              className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b border-gray-600 text-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>Volver</span>
            </a>
          </div>
          <h1 className="text-4xl font-exo font-bold p-8">Team Corporativo </h1>
        </div>
      </section>
      <section className="py-6 bg-gray-100 text-gray-900 font-exo">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0 md:px-6">
            <h1 className="text-4xl font-bold p-3">Team Corporativo </h1>
            <h2 className="text-2xl font-bold">Descripción </h2>
            <p className="pt-2 pb-4 text-justify">
              Un espacio de trabajo confortable para un equipo estudiantil de
              cinco (5) personas con acceso a herramientas de trabajo{" "}
              <strong className="text-comarcaYellow">¡all inclusive¡</strong>{" "}
              ideal para desarrollar actividades multidisciplinarias y crear
              nuevas amistades.
            </p>
            <h2 className="text-2xl font-bold">Características</h2>

            <ul className="list-disc list-inside">
              <li>Mesas de trabajo en área compartida exclusiva.</li>
              <li>Acceso a sala de reuniones libre.</li>
              <li>Casilleros</li>
              <li>Lámparas</li>
              <li>Internet Ilimitado 80 MB de velocidad, Red Lan.</li>
              <li>Pizarras</li>
              <li>Medidas de Bioseguridad.</li>
            </ul>
            <div className="container max-w-7xl mx-auto px-4 lg:pt-8 flex flex-row font-exo font-semibold">
              Compartir en:
              <br />
              <TwitterIcon size={32} round={true} />
              <WhatsappIcon size={32} round={true} />
              <TelegramIcon size={32} round={true} />
              <EmailIcon size={32} round={true} />
              <LinkedinIcon size={32} round={true} />
              <PinterestIcon size={32} round={true} />
            </div>
          </div>
          <form
            novalidate=""
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid"
          >
            <h1 className="text-4xl font-bold p-3">Reserva</h1>

            <div className="flex flex-col space-y-2">
              <span>Hora Entrada</span>

              <input type="time" required />
              <br />

              <span className="form-label rounded-xl">Hora Salida</span>

              <input type="time" required />
            </div>
            <label className="block">
              <span className="mb-1">Llegada</span>
              <input
                type="date"
                placeholder="Leroy Jenkins"
                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-yellow-600 bg-gray-100"
              />
            </label>
            <label className="block">
              <span className="mb-1">Salida</span>
              <input
                type="date"
                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-yellow-600 bg-gray-100"
              />
            </label>
            <button
              name="add"
              type="button"
              className="flex items-center justify-center w-full px-8 py-4 mt-4 bg-comarcaYellow rounded-xl"
            >
              <a href="/checkout">
                <span className="text-sm font-medium text-white">Reservar</span>
              </a>
              <svg
                className="w-5 h-5 ml-1.5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#ffffff"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Corp;
