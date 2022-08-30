import React from "react";
import Nav from "components/Nav";
import Products from "./Products";
import DefaultFooter from "components/DefaultFooter";

export default function Services() {
  return (
    <>
      <div className="absolute w-full z-20  fixed-top">
        <Nav />
      </div>

      <main>
        <section className="bg-gray-50">
          <div className="max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
            <div className="max-w-xl mx-auto text-center">
              <h1 className="text-3xl font-extrabold sm:text-5xl">
                Espacios Cómodos
                <strong className="p-8 font-extrabold text-comarcaBlue sm:block">
                  Comarca Spaces
                </strong>
              </h1>

              <p className="mt-4 sm:leading-relaxed sm:text-xl">
                Tenemos los mejores espacios adaptados a tus necesidades.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <a
                  className="block w-full px-12 py-3 text-sm font-medium text-white bg-comarca rounded shadow sm:w-auto active:bg-red-500 hover:bg-comarcaBlue focus:outline-none focus:ring"
                  href="/get-started"
                >
                  Get Started
                </a>

                <a
                  className="block w-full px-12 py-3 text-sm font-medium text-gray-600 rounded shadow sm:w-auto hover:text-comarcaBlue active:text-red-500 focus:outline-none focus:ring"
                  href="/about"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
        <Products />
      </main>
      <DefaultFooter />
    </>
  );
}
