import H5 from "@material-tailwind/react/Heading5";
import LeadText from "@material-tailwind/react/LeadText";
import Icon from "@material-tailwind/react/Icon";

export default function DefaultFooter() {
  return (
    <>
      <footer className="relative bg-gray-100 pt-8 pb-6">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left pt-6">
            <div className="w-full lg:w-6/12 px-4">
              <H5 color="gray">CO MARCA</H5>
              <div className="-mt-4">
                <LeadText color="blueGray">Un Cowork con propósito ❤</LeadText>
              </div>
              {/* AQUI VA AEL  */}
              <label class="swap swap-rotate">
                <input type="checkbox" />

                <svg
                  className="swap-on fill-current w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                <svg
                  className="swap-off fill-current w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
              {/* STILE */}

              <div className="flex gap-2 mt-6 md:justify-start md:mb-0 mb-8 justify-center">
                <a
                  href="https://www.facebook.com/CoMarcaCoworkconProposito"
                  className="grid place-items-center bg-white text-blue-600 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon family="font-awesome" name="fab fa-facebook-square" />
                </a>
                <a
                  href="https://www.twitter.com/creativetim"
                  className="grid place-items-center bg-white text-blue-400 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon family="font-awesome" name="fab fa-twitter" />
                </a>
                <a
                  href="https://www.instagram.com/creativetimofficial/"
                  className="grid place-items-center bg-white text-indigo-500 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon family="font-awesome" name="fab fa-instagram" />
                </a>

                <a
                  href="https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w"
                  className="grid place-items-center bg-white text-red-600 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon family="font-awesome" name="fab fa-youtube" />
                </a>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top">
                <div className="w-full lg:w-4/12 px-4 ml-auto md:mb-0 mb-8">
                  <span className="block uppercase text-gray-900 text-sm font-serif font-medium mb-2">
                    Recursos
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        href="https://www.creative-tim.com/presentation?ref=mtk"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-700 hover:text-gray-900 block pb-2 text-sm"
                      >
                        Sobre nosotros
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 block pb-2 text-sm"
                        target="_blank"
                        href=" https://www.creative-tim.com/blog?ref=mtk"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.github.com/creativetimofficial?ref=mtk"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-700 hover:text-gray-900 block pb-2 text-sm"
                      >
                        Desarrollo
                      </a>
                    </li>
                    <li>
                      <a
                        href=" https://www.creative-tim.com/templates/free?ref=mtk"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-700 hover:text-gray-900 block pb-2 text-sm"
                      >
                        Nuestros productos
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-gray-900 text-sm font-serif font-medium mb-2">
                    Importante
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        href="https://github.com/creativetimofficial/material-tailwind/blob/main/LICENSE.md?ref=mtk"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-700 hover:text-gray-900 block pb-2 text-sm"
                      >
                        MIT Licencia
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/creativetimofficial/material-tailwind/blob/main/CONTRIBUTING.md?ref=mtk"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-700 hover:text-gray-900 block pb-2 text-sm"
                      >
                        Contribuir
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/creativetimofficial/material-tailwind/blob/main/CODE_OF_CONDUCT.md?ref=mtk"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-700 hover:text-gray-900 block pb-2 text-sm"
                      >
                        Codigo de conducta
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://creative-tim.com/contact-us?ref=mtk"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-700 hover:text-gray-900 block pb-2 text-sm"
                      >
                        Contacto
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-700 font-medium py-1">
                Copyright © {new Date().getFullYear()} Co Marca | v1.0.0 beta
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
