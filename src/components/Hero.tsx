import React from "react";
import { motion } from "framer-motion";
import { GridItem, Heading, useBreakpointValue } from "@chakra-ui/react";
import HeroMessage from "./HeroMessage";
import HeroSkipToContent from "./HeroSkipToContent";
import CenteredBox from "../styles/BoxStyles";

const Hero = () => {
  const boxWidth = useBreakpointValue({ base: "100%", md: "90%", lg: "70%" });
  return (
    <>
      <GridItem area="hero" marginTop={5} width={boxWidth} alignItems="center">
        <motion.div
          initial={{ opacity: 0, y: 5 }} // start with opacity 0 and moved down by 50px
          animate={{ opacity: 1, y: 0 }} // animate to full opacity and original position
          transition={{ duration: 0.5 }} // this animation will take 1 second
        >
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
        </motion.div>
      </GridItem>
    </>
  );
};

export default Hero;
