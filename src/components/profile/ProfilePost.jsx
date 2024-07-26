import {
  Flex,
  GridItem,
  Image,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React, { memo } from "react";
import icons from "../../utils/icons";
import { ModalChildren, PostDetail } from "..";

const { BsSuitHeartFill, FaComment } = icons;

const ProfilePost = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ModalChildren
        close
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "sm", sm: "md", md: "6xl" }}
        isCentered
        bg={useColorModeValue("white", "black")}
      >
        <PostDetail />
      </ModalChildren>
      <GridItem
        cursor={"pointer"}
        borderRadius={"md"}
        overflow={"hidden"}
        border={"1px solid white"}
        position={"relative"}
        aspectRatio={1 / 1}
        onClick={onOpen}
      >
        <Flex
          opacity={0}
          _hover={{ opacity: 1 }}
          position={"absolute"}
          inset={0}
          bg={"blackAlpha.700"}
          transition={"all 0.3s ease"}
          zIndex={1}
          justifyContent={"center"}
        >
          <Flex
            flexDir={{ sm: "column", md: "row" }}
            alignItems={"center"}
            justifyContent={"center"}
            gap={{ sm: 1, md: 50 }}
          >
            <Flex alignItems={"center"} gap={2} color={"white"}>
              <BsSuitHeartFill size={24} />
              <Text fontWeight={"bold"} ml={2}>
                7
              </Text>
            </Flex>
            <Flex alignItems={"center"} gap={2} color={"white"}>
              <FaComment size={24} />
              <Text fontWeight={"bold"} ml={2}>
                20
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Image
          src="/img1.png"
          alt="profile post"
          w={"full"}
          h={"full"}
          objectFit={"cover"}
        />
      </GridItem>
    </>
  );
};

export default memo(ProfilePost);
