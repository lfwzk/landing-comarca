import Navbar from "components/Nav";
import Calendar from "./Calendar";
import Carrousel from "./Carrousel";
import Form from "./Forms";

const Colaborativo = () => {
  return (
    <>
      <Navbar />
      <main>
        <Carrousel />
        <h1 className="text-lg">Mira la disponibilidad </h1>
        <Calendar />
        <Form />
      </main>
    </>
  );
};

export default Colaborativo;
