// //import backend from "../env/Main";
// import { createContext, useEffect, useState } from "react";
// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItem, setCartItems] = useState(() => {
//     try {
//       const localData = localStorage.getItem("cartItem");
//       return localData ? JSON.parse(localData) : [];
//     } catch (err) {
//       console.log(err);
//       return [];
//     }
//   });
//   useEffect(() => {
//     localStorage.setItem("cartItem", JSON.stringify(cartItem));
//   }, [cartItem]);

//   const addItemToCart = (space) => {
//     const inCart = cartItem.find((spaceInCart) => spaceInCart.id === space.id);
//   };
//   if (inCart) {
//     setCartItems(
//       cartItem.map((spaceInCart) => {
//         if (spaceInCart.id === space.id) {
//           return { ...spaceInCart, qty: spaceInCart.amount + 1 };
//         } else {
//           return spaceInCart;
//         }
//       })
// //     );
// //   } else {
// //     setCartItems([...cartItem, { ...space, qty: 1 }]);
//   }
// };
