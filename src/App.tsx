import { useInView } from "react-intersection-observer";
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
  const [refHero, inViewHero] = useInView({ triggerOnce: true });
  const [refProjects, inViewProjects] = useInView({ triggerOnce: true });
  const [refAbout, inViewAbout] = useInView({ triggerOnce: true });
  const [refContact, inViewContact] = useInView({ triggerOnce: true });

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
        <GridItem
          area="hero"
          ref={refHero}
          style={{
            opacity: inViewHero ? 1 : 0,
            transform: inViewHero ? "translateY(0)" : "translateY(20px)",
            transition: "transform 1.5s, opacity 1.5s ",
            transitionDelay: "0.5s"
          }}
        >
          <CenteredBox>
            <Hero />
          </CenteredBox>
        </GridItem>
        <GridItem
          area="projects"
          ref={refProjects}
          style={{
            opacity: inViewProjects ? 1 : 0,
            transform: inViewHero ? "translateY(0)" : "translateY(10px)",
            transition: "transform 1.5s, opacity 1.5s ",
            transitionDelay: "1.2s"
          }}
        >
          <CenteredBox>
            <Projects />
          </CenteredBox>
        </GridItem>
        <GridItem bg="orange" area="credentials">
          <CenteredBox>Credentials</CenteredBox>
        </GridItem>
        <GridItem
          ref={refAbout}
          style={{
            opacity: inViewAbout ? 1 : 0,
            transform: inViewAbout ? "translateY(0)" : "translateY(15px)",
            transition: "transform 1.5s, opacity 1.5s "
          }}
          area="about"
        >
          <CenteredBox>
            <About />
          </CenteredBox>
        </GridItem>
        <GridItem
          area="contact"
          ref={refContact}
          style={{
            opacity: inViewContact ? 1 : 0,
            transition: "transform 1.5s, opacity 1.5s",
            transform: inViewContact ? "translateY(0)" : "translateY(15px)"
          }}
        >
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
