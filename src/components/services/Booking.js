const Booking = () => {
  return (
    <>
      <div className="flex flex-row justify-center font-exo shadow-lg rounded-xl  m-0">
        <div className="flex justify-center gap-2 p-4 bg-gray-400 ">
          <form className="flex flex-row ">
            {/* <div className="px-8">
              <span className="rounded-xl">Sala</span>
              <br />
              <select className="rounded-xl">
                <option>Sala privada</option>
                <option>Sala colaborativa</option>
                <option>Sala virtual</option>
              </select>
            </div> */}
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
              <span className="form-label rounded-xl">Hora Entrada</span>
              <br />
              <input className="rounded-xl" type="time" required />
            </div>
            <div className="px-8">
              <span className="form-label rounded-xl">Hora Salida</span>
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
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
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
