import Nav from "components/Nav";
import LeadText from "@material-tailwind/react/LeadText";
//import { Button } from "@material-tailwind/react";
//import Akaru from "../../assets/img/parnters/l1.png";

//import Academia from "../../assets/img/parnters/l7.png";
import background from "../../assets/img/portadagroup.jpg";
import Hub from "./Hub";

const Group = () => {
  return (
    <>
      <Nav />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen ">
          {/* <div className="bg-background-comarca-services bg-cover bg-center absolute top-0 w-full h-full" /> */}
          <div
            className="bg-cover bg-center absolute top-0 w-full h-full object-cover"
            style={{
              //backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.9)), url(${rocket})`,
              backgroundImage: `linear-gradient(180deg, rgba(0,0,0, 0) 12%, rgba(0,0,0, 0) 16%, rgba(0.0.0.1) 80% ), url(${background})`,
              height: `100vh`,
              backgroundSize: `cover`,
            }}
          ></div>
          <div className="container max-w-8xl relative mx-auto font-serif">
            <div className="items-center flex flex-wrap ">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center  ">
                <h1 className="text-6xl text-gray-200 font-exo">
                  {" "}
                  Un cowork con propósito
                </h1>

                <div className="text-gray-200 font-exo">
                  <LeadText color="gray-200">
                    demostramos que somos los mejores en lo que hacemos
                  </LeadText>
                  <div className="flex justify-center mt-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Hub />
      </main>
    </>
  );
};
export default Group;
