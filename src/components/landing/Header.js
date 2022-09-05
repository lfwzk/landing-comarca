//import H2 from "@material-tailwind/react/Heading2";
import LeadText from "@material-tailwind/react/LeadText";
import { Button } from "@material-tailwind/react";

export default function Header() {
  return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen ">
      <div className="bg-landing-background bg-cover bg-center absolute top-0 w-full h-full" />
      <div className="container max-w-8xl relative mx-auto font-serif">
        <div className="items-center flex flex-wrap ">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center  ">
            <h1 className="text-6xl font-exo text-gray-200 "> CO MARCA</h1>

            <div className="text-gray-200 font-exo">
              <LeadText color="gray-200">Un Cowork con propósito ❤</LeadText>
              <div className="flex justify-center mt-10">
                <Button
                  color="transparent"
                  className="bg-comarca text-white ml-4"
                  ripple="dark"
                >
                  <a href="/services">Reservas</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
