import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Box } from "@chakra-ui/react";
import { Hero } from "../components/hero";
import { Footer } from "../components/footer";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Box bg={"#070707"} h={"100vh"} maxW={'100%'}>
      <Hero />
      <Box bg={"#272727"}>

      </Box>
      <Footer />
    </Box>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="language" content="pt-BR" />
      <title>King Dev Software House</title>
      <meta
        name="description"
        content="Desenvolvemos Sites e Sistemas Web 100% Personalizados para Empresas de Pequeno e Médio Porte. Utilizando tecnologias atuais e soluções arrojadas. Solicite seu orçamento.
        "
      />
      <meta name="robots" content="index" />
      <meta name="author" content="king Dev" />
      <meta
        name="keywords"
        content="sites, sistemas, automação comercial, software sob medida, desenvolvimento de software"
      />

      <meta property="og:type" content="page" />
      <meta property="og:url" content="kingdev.com.br" />
      <meta property="og:title" content="King Dev Software House" />
      <meta
        property="og:image"
        content="https://img.freepik.com/fotos-premium/futuro-robo-de-inteligencia-artificial-e-cyborg_31965-6980.jpg?w=1380"
      />
      <meta
        property="og:description"
        content="Desenvolvemos Sites e Sistemas Web 100% Personalizados"
      />

      <meta property="article:author" content="king Dev" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@" />
      <meta name="twitter:title" content="King Dev Software House" />
      <meta name="twitter:creator" content="@" />
      <meta
        name="twitter:description"
        content="Desenvolvemos Sites e Sistemas Web 100% Personalizados"
      />
      {/* <!-- Analytics --> */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-FJ6N33B7LZ"
      ></script>
    </>
  );
};
