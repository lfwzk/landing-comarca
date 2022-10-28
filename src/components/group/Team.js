export const Team = () => {
  return (
    <div className="px-2 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 font-exo">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Team Co Marca
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-6xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)"
                  width="52"
                  height="24"
                />
              </svg>
            </span>{" "}
            Co Marca Group
          </h2>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/team%2FCarlaValenciaMachado.png?alt=media&token=c01b9dbe-227e-4995-a0fc-0f1fdf5d7ec1"
                alt="Carla"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-comarcaGray">
                  Carla Valencia Machado
                </p>
                <p className="mb-4 text-xs text-comarcaGray">CEO Founder</p>
                <p className="mb-4 text-xs tracking-wide text-gray-400 text-justify">
                  Emprendedora apasionada, ingeniera comercial especializada en
                  gerencia de proyectos de desarrollo social, feminista y amante
                  por integrar el area social y ambiental con la innovación, y
                  tecnología, crear nuevos desafíos disruptivos, y cambiar la
                  óptica de las nuevas maneras de hacer economía.
                </p>
                <div className="flex items-center justify-center space-x-3">
                  <a
                    href="https://www.linkedin.com/in/carla-valencia-machado-00580353"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="#ffffff"
                    >
                      <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/team%2FAlbertoBonadonaCossio.png?alt=media&token=cde72085-d6db-44f2-8d1a-dc704ca0f068"
                alt="Alberto"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-comarcaGray">
                  Alberto Bonadona Cossio
                </p>
                <p className="mb-4 text-xs text-comarcaGray">Co founder</p>
                <p className="mb-4 text-xs tracking-wide text-gray-400 text-justify">
                  Economista senior con más de treinta años de experiencia.
                  Trabajó en organismos internacionales. Profesor emérito de la
                  UMSA.
                </p>
                <div className="flex items-center justify-center space-x-3">
                  <a
                    href="https://www.linkedin.com/in/alberto-bonadona-coss%C3%ADo-a975935a"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="#ffffff"
                    >
                      <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/team%2FVladimirValenciaMachado.png?alt=media&token=4bedc11e-c6b0-42bc-b904-dd37c84e82e1"
                alt="Vladimir"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-comarcaGray">
                  Vladimir Valencia Machado
                </p>
                <p className="mb-4 text-xs text-comarcaGray">
                  Co - Founder - CEO Startup Qhalimed
                </p>
                <p className="mb-4 text-xs tracking-wide text-gray-400 text-justify">
                  Ingeniero Comercial, formación en gerencia y desarrollo de
                  proyectos, especializado en trade y análisis de base de datos
                  en el sector minero. CEO de Qhalimed una startup en desarrollo
                  enfocada al sector salud.
                  <br />
                </p>
                <div className="flex items-center justify-center space-x-3">
                  <a
                    href="https://www.linkedin.com/in/vladimir-valencia-machado"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="#ffffff"
                    >
                      <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/team%2FCarlosBonadonaVargas.png?alt=media&token=91ae7972-8ac1-4417-b71f-b5ab728c1952"
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-comarcaGray">
                  Carlos Bonadona Vargas
                </p>
                <p className="mb-4 text-xs text-comarcaGray">
                  Mentor development
                </p>
                <p className="mb-4 text-xs tracking-wide text-gray-400 text-justify">
                  Emprendedor e ingeniero de Sistemas, con maestrías en
                  Telecomunicaciones y Telemática y en Energías renovables y
                  medio ambiente.
                </p>
                <div className="flex items-center justify-center space-x-3">
                  <a
                    href="https://www.linkedin.com/in/carlos-bonadona-6799361a"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="#ffffff"
                    >
                      <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/team%2FRicardoMichel.png?alt=media&token=a5e5705d-f261-410d-a6bb-d35f313df39e"
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-comarcaGray">
                  Ricardo Michel
                </p>
                <p className="mb-4 text-xs text-comarcaGray">
                  Mentoring in international cooperation projects
                </p>
                <p className="mb-4 text-xs tracking-wide text-gray-400 text-justify">
                  Economista, con 16 años de experiencia, especialista en
                  Diplomacia y resolución de conflictos, negociación, Energía y
                  Comercio Exterior.
                </p>
                <div className="flex items-center justify-center space-x-3">
                  <a
                    href="https://www.linkedin.com/in/ricardo-gustavo-michel-romero-753a3321"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="#ffffff"
                    >
                      <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/team%2FAlexandraEndara.png?alt=media&token=5f5769a6-e2d9-405a-b4f8-56ce0013509e"
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-comarcaGray">
                  Alexandra Endara
                </p>
                <p className="mb-4 text-xs text-comarcaGray">
                  Mentoring in International Projects
                </p>
                <p className="mb-4 text-xs tracking-wide text-gray-400 text-justify">
                  Especialista en desarrollo internacional con más de diez años
                  de experiencia en gestión de proyectos, análisis de
                  requerimientos, gestión de stakeholders
                </p>
                <div className="flex items-center justify-center space-x-3">
                  <a
                    href="https://www.linkedin.com/in/alexandraendara"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="#ffffff"
                    >
                      <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/team%2FRaquelPe%C3%B1aloza.png?alt=media&token=50d8c324-a508-410b-b7a3-f1c53d23b3aa"
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-comarcaGray">
                  Raquel Peñaloza
                </p>
                <p className="mb-4 text-xs text-comarcaGray">
                  Mentoring and coaching for organizational development
                </p>
                <p className="mb-4 text-xs tracking-wide text-gray-400 text-justify">
                  Ingeniera Industrial, Master Woman Coach CICO, mujer
                  profesional cuyo propósito de vida es acompañar a las
                  organizaciones y a las personas a que encarnen su misión
                  orientados a cumplir sus desafíos
                </p>
                <div className="flex items-center justify-center space-x-3">
                  <a
                    href="https://www.linkedin.com/in/raquel-pe%C3%B1aloza-coach"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="#ffffff"
                    >
                      <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/team%2FGerman%20Guachalla.JPG?alt=media&token=9a3b99fa-c714-4554-bf5f-3a536eb8246e"
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-comarcaGray">
                  German Guachalla
                </p>
                <p className="mb-4 text-xs text-comarcaGray">
                  Development of corporate projects
                </p>
                <p className="mb-4 text-xs tracking-wide text-gray-400">
                  Hello world
                </p>
                <div className="flex items-center justify-center space-x-3">
                  <a
                    href="https://www.linkedin.com/in/germ%C3%A1n-guachalla-36437a5b"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="#ffffff"
                    >
                      <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Team;
