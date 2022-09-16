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

        <section class="p-4 lg:p-8 bg-gray-100 text-gray-800">
          <div class="container mx-auto space-y-12">
            <div class="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
              <img
                src="https://source.unsplash.com/640x480/?1"
                alt=""
                class="h-80 bg-gray-500 aspect-video"
              />
              <div class="flex flex-col justify-center flex-1 p-6 bg-gray-50">
                <span class="text-xs uppercase text-gray-600">
                  Join, it's free
                </span>
                <h3 class="text-3xl font-bold">
                  We're not reinventing the wheel
                </h3>
                <p class="my-6 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  aliquam possimus quas, error esse quos.
                </p>
                <button type="button" class="self-start">
                  Action
                </button>
              </div>
            </div>
            <div class="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
              <img
                src="https://source.unsplash.com/640x480/?2"
                alt=""
                class="h-80 bg-gray-500 aspect-video"
              />
              <div class="flex flex-col justify-center flex-1 p-6 bg-gray-50">
                <span class="text-xs uppercase text-gray-600">
                  Join, it's free
                </span>
                <h3 class="text-3xl font-bold">
                  We're not reinventing the wheel
                </h3>
                <p class="my-6 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  aliquam possimus quas, error esse quos.
                </p>
                <button type="button" class="self-start">
                  Action
                </button>
              </div>
            </div>
            <div class="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
              <img
                src="https://source.unsplash.com/640x480/?3"
                alt=""
                class="h-80 bg-gray-500 aspect-video"
              />
              <div class="flex flex-col justify-center flex-1 p-6 bg-gray-50">
                <span class="text-xs uppercase text-gray-600">
                  Join, it's free
                </span>
                <h3 class="text-3xl font-bold">
                  We're not reinventing the wheel
                </h3>
                <p class="my-6 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  aliquam possimus quas, error esse quos.
                </p>
                <button type="button" class="self-start">
                  Action
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default Group;
