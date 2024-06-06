import React from "react";
import { GridItem, Heading, useBreakpointValue } from "@chakra-ui/react";
import HeroMessage from "./HeroMessage";
import HeroSkipToContent from "./HeroSkipToContent";
import CenteredBox from "../styles/BoxStyles";

const Hero = () => {
  const boxWidth = useBreakpointValue({ base: "100%", md: "90%", lg: "70%" });
  return (
    <>
      <GridItem area="hero" marginTop={5} width={boxWidth} alignItems="center">
        <CenteredBox>
          <Heading
            marginBottom={3}
            textAlign={"left"}
            fontSize="3xl"
            fontWeight="bold"
          >
            {" "}
            <HeroMessage />
          </Heading>
        </CenteredBox>
        <HeroSkipToContent />
      </GridItem>
    </>
  );
};

export default Hero;
