import {
  Avatar,
  Box,
  Button,
  Flex,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { memo } from "react";
import { AlertDialgog, Unfollow } from "..";
import useFollowUser from "../../hooks/useFollowUser";
import useAuthStore from "../../store/authStore";

const SuggestedUser = ({ data, isSearch, setUser }) => {
  const showAlert = useDisclosure();
  const authUser = useAuthStore((state) => state.authUser);
  const { handleFollowUser, isFollowing, isUpdateFollwing } = useFollowUser(
    data.uid,
    showAlert.onClose
  );

  const onFollowUser = async () => {
    await handleFollowUser();
    setUser({
      ...data,
      followers: isFollowing
        ? data.followers.filter((follower) => follower !== authUser.uid)
        : [...data.followers, authUser.uid],
    });
  };

  return (
    <>
      <AlertDialgog
        isOpen={showAlert.isOpen}
        onClose={showAlert.onClose}
        isCentered
      >
        <Unfollow
          onClose={showAlert.onClose}
          data={data}
          handleOnclick={onFollowUser}
          isLoading={isUpdateFollwing}
        />
      </AlertDialgog>
      <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Flex alignItems={"center"} gap={2}>
          <Avatar src={data.avatar} name={data.fullName} size={"md"} />
          <VStack spacing={2}>
            <Box fontSize={12} fontWeight={"bold"} w={"full"}>
              {data.userName}
            </Box>
            <Box fontSize={11} color={"gray.500"} w={"full"}>
              {`${data.followers.length} người theo dõi`}
            </Box>
          </VStack>
        </Flex>
        {!isSearch && authUser.uid !== data.uid && (
          <Button
            fontSize={10}
            bg={"transparent"}
            color={"blue.500"}
            _hover={{ bg: "transparent", color: "blue.600" }}
            isLoading={isUpdateFollwing}
            onClick={() => (isFollowing ? showAlert.onOpen() : onFollowUser())}
          >
            {isFollowing ? "Đang theo dõi" : "Theo dõi"}
          </Button>
        )}
      </Flex>
    </>
  );
};

export default memo(SuggestedUser);
