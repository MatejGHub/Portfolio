import { Grid, GridItem } from "@chakra-ui/react";
import "./App.scss";
import React from "react";
import CenteredBox from "./styles/BoxStyles"; //Styles to center the content
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <>
      <Grid
        templateAreas={`
        "nav nav "
        "hero hero "
        "projects projects "
        "credentials credentials "
        "about about "
        "contact contact "
        "footer footer  "
      `}
        templateColumns={`repeat(2, 1fr)`}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <GridItem area="hero">
          <CenteredBox>
            <Hero />
          </CenteredBox>
        </GridItem>
        <GridItem area="projects">
          <CenteredBox>
            <Projects />
          </CenteredBox>
        </GridItem>
        <GridItem bg="orange" area="credentials">
          <CenteredBox>Credentials</CenteredBox>
        </GridItem>
        <GridItem area="about">
          <CenteredBox>
            <About />
          </CenteredBox>
        </GridItem>
        <GridItem area="contact">
          <CenteredBox>
            <Contact />
          </CenteredBox>
        </GridItem>
        <GridItem area="footer">
          <CenteredBox>
            <Footer />
          </CenteredBox>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

// This project uses: React, Typescript, ChakraUI, EmailJS
