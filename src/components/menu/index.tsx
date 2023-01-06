import * as React from "react";
import { Box, Container, Flex } from "@chakra-ui/react";
import { Link } from "gatsby";

const Navbar: React.FC = () => {
  
  return (
    <>
      <Flex bg={"facebook.600"} h={28}>
        <Container maxW="container.xl">
          <Flex justifyContent={"space-between"}>
            <Box>ola</Box>
            <Box fontSize={20}>
              <Link
                activeStyle={{ color: "white" }}
                activeClassName="active"
                style={{ textDecoration: "none", marginRight: "2rem" }}
                to="/"
              >
                Home
              </Link>
              <Link
                activeStyle={{ color: "white" }}
                activeClassName="active"
                style={{ textDecoration: "none", marginRight: "2rem" }}
                to="/sobre"
              >
                Sobre
              </Link>
              <Link
                activeStyle={{ color: "white" }}
                activeClassName="active"
                style={{ textDecoration: "none", marginRight: "2rem" }}
                to="/404"
              >
                Portfólio
              </Link>
              <Link
                activeStyle={{ color: "white" }}
                activeClassName="active"
                style={{ textDecoration: "none" }}
                to="/contato"
              >
                Contato
              </Link>
            </Box>
          </Flex>
          <Box></Box>
        </Container>
      </Flex>
    </>
  );
};

export default Navbar;
