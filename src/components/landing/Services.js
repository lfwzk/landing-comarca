import img1 from "assets/img/spaces/Comarca/cafeteriavertical.jpg";
import img2 from "assets/img/spaces/Comarca/food1.jpg";
import img3 from "assets/img/spaces/Comarca/food3.jpg";
import img4 from "assets/img/spaces/Cocreativo/comedor1.jpg";
import img5 from "assets/img/spaces/Cocreativo/comedor2.jpg";
import img6 from "assets/img/spaces/Coemprendedor/coemprendedor1.jpg";
import img7 from "assets/img/spaces/Colaborativa/colaborativo1.jpg";
import img8 from "assets/img/spaces/Comunidad/comunidad2.jpg";

const Services = () => {
  return (
    <>
      <h2 className="font-exo text-6xl py-12 font-semibold text-center grid grid-cols-1 divide-y">
        Los servicios de Co Marca
      </h2>

      <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img
            src={img1}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img2}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img3}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img4}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img6}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img7}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img8}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img2}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img3}
          />
          <img
            src={img5}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
          />
          <a
            href="/services"
            className="font-medium text-red-500 mt-2 inline-block hover:text-comarcaBlue font-exo text-center "
          >
            Ver más
          </a>
        </div>
      </section>
    </>
  );
};
export default Services;
