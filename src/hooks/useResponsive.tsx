import { useMediaQuery } from "@chakra-ui/react";
import React from "react";

const useResponsive = () => {
  const [isLargerThanMD] = useMediaQuery("(min-width: 778px)");
  const [isLargerThanSM] = useMediaQuery("(min-width: 500px)");
  const [isLargerThanLG] = useMediaQuery("min-width: 1024px");

  return { isLargerThanSM, isLargerThanMD, isLargerThanLG };
};

export default useResponsive;
