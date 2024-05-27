import { Grid, GridItem } from "@chakra-ui/react";
import "./App.scss";
import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import CenteredBox from "./styles/BoxStyles"; //Styles to center the content

// Finished with navbar for now. You will add extra later. Now focus on the hero section what you want to place in it?

function App() {
  return (
    <>
      <Grid
        templateAreas={`
        "nav nav nav"
        "hero hero hero"
        "main main main"
      `}
        templateColumns={`repeat(3, 1fr)`}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <GridItem area="hero">
          <CenteredBox>
            <Hero />
          </CenteredBox>
        </GridItem>
        <GridItem bg="gray" area="main">
          <CenteredBox>Main</CenteredBox>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
