import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from "@chakra-ui/react";
import React from "react";

interface ModalProps {
  buttonLabel: string;
  header: string;
  children: React.ReactNode;
  scrollBehavior?: "inside";
}

function ModalComponent({
  buttonLabel,
  header,
  children,
  scrollBehavior
}: ModalProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>{buttonLabel}</Button>

      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior={scrollBehavior}>
        <ModalOverlay />
        <ModalContent mx={2}>
          <ModalHeader>{header}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Contact me</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalComponent;
