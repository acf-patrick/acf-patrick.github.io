import Section from "../styles/Section";
import { AiOutlineCheck } from "react-icons/ai";
import { Container, CardStyled } from "../styles/Services.styled";
import { useInView } from "react-intersection-observer";

interface ICardProps {
  title: String;
  services: String[];
  index?: number;
}

function Card({ title, services, index }: ICardProps) {
  const { ref, inView } = useInView({ threshold: 0.5 });

  return (
    <CardStyled ref={ref} index={index!} inView={inView}>
      <div>
        <h3>{title}</h3>
      </div>

      <ul>
        {services.map((service, index) => (
          <li key={index}>
            <AiOutlineCheck />
            <p>{service}</p>
          </li>
        ))}
      </ul>
    </CardStyled>
  );
}

function Services() {
  const services: ICardProps[] = [
    {
      title: "Web Development",
      services: [
        "Creative ability",
        "Attention to details",
        "Keen interest to technology",
        "Testing and improving functionnality",
      ],
    },
    {
      title: "CAD Development",
      services: [
        "Experienced in Python and C/C++",
        "Strong knowledge of Design patterns",
        "Strong knowledge of Algebra and Geometry",
        "Capable of defining quality standards",
        "Experience in working with Visual Studio",
      ],
    },
    {
      title: "Game Development",
      services: [
        "Experienced in C#",
        "Creative problem-solving skills",
        "Analytical mindset",
      ],
    },
  ];

  return (
    <Section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <Container>
        {services.map((service, index) => {
          service.index = index;
          return <Card {...service} key={index} />;
        })}
      </Container>
    </Section>
  );
}

export default Services;
