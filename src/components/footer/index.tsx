import {
  Box,
  Divider,
  Flex,
} from "@chakra-ui/react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { GrInstagram } from "react-icons/gr";
import React from "react";

export const Footer = () => {
  return (
    <footer>
      <Box bg={"#070707"} h="10rem">
        <Box 
        mx={["0rem", "0rem", "10rem", "10rem", "20rem"]} 
        w="100%"
        >
          <Flex></Flex>
       
          <Flex></Flex>
        </Box>
      </Box>
    </footer>
  );
};
