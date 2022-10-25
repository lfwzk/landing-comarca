import Team from "./Team";
import DefaultFooter from "components/DefaultFooter";
const Hub = () => {
  return (
    <>
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

              <p className="mt-4 text-md text-comarcaBlack text-justify">
                Espacios de trabajo en distintos formatos, una nueva cultura
                modular y dinámica de trabajo, reduciendo riesgos y costos en
                etapas tempranas y/o de reinvención para una empresa. Hemos
                encontrado nuevas maneras sostenibles de apoyo y{" "}
                <strong className="text-comarca">
                  acompañamiento al emprendedor
                </strong>
                , creando un ecosistema que tenga condiciones, espacios y
                métodos de desarrollo que “amortigüen” y apoyen a este sector en
                constante vulnerabilidad, mediante un{" "}
                <strong className="text-comarca">cowork con propósito.</strong>
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
                {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[300px] h-auto"
              viewBox="0 0 511.56264 532.44842"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <polygon
                points="454.49103 405.20843 454.48102 405.44842 466.49103 532.44842 378.85101 532.44842 367.49103 454.44842 362.49103 530.44842 272.49103 529.44842 282.05103 429.66839 290.18103 383.41839 290.18103 383.40838 291.401 376.44842 452.10101 376.44842 452.31103 378.96838 454.49103 405.20843"
                fill="#2f2e41"
              />
              <path
                d="M222.88285,478.83064c9.28179,1.69101,18.96019-8.76188,21.61758-23.34779,1.16327-6.38475,.78778-12.50277-.78019-17.50611l1.42323-8.40799,23.88334-113.10923s43.98031-87.97522,43.9791-103.24828c-.00111-15.27287-12.72223-22.76282-12.72223-22.76282l-17.21435,.16096-53.98264,131.84662-9.72217,97.42982-1.57289,13.36711c-3.2316,4.12897-5.74053,9.72145-6.90332,16.10621-2.65749,14.58572,2.71275,27.78048,11.99454,29.4715Z"
                fill="#ffb6b6"
              />
              <polygon
                points="397.99103 135.94842 381.99103 98.94842 329.99103 107.94842 326.49103 151.47992 397.99103 135.94842"
                fill="#ffb6b6"
              />
              <polygon
                points="397.99103 135.94842 381.99103 98.94842 329.99103 107.94842 326.49103 151.47992 397.99103 135.94842"
                opacity=".1"
              />
              <path
                d="M510.99121,212.9484s-37-69-44-76c-3.11621-3.11621-8.01465-3.15955-12.49316-2.25134l-51.50684-17.74866-17.45801-9.8092-1.15039,18.66199-57.31543,10.28748c.31836-11.38086,1.92383-15.70972,1.92383-15.70972l-21,24.56946-41,20,.02246,.18005c-3.00879,1.05029-5.86133,2.84741-8.02246,5.81995-8,11-30,145-30,145l47,10,6.39648-40.13953,4.60352,36.13953,3.5,67.5s64,55,95,35,69-19,69-19l.94824-31.28796c.6748-1.07861,1.05176-1.71204,1.05176-1.71204l-1-110.98425v-29.5321c7.61816,10.61353,16.81152,19.74109,27.5,24.01636,35,14,28-43,28-43Z"
                fill="#e6e6e6"
              />
              <circle
                cx="350.55585"
                cy="66.61991"
                r="47.83848"
                fill="#ffb6b6"
              />
              <path
                d="M384.87476,80.13948s4.15987-14.55954,13.51957-13.51957c9.3597,1.03997,11.43964-7.27977,9.3597-11.43964-2.07993-4.15987-6.2398-24.95921-6.2398-24.95921,0,0,2.07993-14.55954-10.39967-16.63947-12.4796-2.07993-16.63947-4.15987-18.71941-8.31974-2.07993-4.15987-33.27894-8.31974-43.67861-2.07993-10.39967,6.2398-18.71941,18.2117-25.99917,21.58546-7.27977,3.37375-13.51957,9.61355-9.3597,20.01322,4.15987,10.39967,10.19286,30.7392,10.19286,30.7392,0,0,10.60648-3.70006,12.68641,2.53974,2.07993,6.2398-6.2398-2.07993,4.15987-18.71941,10.39967-16.63947,10.39967-33.27894,27.03914-27.03914,16.63947,6.2398,35.35888,4.15987,33.27894,16.63947-2.07993,12.4796,4.15987,31.19901,4.15987,31.19901Z"
                fill="#2f2e41"
              />
              <g>
                <path
                  d="M381.94946,459.38422H18.63322c-10.27456,0-18.63322-8.35942-18.63322-18.63322V247.758c0-10.2738,8.35866-18.63322,18.63322-18.63322H381.94946c10.27456,0,18.63322,8.35942,18.63322,18.63322v192.993c0,10.2738-8.35866,18.63322-18.63322,18.63322Z"
                  fill="#fff"
                />
                <path
                  d="M381.94946,459.38422H18.63322c-10.27456,0-18.63322-8.35942-18.63322-18.63322V247.758c0-10.2738,8.35866-18.63322,18.63322-18.63322H381.94946c10.27456,0,18.63322,8.35942,18.63322,18.63322v192.993c0,10.2738-8.35866,18.63322-18.63322,18.63322ZM18.63322,232.23639c-8.55846,0-15.52161,6.96315-15.52161,15.52161v192.993c0,8.55846,6.96315,15.52161,15.52161,15.52161H381.94946c8.55846,0,15.52161-6.96315,15.52161-15.52161V247.758c0-8.55846-6.96315-15.52161-15.52161-15.52161H18.63322Z"
                  fill="#3f3d56"
                />
                <circle
                  cx="353.90847"
                  cy="247.79446"
                  r="4.66742"
                  fill="#3f3d56"
                />
                <circle
                  cx="366.35492"
                  cy="247.79446"
                  r="4.66742"
                  fill="#3f3d56"
                />
                <circle
                  cx="378.80138"
                  cy="247.79446"
                  r="4.66742"
                  fill="#3f3d56"
                />
                <path
                  d="M26.44872,323.2511c-1.28688,0-2.33371,1.04683-2.33371,2.33371,0,.62749,.24234,1.20788,.68218,1.63633,.44365,.45428,1.0248,.69738,1.65153,.69738H375.68976c1.28688,0,2.33371-1.04683,2.33371-2.33371,0-.62749-.24234-1.20788-.68218-1.63633-.44365-.45428-1.0248-.69738-1.65153-.69738H26.44872Z"
                  fill="#e6e6e6"
                />
                <path
                  d="M332.12717,322.4732v6.22323H26.44872c-.85567,0-1.63358-.34233-2.19365-.91797-.57574-.56007-.91797-1.33797-.91797-2.19365,0-1.71144,1.40026-3.11161,3.11161-3.11161H332.12717Z"
                  fill="#cde7ff"
                />
                <path
                  d="M371.80025,310.80464h-31.11614c-3.43144,0-6.22323-2.79103-6.22323-6.22323s2.79179-6.22323,6.22323-6.22323h31.11614c3.43144,0,6.22323,2.79103,6.22323,6.22323s-2.79179,6.22323-6.22323,6.22323Z"
                  fill="#e6e6e6"
                />
                <path
                  d="M167.98953,278.1327H28.78243c-3.43144,0-6.22323-2.79103-6.22323-6.22323s2.79179-6.22323,6.22323-6.22323H167.98953c3.43144,0,6.22323,2.79103,6.22323,6.22323s-2.79179,6.22323-6.22323,6.22323Z"
                  fill="#e6e6e6"
                />
                <path
                  d="M26.44872,393.26242c-1.28688,0-2.33371,1.04683-2.33371,2.33371,0,.62749,.24234,1.20788,.68218,1.63633,.44365,.45428,1.0248,.69738,1.65153,.69738H375.68976c1.28688,0,2.33371-1.04683,2.33371-2.33371,0-.62749-.24234-1.20788-.68218-1.63633-.44365-.45428-1.0248-.69738-1.65153-.69738H26.44872Z"
                  fill="#e6e6e6"
                />
                <path
                  d="M212.33003,392.48451v6.22323H26.44872c-.85567,0-1.63358-.34233-2.19365-.91797-.57574-.56007-.91797-1.33797-.91797-2.19365,0-1.71144,1.40026-3.11161,3.11161-3.11161H212.33003Z"
                  fill="#cde7ff"
                />
                <path
                  d="M371.80025,380.81596h-31.11614c-3.43144,0-6.22323-2.79103-6.22323-6.22323s2.79179-6.22323,6.22323-6.22323h31.11614c3.43144,0,6.22323,2.79103,6.22323,6.22323s-2.79179,6.22323-6.22323,6.22323Z"
                  fill="#e6e6e6"
                />
              </g>
              <g>
                <ellipse
                  cx="426.27357"
                  cy="70.44086"
                  rx="48.72643"
                  ry="47.69976"
                  fill="#cde7ff"
                />
                <path
                  d="M442.81136,46.3808c-6.487,11.81215-12.97405,23.62439-19.46106,35.43659-4.13442-7.30499-8.24624-14.62285-12.39083-21.92211-1.43136-2.5209-5.32473-.25351-3.88976,2.27368,4.80448,8.46149,9.55919,16.95111,14.36367,25.41259,.82147,1.44676,3.07677,1.48035,3.8898,0,7.12599-12.9757,14.25199-25.95141,21.37798-38.92707,1.39635-2.54258-2.4924-4.81822-3.8898-2.27368Z"
                  fill="#fff"
                />
              </g>
              <path
                d="M493.53827,196.17181l-48.54724-23.22339s-1.94983-15.5437-11.05402-21.08789c-1.54779-3.6925-3.32855-7.74908-4.94598-10.96332-4-7.94879,2-22.94879-3-22.94879s-12.39122,15.77543-12,20c.30031,3.24292,2.98059,8.90472,3.5343,13.8609-6.09709,2.29949-11.01564,6.24084-14.24964,9.37903-2.79865,2.71575-3.8385,6.76755-2.74475,10.51073,3.16948,10.84703,11.09153,33.24933,22.46008,33.24933,15,0,19-3,19-3,0,0,31,39,54,42s-2.45276-47.77661-2.45276-47.77661Z"
                fill="#ffb6b6"
              />
            </svg> */}
                <img
                  src="https://images.pexels.com/photos/52608/pexels-photo-52608.jpeg?auto=compress&cs=tinysrgb&w=600"
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

              <p className="mt-4 text-md text-comarcaBlack text-justify">
                <strong className="text-comarcaBlue">
                  Nuestro Laboratorio
                </strong>{" "}
                @ComarcaLab ha sido creado con el propósito de acompañar e
                impulsar ideas de negocio para que nuevos emprendedores
                despeguen.{" "}
                <strong className="text-comarcaBlue">
                  Es un proceso de incubación de ideas de negocio
                </strong>{" "}
                que desarrollamos y acompañamos, creando modelos de negocio de
                triple impacto, disruptivos, colaborando a muchos nuevos
                emprendedores.
                <br />
                Este proceso de incubación,{" "}
                <strong className="text-comarcaBlue">
                  Es un programa de cultivo de emprendimientos
                </strong>{" "}
                en todo su ciclo con componentes de desarrollo, transformación
                digital, tecnología e innovación, a través de metodología,
                herramientas, capacitación y mentoría específicas al sector,
                como parte del apoyo integral a cada Startup miembro de nuestro
                laboratorio.{" "}
                <strong className="text-comarcaBlue">
                  Ya vamos con varios graduados en el despegue de Startups en su
                  etapa inicial con su MVP (Minimum Viable Product)
                </strong>
                ¡Postula! Formulario….{" "}
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
                  src="https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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

              <p className="mt-4 text-md text-comarcaBlack text-justify ">
                Administración del inicio y el desarrollo de proyectos de
                transformación digital, respondiendo a problemas y/o necesidades
                que surjan y demanden desarrollar un proyecto multipropósito, en
                todo el ciclo del mismo, desde análisis de viabilidad del
                proyecto hasta la ejecución, sostenibilidad y cierre del mismo.
                Algunos de nuestros resultados…
                <br />
                <ol>
                  <li type="1" className="text-comarca">
                    {" "}
                    “Análisis, diseño e implementación de procesos
                    administrativos y producción agrícola con metodología y
                    tecnología BPM (Business Process Managment), BPMS (Business
                    Process Managment Systems)”
                  </li>
                  <li type="1">Capsulas informativas digitales</li>
                  <li type="1" className="text-comarcaBlue">
                    {" "}
                    Reingeniería, diseño y desarrollo de modelo de negocio para
                    la implementación de procesos ERP para el sector minero.
                  </li>
                  <li type="1">
                    Diseño, desarrollo e implementación de capacitación digital
                    organizacional{" "}
                  </li>
                  <li type="1" className="text-comarcaPurple font-bold">
                    Implementación del modelo del negocio comercial y desarrollo
                    de estrategias de una plataforma Ecommerce de la
                    organización
                  </li>
                  <li type="1">
                    Proyecto de Infraestructura de TI con Software Libre para
                    PYMES FASE I
                  </li>
                  <li type="1" className="text-comarcaYellow font-bold">
                    Establecimiento de procesos, análisis, diseño,
                    implementación e integración de tecnologías OTT (Over The
                    Top) y desarrollo de plataforma digital para exposición y
                    venta de productos.
                  </li>
                  <li type="1">
                    Diseños y desarrollo de plataforma de gestión
                    administrativa, financiera y comercial con enfoque a
                    organizaciones de cooperación{" "}
                  </li>
                </ol>
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
