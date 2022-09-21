const Booking = () => {
  return (
    <>
      <div class="flex flex-row justify-center   font-exo bg-white shadow-lg rounded-full m-0">
        <div class="flex justify-center gap-2 p-4 bg-gray-400 ">
          <form className="flex flex-row ">
            <div className="px-8">
              <span className="rounded-xl">Sala</span>
              <br />
              <select className="rounded-xl">
                <option>Sala privada</option>
                <option>Sala colaborativa</option>
                <option>Sala virtual</option>
              </select>
            </div>
            <div className="px-8">
              <span className="rounded-xl">Entrada</span>
              <br />
              <input className="rounded-xl" type="date" required />
            </div>
            <div className="px-8">
              <span className="rounded-xl">Salida</span>
              <br />
              <input className="rounded-xl" type="date" required />
            </div>
            <div className="px-8">
              <span className="form-label rounded-xl">Hora</span>
              <br />
              <input className="rounded-xl" type="time" required />
            </div>
            <div className="px-8">
              <span className="rounded-xl">Invitados</span>
              <br />
              <select className="rounded-xl">
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <span className="select-arrow"></span>
            </div>
            <br />
            <div className="px-8">
              <button className="bg-comarca text-white font-bold py-2 px-4 rounded-xl ">
                Disponibilidad
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Booking;

{
  /* <section className="w-full max-w-sm font-exo flex items-center justify-center align-center mt-10 py-4 pt-6">
<div className="flex flex-row items-center justify-center w-full max-w-sm p-8 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
  <form className="flex flex-row">
    <div className="row mr-0">
      <div className="row row-span-6">
        <div className="form-group">
          <span className="form-label">Sala</span>
          <select className="form-control">
            <option>Sala privada</option>
            <option>Sala colaborativa</option>
            <option>Sala virtual</option>
          </select>
        </div>
      </div>
      <div className="col-md-6">
        <div className="row no-margin">
          <div className="col-md-5">
            <div className="form-group">
              <span className="form-label">Entrada</span>
              <input className="form-control" type="date" required />
            </div>
          </div>
          <div className="col-md-5">
            <div className="form-group">
              <span className="form-label">Salida</span>
              <input className="form-control" type="date" required />
            </div>
          </div>
          <div className="col-md-5">
            <div className="form-group">
              <span className="form-label">Hora</span>
              <input className="form-control" type="time" required />
            </div>
          </div>
          <div className="col-md-2">
            <div className="form-group">
              <span className="form-label">Invitados</span>
              <select className="form-control">
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <span className="select-arrow"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="form-btn">
          <button className="bg-comarca text-white font-bold py-2 px-4 rounded">
            Disponibilidad
          </button>
        </div>
      </div>
    </div>
  </form>
</div>
</section>
<div className="flex flex-row">
<div className="relative h-screen	">
  <div className="absolute left-0 inset-x-2/4">
    <div className="container">
      <div className="row row-auto">
        <div className="booking-form "></div>
      </div>
    </div>
  </div>
</div>
</div> */
}
