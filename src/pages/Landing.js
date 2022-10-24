import DefaultFooter from "components/DefaultFooter";
import Header from "components/landing/Header";
import WorkingSection from "components/landing/WorkingSection";

import ContactSection from "components/landing/ContactSection";
import Mapview from "components/Maps/Mapview.js";
import Review from "components/landing/Review";
import Nav from "components/Nav";

import Pricing from "components/landing/Pricing";

import Team from "components/landing/Team";
import Announcement from "components/landing/Announcement";
export default function Landing() {
  return (
    <>
      <div className=" w-full z-20 fixed">
        <Nav />
      </div>
      <main>
        <Header />

        <div className="pb-12">
          <WorkingSection />
        </div>

        <Pricing />
        <Announcement />

        <Review />
        <ContactSection />
        <Team />
        <Mapview />
      </main>

      <DefaultFooter />
    </>
  );
}
