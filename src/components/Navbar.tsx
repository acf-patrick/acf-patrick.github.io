import { ScrollButton, Container } from "../styles/Navbar.styled";
import { HiHome } from "react-icons/hi";
import { BiBookAlt, BiMailSend, BiUserCircle } from "react-icons/bi";
import { FaRegHandshake } from "react-icons/fa";
import { GrDown } from "react-icons/gr";
import { useState } from "react";

function Navbar() {
  const [activeLink, setActiveLink] = useState(0);
  const links = [
    ["", <HiHome />],
    ["about", <BiUserCircle />],
    ["experience", <BiBookAlt />],
    ["services", <FaRegHandshake />],
    ["contact", <BiMailSend />],
  ];

  return (
    <>
      <ScrollButton href="#contact" onClick={() => setActiveLink(4)}>
        <GrDown />
      </ScrollButton>
      <Container>
        {links.map((link, index) => (
          <a
            href={`#${link[0]}`}
            key={index}
            className={activeLink === index ? "active" : ""}
            onClick={() => setActiveLink(index)}
          >
            {link[1]}
          </a>
        ))}
      </Container>
    </>
  );
}

export default Navbar;
