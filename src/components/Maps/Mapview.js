import React from "react";
import Title from "components/landing/Title";

const Mapview = () => {
  return (
    <>
      <div className="container max-w-7xl mx-auto px-4 lg:pt-24">
        <Title heading="Nos encontramos">
          Direccion: Av. Montenegro Nro 1017 Zona San Miguel Edificio Emporio
          Sub suelo oficina 17 Ciudad La Paz, La Paz, Bolivia Telefono: (591)
          71520591 Email: info@comarca-cowork.com
        </Title>
      </div>
      <section className="text-gray-600 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3824.733577698635!2d-68.0908549!3d-16.5395426!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f214c4adf7fb7%3A0xeefbaff9d3939e6f!2sCO%20-%20MARCA%20Cowork%2C%20Un%20cowork%20con%20prop%C3%B3sito!5e0!3m2!1ses!2sbo!4v1661203141073!5m2!1ses!2sbo"
          ></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Quieres reservar un espacio
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Completa el formulario y te responderemos en menos de 24 horas.
            </p>
            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-gray-600">
                Correo electronico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label for="message" className="leading-7 text-sm text-gray-600">
                Consulta{" "}
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="text-white bg-comarca border-0 py-2 px-6 focus:outline-none hover:bg-comarca rounded text-lg">
              Enviar
            </button>
            <p className="text-xs text-gray-500 mt-3">Comarca 2022.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mapview;
