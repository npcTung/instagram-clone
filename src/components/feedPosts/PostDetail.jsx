import {
  Avatar,
  Box,
  Divider,
  Flex,
  Image,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { memo, useCallback, useState } from "react";
import icons from "../../utils/icons";
import {
  AlertDialgog,
  Comment,
  ModalChildren,
  OptionListPost,
  PostFooter,
  Unfollow,
} from "..";

const { BsThreeDots } = icons;

const PostDetail = () => {
  const [following, setFollowing] = useState(false);
  const showAlert = useDisclosure();
  const showOptionMenu = useDisclosure();

  const handelFollowing = useCallback(() => {
    if (following) {
      showAlert.onOpen();
      setFollowing(false);
    } else setFollowing(true);
  }, [following]);

  return (
    <>
      <AlertDialgog
        isOpen={showAlert.isOpen}
        onClose={showAlert.onClose}
        isCentered
        children={<Unfollow onClose={showAlert.onClose} />}
      />
      <ModalChildren
        isCentered
        size={"sm"}
        bg={"#262626"}
        isOpen={showOptionMenu.isOpen}
        onClose={showOptionMenu.onClose}
        children={
          <OptionListPost
            showOptionMenu={showOptionMenu}
            showAlert={showAlert}
          />
        }
      />
      <Flex gap={4} w={{ base: "90%", sm: "70%", md: "full" }} mx={"auto"}>
        <Box
          borderLeftRadius={4}
          overflow={"hidden"}
          borderColor={"whiteAlpha.300"}
          flex={1.5}
        >
          <Image src="/img1.png" alt="profile post" w={"full"} h={"full"} />
        </Box>
        <Flex
          flex={1}
          flexDir={"column"}
          px={10}
          py={2}
          display={{ base: "none", md: "flex" }}
        >
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Flex alignItems={"center"} gap={3}>
              <Avatar
                src="/profilepic.png"
                size={"sm"}
                name="As a programmer"
              />
              <Text as={"span"} fontWeight={"bold"} fontSize={12}>
                asaprogrammer_
              </Text>
              <Box color={"gray.500"}>•</Box>
              <Box
                fontSize={12}
                color={"#0F9BF6"}
                fontWeight={"bold"}
                _hover={{ color: "blue.500" }}
                cursor={"pointer"}
                onClick={handelFollowing}
              >
                {following ? "Đang theo dõi" : "Theo dõi"}
              </Box>
            </Flex>
            <Box px={2} cursor={"pointer"} onClick={showOptionMenu.onOpen}>
              <BsThreeDots />
            </Box>
          </Flex>
          <Divider my={4} bg={"gray.500"} />
          <VStack
            w={"full"}
            alignItems={"start"}
            maxH={"580px"}
            overflowY={"auto"}
          >
            {[...Array(20)].map((_, idx) => (
              <Comment key={idx} />
            ))}
          </VStack>
          <Divider my={4} bg={"gray.500"} />
          <PostFooter isPostDetail />
        </Flex>
      </Flex>
    </>
  );
};

export default memo(PostDetail);
