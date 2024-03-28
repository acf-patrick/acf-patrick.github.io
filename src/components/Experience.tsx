import Section from "../styles/Section";
import { BsCheck2Circle } from "react-icons/bs";
import { Container, CardStyled } from "../styles/Experience.styled";
import { useInView } from "react-intersection-observer";

interface ICardProps {
  title: String;
  skills: String[][];
  index?: number;
}

function Card({ title, skills, index }: ICardProps) {
  const { ref, inView } = useInView();
  return (
    <CardStyled ref={ref} inView={inView} index={index!}>
      <h3>{title}</h3>
      <div>
        {skills.map((skill, index) => (
          <article key={index}>
            <BsCheck2Circle />
            <div>
              <h4>{skill[0]}</h4>
              <small>{skill[1]}</small>
            </div>
          </article>
        ))}
      </div>
    </CardStyled>
  );
}

function Experience() {
  const skills: ICardProps[] = [
    {
      title: "frontend development",
      skills: [
        ["Angular", "intermediate"],
        ["React", "experienced"],
        ["Styled-components", "intermediate"],
      ],
    },
    {
      title: "backend development",
      skills: [
        ["Node JS", "experienced"],
        ["Rust", "experienced"],
        ["PostgreSQL", "experienced"],
        ["NestJS", "experienced"],
      ],
    },
    {
      title: "desktop development",
      skills: [
        ["Qt C++", "experienced"],
        ["Rust", "experienced"],
        ["Tauri Rust", "experienced"],
      ],
    },
  ];

  return (
    <Section id="experience">
      <h5>What skills I have</h5>
      <h2>My Experience</h2>

      <Container>
        {skills.map((skill, index) => {
          skill.index = index;
          return <Card {...skill} key={index} />;
        })}
      </Container>
    </Section>
  );
}

export default Experience;
