import { Heading, HStack, Image, Text, VStack, Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      bg={"white"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      spacing={2}
      p={0}
      boxShadow="md"
      align="start"
      width="100%"
      maxWidth="350px" // Adjust max width as needed
    >
      <Image src={imageSrc} alt={title} borderRadius="md" />
      <Heading as="h3" size="md" color="black" p={4}>
        {title}
      </Heading>
      <Text fontSize="md" color="black" px={4}>
        {description}
      </Text>
      <HStack spacing={2} px={4} pb={4}>
        <Button colorScheme="teal" variant="outline" p={2}>
          Learn More
        </Button>
        <FontAwesomeIcon icon={faArrowRight} size="1x" color="black" />
      </HStack>
    </VStack>
  );
};

export default Card;
