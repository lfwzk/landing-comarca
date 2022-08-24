import React from "react";
import DefaultNavbar from "components/DefaultNavbar";

export default function Services() {
  return (
    <>
      <div className="absolute w-full z-20 bg-amber-800">
        <div className="absolute w-full z-20 bg-blue-500 bg-opacity-100 p-10">
          <DefaultNavbar />
        </div>
        <div className="bg-amber-800 p-50 ">
          <h1>
            ESTAMOS CONSTRUYENDO UNA HERMOSA PAGINA WEB VISITANOS PRONTO QUE
            TENEMOS MUY PRONTO NOVEDADES{" "}
          </h1>
        </div>
      </div>
    </>
  );
}
