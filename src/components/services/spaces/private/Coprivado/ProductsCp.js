import backend from "../../../../../env/Main";
import { useState } from "react";
import { useContext } from "react";
import CartContext from "../.../../../../../../context/CartContext";

const ProductsCp = () => {
  const [cart, SetData] = useState([]);
  fetch(backend.api + "/space")
    .then((res) => res.json())
    .then((res) => SetData(res.data));
  //const { addItemToCart, products } = useContext(CartContext);
  return (
    <>
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {cart.map((space) => (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article className="overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-110">
                <img
                  alt="Placeholder"
                  className="block h-auto w-full"
                  src={space.img_space}
                />

                <header className="flex items-center justify-between leading-tight p-2 md:p-4 ">
                  <h1 className="text-lg text-comarca font-semibold">
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
                    className="flex items-center justify-center w-full px-8 py-4 mt-4 bg-comarca rounded-xl"
                    onClick={() => console.log(space)}
                  >
                    <a href="/coprivado">
                      <span className="text-sm font-medium text-white">
                        Reservar
                      </span>
                    </a>
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
export default ProductsCp;

//
//         <div className="container mx-auto px-4 py-12">
//           <h2 className="text-4xl font-exo font-bold p-8"> Planes </h2>
//           {cart.map((space) => (
//             <div className="container my-12 mx-auto px-4 md:px-12">
//               <div className="flex flex-wrap -mx-1 lg:-mx-4">
//                 <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
//                   <article className="overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-110">
//                     <img
//                       alt="Placeholder"
//                       className="block h-auto w-full"
//                       src={space.img_space}
//                     />

//                     <header className="flex items-center justify-between leading-tight p-2 md:p-4 ">
//                       <h1 className="text-lg text-comarca font-semibold">
//                         {space.name}
//                       </h1>
//                       <br />
//                       <p className="text-comarcaBlack text-md font-semibold">
//                         <span>Bs. </span>
//                         {space.precio}
//                       </p>
//                     </header>

//                     <footer className="flex items-center justify-between leading-none p-2 md:p-4">
//                       <button
//                         name="add"
//                         type="button"
//                         className="flex items-center justify-center w-full px-8 py-4 mt-4 bg-comarca rounded-xl"
//                         onClick={() => console.log(space)}
//                       >
//                         <a href="/coprivado">
//                           <span className="text-sm font-medium text-white">
//                             Reservar
//                           </span>
//                         </a>
//                         <svg
//                           className="w-5 h-5 ml-1.5"
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="#ffffff"
//                         >
//                           <path
//                             stroke-linecap="round"
//                             stroke-linejoin="round"
//                             stroke-width="2"
//                             d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
//                           />
//                         </svg>
//                       </button>
//                     </footer>
//                   </article>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
