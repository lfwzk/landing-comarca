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
      image:
        "https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/gallery%2FCowork1.png?alt=media&token=4181e7be-30b1-4e76-becd-2b80ed4340a9",
      caption: "Espacios & Confort ",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/gallery%2FCoMunidad2.png?alt=media&token=442bd354-c2ee-4aa1-8e22-14b4993dfdf0",
      caption: "Comunidad",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/gallery%2FCoLaborativo1.png?alt=media&token=fc8b4f5b-1892-4638-9b72-f9e82816b7a6",
      caption: "Colaborativo",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/gallery%2FCoLaborativo3.png?alt=media&token=883f6efd-034b-4285-97a7-78c18a820dfc",
      caption: "Co Creación",
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
    fontFamily: "exo",
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
            width="950px"
            height="600px"
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
              maxWidth: "950px",
              maxHeight: "600px",
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
