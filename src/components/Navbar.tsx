import Container from "../styles/Navbar.styled";
import { HiHome } from "react-icons/hi";
import { BiBookAlt, BiMailSend, BiUserCircle } from "react-icons/bi";
import { FaRegHandshake } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [activeLink, setActiveLink] = useState("");
  const links = [
    ["", <HiHome />],
    ["about", <BiUserCircle />],
    ["experience", <BiBookAlt />],
    ["services", <FaRegHandshake />],
    ["contact", <BiMailSend />],
  ];

  return (
    <Container>
      {links.map((link, index) => (
        <a
          href={`#${link[0]}`}
          className={activeLink === link[0] ? "active" : ""}
          onClick={() => setActiveLink(String(link[0]))}
        >
          {link[1]}
        </a>
      ))}
    </Container>
  );
}

export default Navbar;
