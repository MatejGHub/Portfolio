import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";

const CenteredBox: React.FC<BoxProps> = ({ children, ...props }) => (
  <Box display="flex" alignItems="center" justifyContent="center" {...props}>
    {children}
  </Box>
);

export default CenteredBox;
