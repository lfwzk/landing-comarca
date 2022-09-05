import Nav from "components/Nav";
import LeadText from "@material-tailwind/react/LeadText";
import { Button } from "@material-tailwind/react";

const Group = () => {
  return (
    <>
      <Nav />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen ">
          <div className="bg-background-comarca-services bg-cover bg-center absolute top-0 w-full h-full" />
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
                      color="transparent"
                      className="bg-comarcaYellow text-white ml-4"
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
      </main>
    </>
  );
};
export default Group;
