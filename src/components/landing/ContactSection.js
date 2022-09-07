import Title from "components/landing/Title";
import ContactCard from "components/landing/ContactCard";
//import Form from "components/landing/Form";

export default function ContactSection() {
  return (
    <section className="pb-20 relative block bg-gray-100 font-exo">
      <div className="container max-w-7xl mx-auto px-4 lg:pt-24 font-bold">
        <Title heading="Beneficios de Co Marca ">
          Las mejores comodidades para nuestros coworkers
        </Title>

        <div className="flex flex-wrap -mt-12 justify-center font-exo">
          <ContactCard color="comarca" icon="timeline">
            <h3 className="text-2xl font-bold text-comarcaYellow font-exo py-4">
              Productividad
            </h3>
            <p className="font-exo text-justify">
              En el sistema coworking puede salvarlo de trabajar en casa, donde
              constantemente se distrae con algo y le permite trabajar en un
              entorno profesional.
            </p>
          </ContactCard>
          <ContactCard icon="monetization_on">
            <h3 className="text-2xl font-bold text-comarca font-exo py-4">
              Accesibilidad
            </h3>
            <p className="font-exo text-justify">
              Nuestro sistema coworking tiene un rango de precios más accesibles
              que una oficina normal y que el mercado cowork.
            </p>
          </ContactCard>
          <ContactCard icon="person_add">
            <h3 className="text-2xl font-bold text-comarcaPurple font-exo py-4">
              Redes
            </h3>
            <p className="font-exo text-justify">
              A diferencia de una oficina tradicional, en la que solo se puede
              establecer una empresa, el coworking es una comunidad de
              diferentes personas, profesiones e intereses.
            </p>
          </ContactCard>
        </div>

        {/* <Form /> */}
      </div>
    </section>
  );
}
