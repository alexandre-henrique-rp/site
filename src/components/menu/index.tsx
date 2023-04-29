import * as React from "react";
import { Box, Container, Flex, Image, Img } from "@chakra-ui/react";
import { Link } from "gatsby";
// import Logo from "../../images/Logo icon.png";
import { LogoComponent } from "../style/logo";
import { ContainerStyle } from "../style/container";



const Navbar = () => {
  return (
    <>
      <Flex
        bgGradient="linear(
        blackAlpha.700 10%, 
        blackAlpha.600 30%, 
        blackAlpha.500 40%, 
        blackAlpha.300 65%, 
        blackAlpha.200 100%
        )"
        h="14%"
        w="100vw"
      >
        <ContainerStyle>
          <Flex justifyContent={"space-between"}>
            <Box h={"100%"} px={8} py={"1.12rem"}>
              <LogoComponent />
              {/* <Img src={Logo} h={"4rem"} w={"3.5rem"} objectFit="cover" /> */}
            </Box>
            <Box fontSize={"1rem"} fontFamily={"ubuntu"} mt={9}>
              <Link
                activeStyle={{
                  color: "yellow",
                  borderBottom: "2px solid yellow"
                }}
                activeClassName="active"
                style={{
                  textDecoration: "none",
                  marginRight: "2rem",
                  color: "white"
                }}
                to="/"
              >
                Home
              </Link>
              <Link
                activeStyle={{ color: "yellow", fontWeight: "bold" }}
                activeClassName="active"
                style={{
                  textDecoration: "none",
                  marginRight: "2rem",
                  color: "white"
                }}
                to="/sobre"
              >
                Sobre
              </Link>
              <Link
                activeStyle={{ color: "yellow", fontWeight: "bold" }}
                activeClassName="active"
                style={{
                  textDecoration: "none",
                  marginRight: "2rem",
                  color: "white"
                }}
                to="/404"
              >
                Portfólio
              </Link>
              <Link
                activeStyle={{ color: "yellow", fontWeight: "bold" }}
                activeClassName="active"
                style={{ textDecoration: "none", color: "white" }}
                to="/contato"
              >
                Contato
              </Link>
            </Box>
          </Flex>
        </ContainerStyle>
      </Flex>
    </>
  );
};

export default Navbar;
