import Title from "components/landing/Title";
import TeamCard from "components/landing/TeamCard";
import Image1 from "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
import Image2 from "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
import Image3 from "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
import Image4 from "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

export default function TeamSection() {
  return (
    <section className="pt-20 pb-48">
      <div className="container max-w-7xl mx-auto px-4">
        <Title heading="EL EQUIPO DE COMARCA">Los miembros de comarca</Title>
        <div className="flex flex-wrap">
          <TeamCard img={Image1} name="Ryan Tompson" position="Web Developer" />
          <TeamCard
            img={Image2}
            name="Romina Hadid"
            position="Marketing Specialist"
          />
          <TeamCard img={Image3} name="Alexa Smith" position="UI/UX Designer" />
          <TeamCard
            img={Image4}
            name="Jenna Kardi"
            position="Founder and CEO"
          />
        </div>
      </div>
    </section>
  );
}
