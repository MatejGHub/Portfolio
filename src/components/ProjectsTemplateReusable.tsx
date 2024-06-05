import {
  Card,
  Stack,
  CardBody,
  Heading,
  CardFooter,
  Text,
  Box,
  Button
} from "@chakra-ui/react";
import React from "react";
import LinkItem from "../LinkItem";
import useResponsive from "../hooks/useResponsive";

const ProjectCard = ({ project, isRight }) => {
  const { isLargerThanSM } = useResponsive();

  return (
    <Card
      border={1}
      direction={{ base: "column", sm: isRight ? "row-reverse" : "row" }}
      variant="outline"
      textAlign="left"
      maxWidth="1000px"
      alignItems="center"
    >
      <Box
        borderRadius="lg"
        overflow="hidden"
        width={isLargerThanSM ? "200%" : "95%"}
      >
        <video loop controls width="100%">
          <source src={project.video} type="video/mp4" />
        </video>
      </Box>
      <Stack>
        <CardBody paddingBottom={isLargerThanSM ? 4 : 1}>
          <Heading size="xl">{project.title}</Heading>
          <Text fontSize={isLargerThanSM ? "md" : "sm"} py={2}>
            {project.description}
          </Text>
          <Text fontSize={isLargerThanSM ? "md" : "sm"}>
            {project.technologies}
          </Text>
        </CardBody>

        <CardFooter paddingY={0}>
          <Button fontSize={isLargerThanSM ? "md" : "sm"}>
            <LinkItem href={project.link}>View project</LinkItem>
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default ProjectCard;
