import React from "react";
import { motion } from "framer-motion";
import { GridItem, Text, Heading } from "@chakra-ui/react";
import HeroMessage from "./HeroMessage";

const Hero = () => {
  return (
    <>
      <GridItem area="hero">
        <motion.div
          initial={{ opacity: 0, y: 5 }} // start with opacity 0 and moved down by 50px
          animate={{ opacity: 1, y: 0 }} // animate to full opacity and original position
          transition={{ duration: 0.5 }} // this animation will take 1 second
        >
          <Heading textAlign={"center"} fontSize="3xl" fontWeight="bold">
            <HeroMessage />
          </Heading>
        </motion.div>
      </GridItem>
    </>
  );
};

export default Hero;
