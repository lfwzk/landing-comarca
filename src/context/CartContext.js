import backend from "../env/Main";
import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const getSpaces = async () => {
    const response = await fetch(`${backend}/spaces`);
    const data = await response.json();
    setCart(data);
  };
  useEffect(() => {
    getSpaces();
  }, []);
  const addToCart = (space) => {
    const { id, name, precio, image_space } = space;
  };
  const removeItem = (id) => {
    setCart([...cart].filter((space) => space.id !== id));
  };
  const clearCart = () => {
    setCart([]);
  };
  const isInCart = (id) => {
    return cart.some((space) => space.id === id);
  };
  useEffect(() => {
    let newTotal = 0;
    cart.forEach((space) => {
      newTotal += space.price;
    });
    setTotal(newTotal);
  }, [cart]);
  return (
    <CartContext.Provider
      value={{ cart, total, addToCart, removeItem, clearCart, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);

// import { createContext, useEffect, useState } from "react";
// import axios from "axios";

// /* Creamos el context, se le puede pasar un valor inicial */
// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   /* Creamos un estado para el carrito */
//   const [cartItems, setCartItems] = useState([]);
//   const [products, setProducts] = useState([]);

//   const getProducts = async () => {
//     await axios
//       .get("http://localhost:4000/products")
//       .then(({ data }) => setProducts(data.products));
//   };

//   const getProductsCart = async () => {
//     return await axios
//       .get("http://localhost:4000/products-cart")
//       .then(({ data }) => setCartItems(data.productsCart))
//       .catch((error) => console.error(error));
//   };

//   useEffect(() => {
//     getProducts();
//     getProductsCart();
//   }, []);

//   const addItemToCart = async (product) => {
//     const { name, img, price } = product;

//     await axios.post("http://localhost:4000/products-cart", {
//       name,
//       img,
//       price,
//     });

//     getProducts();
//     getProductsCart();
//   };

//   const editItemToCart = async (id, query, amount) => {
//     if (query === "del" && amount === 1) {
//       await axios
//         .delete(`http://localhost:4000/products-cart/${id}`)
//         .then(({ data }) => console.log(data));
//     } else {
//       await axios
//         .put(`http://localhost:4000/products-cart/${id}?query=${query}`, {
//           amount,
//         })
//         .then(({ data }) => console.log(data));
//     }

//     getProducts();
//     getProductsCart();
//   };

//   return (
//     /* Envolvemos el children con el provider y le pasamos un objeto con las propiedades que necesitamos por value */
//     <CartContext.Provider
//       value={{ cartItems, products, addItemToCart, editItemToCart }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartContext;
