import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, IconButton } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: alabioluwasegun8@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/Mckings1",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/oluwasegun-michael-alabi-7b2506177/",
  },
  {
    icon: faMedium,
    url: "https://medium.com/@mckings1",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/23570464/oluwasegun-michael",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const [transform, setTransform] = useState("translateY(0)");

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setTransform("translateY(-100px)"); // Adjust the value as needed
      } else {
        // Scrolling up
        setTransform("translateY(0)");
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      style={{
        transform,
        transition: "transform 0.3s ease", // Smooth transition effect
      }}
    >
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        transform={transform} // Apply the transform state here
        transition="transform 0.3s ease" // Smooth transition for Box
        backgroundColor="#18181b"
        zIndex={1000} // Ensure it stays on top of other content
      >
        <Box color="white" maxWidth="1280px" margin="0 auto">
          <HStack
            px={16}
            py={4}
            justifyContent="space-between"
            alignItems="center"
          >
            <nav>
              <HStack spacing={4}>
                {socials.map(({ icon, url }, index) => (
                  <a
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconButton
                      icon={<FontAwesomeIcon icon={icon} />}
                      isRound
                      variant="ghost"
                      aria-label="social-media-link"
                      size="lg"
                      colorScheme="whiteAlpha"
                    />
                  </a>
                ))}
              </HStack>
            </nav>

            <nav>
              <HStack spacing={8}>
                <a
                  href="#projects-section" // Adjusted to match your ID
                  onClick={handleClick("projects")}
                  style={{ cursor: "pointer" }}
                >
                  Projects
                </a>
                <a
                  href="#contactme-section" // Adjusted to match your ID
                  onClick={handleClick("contactme")}
                  style={{ cursor: "pointer" }}
                >
                  Contact Me
                </a>
              </HStack>
            </nav>
          </HStack>
        </Box>
      </Box>
    </header>
  );
};

export default Header;
