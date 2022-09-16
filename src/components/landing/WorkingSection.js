import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
//import CardBody from "@material-tailwind/react/CardBody";
// //import Icon from "@material-tailwind/react/Icon";
// //import H4 from "@material-tailwind/react/Heading4";
//import H6 from "@material-tailwind/react/Heading6";
// //import LeadText from "@material-tailwind/react/LeadText";
// import Paragraph from "@material-tailwind/react/Paragraph";
// import StatusCard from "components/landing/StatusCard";

import Carro from "../services/Carro";
export default function WorkingSection() {
  return (
    <section className="pt-6  -mt-32">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center mt-32 row-auto">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-comarca">
            <Carro />
          </div>
          <br />
          <div className="w-full md:w-5/12   px-4 mx-auto">
            <h2 className="font-exo text-5xl py-12 font-semibold text-center grid grid-cols-1 divide-y">
              Propósito
            </h2>

            <div className=" text-lg leading-relaxed mt-6 mb-6 text-justify">
              <span className="w-5/24 h-4 block bg-comarca items-center"></span>
            </div>
            <p className="font-exo text-justify">
              En Co Marca Desarrollamos un sistema coworking con propósito,
              cubriendo todas las necesidades tangibles e intangibles propias de
              un emprendedor que le permita sostener su idea de negocio, en cada
              etapa, acompañado por nosotros un colectivo de contribución
              efectiva, con todos los recursos necesarios, desde una imagen
              empresarial, un espacio de trabajo profesional, hasta servicios
              digitales corporativos, reduciendo los altos índices de fracaso en
              etapa temprana muy característico del sector.
            </p>

            <a
              href="/services"
              className="font-medium text-red-500 mt-2 inline-block hover:text-comarcaBlue font-exo text-center "
            >
              Leer más
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* <div className="container max-w-7xl mx-auto px-4">
<div className="flex flex-wrap items-center mt-32 row-auto">

   
  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-comarca">
    <Carro />
  </div>
  <br />
  <div className="w-full md:w-5/12   px-4 mx-auto">
  <h2 className="font-exo text-5xl py-12 font-semibold text-center grid grid-cols-1 divide-y">
      Propósito
    </h2>
   
    <div className=" text-lg leading-relaxed mt-6 mb-6 text-justify">
      <span className="w-5/24 h-4 block bg-comarca items-center"></span>
    </div>
    <p className="font-exo text-justify">
      En Co Marca Desarrollamos un sistema coworking con propósito,
      cubriendo todas las necesidades tangibles e intangibles propias de
      un emprendedor que le permita sostener su idea de negocio, en cada
      etapa, acompañado por nosotros un colectivo de contribución
      efectiva, con todos los recursos necesarios, desde una imagen
      empresarial, un espacio de trabajo profesional, hasta servicios
      digitales corporativos, reduciendo los altos índices de fracaso en
      etapa temprana muy característico del sector.
    </p>

    <a
      href="/services"
      className="font-medium text-red-500 mt-2 inline-block hover:text-comarcaBlue font-exo text-center "
    >
      Leer más
    </a>
  </div>
</div>
</div> */
}
