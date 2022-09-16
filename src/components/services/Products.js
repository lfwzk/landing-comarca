// import img1 from "../../assets/img/spaces/Colaborativa/colaborativo3.jpg";
// import img2 from "../../assets/img/spaces/Coemprendedor/coemprendedor1.jpg";
// import img3 from "../../assets/img/spaces/Comunidad/comunidad2.jpg";
// import img4 from "../../assets/img/spaces/Coprivada/coprivada1.jpg";
// import img5 from "../../assets/img/spaces/Cocreativo/comedor1.jpg";
import img6 from "../../assets/img/spaces/Comarca/sala2.jpg";
import Carro from "./Carro";

const Products = () => {
  return (
    <>
      <div className="container my-12 mx-auto px-4 md:px-12">
        {/* <div className="flex flex-wrap -mx-1 lg:-mx-4">
   
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 ">
            <a href="/colaborativo" className="relative block group h-96">
              <span className="absolute inset-0 border-2 border-black border-dashed"></span>

              <div className="relative flex items-end h-full bg-white border-2 border-black transition-transform transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="px-8 pb-8 transition-opacity group-hover:opacity-0 group-hover:absolute">
                  <img
                    className=" w-full h-56  rounded-lg object-cover	"
                    src={img1}
                    alt="img1"
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
    
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <a href="# " className="relative block group h-96">
              <span className="absolute inset-0 border-2 border-black border-dashed"></span>

              <div className="relative flex items-end h-full bg-white border-2 border-black transition-transform transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="px-8 pb-8 transition-opacity group-hover:opacity-0 group-hover:absolute">
                  <img
                    className=" w-full h-56  rounded-lg object-cover	"
                    src={img2}
                    alt="img2"
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

          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <a href="# " className="relative block group h-96">
              <span className="absolute inset-0 border-2 border-black border-dashed"></span>

              <div className="relative flex items-end h-full bg-white border-2 border-black transition-transform transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="px-8 pb-8 transition-opacity group-hover:opacity-0 group-hover:absolute">
                  <img
                    className="   w-full h-56  rounded-lg object-cover"
                    src={img3}
                    alt="img3"
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
   

          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <a href="# " className="relative block group h-96">
              <span className="absolute inset-0 border-2 border-black border-dashed"></span>

              <div className="relative flex items-end h-full bg-white border-2 border-black transition-transform transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="px-8 pb-8 transition-opacity group-hover:opacity-0 group-hover:absolute">
                  <img
                    className=" w-full h-56  rounded-lg object-cover"
                    src={img4}
                    alt="img4"
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
            <a href="# " className="relative block group h-96">
              <span className="absolute inset-0 border-2 border-black border-dashed"></span>

              <div className="relative flex items-end h-full bg-white border-2 border-black transition-transform transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="px-8 pb-8 transition-opacity group-hover:opacity-0 group-hover:absolute">
                  <img
                    className="  w-full h-56  rounded-lg object-cover"
                    src={img5}
                    alt="img5"
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
            <a href="# " className="relative block group h-96">
              <span className="absolute inset-0 border-2 border-black border-dashed"></span>

              <div className="relative flex items-end h-full bg-white border-2 border-black transition-transform transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="px-8 pb-8 transition-opacity group-hover:opacity-0 group-hover:absolute">
                  <img
                    className="  w-full h-56  rounded-lg object-cover	"
                    src={img6}
                    alt="img6"
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
        </div> */}
        <section className="text-white bg-comarca ">
          <div className="container flex flex-col-reverse mx-auto lg:flex-row ">
            <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 bg-rose-600 text-white">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold font-exo">Coworker</h4>
                <span className="font-bold text-6xl font-exo">
                  Individuales{" "}
                </span>
              </div>
              <br />
              <div className="flex space-x-2 sm:space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
                <div className="space-y-2">
                  <p className="text-lg font-medium leading-snug">
                    Lorem ipsum dolor sit amet
                  </p>
                  <p className="leading-snug">
                    Praesentium ea et neque distinctio quas eius repudiandae
                    quaerat obcaecati voluptatem similique!
                  </p>
                </div>
              </div>
              <div className="flex space-x-2 sm:space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
                <div className="space-y-2">
                  <p className="text-lg font-medium leading-snug">
                    Lorem ipsum dolor sit amet
                  </p>
                  <p className="leading-snug">
                    Praesentium ea et neque distinctio quas eius repudiandae
                    quaerat obcaecati voluptatem similique!
                  </p>
                </div>
              </div>
              <div className="flex space-x-2 sm:space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
                <div className="space-y-2">
                  <p className="text-lg font-medium leading-snug">
                    Lorem ipsum dolor sit amet
                  </p>
                  <p className="leading-snug">
                    Praesentium ea et neque distinctio quas eius repudiandae
                    quaerat obcaecati voluptatem similique!
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 xl:w-3/5 bg-gray-100 p-0">
              <Carro />
            </div>
          </div>
        </section>
        <br />

        <section className="text-white bg-comarcaBlue">
          <div className="container flex flex-col-reverse mx-auto lg:flex-row">
            <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 bg-rose-600 text-gray-50">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold font-exo">Coworker</h4>
                <span className="font-bold text-6xl font-exo">Grupales </span>
              </div>
              <br />
              <div className="flex space-x-2 sm:space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
                <div className="space-y-2">
                  <p className="text-lg font-medium leading-snug">
                    Lorem ipsum dolor sit amet
                  </p>
                  <p className="leading-snug">
                    Praesentium ea et neque distinctio quas eius repudiandae
                    quaerat obcaecati voluptatem similique!
                  </p>
                </div>
              </div>
              <div className="flex space-x-2 sm:space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
                <div className="space-y-2">
                  <p className="text-lg font-medium leading-snug">
                    Lorem ipsum dolor sit amet
                  </p>
                  <p className="leading-snug">
                    Praesentium ea et neque distinctio quas eius repudiandae
                    quaerat obcaecati voluptatem similique!
                  </p>
                </div>
              </div>
              <div className="flex space-x-2 sm:space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
                <div className="space-y-2">
                  <p className="text-lg font-medium leading-snug">
                    Lorem ipsum dolor sit amet
                  </p>
                  <p className="leading-snug">
                    Praesentium ea et neque distinctio quas eius repudiandae
                    quaerat obcaecati voluptatem similique!
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 xl:w-3/5 bg-gray-100">
              <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                <img
                  src="https://source.unsplash.com/640x480/"
                  alt=""
                  className="rounded-lg shadow-lg bg-gray-500 aspect-video sm:min-h-96"
                />
              </div>
            </div>
          </div>
        </section>
        <br />

        <section className="text-white bg-comarcaPurple">
          <div className="container flex flex-col-reverse mx-auto lg:flex-row">
            <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 bg-rose-600 text-gray-50">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold font-exo">Coworker</h4>
                <span className="font-bold text-6xl font-exo">Virtuales </span>
              </div>
              <br />
              <div className="flex space-x-2 sm:space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
                <div className="space-y-2">
                  <p className="text-lg font-medium leading-snug">
                    Lorem ipsum dolor sit amet
                  </p>
                  <p className="leading-snug">
                    Praesentium ea et neque distinctio quas eius repudiandae
                    quaerat obcaecati voluptatem similique!
                  </p>
                </div>
              </div>
              <div className="flex space-x-2 sm:space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
                <div className="space-y-2">
                  <p className="text-lg font-medium leading-snug">
                    Lorem ipsum dolor sit amet
                  </p>
                  <p className="leading-snug">
                    Praesentium ea et neque distinctio quas eius repudiandae
                    quaerat obcaecati voluptatem similique!
                  </p>
                </div>
              </div>
              <div className="flex space-x-2 sm:space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
                <div className="space-y-2">
                  <p className="text-lg font-medium leading-snug">
                    Lorem ipsum dolor sit amet
                  </p>
                  <p className="leading-snug">
                    Praesentium ea et neque distinctio quas eius repudiandae
                    quaerat obcaecati voluptatem similique!
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 xl:w-3/5 bg-gray-100">
              <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                <img
                  src="https://source.unsplash.com/640x480/"
                  alt=""
                  className="rounded-lg shadow-lg bg-gray-500 aspect-video sm:min-h-96"
                />
              </div>
            </div>
          </div>
        </section>

        <br />
        <section className="text-white bg-comarcaYellow">
          <div className="container flex flex-col-reverse mx-auto lg:flex-row">
            <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 bg-rose-600 text-gray-50">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold font-exo">Coworker</h4>
                <span className="font-bold text-6xl font-exo">
                  Promociones{" "}
                </span>
              </div>
              <br />
              <div className="flex space-x-2 sm:space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
                <div className="space-y-2">
                  <p className="text-lg font-medium leading-snug">
                    Lorem ipsum dolor sit amet
                  </p>
                  <p className="leading-snug">
                    Praesentium ea et neque distinctio quas eius repudiandae
                    quaerat obcaecati voluptatem similique!
                  </p>
                </div>
              </div>
              <div className="flex space-x-2 sm:space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
                <div className="space-y-2">
                  <p className="text-lg font-medium leading-snug">
                    Lorem ipsum dolor sit amet
                  </p>
                  <p className="leading-snug">
                    Praesentium ea et neque distinctio quas eius repudiandae
                    quaerat obcaecati voluptatem similique!
                  </p>
                </div>
              </div>
              <div className="flex space-x-2 sm:space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
                <div className="space-y-2">
                  <p className="text-lg font-medium leading-snug">
                    Lorem ipsum dolor sit amet
                  </p>
                  <p className="leading-snug">
                    Praesentium ea et neque distinctio quas eius repudiandae
                    quaerat obcaecati voluptatem similique!
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 xl:w-3/5 bg-gray-100">
              <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                <img
                  src="https://source.unsplash.com/640x480/"
                  alt=""
                  className="rounded-lg shadow-lg bg-gray-500 aspect-video sm:min-h-96"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Products;
