import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { memo } from "react";

const ModalChildren = ({
  isOpen,
  onClose,
  children,
  textHeader,
  isShowFooter,
  isCentered,
  size,
  close,
  scrollBehavior,
  bg,
  handelOnclick,
  isLoading,
  motionPreset,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered={isCentered}
      size={size}
      scrollBehavior={scrollBehavior ? "inside" : "outside"}
      motionPreset={motionPreset}
    >
      <ModalOverlay />
      <ModalContent bg={bg}>
        {textHeader && <ModalHeader p={0}>{textHeader}</ModalHeader>}
        {close && <ModalCloseButton />}
        <ModalBody p={0}>{children}</ModalBody>
        {isShowFooter && (
          <ModalFooter display={"flex"} gap={1} alignItems={"center"}>
            <Button
              colorScheme="blue"
              onClick={handelOnclick}
              isLoading={isLoading}
              w={"100px"}
            >
              Gửi
            </Button>
            <Button colorScheme="red" onClick={onClose} w={"100px"}>
              Hủy
            </Button>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
};

export default memo(ModalChildren);
