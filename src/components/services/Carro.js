import { Carousel } from "react-carousel-minimal";

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
      image:
        "https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/gallery%2FCoCreativo1.png?alt=media&token=06f58bf8-4208-4e90-bfb2-d4bdc33c6a96",
      caption: "Networking ",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/gallery%2FCoPrivado1.png?alt=media&token=cc1a567b-5bbd-4364-b8bd-11cf8f6d4bd6",
      caption: "Nuevas ideas",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/gallery%2FSalaTaller6.png?alt=media&token=2835b6aa-c6d0-4ed0-a139-0655cf060479",
      caption: "Desarrollo",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/gallery%2FCoLaborativo2.png?alt=media&token=c0f15fd8-1b56-4f22-9eb9-cba2d2798086",
      caption: "Resultados",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/gallery%2FCoEmprende1.png?alt=media&token=0ba47d79-df64-4141-b1b0-8d27007d8288",
      caption: "Productividad ",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/gallery%2FCoPrivado10.png?alt=media&token=19642c3d-5cd7-4578-bae9-feaf8a10e009",
      caption: "Acogedor",
    },

    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/gallery%2FCowork3.png?alt=media&token=ccfb20a1-887c-4e97-81f1-5668d8ed784f",
      caption: "Apoyo ",
    },

    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/gallery%2FSalaTaller7.png?alt=media&token=dc6e38e9-37c1-4ba5-816d-e54d97f5a110",
      caption: "Economía Colaborativa",
    },

    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/gallery%2FCOCREATIVO%20(11).png?alt=media&token=aa3b7ec3-10f6-4b40-b871-6942454e36b5",
      caption: "Sistema Todo incluido",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/gallery%2FCowork2.png?alt=media&token=15776557-b140-40a4-a883-f6cefe4e23e9",
      caption: "Espacios de esparcimiento",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/gallery%2FCoCreativo4.png?alt=media&token=8b041a60-918c-4602-98df-2f0d5da688e7",
      caption: "Naturaleza ",
    },

    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/gallery%2FCoMunidad3.png?alt=media&token=e1c3f5bb-8069-47de-89cf-7c452156506f",
      caption: "Eficiencia ",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/gallery%2FCowork4.png?alt=media&token=302fac07-6f45-46f3-9c17-97e1d94ed994",
      caption: "Red de negocios ",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/gallery%2FCopia%20de%20FOTOS%20PORTADA%20%20(1).png?alt=media&token=cd4824a4-689e-448e-a95a-053ba92358cb",
      caption: "Sinergia  ",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/landing-comarca-storage.appspot.com/o/gallery%2FSalaTaller1.png?alt=media&token=9a3d148e-9de1-41a6-a4fe-29658312ad80",
      caption: "Innovación  ",
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
