import Section from "../styles/Section";
import { AiOutlineCheck } from "react-icons/ai";
import { Container, CardStyled } from "../styles/Services.styled";

interface ICardProps {
  title: String;
  services: String[];
}

function Card({ title, services }: ICardProps) {
  return (
    <CardStyled>
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
        "Lorem ipsum dolor sit amet consectetur.",
        "Lorem ipsum dolor sit amet consectetur.",
        "Lorem ipsum dolor sit amet consectetur.",
        "Lorem ipsum dolor sit amet consectetur.",
        "Lorem ipsum dolor sit amet consectetur.",
        "Lorem ipsum dolor sit amet consectetur.",
      ],
    },
    {
      title: "CAD Development",
      services: [
        "Lorem ipsum dolor sit amet consectetur.",
        "Lorem ipsum dolor sit amet consectetur.",
        "Lorem ipsum dolor sit amet consectetur.",
        "Lorem ipsum dolor sit amet consectetur.",
        "Lorem ipsum dolor sit amet consectetur.",
      ],
    },
    {
      title: "Game Development",
      services: [
        "Lorem ipsum dolor sit amet consectetur.",
        "Lorem ipsum dolor sit amet consectetur.",
        "Lorem ipsum dolor sit amet consectetur.",
        "Lorem ipsum dolor sit amet consectetur.",
        "Lorem ipsum dolor sit amet consectetur.",
      ],
    },
  ];

  return (
    <Section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <Container>
        {services.map((service, index) => (
          <Card {...service} key={index} />
        ))}
      </Container>
    </Section>
  );
}

export default Services;
