import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import Icon from "@material-tailwind/react/Icon";
import H4 from "@material-tailwind/react/Heading4";
import H6 from "@material-tailwind/react/Heading6";
import LeadText from "@material-tailwind/react/LeadText";
import Paragraph from "@material-tailwind/react/Paragraph";
import StatusCard from "components/landing/StatusCard";
import Teamwork from "assets/img/ambientcomarca.jpg";

export default function WorkingSection() {
  return (
    <section className="pb-20 bg-gray-100 -mt-32">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap relative z-50">
          <StatusCard color="red" icon="stars" title="Calidad">
            La comunidad de comarca ofrece productos de calidad y lugares de
            confianza.
          </StatusCard>
          <StatusCard color="lightBlue" icon="autorenew" title="Libre y cómodo">
            Keep you user engaged by providing meaningful information. Remember
            that by this time, the user is curious.
          </StatusCard>
          <StatusCard
            color="teal"
            icon="fingerprint"
            title="Compañia con identidad"
          >
            Write a few lines about each one. A paragraph describing a feature
            will be enough. Keep you user engaged!
          </StatusCard>
        </div>

        <div className="flex flex-wrap items-center mt-32">
          <div className="w-full md:w-5/12 px-4 mx-auto">
            <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              <Icon name="people" size="3xl" />
            </div>
            <H4 color="gray">Trabaja en buenos ambientes</H4>
            <LeadText color="blueGray">
              Un Cowork es un espacio de trabajo compartido, donde los
              profesionales independientes, emprendedores y empresas pueden
              trabajar en un ambiente profesional y productivo.
            </LeadText>
            <LeadText color="blueGray">
              Por ejemplo podemos decir que nos vamos a un coworking porque
              queremos trabajar en un ambiente profesional y productivo, pero
              también porque queremos trabajar en un ambiente agradable y con
              gente que comparte nuestros intereses.
            </LeadText>
            <a href="/" className="font-medium text-red-500 mt-2 inline-block ">
              Read More
            </a>
          </div>

          <div className="w-max  md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
            <Card>
              <CardImage alt="Card Image" src={Teamwork} />
              <CardBody>
                <H6 color="gray">Un espacio cómodo </H6>
                <Paragraph color="blueGray">
                  Gracias por su apoyo, su confianza y su lealtad. Estamos
                  orgullosos de servir a la comunidad de comarca.
                </Paragraph>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
