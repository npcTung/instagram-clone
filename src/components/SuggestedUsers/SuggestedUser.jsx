import {
  Avatar,
  Box,
  Button,
  Flex,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { memo, useCallback, useState } from "react";
import { AlertDialgog, Unfollow } from "..";

const SuggestedUser = () => {
  const showAlert = useDisclosure();
  const [isFollowed, setIsFollowed] = useState(false);

  const handelFollowing = useCallback(() => {
    if (isFollowed) {
      showAlert.onOpen();
      setIsFollowed(false);
    } else setIsFollowed(true);
  }, [isFollowed]);

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <AlertDialgog
        isOpen={showAlert.isOpen}
        onClose={showAlert.onClose}
        isCentered
        children={<Unfollow onClose={showAlert.onClose} />}
      />
      <Flex alignItems={"center"} gap={2}>
        <Avatar src="/img2.png" name="avatar test" size={"md"} />
        <VStack spacing={2}>
          <Box fontSize={12} fontWeight={"bold"} w={"full"}>
            npc_tung
          </Box>
          <Box fontSize={11} color={"gray.500"} w={"full"}>
            456 người theo dõi
          </Box>
        </VStack>
      </Flex>
      <Button
        fontSize={10}
        bg={"transparent"}
        color={"blue.500"}
        _hover={{ bg: "transparent", color: "blue.600" }}
        onClick={handelFollowing}
      >
        {isFollowed ? "Đang theo dõi" : "Theo dõi"}
      </Button>
    </Flex>
  );
};

export default memo(SuggestedUser);
