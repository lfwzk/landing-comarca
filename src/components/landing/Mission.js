//import Title from "components/landing/Title";
import ContactCard from "components/landing/ContactCard";
//import Form from "components/landing/Form";

export default function Mission() {
  return (
    <section className="pb-20 relative block font-exo">
      <div className="container max-w-7xl mx-auto px-4 lg:pt-24 font-bold">
        {/* <Title heading="Beneficios de Co Marca ">
          Las mejores comodidades para nuestros coworkers
        </Title> */}

        <div className="flex flex-wrap -mt-12 justify-center font-exo">
          <ContactCard color="comarca" icon="weekend">
            <h3 className="text-2xl font-bold  font-exo py-4">ESPACIO</h3>
            <p className="font-exo text-justify">
              Nuestros espacios de trabajo son individuales, grupales, virtuales
              y complementarios. Buscamos que cada uno de nuestros coworkers
              cuenten con todos los elementos para una imagen empresarial y
              legal con todos los servicios incluidos que por supuesto reducen
              significativamente sus costos directos e indirectos. Somos una
              casa independiente, autónoma,
            </p>
          </ContactCard>
          <ContactCard icon="people">
            <h3 className="text-2xl font-bold font-exo py-4">COMUNIDAD</h3>
            <p className="font-exo text-justify">
              Somos una red de negocios multidisciplinaria, basamos nuestro
              trabajo en economías de red colaborativa, enfocados en el apoyo
              estratégico al sector emprendedor. El éxito de cada uno de los
              miembros de nuestra casa es un logro nuestro, estamos
              comprometidos e involucrados con cada uno de ellos, nuestro
              propósito es articular, conectar e integrarlos a una comunidad de
              negocios sostenible.
            </p>
          </ContactCard>
          <ContactCard icon="spa">
            <h3 className="text-2xl font-bold font-exo py-4">DESARROLLO</h3>
            <p className="font-exo text-justify">
              Somos agentes de cambio y contribución efectiva a emprendimientos
              de los múltiples sectores en sus distintas etapas a través de
              recursos, metodologías y transformación digital bajo componentes
              colectivos de colaboración con el ecosistema en pro del desarrollo
              del país.
            </p>
          </ContactCard>
        </div>

        {/* <Form /> */}
      </div>
    </section>
  );
}
