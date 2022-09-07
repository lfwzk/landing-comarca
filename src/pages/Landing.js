//import DefaultNavbar from "components/DefaultNavbar";
import DefaultFooter from "components/DefaultFooter";
import Header from "components/landing/Header";
import WorkingSection from "components/landing/WorkingSection";
import Services from "components/landing/Services";
import ContactSection from "components/landing/ContactSection";
import Mapview from "components/Maps/Mapview.js";
import Review from "components/landing/Review";
import Nav from "components/Nav";

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
        <Services />
        {/* <TeamSection /> */}
        <Review />
        <ContactSection />

        <Mapview />
      </main>

      <DefaultFooter />
    </>
  );
}
