//import DefaultNavbar from "components/DefaultNavbar";
import DefaultFooter from "components/DefaultFooter";
import Header from "components/landing/Header";
import WorkingSection from "components/landing/WorkingSection";
//import TeamSection from "components/landing/TeamSection";
import ContactSection from "components/landing/ContactSection";
import Mapview from "components/Maps/Mapview.js";
import Review from "components/landing/Review";
import Nav from "components/Nav";
//import Nabe from "components/Nabe";
//import DefaultNavbar from "components/DefaultNavbar";
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
        <WorkingSection />
        {/* <TeamSection /> */}
        <Review />
        <ContactSection />

        <Mapview />
      </main>

      <DefaultFooter />
    </>
  );
}
