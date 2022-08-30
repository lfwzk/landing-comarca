//import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from "components/DefaultFooter";
import Header from "components/profile/Header";
import Content from "components/profile/Content";
import Nav from "components/Nav";

export default function Profile() {
  return (
    <>
      <div className="absolute w-full z-20">
        <Nav />
      </div>
      <main>
        <Header />
        <Content />
      </main>
      <DefaultFooter />
    </>
  );
}
