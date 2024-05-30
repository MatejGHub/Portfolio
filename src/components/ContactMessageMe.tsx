import {
  Heading,
  Box,
  useColorMode,
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
  Flex,
  Text,
  useBreakpointValue,
  HStack
} from "@chakra-ui/react";
import React, { useState } from "react";
import emailjs from "emailjs-com";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactMessageMe = () => {
  const [emailStatus, setEmailStatus] = useState(null);
  const { colorMode } = useColorMode();
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  });

  const templateParams = {
    email_id: form.email,
    company: form.name,
    message: form.message
  };

  const resetForm = () => {
    setForm({ name: "", email: "", message: "" });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_zisi8ef",
        "template_zvgxm4g",
        templateParams,
        "1USr9WMQwk5Zv_pw3"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setEmailStatus("success" as any);
      })
      .catch((error) => {
        console.log("FAILED...", error.text);
        setEmailStatus("failure" as any);
      });
    resetForm();
  };

  return (
    <>
      <Box
        backgroundColor={colorMode === "light" ? "gray.50" : "gray.700"}
        textAlign={["center", "start"]}
        padding={4}
        borderRadius={5}
      >
        <Heading>Message Me</Heading>
        <form onSubmit={handleFormSubmit}>
          <Flex
            gap={2}
            direction={useBreakpointValue({ base: "column", sm: "row" })}
          >
            <FormControl>
              <FormLabel>Your Email address</FormLabel>
              <Input
                id="email_id"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel>Your company</FormLabel>
              <Input
                id="company"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </FormControl>
          </Flex>
          <FormControl>
            <FormLabel>Message</FormLabel>
            <Textarea
              id="message"
              marginBottom={3}
              placeholder="Your message"
              size="sm"
              h="20px"
              maxLength={500}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
          </FormControl>
          <HStack>
            <Button type="submit">Submit</Button>
            {emailStatus === "success" ? (
              <Text color="green">Sent!</Text>
            ) : emailStatus === "failure" ? (
              <Text color="red.400">Failed to send!</Text>
            ) : null}
          </HStack>
        </form>
      </Box>
    </>
  );
};

export default ContactMessageMe;
