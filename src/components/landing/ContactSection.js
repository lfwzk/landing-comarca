//import Title from "components/landing/Title";
import ContactCard from "components/landing/ContactCard";
//import Form from "components/landing/Form";

export default function ContactSection() {
  return (
    <section className="pb-20 relative block  font-exo">
      <div className="container max-w-7xl mx-1 px-1 lg:pt-24 text-center  p-8">
        <h1 className="text-4xl font-exo font-bold">Beneficios del Coworker</h1>
      </div>
      <div className="container max-w-7xl mx-auto px-4 lg:pt-24 font-bold">
        <div className="flex flex-wrap -mt-12 justify-center font-exo">
          <ContactCard color="comarca" icon="wifi">
            <h3 className="text-xl font-bold  font-exo py-4  ">
              Internet de alta velocidad
            </h3>
          </ContactCard>
          <ContactCard icon="phone">
            <h3 className="text-xl font-bold font-exo py-4">
              Oficinas privadas
            </h3>
          </ContactCard>
          <ContactCard icon="email">
            <h3 className="text-xl font-bold font-exo py-4">
              Servicios de correo
            </h3>
            {/* <p className="font-exo text-justify">
              A diferencia de una oficina tradicional, en la que solo se puede
              establecer una empresa, el coworking es una comunidad de
              diferentes personas, profesiones e intereses.
            </p> */}
          </ContactCard>
          <ContactCard color="comarca" icon="wb_sunny">
            <h3 className="text-xl font-bold  font-exo py-4">Luz natural</h3>
          </ContactCard>
          <ContactCard icon="tv">
            <h3 className="text-xl font-bold  font-exo py-4">Pantallas HD</h3>
          </ContactCard>
          <ContactCard icon="free_breakfast">
            <h3 className="text-xl font-bold font-exo py-4">Cafeteria libre</h3>
          </ContactCard>
          <ContactCard icon="check">
            <h3 className="text-xl font-bold font-exo py-4">Acceso 24 horas</h3>
          </ContactCard>
          <ContactCard icon="local_play">
            <h3 className="text-xl font-bold font-exo py-4">
              Eventos de capacitación
            </h3>
          </ContactCard>
        </div>

        {/* <Form /> */}
      </div>
    </section>
  );
}
