import {
  EmailIcon,
  LinkedinIcon,
  PinterestIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

import Nav from "../../../../Nav";
import Footer from "../../../../DefaultFooter";
import React from "react";
import Products from "./ProductsColab";
const Colab = () => {
  return (
    <div>
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
          <h1 className="text-4xl font-exo font-bold p-8">Co Laborativo</h1>
        </div>

        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4 ">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/Services%2FGrupales%2Fcolaborativo%2FCoLaborativo7.png?alt=media&token=5f47ec47-0a5b-4bac-8bde-9441265a3c4f"
            alt=""
            className="w-full h-full hover col-span-2 row-span-2 rounded-xl shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-white aspect-square transform transition duration-500 hover:scale-110"
          />
          <img
            alt=""
            className="w-full h-full rounded-xl shadow-sm min-h-48 bg-gray-500 aspect-square transform transition duration-500 hover:scale-110"
            src="https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/Services%2FGrupales%2Fcolaborativo%2FCoLaborativo3.png?alt=media&token=dffcafe6-282c-45d7-9298-4d2cdd70914f"
          />
          <img
            alt=""
            className="w-full h-full rounded-xl shadow-sm min-h-48 bg-gray-500 aspect-square transform transition duration-500 hover:scale-110"
            src="https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/Services%2FGrupales%2Fcolaborativo%2FCoLaborativo5.png?alt=media&token=557e5905-c083-4de2-b10d-066a872a36ef"
          />
          <img
            alt=""
            className="w-full h-full rounded-xl shadow-sm min-h-48 bg-gray-500 aspect-square transform transition duration-500 hover:scale-110"
            src="https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/Services%2FGrupales%2Fcolaborativo%2FCoLaborativo1.png?alt=media&token=b4bc9704-ac0b-40fe-92db-65ec3c4018bf"
          />
          <img
            alt=""
            className="w-full h-full rounded-xl shadow-sm min-h-48 bg-gray-500 aspect-square transform transition duration-500 hover:scale-110"
            src="https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/Services%2FGrupales%2Fcolaborativo%2FCoLaborativo6.png?alt=media&token=f3ab3f65-eec5-410b-b89d-2d8b57a27931"
          />
        </div>
      </section>
      <section className="py-6 bg-gray-100 text-gray-900 font-exo">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0 md:px-6">
            <h1 className="text-4xl font-bold p-3">Co Laborativo </h1>
            <h2 className="text-2xl font-bold">Descripción </h2>
            <p className="pt-2 pb-4">
              Un espacio de reuniones enfocado al trabajo organizacional y
              actividades grupales multidisciplinarias en un ambiente equipado
              con accesos a herramientas de trabajo{" "}
              <strong className="text-comarcaBlue">¡All inclusive!</strong>
            </p>
            <h2 className="text-2xl font-bold">Características</h2>
            <p className="text-comarcaBlue font-bold p-4">
              Alquiler por hora, día, semana.
            </p>
            <ul className="list-disc list-inside">
              <li>Sala de juntas de cuatro (4) a seis (6) personas</li>
              <li>
                Internet Ilimitado velocidad de 90 MB cableado LAN y router
                dedicado.
              </li>
            </ul>
          </div>
          <div className=" md:py-0 md:px-6 px-6">
            <ul className="list-disc list-inside">
              <li>Actividades de Networking</li>
              <li>Espacios de recreación</li>
              <li>Pizarras</li>
              <li>Smart TV + HDMI</li>
              <li>Tv cable</li>
              <li>Cafetería Libre</li>
              <li>Medidas de bioseguridad. </li>
              <li>
                Descuento en todos los servicios adicionales y actividades del
                Cowork💸
              </li>
              <li>
                Ambiente de esparcimiento libre, cocina, microondas y utensilios
                de cocina.
              </li>
              <li>Acceso a espacios comunes.</li>
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
        </div>
      </section>
      <section className="bg-white">
        <Products />
      </section>
      <Footer />
    </div>
  );
};
export default Colab;
