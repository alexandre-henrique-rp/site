import { Box, Img } from "@chakra-ui/react";
import hero from "../../images/hero1.jpg";
import React from "react";
import Navbar from "../menu";

export const Hero = () => {
  return (
    <Box
      w={"100%"}
      h={"100%"}
      bgImage={hero}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Navbar />
    </Box>
  );
};
