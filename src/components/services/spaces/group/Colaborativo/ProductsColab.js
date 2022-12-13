import backend from "../../../../../env/Main";
import { useState } from "react";
import { useEffect } from "react";

import { Link } from "react-router-dom";

const ProductsColab = () => {
  const [cart, SetData] = useState([]);
  useEffect(() => {
    //console.log(cart);
    fetch(backend.api + "space")
      .then((res) => res.json())
      .then((res) => SetData(res.data));
  }, [cart]);

  return (
    <>
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {cart
            .filter((space) => space.categoria_id === "grupal")
            .map((space) => (
              <div
                key={space.id}
                className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
              >
                <article className="overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-110">
                  <img
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src={space.img_space}
                  />

                  <header className="flex items-center justify-between leading-tight p-2 md:p-4 ">
                    <h1 className="text-lg text-comarcaBlue font-semibold">
                      {space.name}
                    </h1>
                    <br />
                    <p className="text-comarcaBlack text-md font-semibold">
                      <span>Bs. </span>
                      {space.precio}
                    </p>
                  </header>

                  <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <button
                      name="add"
                      type="button"
                      className="flex items-center justify-center w-full px-8 py-4 mt-4 bg-comarcaBlue rounded-xl"
                      onClick={() => console.log(space)}
                    >
                      <Link to={`/checkout/${space.id}  `}>
                        <span className="text-sm font-medium text-white">
                          Reservar
                        </span>
                      </Link>
                      <svg
                        className="w-5 h-5 ml-1.5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#ffffff"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                      </svg>
                    </button>
                  </footer>
                </article>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
export default ProductsColab;
