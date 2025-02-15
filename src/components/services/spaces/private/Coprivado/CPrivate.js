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
import backend from "../../../../../env/Main";
// import { useState } from "react";
import ProductsCp from "./ProductsCp";
import { useEffect } from "react";
import { useState } from "react";

const CPrivate = () => {
  const [cart, SetData] = useState([]);
  const { space } = backend.api + "space";
  const onAdd = (space) => {
    const exist = cart.find((x) => x.id === space.id);
    if (exist) {
      let NewItems = cart.map((x) =>
        x.id === space.id ? { ...exist, qty: exist.qty + 1 } : x
      );

      SetData(NewItems);
    } else {
      const NewItems = [...cart, { ...space, qty: 1 }];
      // SetData([...cart, { ...space, qty: 1 }]);
      SetData(NewItems);
    }
  };
  const onRemove = (space) => {
    const exist = cart.find((x) => x.id === space.id);
    if (exist.qty === 1) {
      SetData(cart.filter((x) => x.id !== space.id));
    } else {
      SetData(
        cart.map((x) =>
          x.id === space.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  // useEffect(() => {
  //   //console.log(cart);
  //   fetch(backend.api + "space")
  //     .then((res) => res.json())
  //     .then((res) => SetData(res.data));
  // }, [cart]);

  return (
    <div>
      <div className=" w-full z-20 fixed ">
        <Nav countItems={cart.length} />
      </div>
      <section className="py-6 bg-white">
        <div className="container mx-1 px-1 lg:pt-8">
          <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap font-exo ">
            <a
              href="/services"
              className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  border-gray-600 text-gray-600"
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
          <h1 className="text-4xl font-exo font-bold p-8">Co Privado</h1>
        </div>

        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4 ">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/Services%2FIndividuales%2Fcoprivado%2FCoPrivado3.png?alt=media&token=211ec00c-d1f8-4626-9776-be410dc4609c"
            alt=""
            className="w-full h-full hover col-span-2 row-span-2 rounded-xl shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-white aspect-square transform transition duration-500 hover:scale-110"
          />
          <img
            alt=""
            className="w-full h-full rounded-xl shadow-sm min-h-48 bg-gray-500 aspect-square transform transition duration-500 hover:scale-110"
            src="https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/Services%2FIndividuales%2Fcoprivado%2FCoPrivado100.png?alt=media&token=4519b059-c486-4997-b320-16e17b8d8760"
          />
          <img
            alt=""
            className="w-full h-full rounded-xl shadow-sm min-h-48 bg-gray-500 aspect-square transform transition duration-500 hover:scale-110"
            src="https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/Services%2FIndividuales%2Fcoprivado%2FCoPrivado10.png?alt=media&token=11d62416-8e88-41c9-a7f6-fb8dd1586d57"
          />
          <img
            alt=""
            className="w-full h-full rounded-xl shadow-sm min-h-48 bg-gray-500 aspect-square transform transition duration-500 hover:scale-110"
            src="https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/Services%2FIndividuales%2Fcoprivado%2FCoPrivado12.png?alt=media&token=92fa7069-8bdc-4d34-abb4-e653312d60e6"
          />
          <img
            alt=""
            className="w-full h-full rounded-xl shadow-sm min-h-48 bg-gray-500 aspect-square transform transition duration-500 hover:scale-110"
            src="https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/Services%2FIndividuales%2Fcoprivado%2FCoPrivado11.png?alt=media&token=c233ff5e-aed3-4de7-bc74-230d298997d0"
          />
        </div>
      </section>
      <section className="py-6 bg-gray-100 text-gray-900 font-exo">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0 md:px-6 px-6">
            <h1 className="text-4xl font-bold p-3">Co Privado </h1>
            <h2 className="text-2xl font-bold">Descripción </h2>
            <p className="pt-2 pb-4 text-justify text-sm">
              Un espacio de trabajo individual y confortable privado para
              desarrollar actividades profesionales multidisciplinarias con
              acceso a herramientas de trabajo{" "}
              <strong className="text-comarca"> ¡All inclusive¡</strong>
            </p>
            <h2 className="text-2xl font-bold">Características</h2>
            <p className="text-comarca font-bold p-4">
              Alquiler por hora, día, semana y mes.
            </p>
            <ul className="list-disc list-inside">
              <p className="text-comarca font-bold p-4"> Escencial:</p>
              <li>Espacio de trabajo equipado para dos (2) personas</li>
              <li>
                Internet Ilimitado velocidad de 120 MB cableado LAN y router
                dedicado.
              </li>
              <li>TV + HDMI</li>
              <li>Tv cable</li>
              <li>Estante</li>
              <li>Pizarras</li>
              <li>Lámparas</li>
            </ul>
          </div>
          <div className=" md:py-0 md:px-6 px-6">
            <ul className="list-disc list-inside">
              <p className="text-comarca font-bold p-4"> Bonus:</p>
              <li>Llave e independencia</li>
              <li>Actividades de Networking </li>
              <li>Espacios de recreación</li>
              <li>Cafetería libre</li>
              <li>
                Acceso a sala de juntas libres todo el mes por 1 hrs. al día{" "}
              </li>
              <li>Recepción de correspondencia</li>
              <li>Dirección Comercial de su empresa</li>
              <li>
                Domiciliación fiscal NIT y documentación legal + Membresía anual
              </li>
              <li>
                Descuento en todos los servicios adicionales y actividades del
                Cowork
              </li>
              <li>Ambiente de esparcimiento libre</li>
              <li>Cocina, microondas, utensilios de cocina</li>
              <li>Parrillero 1 vez por mes</li>
              <li>Medidas de Bioseguridad</li>
              <li>Acceso a sala de yoga</li>
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

          {/* <form
            novalidate=""
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid"
          >
            <h1 className="text-4xl font-bold p-3">Reserva</h1>
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="inline-flex items-center justify-center space-x-2 py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white hover:text-white bg-comarca hover:bg-green-100 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                  clip-rule="evenodd"
                />
              </svg>
              <div>Detalles</div>
            </button>{" "}
            {showModal ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl font-semibold">Precios</h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModal(false)}
                        >
                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button>
                      </div>

                      <div className="relative p-6 flex-auto">
                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                          <strong className="text-comarca">Por hora</strong> Bs.
                          35
                          <br />
                          <strong className="text-comarca">Por dia</strong> Bs.
                          180
                          <br />
                          <strong className="text-comarca">
                            Por semana
                          </strong>{" "}
                          Bs. 520
                          <br />
                          <strong className="text-comarca">
                            Por mes Part time
                          </strong>{" "}
                          Bs 990
                          <br />
                          <strong className="text-comarca">Por mes</strong> Bs
                          1590
                        </p>
                      </div>
         
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="text-comarca background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
              className="flex items-center justify-center w-full px-8 py-4 mt-4 bg-comarca rounded-xl"
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
          </form> */}
        </div>
      </section>
      <section className="bg-white">
        <ProductsCp space={space} onAdd={onAdd} onRemove={onRemove} />
      </section>

      <Footer />
    </div>
  );
};
export default CPrivate;
