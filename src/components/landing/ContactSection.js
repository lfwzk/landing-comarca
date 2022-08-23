import Title from "components/landing/Title";
import ContactCard from "components/landing/ContactCard";
import Form from "components/landing/Form";

export default function ContactSection() {
  return (
    <section className="pb-20 relative block bg-gray-100">
      <div className="container max-w-7xl mx-auto px-4 lg:pt-24">
        <Title heading="Construye algo interesante">
          Bienvenido a Comarca una comunidad de emprendedores y creativos que
          buscan un espacio para trabajar.
        </Title>

        <div className="flex flex-wrap -mt-12 justify-center">
          <ContactCard icon="home" title="Servicios excelentes">
            Aqui se aprende mucho donde tenemos un ambiente de trabajo muy
            agradable.
          </ContactCard>
          <ContactCard icon="insert_chart" title="Lidera en el mercado">
            Aqui se aprende mucho donde tenemos un ambiente de trabajo muy
            agradable.
          </ContactCard>
          <ContactCard icon="stars" title="Ahorra tiempo ">
            Con Comarca puedes ahorrar tiempo y dinero en tu negocio. donde
            tenemos un ambiente de trabajo muy agradable.
          </ContactCard>
        </div>

        {/* <Form /> */}
      </div>
    </section>
  );
}
