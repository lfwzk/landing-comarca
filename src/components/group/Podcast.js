import Nav from "../Nav";
import DefaultFooter from "components/DefaultFooter";
const Podcast = () => {
  return (
    <div>
      <div className=" w-full z-20 fixed ">
        <Nav />
      </div>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold font-exo">Podcast</h1>
        <div className="flex flex-col items-center justify-center">
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/show/0jrfxcnCrD7N9tlA0BGJp5?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <DefaultFooter />
    </div>
  );
};
export default Podcast;
