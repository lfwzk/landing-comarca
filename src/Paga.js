import React from "react";
import backend from "./env/Main";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "components/Nav";
import Footer from "components/DefaultFooter";

const Paga = () => {
  const { id } = useParams();
  const [cart, SetData] = useState([]);
  const [producto, setPr] = useState({
    name: "",
    precio: "",
    image: "",
  });

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch(backend.api + "space/")
      .then((res) => res.json())
      .then((res) => SetData(res.data));
  };
  useEffect(() => {
    if (cart.length > 0) {
      cart.map((product) =>
        product.id == id
          ? setPr({
              name: product.name,
              precio: product.precio,
              image: product.img_space,
            })
          : ""
      );
    }
  }, [cart]);
  const [numero, setNumero] = useState({ uno: 0 });
  const [suma, setSuma] = useState();

  useEffect(() => {
    const { uno } = numero;
    setSuma(Number(uno) * Number(producto.precio));
  }, [numero]);

  const sumar = (event) => {
    const { name, value } = event.target;
    setNumero({ ...numero, [name]: value });
  };

  return (
    <>
      <Navbar />

      <section className="font-exo">
        <h1 className="sr-only">Checkout</h1>

        <div className="grid grid-cols-1 mx-auto max-w-screen-2xl md:grid-cols-2">
          <div className="py-12 bg-gray-50 md:py-24">
            <div className="max-w-lg px-4 mx-auto space-y-8 lg:px-8">
              <div className="flex items-center">
                <span className="w-10 h-10 bg-blue-700 rounded-full"></span>
              </div>

              <div>
                <div className="flex flex-wrap ">
                  <div className="my-1 px-1 w-full  ">
                    <article className="overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-110">
                      <img src={producto.image} alt="" />
                      <header className="flex items-center justify-between leading-tight p-2 md:p-4 ">
                        <h1 className="text-lg text-comarcaBlack font-semibold">
                          {producto.name}
                        </h1>
                        <br />
                        <p className="text-comarcaBlack text-md font-semibold">
                          <span>Bs. </span>
                          {producto.precio}
                        </p>
                      </header>
                      <br />
                      <p
                        className="text-comarcaBlack text-md font-semibold p-10"
                        value={suma}
                      >
                        Total: Bs.{""}
                        {suma}
                      </p>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-12 bg-white md:py-24">
            <div className="max-w-lg px-4 mx-auto lg:px-8">
              <h1 className="text-xl">
                Usted va a reservar <strong>{producto.name}</strong>{" "}
              </h1>
              <br />
              <p className="text-sm py-8">
                Por favor ingrese los datos para la reserva
              </p>

              <form className="grid grid-cols-6 gap-4">
                <div className="col-span-3">
                  <label
                    for="FirstName"
                    className="block text-xs font-medium text-gray-700"
                  >
                    Nombres
                  </label>

                  <input
                    type="text"
                    id="FirstName"
                    className="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                  />
                </div>

                <div className="col-span-3">
                  <label
                    for="LastName"
                    className="block text-xs font-medium text-gray-700"
                  >
                    Apellidos
                  </label>

                  <input
                    type="text"
                    id="LastName"
                    className="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    for="Email"
                    className="block text-xs font-medium text-gray-700"
                  >
                    Correo eletrónico
                  </label>

                  <input
                    type="email"
                    id="Email"
                    className="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                  />
                </div>
                <div className="col-span-6">
                  <label
                    for="Email"
                    className="block text-xs font-medium text-gray-700"
                  >
                    Celular
                  </label>

                  <input
                    type="email"
                    id="Email"
                    className="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                  />
                </div>
                <div className="col-span-6">
                  <label
                    type="number"
                    className="block text-xs font-medium text-gray-700"
                  >
                    Tiempo de reserva
                  </label>

                  <input
                    type="numer"
                    className="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                    name="uno"
                    onChange={sumar}
                    value={numero.uno}
                  />
                </div>

                <div className="col-span-6">
                  <label
                    type="date"
                    for="Phone"
                    className="block text-xs font-medium text-gray-700"
                  >
                    Fecha ingreso
                  </label>

                  <input
                    type="date"
                    id="Phone"
                    className="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                  />
                </div>
                <div className="col-span-6">
                  <label
                    type="date"
                    for="Phone"
                    className="block text-xs font-medium text-gray-700"
                  >
                    Fecha salida
                  </label>

                  <input
                    type="date"
                    id="Phone"
                    className="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                  />
                </div>
                <div className="col-span-6">
                  <label
                    type="date"
                    for="Phone"
                    className="block text-xs font-medium text-gray-700"
                  >
                    Hora ingreso
                  </label>

                  <input
                    type="time"
                    id="Phone"
                    className="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                  />
                </div>
                <div className="col-span-6">
                  <label
                    type="time"
                    for="Phone"
                    className="block text-xs font-medium text-gray-700"
                  >
                    Hora salida
                  </label>

                  <input
                    type="time"
                    id="Phone"
                    className="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                  />
                </div>

                <div className="col-span-6">
                  <button
                    className="w-full rounded-lg bg-comarcaBlack p-2.5 text-sm text-white flex flex-row justify-center items-center"
                    type="submit"
                  >
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
                        d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z"
                      />
                    </svg>
                    Pago mendiante: QR
                  </button>

                  <br />
                  <button
                    className=" w-full rounded-lg bg-comarcaBlack p-2.5 text-sm text-white flex flex-row justify-center items-center"
                    type="submit"
                  >
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
                    Depósito Bancario
                  </button>
                  <br />

                  <button
                    className="w-full rounded-lg bg-comarcaBlack p-2.5 text-sm text-white flex flex-row justify-center items-center"
                    type="submit"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Efectivo
                  </button>
                  <br />
                  <button
                    className=" w-full rounded-lg bg-comarcaBlack p-2.5 text-sm text-white flex flex-row justify-center"
                    type="submit"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ffffff"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M7 15h0M2 9.5h20" />
                    </svg>
                    Tarjeta de Crédito/Débito
                  </button>
                  <br />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Paga;

{
  /* <h1 className="text-comarca">MUNDIAL</h1>
<div>{producto.name}</div>
<div>{producto.precio}</div>
<img src={producto.image} alt="imagen" className="" /> */
}
