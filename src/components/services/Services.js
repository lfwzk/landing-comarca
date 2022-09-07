import React from "react";
import Nav from "components/Nav";
import Products from "./Products";
import DefaultFooter from "components/DefaultFooter";
import LeadText from "@material-tailwind/react/LeadText";
import { Button } from "@material-tailwind/react";
//import img from "assets/img/bg-landing-background.jpg";
//import { Route, Router } from "react-router-dom";
//import Colaborativo from "./spaces/Colaborativo";

export default function Services() {
  return (
    <>
      <Nav />

      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen ">
          <div className="bg-background-comarca-services bg-cover bg-center absolute top-0 w-full h-full" />
          <div className="container max-w-8xl relative mx-auto font-serif">
            <div className="items-center flex flex-wrap ">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center  ">
                <h1 className="text-6xl text-gray-200 font-exo">
                  {" "}
                  Nuestros servicios
                </h1>

                <div className="text-gray-200 font-exo">
                  <LeadText color="gray-200">
                    Podras encontrar el lugar perfecto para tu evento.
                  </LeadText>
                  <div className="flex justify-center mt-10">
                    <Button
                      color="transparent"
                      className="bg-comarcaBlue text-white ml-4"
                      ripple="dark"
                    >
                      <a href="/services">Empecemos</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Products />

      <DefaultFooter />

      {/* <Router>
        <Route path="colaborativo" element={<Colaborativo />} />
      </Router> */}
    </>
  );
}
