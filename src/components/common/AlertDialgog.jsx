import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import React, { memo, useRef } from "react";

const AlertDialgog = ({
  isOpen,
  onClose,
  children,
  isCentered,
  scrollBehavior,
  size,
}) => {
  const cancelRef = useRef();
  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isCentered={isCentered}
      scrollBehavior={scrollBehavior}
      size={size}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader
            borderBottomWidth={1}
            fontSize="lg"
            fontWeight="bold"
            textAlign={"center"}
          >
            Thông báo
          </AlertDialogHeader>
          <AlertDialogBody p={0}>{children}</AlertDialogBody>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default memo(AlertDialgog);
