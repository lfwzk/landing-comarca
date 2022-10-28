//import Title from "components/landing/Title";
import ContactCard from "components/landing/ContactCard";
//import Form from "components/landing/Form";

export default function ContactSection() {
  return (
    <section className="relative block  font-exo">
      <div className="container max-w-7xl mx-1 px-1 lg:pt-4 texto-comarcaBlack text-center p-2">
        <h1 className="text-xl font-exo sm:text-xl lg:text-5xl font-semibold">
          Co Marca Tools
        </h1>
      </div>
      <div className="container max-w-7xl mx-auto px-4 texto-comarcaBlack lg:pt-24 font-bold pt-8">
        <div className="flex flex-wrap -mt-12 justify-center font-exo">
          <ContactCard color="comarca" icon="home">
            <h3 className="text-xl font-bold  font-exo py-4 texto-comarcaBlack  ">
              Casa independiente
            </h3>
          </ContactCard>
          <ContactCard icon="wifi">
            <h3 className="text-xl font-bold font-exo py-4 texto-comarcaBlack">
              Internet de alta velocidad wifi dedicado para cada espacio
            </h3>
          </ContactCard>
          <ContactCard icon="speaker">
            <h3 className="text-xl font-bold font-exo py-4 texto-comarcaBlack">
              Parlante y micrófono
            </h3>
            {/* <p className="font-exo text-justify">
              A diferencia de una oficina tradicional, en la que solo se puede
              establecer una empresa, el coworking es una comunidad de
              diferentes personas, profesiones e intereses.
            </p> */}
          </ContactCard>
          <ContactCard color="comarca" icon="wb_sunny">
            <h3 className="text-xl font-bold  font-exo py-4 texto-comarcaBlack">
              Ambientes cálidos con luz natural{" "}
            </h3>
          </ContactCard>
          <ContactCard icon="tv">
            <h3 className="text-xl font-bold  font-exo py-4 texto-comarcaBlack">
              Pantallas Smart Tv + HDMI{" "}
            </h3>
          </ContactCard>
          <ContactCard icon="free_breakfast">
            <h3 className="text-xl font-bold font-exo py-4 texto-comarcaBlack">
              Cafeteria libre
            </h3>
          </ContactCard>
          <ContactCard icon="check">
            <h3 className="text-xl font-bold font-exo py-4 texto-comarcaBlack">
              Acceso 24 horas
            </h3>
          </ContactCard>
          <ContactCard icon="local_play">
            <h3 className="text-xl font-bold font-exo py-4 texto-comarcaBlack">
              Eventos de capacitación
            </h3>
          </ContactCard>
        </div>

        {/* <Form /> */}
      </div>
    </section>
  );
}
