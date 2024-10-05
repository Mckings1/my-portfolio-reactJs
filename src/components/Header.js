import React, { useEffect, useRef } from "react";
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

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
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
                href="#"
                onClick={handleClick("projects")}
                style={{ cursor: "pointer" }}
              >
                Projects
              </a>
              <a
                href="#"
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
  );
};
export default Header;
