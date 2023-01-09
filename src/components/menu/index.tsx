import * as React from "react";
import { Box, Container, Flex, Img } from "@chakra-ui/react";
import { Link } from "gatsby";
import Logo from "../../images/Logo icon.png";

const Navbar: React.FC = () => {
  return (
    <>
      <Flex h="14%" w='100vw'>
        <Box bg={"#272727"} h={"100%"} w={['0rem', '0rem', '10rem', '10rem', '20rem']}>
        </Box>
        <Box 
        me={['0rem', '0rem', '10rem', '10rem', '20rem']}
        w='100%'
        >
          <Flex justifyContent={"space-between"} >
            <Box bg={"#272727"} h={"100%"} px={8} py={'1.12rem'}>
              <Img src={Logo} h={"6rem"} w={"5rem"} objectFit="cover" />
            </Box>
            <Box fontSize={20} mt={9}>
              <Link
                activeStyle={{
                  color: "yellow",
                  fontWeight: "bold",
                  borderBottom: "5px solid yellow"
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
          <Box></Box>
        </Box>
      </Flex>
    </>
  );
};

export default Navbar;
