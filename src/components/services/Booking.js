const Booking = () => {
  return (
    <>
      <div className="align-center md:hidden ">
        <button className="font-exo bg-comarca flex flex-row font-bold text-white  clasflex items-center justify-center w-full px-8 py-4 mt-4  rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          Disponibilidad
        </button>
      </div>
      <div className="flex-row justify-center font-exo shadow-lg rounded-xl hidden  md:block ">
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
