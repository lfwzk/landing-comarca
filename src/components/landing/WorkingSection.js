import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import Icon from "@material-tailwind/react/Icon";
import H4 from "@material-tailwind/react/Heading4";
import H6 from "@material-tailwind/react/Heading6";
import LeadText from "@material-tailwind/react/LeadText";
import Paragraph from "@material-tailwind/react/Paragraph";
import StatusCard from "components/landing/StatusCard";
import Teamwork from "assets/img/spaces/Comarca/recepcionvertical.jpg";

export default function WorkingSection() {
  return (
    <section className="pb-20 bg-gray-100 -mt-32">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap relative z-50">
          <StatusCard color="comarca" icon="weekend" title="Espacio">
            Nuestros espacios de trabajo son individuales, grupales, virtuales y
            complementarios.
          </StatusCard>
          <StatusCard color="blue" icon="people" title="Comunidad">
            El éxito de cada uno de los miembros de nuestra casa es un logro
            nuestro, estamos comprometidos e involucrados con cada uno de ellos.
          </StatusCard>
          <StatusCard color="yellow" icon="spa" title="Desarrollo ">
            Somos agentes de cambio y contribución efectiva a emprendimientos de
            los múltiples sectores en sus distintas etapas a través de recursos,
            metodologías y transformación digital.
          </StatusCard>
        </div>

        <div className="flex flex-wrap items-center mt-32 row-auto">
          <div className="w-full md:w-5/12 px-4 mx-auto">
            <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              <Icon name="flag" size="3xl" />
            </div>
            <H4 color="gray">Propósito</H4>
            <LeadText color="blueGray" className="text-justify">
              En Co Marca Desarrollamos un sistema coworking con propósito,
              cubriendo todas las necesidades tangibles e intangibles propias de
              un emprendedor que le permita sostener su idea de negocio, en cada
              etapa, acompañado por nosotros un colectivo de contribución
              efectiva, con todos los recursos necesarios, desde una imagen
              empresarial, un espacio de trabajo profesional, hasta servicios
              digitales corporativos, reduciendo los altos índices de fracaso en
              etapa temprana muy característico del sector.
            </LeadText>
            <a
              href="/services"
              className="font-medium text-red-500 mt-2 inline-block hover:text-comarcaBlue"
            >
              Leer más
            </a>
          </div>

          <div className="w-max  md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
            <Card>
              <CardImage alt="Card Image" src={Teamwork} />
              <CardBody>
                <H6 color="gray">Un Cowork Diferente</H6>
                <Paragraph
                  color="blueGray"
                  className="text-justify"
                ></Paragraph>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
