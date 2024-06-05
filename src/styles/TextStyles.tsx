import { useBreakpointValue } from "@chakra-ui/react";

export const useTextStyles = () => {
  const bigTitle = useBreakpointValue({ base: "4xl", md: "5xl", lg: "6xl" });
  const title = useBreakpointValue({ base: "2xl", md: "3xl", lg: "4xl" });
  const subtitle = useBreakpointValue({ base: "lg", md: "xl", lg: "2xl" });
  const text = useBreakpointValue({ base: "md", md: "lg", lg: "xl" });
  const smallText = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });

  return { bigTitle, title, subtitle, text, smallText };
};
