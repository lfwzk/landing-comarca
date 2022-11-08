import Nav from "components/Nav";
import LeadText from "@material-tailwind/react/LeadText";
import { Button } from "@material-tailwind/react";
import Events from "./Events";
import Footer from "components/DefaultFooter";
//import { useState } from "react";
//import backend from "../../env/Main";

const Blog = () => {
  // const [cart, SetData] = useState([]);
  // fetch(backend.api + "/blog")
  //   .then((res) => res.json())
  //   .then((res) => SetData(res.data));
  return (
    <>
      <div className=" w-full z-20 fixed">
        <Nav />
      </div>
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen ">
          {/* <div className="bg-background-comarca-services bg-cover bg-center absolute top-0 w-full h-full" /> */}
          <div
            className="bg-cover bg-center absolute top-0 w-full h-full object-cover"
            style={{
              //backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.9)), url(${rocket})`,
              backgroundImage: `linear-gradient(180deg, rgba(0,0,0, 0) 12%, rgba(0,0,0, 0) 16%, rgba(0.0.0.1) 80% ), url("https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
              height: `100vh`,
              backgroundSize: `cover`,
            }}
          ></div>
          <div className="container max-w-8xl relative mx-auto font-serif">
            <div className="items-center flex flex-wrap ">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center  ">
                <h1 className="text-6xl text-gray-200 font-exo">
                  {" "}
                  Proximamente
                </h1>

                <div className="text-gray-200 font-exo">
                  <LeadText color="gray-200">
                    Estamos trabajando en esta sección.
                  </LeadText>
                  <div className="flex justify-center mt-10">
                    <Button
                      href="/"
                      color="transparent"
                      className="bg-comarcaPurple text-white ml-4"
                      ripple="dark"
                    >
                      Volver
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Events />

        {/* <section className="font-exo ">
          {cart.map((blog) => (
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
              <a
                rel="noopener noreferrer"
                href="#"
                className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-50"
              >
                <img
                  src={blog.img_blog}
                  alt=""
                  className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500"
                />
                <div className="p-6 space-y-2 lg:col-span-5">
                  <h3 className="text-2xl font-semibold sm:text-4xl  group-focus:underline">
                    {blog.titulo}
                  </h3>
                  <span className="text-xs text-gray-600">{blog.fecha}</span>
                  <p className="text-justify">{blog.introduccion}</p>
                </div>
              </a>
            </div>
          ))}
        </section> */}
      </main>
      <Footer />
    </>
  );
};
export default Blog;
// https://www.urgente.bo/sites/default/files/qatar2022_0.jpg
