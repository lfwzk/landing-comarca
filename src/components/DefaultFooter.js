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
                  href="https://www.linkedin.com/groups/12280125/"
                  className="grid place-items-center bg-white text-blue-400 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon family="font-awesome" name="fab fa-linkedin" />
                </a>
                <a
                  href="https://www.instagram.com/comarcacowork/"
                  className="grid place-items-center bg-white text-indigo-500 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon family="font-awesome" name="fab fa-instagram" />
                </a>

                <a
                  href="https://www.tiktok.com/@co_marca"
                  className="grid place-items-center bg-white text-indigo-500 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon family="font-awesome" name="fab fa-tiktok " />
                </a>

                {/* <a
                  href="https://www.tiktok.com/@co_marca"
                  className="grid place-items-center bg-white text-red-600 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon family="font-awesome" name="fab fa-youtube" />
                </a> */}
              </div>
            </div>
            {/* <div className="w-full lg:w-6/12 px-4">
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
              </div> */}
          </div>
          <hr className="my-6 border-gray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-700 font-medium py-1">
                Develop with ❤️ by Co Marca Dev's Team
                <br />
                Copyright © {new Date().getFullYear()} Co Marca | alpha 0.1.0
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
