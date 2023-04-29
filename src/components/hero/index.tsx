import { Box, Img } from "@chakra-ui/react";
import React from "react";
import Navbar from "../menu";

export const Hero = () => {
  return (
    <Box
      h={"100%"}
      bgImage={'../../images/hero1.jpg'}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Navbar />
    </Box>
  );
};
