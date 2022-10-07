//import DefaultNavbar from "components/DefaultNavbar";
import DefaultFooter from "components/DefaultFooter";
import Header from "components/landing/Header";
import WorkingSection from "components/landing/WorkingSection";
//import Gallery from "components/landing/Gallery";
import ContactSection from "components/landing/ContactSection";
import Mapview from "components/Maps/Mapview.js";
import Review from "components/landing/Review";
import Nav from "components/Nav";
//import Mission from "components/landing/Mission";
import Pricing from "components/landing/Pricing";
//import Promotional from "./Promotional";
import Team from "components/landing/Team";
export default function Landing() {
  return (
    <>
      <div className="absolute w-full z-20 ">
        {/* <DefaultNavbar /> */}

        <Nav />

        {/* <Nabe /> */}
      </div>
      <main>
        <Header />
        {/* <Promotional /> */}
        <div className="pb-12">
          <WorkingSection />
          {/* <Mission /> */}
        </div>

        <Pricing />

        {/* <Gallery /> */}
        {/* <TeamSection /> */}
        <Review />
        <ContactSection />
        <Team />
        <Mapview />
      </main>

      <DefaultFooter />
    </>
  );
}
