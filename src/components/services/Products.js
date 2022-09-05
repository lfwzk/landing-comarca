import img1 from "../../assets/img/spaces/Colaborativa/colaborativo3.jpg";
import img2 from "../../assets/img/spaces/Coemprendedor/coemprendedor1.jpg";
import img3 from "../../assets/img/spaces/Comunidad/comunidad2.jpg";
import img4 from "../../assets/img/spaces/Coprivada/coprivada1.jpg";
import img5 from "../../assets/img/spaces/Cocreativo/comedor1.jpg";
import img6 from "../../assets/img/spaces/Comarca/sala2.jpg";

const Products = () => {
  return (
    <>
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {/* Aqui van los cards */}

          {/* Colaborativa */}
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 ">
            <a href="/colaborativo" className="relative block group h-96">
              <span className="absolute inset-0 border-2 border-black border-dashed"></span>

              <div className="relative flex items-end h-full bg-white border-2 border-black transition-transform transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="px-8 pb-8 transition-opacity group-hover:opacity-0 group-hover:absolute">
                  <img
                    className=" w-full h-56  rounded-lg object-cover	"
                    src={img1}
                  />

                  <h2 className="mt-4 text-2xl font-medium text-comarcaBlue">
                    Co Laborativa
                  </h2>
                  <strong className="border border-red-500 text-white bg-comarcaBlue uppercase px-5 py-1.5 rounded-full text-[10px] tracking-wide">
                    Privado | 4-6 personas
                  </strong>
                </div>

                <div className="absolute p-8 opacity-0 transition-opacity group-hover:opacity-100 group-hover:relative ">
                  <h2 className="mt-4 text-2xl font-medium text-comarcaBlue">
                    Beneficios
                  </h2>

                  <p className="mt-4 text-gray">
                    ⭐ Pizarra
                    <br />
                    ⭐ Internet Ilimitado
                    <br />
                    ⭐ Smart TV
                    <br />
                    ⭐ Cafeteria
                    <br />
                    ⭐ Medidas de bioseguridad
                    <br />⭐ Cocina
                    <br /> ⭐Descuentos en servicios adicionales
                  </p>

                  <p className="mt-8 font-bold text-comarca">Leer más</p>
                </div>
              </div>
            </a>
          </div>
          {/* Colaborativa */}

          {/* Coemprendedor */}
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <a href="" className="relative block group h-96">
              <span className="absolute inset-0 border-2 border-black border-dashed"></span>

              <div className="relative flex items-end h-full bg-white border-2 border-black transition-transform transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="px-8 pb-8 transition-opacity group-hover:opacity-0 group-hover:absolute">
                  <img
                    className=" w-full h-56  rounded-lg object-cover	"
                    src={img2}
                  />

                  <h2 className="mt-4 text-2xl font-semibold text-comarcaBlue">
                    Co emprendedor
                  </h2>
                  <strong className="border border-red-500 text-white bg-red-500 uppercase px-5 py-1.5 rounded-full text-[10px] tracking-wide">
                    Sala taller | 1-16 personas
                  </strong>
                  <br />
                  <strong className="border border-red-500 text-white bg-red-500 uppercase px-5 py-1.5 rounded-full text-[10px] tracking-wide">
                    Sala corporativa | 1-10 personas
                  </strong>
                </div>

                <div className="absolute p-8 opacity-0 transition-opacity group-hover:opacity-100 group-hover:relative">
                  <h2 className="mt-4 text-2xl font-medium text-comarcaBlue">
                    Beneficios
                  </h2>

                  <p className="mt-4 text-gray">
                    ⭐ All inclusive
                    <br />
                    ⭐ Internet Ilimitado
                    <br />
                    ⭐ Smart TV
                    <br />
                    ⭐ Cafeteria
                    <br />
                    ⭐ Medidas de bioseguridad
                    <br />⭐ Cocina
                    <br /> ⭐Show room
                    <br /> ⭐Área verde
                    <br /> ⭐Herramientas dinámicas
                  </p>

                  <p className="mt-8 font-bold text-comarca">Leer más</p>
                </div>
              </div>
            </a>
          </div>
          {/* Coemprendedor */}

          {/* Comunidad */}
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <a href="" className="relative block group h-96">
              <span className="absolute inset-0 border-2 border-black border-dashed"></span>

              <div className="relative flex items-end h-full bg-white border-2 border-black transition-transform transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="px-8 pb-8 transition-opacity group-hover:opacity-0 group-hover:absolute">
                  <img
                    className="   w-full h-56  rounded-lg object-cover"
                    src={img3}
                  />
                  <h2 className="mt-4 text-2xl font-medium text-comarcaBlue">
                    Co munidad
                  </h2>
                </div>

                <div className="absolute p-8 opacity-0 transition-opacity group-hover:opacity-100 group-hover:relative">
                  <h2 className="mt-4 text-2xl font-medium text-comarcaBlue">
                    Beneficios
                  </h2>

                  <p className="mt-4 text-gray">
                    ⭐ Pizarra
                    <br />
                    ⭐ Internet Ilimitado
                    <br />
                    ⭐ Smart TV
                    <br />
                    ⭐ Cafeteria
                    <br />
                    ⭐ Medidas de bioseguridad
                    <br />⭐ Cocina
                    <br /> ⭐Descuentos en servicios adicionales
                  </p>

                  <p className="mt-8 font-bold">Read more</p>
                </div>
              </div>
            </a>
          </div>
          {/* Comunidad */}

          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <a href="" className="relative block group h-96">
              <span className="absolute inset-0 border-2 border-black border-dashed"></span>

              <div className="relative flex items-end h-full bg-white border-2 border-black transition-transform transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="px-8 pb-8 transition-opacity group-hover:opacity-0 group-hover:absolute">
                  <img
                    className=" w-full h-56  rounded-lg object-cover"
                    src={img4}
                  />

                  <h2 className="mt-4 text-2xl font-medium text-comarcaBlue">
                    Co Privado
                  </h2>
                </div>

                <div className="absolute p-8 opacity-0 transition-opacity group-hover:opacity-100 group-hover:relative">
                  <h2 className="mt-4 text-2xl font-medium">
                    Go around the world
                  </h2>

                  <p className="mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate, praesentium voluptatem omnis atque culpa
                    repellendus.
                  </p>

                  <p className="mt-8 font-bold">Read more</p>
                </div>
              </div>
            </a>
          </div>

          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <a href="" className="relative block group h-96">
              <span className="absolute inset-0 border-2 border-black border-dashed"></span>

              <div className="relative flex items-end h-full bg-white border-2 border-black transition-transform transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="px-8 pb-8 transition-opacity group-hover:opacity-0 group-hover:absolute">
                  <img
                    className="  w-full h-56  rounded-lg object-cover"
                    src={img5}
                  />

                  <h2 className="mt-4 text-2xl font-medium text-comarcaBlue">
                    Co creativo
                  </h2>
                </div>

                <div className="absolute p-8 opacity-0 transition-opacity group-hover:opacity-100 group-hover:relative">
                  <h2 className="mt-4 text-2xl font-medium">
                    Cocreativo es el lugar perfecto para tu evento.
                  </h2>

                  <p className="mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate, praesentium voluptatem omnis atque culpa
                    repellendus.
                  </p>

                  <p className="mt-8 font-bold">Read more</p>
                </div>
              </div>
            </a>
          </div>

          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <a href="" className="relative block group h-96">
              <span className="absolute inset-0 border-2 border-black border-dashed"></span>

              <div className="relative flex items-end h-full bg-white border-2 border-black transition-transform transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="px-8 pb-8 transition-opacity group-hover:opacity-0 group-hover:absolute">
                  <img
                    className="  w-full h-56  rounded-lg object-cover	"
                    src={img6}
                  />

                  <h2 className="mt-4 text-2xl font-medium text-comarcaBlue">
                    Co marca{" "}
                  </h2>
                </div>

                <div className="absolute p-8 opacity-0 transition-opacity group-hover:opacity-100 group-hover:relative">
                  <h2 className="mt-4 text-2xl font-medium">
                    Go around the world
                  </h2>

                  <p className="mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate, praesentium voluptatem omnis atque culpa
                    repellendus.
                  </p>

                  <p className="mt-8 font-bold">Read more</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Products;
