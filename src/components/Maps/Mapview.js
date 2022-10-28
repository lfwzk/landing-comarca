import React from "react";
import Direction from "./Direction";
import Iframe from "react-iframe";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast.success("Enviado correctamente .");

const Mapview = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dlxi4fr",
        "template_jsexeuv",
        e.target,
        "kFIX_GxLEHjKC-4Oh"
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    e.target.reset();
  };

  return (
    <>
      <div className="container max-w-7xl mx-auto px-4 lg:pt-4 text-center font-exo">
        <h1 className="text-xl font-exo lg:text-5xl font-semibold">
          Nos encontramos
        </h1>
      </div>
      <div className="flex items-center justify-center p-10">
        <Direction />
      </div>

      <section className="text-gray-600 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
          <Iframe
            width="100%"
            height="100%"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3824.733577698635!2d-68.0908549!3d-16.5395426!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f214c4adf7fb7%3A0xeefbaff9d3939e6f!2sCO%20-%20MARCA%20Cowork%2C%20Un%20cowork%20con%20prop%C3%B3sito!5e0!3m2!1ses!2sbo!4v1661203141073!5m2!1ses!2sbo"
          />
        </div>
        <div className="container px-5 py-24 mx-auto flex font-exo">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Quieres reservar un espacio
            </h2>
            <form onSubmit={sendEmail}>
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">
                  Nombres
                </label>
                <input
                  type="text"
                  name="user_name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">
                  Correo electronico
                </label>
                <input
                  type="email"
                  name="user_email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">
                  Consulta{" "}
                </label>
                <textarea
                  name="user_message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button
                className="text-white bg-comarca border-0 py-2 px-6 focus:outline-none hover:bg-comarca rounded text-lg"
                onClick={notify}
              >
                Enviar
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-3">Comarca 2022.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mapview;
