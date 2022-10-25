import React from "react";
import Nav from "components/Nav";
import Products from "./Products";
import DefaultFooter from "components/DefaultFooter";
import LeadText from "@material-tailwind/react/LeadText";
//import { Button } from "@material-tailwind/react";
//import img from "assets/img/bg-landing-background.jpg";
//import { Route, Router } from "react-router-dom";
//import Colaborativo from "./spaces/Colaborativo";
import Booking from "./Booking";
import background from "../../assets/img/background-comarca.jpg";

export default function Services() {
  return (
    <>
      <div className=" w-full z-20 fixed">
        <Nav />
      </div>
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen ">
          {/* <div className="bg-background-comarca-services bg-cover bg-center absolute top-0 w-full h-full" /> */}
          <div
            className="bg-cover bg-center absolute top-0 w-full h-full object-cover"
            style={{
              //backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.9)), url(${rocket})`,
              backgroundImage: `linear-gradient(180deg, rgba(0,0,0, 0) 12%, rgba(0,0,0, 0) 16%, rgba(0.0.0.1) 80% ), url(${background})`,
              height: `100vh`,
              backgroundSize: `cover`,
            }}
          ></div>
          <div className="container max-w-8xl relative mx-auto font-serif">
            <div className="items-center flex flex-wrap ">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center  ">
                <h1 className="text-6xl text-gray-200 font-exo">
                  {" "}
                  Nuestros servicios
                </h1>

                <div className="text-gray-200 font-exo">
                  <LeadText color="gray-200">
                    Contribuyen a que nuevos emprendedores bolivianos despeguen
                    .🚀
                  </LeadText>
                  <div className="flex justify-center mt-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="max-w-2xl mx-auto mb-16 text-center pt-6">
        <h2 className="text-xl font-exo lg:text-5xl font-semibold">
          Co Marca Spaces <br />
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          {" "}
          Busca un espacio ideal para ti y tus necesidades🏠{" "}
        </p>
      </div>
      <Booking />

      <Products />

      <DefaultFooter />

      {/* <Router>
        <Route path="colaborativo" element={<Colaborativo />} />
      </Router> */}
    </>
  );
}
