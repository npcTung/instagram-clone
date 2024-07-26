import { Box, Flex, Tooltip } from "@chakra-ui/react";
import React, { memo } from "react";
import { CreatePostLogo } from "../../utils/constants";

const CreatePost = () => {
  return (
    <Tooltip
      hasArrow
      label={"Tạo bài viết"}
      placement="right"
      ml={1}
      openDelay={500}
      display={{ base: "block", md: "none" }}
    >
      <Flex
        alignItems={"center"}
        cursor={"pointer"}
        gap={4}
        _hover={{ bg: "whiteAlpha.400" }}
        borderRadius={6}
        p={2}
        w={{ base: 10, md: "full" }}
        justifyContent={{ base: "center", md: "flex-start" }}
      >
        <CreatePostLogo />
        <Box display={{ base: "none", md: "block" }}>Tạo bài viết</Box>
      </Flex>
    </Tooltip>
  );
};

export default memo(CreatePost);
