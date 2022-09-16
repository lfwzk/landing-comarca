import Colab from "./Colab";
//import Booking from "./Booking";
const Group = () => {
  return (
    <>
      <Colab />
      {/* <Booking /> */}
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2 md:col-span-1">
            Lo que este lugar te ofrece
          </div>
          <div className="flex  p-6 text-xl bg-gray-100 border-2 border-gray-300 rounded-xl font-exo">
            <div className="flex flex-col">
              <section className="py-6 bg-gray-100 text-gray-900">
                <div className="container mx-auto flex flex-col items-center justify-center max-w-lg p-4 lg:max-w-full sm:p-10 lg:flex-row">
                  <div className="flex flex-col items-center justify-center flex-1 p-4 pb-8 sm:p-8 lg:p-16 bg-gray-50">
                    <span className="text-sm">Basic</span>
                    <p className="text-5xl font-bold text-center">39€</p>
                    <p className="font-semibold text-center">
                      Nemo deserunt possimus quo provident recusandae! Dolores
                      qui architecto omnis pariatur eos voluptatibus sequi cum,
                      non nesciunt aspernatur a?
                    </p>
                    <button className="px-8 py-3 mt-6 text-lg font-semibold border rounded sm:mt-12 border-gray-300">
                      Sign up
                    </button>
                  </div>
                  <div className="flex flex-col items-center justify-center flex-1 p-4 pb-8 text-center rounded-md sm:p-8 lg:p-16 bg-yellow-600 text-gray-50">
                    <span className="text-sm font-semibold">Advanced</span>
                    <p className="text-5xl font-bold">89€</p>
                    <p className="font-semibold">
                      Nemo deserunt possimus quo provident recusandae! Dolores
                      qui architecto omnis pariatur eos voluptatibus sequi cum,
                      non nesciunt aspernatur a?
                    </p>
                    <button className="px-8 py-3 mt-6 text-lg font-semibold rounded sm:mt-12 bg-gray-100 text-gray-900">
                      Sign up
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="flex justify-center p-6 text-6xl bg-gray-100 border-2 border-gray-300 rounded-xl">
            Hola 2
          </div>
        </div>
      </div>
    </>
  );
};
export default Group;
