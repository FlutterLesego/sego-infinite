import About from "../../components/home-one/about";
import AutoSlider from "../../components/home-one/auto-slider";
import Hero from "../../components/home-one/hero";
import Projects from "../../components/home-one/projects";
import Services from "../../components/home-one/services";
import Teams from "../../components/home-one/teams";
import Testimonial from "../../components/home-one/testimonial";
import WhyChooseUs from "../../components/home-one/why-choose-us";

// Teams images
import Team1Img from "../../assets/images/team/team1.png";
import Team2Img from "../../assets/images/team/team2.png";
import Team3Img from "../../assets/images/team/team3.png";
import Team4Img from "../../assets/images/team/team4.png";

const servicesData = [
  {
    id: crypto.randomUUID(),
    title: "Website Design",
    description:
      "Transform your ideas into stunning, responsive websites that captivate and engage your audience.",
    icon: "icon-web",
  },
  {
    id: crypto.randomUUID(),
    title: "Mobile App Development",
    description:
      "Develop intuitive, high-performance mobile apps tailored to enhance user experience on all platforms.",
    icon: "icon-design-tools",
  },
  {
    id: crypto.randomUUID(),
    title: "Graphics Design",
    description:
      "Create visually compelling designs that communicate your brand's message and stand out in the digital landscape.",
    icon: "icon-branding",
  },
  {
    id: crypto.randomUUID(),
    title: "Digital Marketing",
    description:
      "Boost your online presence with data-driven digital marketing strategies that drive traffic and conversions.",
    icon: "icon-design-thinking",
  },
];

const teamsData = [
  {
    id: crypto.randomUUID(),
    name: "Andrew Mark",
    designation: "Creative Director",
    img: Team1Img,
  },
  {
    id: crypto.randomUUID(),
    name: "Jack Taylor",
    designation: "Senior Designer",
    img: Team2Img,
  },
  {
    id: crypto.randomUUID(),
    name: "Martine Joy",
    designation: "Project Manager",
    img: Team3Img,
  },
  {
    id: crypto.randomUUID(),
    name: "Adam Straw",
    designation: "Web Developer",
    img: Team4Img,
  },
];

function HomeOne() {
  return (
    <>
      <Hero />
      <Services services={servicesData} />
      <Projects />
      <WhyChooseUs />
      {/* <Testimonial /> */}
      <AutoSlider />
      {/* <Teams teams={teamsData} /> */}
    </>
  );
}

export default HomeOne;
