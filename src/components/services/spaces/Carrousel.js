import img1 from "../../../assets/img/spaces/Colaborativa/colaborativo4.jpg";
import img2 from "../../../assets/img/spaces/Colaborativa/colaborativo2.jpg";
import img3 from "../../../assets/img/spaces/Colaborativa/colaborativo3.jpg";
const Carrousel = () => {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner max-w-full h-auto object-cover">
          <div className="carousel-item active relative float-left w-full">
            <img src={img1} className="block w-full " />
          </div>
          <div className="carousel-item relative float-left w-full">
            <img src={img2} className="block w-full" />
          </div>
          <div className="carousel-item relative float-left w-full">
            <img src={img3} className="block w-full" />
          </div>
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
export default Carrousel;
