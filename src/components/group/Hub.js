import Team from "./Team";
import DefaultFooter from "components/DefaultFooter";

import icon from "../../assets/img/proposito.png";
const Hub = () => {
  return (
    <>
      <section className="py-2 text-comarcaBlack">
        <div className="container mx-auto flex flex-col items-center justify-center max-w-lg p-4 lg:max-w-full sm:p-10 lg:flex-row">
          <div className="flex flex-col items-center justify-center flex-1 p-4 pb-8 text-center rounded-md sm:p-8 lg:p-16  shadow-lg ">
            <p className="font-exo text-justify">
              El impacto que genera una nueva idea de negocio, en las
              transformaciones ocupacionales, en los profesionales y
              organizaciones que se traducen en innovaciones disruptivas para el
              desarrollo de un país integrada con la aplicación de la
              tecnología, son factores que han tomado mucho protagonismo en el
              proceso de re adaptación y resiliencia, en las nuevas maneras de
              hacer economía efecto de la pandemia. El ritmo en que se producen
              y las múltiples influencias recíprocas provocan atención en
              nuestra actividad alienada al ecosistema. Entendiendo esto, y con
              el objetivo de promover una "cultura emprendedora sostenible" con
              el tejido socioeconómico, el Grupo Co Marca diseña 3 ejes
              troncales que apoyan acompañan y amortiguan en todo el Proceso de
              Cultivo de cada idea hasta su despegue, mediante componentes
              interrelacionados que impulsan estrategias y líneas de acción con
              un equipo para que funcionan como agentes dinamizadores de esas
              transformaciones.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 p-4 pb-8 sm:p-8 lg:p-16 bg-gray-50">
            <img src={icon} alt="iconProposito" />
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto p-2 lg:p-4 bg-white font-exo">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-4 lg:p-12 rounded-2xl overflow-hidden bg-blue-50">
              <div className="flex items-center text-comarca">
                <p className="text-sm font-bold uppercase">Sección 1</p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>

              <h2 className="mt-4 text-3xl font-semibold text-slate-800">
                Cowork con propósito
              </h2>

              <p className="mt-4 text-md text-comarcaBlack text-justify text-md font-semibold">
                Una nueva cultura modular y dinámica de trabajo, reduciendo
                riesgos y costos en etapas tempranas y/o de reinvención para una
                empresa....
              </p>
              <div className="flex justify-center mt-10">
                <a
                  className="group relative inline-flex items-center overflow-hidden rounded-xl bg-comarca px-8 py-3 text-white focus:outline-none focus:ring active:bg-comarca"
                  href="/services"
                >
                  <span className="text-sm font-medium transition-all group-hover:ml-4">
                    COWORKING
                  </span>
                </a>
              </div>
              <div className="mt-12 flex justify-center items-center hover:scale-125 transform ease-in-out duration-150 transition-transform">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/Services%2FCowork%2FCowork1.png?alt=media&token=a71d69a5-7bb1-4753-99c4-34e700d0e7e4"
                  alt="logo"
                  className="rounded-xl"
                />
              </div>
            </div>

            <div className="p-4 lg:p-12 rounded-2xl overflow-hidden ">
              <div className="flex items-center text-comarcaBlue">
                <p className="text-sm font-bold uppercase">Sección 2</p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>

              <h2 className="mt-4 text-3xl font-semibold text-slate-800">
                Co Marca Lab
              </h2>

              <p className="mt-4 text-md text-comarcaBlack text-justify font-semibold">
                Laboratorio de emprendimientos que ha sido creado con el
                propósito de acompañar e impulsar ideas de negocio para que
                nuevos emprendedores despeguen…..
              </p>
              <div className="flex justify-center mt-10">
                <a
                  className="group relative inline-flex items-center overflow-hidden rounded-xl bg-comarcaBlue px-8 py-3 text-white focus:outline-none focus:ring active:bg-comarcaBlue"
                  href="/emprende "
                >
                  <span className="text-sm font-medium transition-all group-hover:ml-4">
                    RESULTADOS
                  </span>
                </a>
              </div>

              <div className="mt-12 flex justify-center items-center hover:scale-125 transform ease-in-out duration-150 transition-transform rounded-xl">
                {/* <svg

              xmlns="http://www.w3.org/2000/svg"
              className="w-[300px] h-auto"
              viewBox="0 0 642.99652 699.63871"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <path
                d="M526.36927,329.63871c19.90002,12.82996,38.54004,30.01001,56,51.20001v32.39996c-8.52002-2.89996-41.03998-14.91998-53.88-33.92999-14.83997-21.96997-17.47998-55.32001-5.12-63.66998,3.21997-2.17004,7.13-2.44,11.41998-1.25,13.52997,9.72998,26.47003,21.52997,38.83002,35.27997,4.38,6.73004,7.09009,15.29999,8.75,23.96002v.40997c-15.98999-22.25995-34.79004-36.69995-56-44.39996Z"
                fill="#ffcdcd"
              />
              <path
                d="M525.36927,130.63871c19.90002,12.82996,38.54004,30.01001,56,51.20001v7.39996c-1.66992-.57001-4.25-1.47998-7.42993-2.72998-14.28003-16.92999-30.56006-28.33002-48.57007-34.87,12.59998,8.12,24.69995,17.98999,36.31006,29.51996-12.28003-5.90997-26.64008-14.66998-34.19006-25.84998-.79999-1.17999-1.56-2.37-2.27997-3.57001-12.70001-21.08002-13.54004-44.20001-1.84003-52.09998,12.35999-8.35004,34.03003,3.47998,48.87,25.44,8.57996,12.70996,10.98999,32.42999,11.47998,46.77997-.78992,1.04004-1.56995,2.10004-2.34998,3.17999-15.98999-22.25995-34.79004-36.69995-56-44.39996Z"
                fill="#ffcdcd"
              />
              <path
                d="M638.6493,248.84418v.01001c-1.42004,3.92999-3.19995,7.89996-5.32007,11.81-3.1499,5.82001-7.98999,11.21997-13.46997,16.04999-5.87,5.17999-12.48999,9.70001-18.58008,13.37-8.5,5.13-15.96997,8.60999-18.90991,9.92999v-3.14996c16.89001-20.10004,34.84998-36.48004,54-48.82001-20.34009,7.38-38.44995,20.97998-54,41.70996v-13.88995c16.89001-20.10004,34.84998-36.48004,54-48.82001-20.34009,7.38-38.44995,20.97998-54,41.70996v-13.88995c16.66992-19.83002,34.37-36.04004,53.23999-48.32001,8.84009,7.10999,9.60999,24.26001,3.04004,42.29999Z"
                fill="#ffcdcd"
              />
              <circle
                cx="143.68463"
                cy="245.54543"
                r="143.68463"
                fill="#ff6884"
              />
              <path
                id="uuid-6b4a4d5d-b113-464e-95c4-a63f7642af13-75"
                d="M593.8654,475.91104c12.08511,10.18033,16.6283,24.66792,10.14821,32.3579-6.48009,7.68998-21.52745,5.66969-33.6155-4.51589-4.88449-4.00249-8.73944-9.11651-11.2423-14.91424l-50.66036-43.78114,21.05193-23.3355,47.70709,45.63794c6.14044,1.48281,11.83636,4.41493,16.61093,8.55093Z"
                fill="#fcb4b4"
              />
              <polygon
                points="552.95795 443.519 491.02708 363.99382 432.36927 256.63871 430.84826 405.52921 518.77357 477.74514 552.95795 443.519"
                fill="#2f2e41"
              />
              <polygon
                points="283.55596 224.62355 297.74334 160.11791 345.16338 162.39889 357.33582 209.19408 283.55596 224.62355"
                fill="#fcb4b4"
              />
              <polygon
                points="283.55596 224.62355 297.74334 160.11791 345.16338 162.39889 357.33582 209.19408 283.55596 224.62355"
                isolation="isolate"
                opacity=".1"
              />
              <circle
                cx="320.27975"
                cy="124.33784"
                r="53.08847"
                fill="#fcb4b4"
              />
              <path
                d="M296.53303,144.83965v-.00003s-5.35571-.05192-16.49579-2.12351c-11.14006-2.07163,8.20171,23.95969,8.20171,23.95969-52.42402-21.89015-35.64839-77.41381-35.64839-77.41381-53.20448-10.17499-30.91603-57.47251-30.91603-57.47251,0,0,17.53794-33.84457,71.45114-31.6909,53.91317,2.15367,28.44356,55.32713,28.44356,55.32713,35.12577,.06654,39.07767,31.72302,39.07767,31.72302,0,0-12.66255,1.58075-35.67488,7.42121-23.01226,5.84041-28.43888,50.26964-28.43888,50.26964l-.00007,.00003-.00003,.00003Z"
                fill="#2f2e41"
              />
              <path
                d="M294.42832,204.30801l-2.39764-4.66929s-42.66142,4.94488-49.66142,11.47244c-7,6.52756-23,35.52756-23,35.52756l35,30,40.05906-72.33071Z"
                fill="#ffb6b6"
              />
              <path
                d="M347.36927,203.17415s32-8.53543,50,9.46457,39,51,39,51l-1,26-50-24.10236-38-62.3622Z"
                fill="#ffb6b6"
              />
              <path
                d="M355.52675,199.63871s41.84252-15,68.84252,17,35,133,35,133c0,0,61,187,46,189s-106.53979,7.52756-106.53979,7.52756l-31.46021-203.52756-14-143h2.15748Z"
                fill="#2f2e41"
              />
              <path
                d="M259.36927,379.63871l-10,36,136,10s-5-30.09449,0-41.04724l-126-4.95276Z"
                fill="#fcb4b4"
              />
              <polygon
                points="336.36927 613.63871 342.36927 699.63871 417.88895 697.63871 415.36927 610.63871 336.36927 613.63871"
                fill="#fcb4b4"
              />
              <polygon
                points="218.54477 605.13198 196.36927 698.63871 275.42791 698.10382 295.57041 621.67327 218.54477 605.13198"
                fill="#fcb4b4"
              />
              <path
                d="M353.36927,199.63871h-61.33858l-49.66142,66,11,135s25-7,60-7h75s-11-35,3-49,4-79,4-79l-42-66Z"
                fill="#ffcdcd"
              />
              <path
                d="M244.36927,404.63871l-56,203s82.46021,33.13386,132.2301,23.56693,117.7699-12.56693,117.7699-12.56693l-48-206-146-8Z"
                fill="#2f2e41"
              />
              <path
                id="uuid-dda76ffd-f581-4aef-8961-053e5e9dc1b0-76"
                d="M373.8654,478.91104c12.08511,10.18033,16.6283,24.66792,10.14821,32.3579-6.48009,7.68998-21.52745,5.66969-33.6155-4.51589-4.88449-4.00249-8.73944-9.11651-11.2423-14.91424l-50.66036-43.78114,21.05193-23.3355,47.70709,45.63794c6.14044,1.48281,11.83636,4.41493,16.61093,8.55093Z"
                fill="#fcb4b4"
              />
              <polygon
                points="342.95795 443.519 281.02708 363.99382 222.36927 256.63871 220.84826 405.52921 308.77357 477.74514 342.95795 443.519"
                fill="#2f2e41"
              />
              <path
                d="M296.21179,199.63871s-41.84252-15-68.84252,17c-27,32-35,133-35,133,0,0-61,187-46,189,15,2,106.53979,7.52756,106.53979,7.52756l31.46021-203.52756,14-143h-2.15748Z"
                fill="#2f2e41"
              />
              <rect
                x="581.36927"
                y="161.63871"
                width="2"
                height="348"
                fill="#3f3d56"
              />
              <path
                d="M27.36927,518.63871c19.90002,12.82996,38.54004,30.01001,56,51.20001v32.39996c-8.52002-2.89996-41.03998-14.91998-53.88-33.92999-14.83997-21.96997-17.47998-55.32001-5.12-63.66998,3.21997-2.17004,7.13-2.44,11.41998-1.25,13.52997,9.72998,26.47003,21.52997,38.83002,35.27997,4.38,6.73004,7.09009,15.29999,8.75,23.96002v.40997c-15.98999-22.25995-34.79004-36.69995-56-44.39996Z"
                fill="#ffcdcd"
              />
              <path
                d="M26.36927,319.63871c19.90002,12.82996,38.54004,30.01001,56,51.20001v7.39996c-1.66992-.57001-4.25-1.47998-7.42993-2.72998-14.28003-16.92999-30.56006-28.33002-48.57007-34.87,12.59998,8.12,24.69995,17.98999,36.31006,29.51996-12.28003-5.90997-26.64008-14.66998-34.19006-25.84998-.79999-1.17999-1.56-2.37-2.27997-3.57001-12.70001-21.08002-13.54004-44.20001-1.84003-52.09998,12.35999-8.35004,34.03003,3.47998,48.87,25.44,8.57996,12.70996,10.98999,32.42999,11.47998,46.77997-.78992,1.04004-1.56995,2.10004-2.34998,3.17999-15.98999-22.25995-34.79004-36.69995-56-44.39996Z"
                fill="#ffcdcd"
              />
              <path
                d="M139.6493,437.84418v.01001c-1.42004,3.92999-3.19995,7.89996-5.32007,11.81-3.1499,5.82001-7.98999,11.21997-13.46997,16.04999-5.87,5.17999-12.48999,9.70001-18.58008,13.37-8.5,5.13-15.96997,8.60999-18.90991,9.92999v-3.14996c16.89001-20.10004,34.84998-36.48004,54-48.82001-20.34009,7.38-38.44995,20.97998-54,41.70996v-13.88995c16.89001-20.10004,34.84998-36.48004,54-48.82001-20.34009,7.38-38.44995,20.97998-54,41.70996v-13.88995c16.66992-19.83002,34.37-36.04004,53.23999-48.32001,8.84009,7.10999,9.60999,24.26001,3.04004,42.29999Z"
                fill="#ffcdcd"
              />
              <rect
                x="82.36927"
                y="350.63871"
                width="2"
                height="348"
                fill="#3f3d56"
              />
            </svg> */}
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/Services%2FCowork%2FCOMARCALAP.png?alt=media&token=7c03dd7c-42fa-4f94-96a3-9cee41f462dd"
                  alt="logo"
                  className="rounded-xl"
                />
              </div>
            </div>

            <div className="p-4 lg:p-12 rounded-2xl overflow-hidden bg-green-50">
              <div className="flex items-center text-green-500">
                <p className="text-sm font-bold uppercase">Sección 3 </p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>

              <h2 className="mt-4 text-3xl font-semibold text-slate-800">
                Management and Business Technology Projects
              </h2>

              <p className="mt-4 text-md text-comarcaBlack text-justify font-semibold">
                Gestión, Desarrollo y ejecución de proyectos de inversión con
                soluciones tecnológicas, adaptadas a las necesidades
                individuales, respondiendo problemas, mediante proyectos
                multipropósito.
              </p>
              {/* <div className="flex justify-center mt-10">
                <a
                  className="group relative inline-flex items-center overflow-hidden rounded-xl bg-comarcaPurple px-8 py-3 text-white focus:outline-none focus:ring active:bg-comarcaPurple"
                  href="/emprende "
                >
                  <span className="text-sm font-medium transition-all group-hover:ml-4">
                    Ver más
                  </span>
                </a>
              </div> */}

              <div className="mt-12 flex justify-center items-center hover:scale-125 transform ease-in-out duration-150 transition-transform">
                <img
                  src="https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="logo"
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Team />
      <DefaultFooter />
    </>
  );
};
export default Hub;
