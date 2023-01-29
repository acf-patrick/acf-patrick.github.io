import { ScrollButton, Container } from "../styles/Navbar.styled";
import { HiHome } from "react-icons/hi";
import { BiBookAlt, BiMailSend, BiUserCircle } from "react-icons/bi";
import { FaRegHandshake } from "react-icons/fa";
import { GrDown } from "react-icons/gr";
import { useContext } from "react";
import { ActiveLinkContext } from "../App";

function Navbar() {
  const [activeLink, setActiveLink] = useContext(ActiveLinkContext);
  const links = [
    ["", <HiHome />],
    ["about", <BiUserCircle />],
    ["experience", <BiBookAlt />],
    ["services", <FaRegHandshake />],
    ["contact", <BiMailSend />],
  ];

  return (
    <>
      <ScrollButton href="#contact" onClick={() => setActiveLink("contact")}>
        <GrDown />
      </ScrollButton>
      <Container>
        {links.map((link, index) => (
          <a
            href={`#${link[0]}`}
            key={index}
            title={`${link[0]}`}
            className={activeLink === link[0] ? "active" : ""}
            onClick={() => setActiveLink(link[0])}
          >
            {link[1]}
          </a>
        ))}
      </Container>
    </>
  );
}

export default Navbar;
