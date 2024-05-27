import { SimpleGrid, useColorMode, Button } from "@chakra-ui/react";
import React from "react";

const HeroSkipToContent = () => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === "light" ? "black" : "white";
  const columns = { base: 1, md: 3 };

  return (
    <>
      <SimpleGrid marginBottom={5} columns={columns} spacing={2} paddingX={3}>
        <Button>Button1</Button>
        <Button>Button2</Button>
        <Button>Button3</Button>
      </SimpleGrid>
    </>
  );
};

export default HeroSkipToContent;
