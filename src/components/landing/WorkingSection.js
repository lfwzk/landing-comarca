import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
//import CardBody from "@material-tailwind/react/CardBody";
// //import Icon from "@material-tailwind/react/Icon";
// //import H4 from "@material-tailwind/react/Heading4";
//import H6 from "@material-tailwind/react/Heading6";
// //import LeadText from "@material-tailwind/react/LeadText";
// import Paragraph from "@material-tailwind/react/Paragraph";
// import StatusCard from "components/landing/StatusCard";
import Teamwork from "assets/img/spaces/Comarca/recepcionvertical.jpg";

export default function WorkingSection() {
  return (
    <section className="pt-6 bg-gray-100 -mt-32">
      <div className="container max-w-7xl mx-auto px-4">
        {/* <div className="flex flex-wrap relative z-50">
          <StatusCard color="comarca" icon="weekend">
            <h2 className="text-xl font-exo font-bold ">Espacio</h2>
            <p className="font-exo text-justify font-normal">
              Nuestros espacios de trabajo son individuales, grupales, virtuales
              y complementarios.
            </p>
          </StatusCard>
          <StatusCard color="blue" icon="people">
            <h2 className="text-xl font-exo font-bold ">Comunidad</h2>
            <p className="font-exo text-justify font-normal">
              El éxito de cada uno de los miembros de nuestra casa es un logro
              nuestro, estamos comprometidos e involucrados con cada uno de
              ellos.
            </p>
          </StatusCard>
          <StatusCard color="yellow" icon="spa">
            <h2 className="text-xl font-exo font-bold">Desarrollo</h2>
            <p className="font-exo text-justify font-normal">
              Somos agentes de cambio y contribución efectiva a emprendimientos
              de los múltiples sectores en sus distintas etapas a través de
              recursos, metodologías y transformación digital.
            </p>
          </StatusCard>
        </div> */}

        <div className="flex flex-wrap items-center mt-32 row-auto">
          <div className="w-full md:w-5/12   px-4 mx-auto">
            {/* <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              <Icon name="flag" size="3xl" className="items-center" />
            </div> */}
            <h2 className="font-exo text-6xl py-12 font-semibold text-center grid grid-cols-1 divide-y">
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
          {/* <section className="py-6 dark:bg-gray-800">
            <div className="container flex flex-col justify-center p-4 mx-auto">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                <img
                  className="object-cover w-full dark:bg-gray-500 aspect-square rounded-3xl"
                  src={img1}
                />
                <img
                  className="object-cover w-full dark:bg-gray-500 aspect-square rounded-3xl"
                  src={img1}
                />
                <img
                  className="object-cover w-full dark:bg-gray-500 aspect-square rounded-3xl"
                  src={img1}
                />
                <img
                  className="object-cover w-full dark:bg-gray-500 aspect-square rounded-3xl"
                  src={img1}
                />
              </div>
            </div>
          </section> */}

          <div className="w-max  md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0 py-10">
            <Card>
              <CardImage alt="Card Image" src={Teamwork} />
            </Card>
            {/* <a class="relative block bg-black group" href="">
              <img
                class="absolute inset-0 object-cover w-full h-full opacity-75 transition-opacity  group-hover:opacity-50"
                src={Teamwork}
                alt=""
              />
              <div class="relative p-8">
                <p class="text-sm font-exo tracking-widest text-comarca uppercase">
                  Developer
                </p>

                <p class="text-2xl font-bold text-white">Barry Scott</p>

                <div class="mt-64">
                  <div class="opacity-0 transition-all transform translate-y-8  group-hover:opacity-100 group-hover:translate-y-0">
                    <p class="text-sm text-white">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}
