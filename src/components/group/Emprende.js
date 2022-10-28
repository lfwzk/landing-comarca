import Nav from "../Nav";
import Footer from "../DefaultFooter";
import icon from "../../assets/img/proposito.png";

const Emprende = () => {
  return (
    <>
      <div className=" w-full z-20 fixed ">
        <Nav />
      </div>

      <section className="font-exo">
        <main>
          <section className="py-2 text-comarcaBlack">
            <div className="container mx-auto flex flex-col items-center justify-center max-w-lg p-4 lg:max-w-full sm:p-10 lg:flex-row">
              <div className="flex flex-col items-center justify-center flex-1 p-4 pb-8 text-center rounded-md sm:p-8 lg:p-16  shadow-lg ">
                <p className="font-exo text-justify">
                  Un proceso de incubación de emprendimientos que comienza con
                  una semilla de ideas de negocio. Este programa de cultivo
                  integral se compone de herramientas, metodología y equipo
                  profesional, que logra modelos de negocio de triple impacto,
                  disruptivos, y sostenibles, colaborando a muchos nuevos
                  emprendedores. Integra la transformación digital, tecnología e
                  innovación, escalabilidad y proyección,listo para escalar en
                  el mercado. Ya somos muchos graduados en el despegue de
                  Startups. ¡Postula! SÚMATE Y JUNTOS APOYEMOS EL DESARROLLO DEL
                  EMPRENDIMIENTO Y LA INNOVACIÓN.
                  <br />
                  <button className="bg-comarca text-white font-bold py-2 px-4 rounded">
                    Postula
                  </button>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center flex-1 p-4 pb-8 sm:p-8 lg:p-16 bg-gray-50">
                <img src={icon} alt="iconProposito" />
              </div>
            </div>
          </section>
        </main>
        <div className="container my-12 mx-auto px-4 md:px-12 transform ease-in-out duration-150 transition-transform">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article className="overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-110">
                <img
                  alt="Placeholder"
                  className="block h-auto w-full"
                  src="https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/Products%2Fl1.png?alt=media&token=0aa15812-7962-4bea-8284-83fff580b9d1"
                />

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg align-center font-bold ">AKARU </h1>
                </header>
                <main className="p-2 md:p-4 font-semibold text-sm text-justify">
                  Akaru es una Startup resultado de la incubación en Co Marca
                  Lab, un modelo de negocio que agrupa a productores nacionales
                  de todos los sectores productivos destaca su cadena de valor y
                  realza el producto boliviano,
                </main>
                <footer className="flex items-center justify-between leading-none  md:p-4 ">
                  <button
                    name="add"
                    type="button"
                    className="flex items-center justify-center w-full px-8 py-4 mt-4 rounded-xl "
                    href="/akaru"
                  >
                    <span className="text-sm font-medium text-white">🚀</span>
                  </button>
                  <button
                    name="add"
                    type="button"
                    className="flex items-center justify-center w-full px-8 py-4 mt-4 rounded-xl "
                    href="https://akarubolivia.com/"
                  >
                    <span className="text-sm font-medium text-white">🌎</span>
                  </button>
                </footer>
              </article>
            </div>
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article className="overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-110">
                <img
                  alt="Placeholder"
                  className="block h-auto w-full"
                  src="https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/Products%2Fl8.png?alt=media&token=b0e565ed-d95d-4621-ae68-695163731b89"
                />

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg align-center font-bold">QUALIMED</h1>
                </header>
                <main className="p-2 md:p-4  font-semibold text-sm text-justify">
                  Es una plataforma y aplicación móvil integral de gestión y
                  administración dirigida al sector salud que involucra a todos
                  sus actores y componentes, resultando en una atención médica
                  digital, segura, confiable, eficiente y confidencial.
                </main>
                <footer className="flex items-center justify-between leading-none  md:p-4 ">
                  <button
                    name="add"
                    type="button"
                    className="flex items-center justify-center w-full px-8 py-4 mt-4 rounded-xl "
                  >
                    <span className="text-sm font-medium text-white">🚀</span>
                  </button>
                  <button
                    name="add"
                    type="button"
                    className="flex items-center justify-center w-full px-8 py-4 mt-4 rounded-xl "
                  >
                    <span className="text-sm font-medium text-white">🌎</span>
                  </button>
                </footer>
              </article>
            </div>

            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article className="overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-110">
                <img
                  alt="Placeholder"
                  className="block h-auto w-full"
                  src="https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/Products%2Fl7.png?alt=media&token=7ad2cbde-4663-491e-8f22-910668bfa139"
                />

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg align-center font-bold">
                    ACADEMIA COMARCA
                  </h1>
                </header>
                <main className="p-2 md:p-4 text-justify font-semibold text-sm">
                  Una Startup enfocada al sector académico educativo, la primera
                  plataforma de aprendizaje/ enseñanza en línea LMS (Learning
                  Managment Systems) asincrónica en Bolivia, como parte de la
                  adaptabilidad que influye la coyuntura de la transformación
                  digital en el sector fortaleciendo la educación Smart, con
                  visión a compartir y educar por medio de la tecnología.
                </main>
                <footer className="flex items-center justify-between leading-none  md:p-4 ">
                  <button
                    name="add"
                    type="button"
                    className="flex items-center justify-center w-full px-8 py-4 mt-4 rounded-xl "
                  >
                    <span className="text-sm font-medium text-white">🚀</span>
                  </button>
                  <button
                    name="add"
                    type="button"
                    className="flex items-center justify-center w-full px-8 py-4 mt-4 rounded-xl "
                  >
                    <span className="text-sm font-medium text-white">🌎</span>
                  </button>
                </footer>
              </article>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};
export default Emprende;
