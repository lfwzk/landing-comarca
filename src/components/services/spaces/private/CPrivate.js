import Nav from "../../../../components/Nav";
import {
  EmailIcon,
  LinkedinIcon,
  PinterestIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
const CPrivate = () => {
  return (
    <div>
      <Nav />
      <section className="py-6 bg-white text-gray-900">
        <div className="container max-w-7xl mx-1 px-1 lg:pt-8">
          <h1 className="text-4xl font-exo font-bold p-8">Co Privado</h1>
        </div>
        <div className="container max-w-7xl mx-auto px-4 lg:pt-8 flex flex-row font-exo font-semibold">
          Compartir en:
          <br />
          <TwitterIcon size={32} round={true} />
          <WhatsappIcon size={32} round={true} />
          <TelegramIcon size={32} round={true} />
          <EmailIcon size={32} round={true} />
          <LinkedinIcon size={32} round={true} />
          <PinterestIcon size={32} round={true} />
        </div>
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4 ">
          <img
            src="https://images.pexels.com/photos/5324855/pexels-photo-5324855.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded-xl shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-white aspect-square transform transition duration-500 hover:scale-110"
          />
          <img
            alt=""
            className="w-full h-full rounded-xl shadow-sm min-h-48 bg-gray-500 aspect-square transform transition duration-500 hover:scale-110"
            src="https://images.pexels.com/photos/5324855/pexels-photo-5324855.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <img
            alt=""
            className="w-full h-full rounded-xl shadow-sm min-h-48 bg-gray-500 aspect-square transform transition duration-500 hover:scale-110"
            src="https://images.pexels.com/photos/5825371/pexels-photo-5825371.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <img
            alt=""
            className="w-full h-full rounded-xl shadow-sm min-h-48 bg-gray-500 aspect-square transform transition duration-500 hover:scale-110"
            src="https://images.pexels.com/photos/7988207/pexels-photo-7988207.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <img
            alt=""
            className="w-full h-full rounded-xl shadow-sm min-h-48 bg-gray-500 aspect-square transform transition duration-500 hover:scale-110"
            src="https://images.pexels.com/photos/7988207/pexels-photo-7988207.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </div>
      </section>
      <section className="py-6 bg-gray-100 text-gray-900 font-exo">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0 md:px-6">
            <h1 className="text-4xl font-bold">Colaborativo</h1>
            <p className="pt-2 pb-4">
              Ideal para reuniones de trabajo, reuniones de equipo, reuniones de
              clientes, etc.
            </p>
            <h2 className="text-2xl font-bold">Características</h2>
            <p className="pt-2 pb-4"> Beneficios del lugar </p>
            <div className="space-y-4 flex-row-reverse">
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                  />
                </svg>

                <span>Wifi</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                  />
                </svg>

                <span>Conferencias </span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                  />
                </svg>

                <span>Económico</span>
              </p>
            </div>
          </div>
          <form
            novalidate=""
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid"
          >
            <label className="block">
              <span className="mb-1">Llegada</span>
              <input
                type="date"
                placeholder="Leroy Jenkins"
                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-yellow-600 bg-gray-100"
              />
            </label>
            <label className="block">
              <span className="mb-1">Salida</span>
              <input
                type="date"
                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-yellow-600 bg-gray-100"
              />
            </label>

            <label className="block">
              <span className="mb-1">Email address</span>
              <input
                type="email"
                placeholder="leroy@jenkins.com"
                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-yellow-600 bg-gray-100"
              />
            </label>
            <label className="block">
              <span className="mb-1">Message</span>
              <textarea
                rows="3"
                className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-yellow-600 bg-gray-100"
              ></textarea>
            </label>
            <button
              type="button"
              className="self-center px-8 py-3 text-lg rounded-xl text-white focus:ring hover:ring focus:ring-opacity-75 bg-comarca text-gray-50 focus:ring-yellow-600 hover:ring-yellow-600"
            >
              Reservar
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
export default CPrivate;
