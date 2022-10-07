import { Carousel } from "react-carousel-minimal";
import img1 from "../../assets/img/coworkback.jpeg";
import img2 from "../../assets/img/v2/f12.png";
import img3 from "../../assets/img/v2/f100.jpg";
import img4 from "../../assets/img/v2/f17.jpeg";
import img6 from "../../assets/img/v2/f1.jpg";
import img7 from "../../assets/img/v2/f9.jpeg";
import img8 from "../../assets/img/v2/f30.jpeg";

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
      caption: "Scotland",
    },
    {
      image: img2,
      caption: "Darjeeling",
    },
    {
      image: img2,
      caption: "Darjeeling",
    },
    {
      image: img2,
      caption: "Darjeeling",
    },
    {
      image: img2,
      caption: "Darjeeling",
    },
    {
      image: img2,
      caption: "Darjeeling",
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
            width="1220px"
            height="720px"
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
              maxWidth: "1850px",
              maxHeight: "720px",
              margin: "40px auto",
              padding: "0 20px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
