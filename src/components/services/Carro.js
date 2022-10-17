import { Carousel } from "react-carousel-minimal";
import img1 from "../../assets/img/web/COMUNIDAD.png";
import img2 from "../../assets/img/web/CoLaborativo.png";
import img3 from "../../assets/img/web/CoCreativo(3).png";
import img4 from "../../assets/img/web/CoEmprendeSaladereunion(4).png";
import img7 from "../../assets/img/web/COPRIVADA.png";
import img6 from "../../assets/img/web/COMUNIDAD(16).png";
import img8 from "../../assets/img/web/CoEmprendeSaladereunion(5).png";

function App() {
  const data = [
    {
      image: img1,
      caption: "Propósito",
    },
    {
      image: img2,
      caption: "Creatividad",
    },
    {
      image: img3,
      caption: "Libre",
    },
    {
      image: img4,
      caption: "Naturaleza",
    },
    {
      image: img7,
      caption: "pasion",
    },
    {
      image: img6,
      caption: "Desarrollo",
    },
    {
      image: img8,
      caption: "Hard work",
    },
    {
      image: img1,
      caption: "Coworking",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div className="App p-0">
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            padding: "0 20px",
          }}
        >
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
              paddingBotton: "50px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
