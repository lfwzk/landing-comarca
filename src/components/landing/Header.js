//import H2 from "@material-tailwind/react/Heading2";
//import LeadText from "@material-tailwind/react/LeadText";
import { Button } from "@material-tailwind/react";
import imgtyp from "../../assets/img/whitelogo.png";
import { TypeAnimation } from "react-type-animation";
import wallpaper from "../../assets/img/portada.jpg";
//        import imgfull from "../../assets/img/img.jpeg";

export default function Header() {
  return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen ">
      <div
        className="bg-cover bg-center absolute top-0 w-full h-full object-cover"
        style={{
          //backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.9)), url(${rocket})`,
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0, 0) 12%, rgba(0,0,0, 0) 16%, rgba(0.0.0.1) 80% ), url(${wallpaper})`,
          height: `100vh`,
          backgroundSize: `cover`,
        }}
      ></div>
      {/* <div className="bg-landing-background bg-cover bg-center absolute top-0 w-full h-full" /> */}

      <div className="container max-w-8xl relative mx-auto font-serif">
        <div className="items-center flex flex-wrap ">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center  ">
            {/* <h1 className="text-6xl font-exo text-gray-200 "> CO MARCA</h1> */}
            <div className="flex justify-center mt-10 py-4">
              <img src={imgtyp} className="align-center w-96 pt-6" alt="text" />
            </div>
            <div className="text-gray-200 font-exo">
              {/* <LeadText color="gray-200">Un Cowork con propósito ❤</LeadText> */}
              <div className="flex justify-center mt-10">
                <TypeAnimation
                  sequence={[
                    "Co Marca 2.0",
                    9000,
                    "Puedes cumplir tus sueños",
                    3000,
                    "¿Quieres saber más?",
                    3000,
                    "Un spoiler: Apoyamos a emprendedores",
                    3000,
                    "¿Te interesa?",
                    3000,
                    "¡Te esperamos!",
                    3000,
                    "Estamos estrenando una nueva imagen",
                    3000,
                    "Co Marca con propósito ❤",
                    9000,
                  ]}
                  wrapper="div"
                  cursor={true}
                  repeat={Infinity}
                  style={{ fontSize: "2em" }}
                />
              </div>
              <div className="flex justify-center mt-10">
                <Button
                  color="transparent"
                  className="bg-white text-black ml-4 hover:bg-comarca hover:text-white"
                  ripple="dark"
                >
                  <a href="/services">Reservar </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
