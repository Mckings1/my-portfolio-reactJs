import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Mike!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4} align="center">
      <Avatar
        size="2xl"
        name="Mike"
        src="/profile-image.png" // Replace with an actual image URL
      />
      <Heading color="white" as="h1" size="l">
        {greeting}
      </Heading>
      <Heading color="white" as="h2" size="lg">
        {bio1}
      </Heading>
      <Heading color="white" as="h2" size="lg">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
