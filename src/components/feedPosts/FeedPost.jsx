import React, { memo } from "react";
import { PostFooter, PostHeader } from "..";
import { Box, Flex, Image } from "@chakra-ui/react";

const FeedPost = () => {
  return (
    <Flex flexDir={"column"} gap={2} pb={2}>
      <PostHeader />
      <Box my={2} borderRadius={"md"} overflow={"hidden"}>
        <Image src="/img1.png" alt="user profile pic" />
      </Box>
      <PostFooter />
    </Flex>
  );
};

export default memo(FeedPost);
