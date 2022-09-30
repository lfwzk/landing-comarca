import React from "react";
import Nav from "components/Nav";
import Products from "./Products";
import DefaultFooter from "components/DefaultFooter";
import LeadText from "@material-tailwind/react/LeadText";
import { Button } from "@material-tailwind/react";
//import img from "assets/img/bg-landing-background.jpg";
//import { Route, Router } from "react-router-dom";
//import Colaborativo from "./spaces/Colaborativo";
import Booking from "./Booking";

export default function Services() {
  return (
    <>
      <Nav />

      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen ">
          {/* <div className="bg-background-comarca-services bg-cover bg-center absolute top-0 w-full h-full" /> */}
          <div
            className="bg-cover bg-center absolute top-0 w-full h-full object-cover"
            style={{
              //backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.9)), url(${rocket})`,
              backgroundImage: `linear-gradient(180deg, rgba(0,0,0, 0) 12%, rgba(0,0,0, 0) 16%, rgba(0.0.0.1) 80% ), url("https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
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
      <div className="container max-w-7xl mx-1 px-1 lg:pt-24 text-center ">
        <h1 className="text-4xl font-exo font-bold p-8">Comarca Spaces</h1>
      </div>
      <Products />
      <Booking />

      <DefaultFooter />

      {/* <Router>
        <Route path="colaborativo" element={<Colaborativo />} />
      </Router> */}
    </>
  );
}
