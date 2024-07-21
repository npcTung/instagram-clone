import { Avatar, Box, Flex, Grid, VStack } from "@chakra-ui/react";
import React, { memo } from "react";

const User = () => {
  return (
    <Box>
      <VStack spacing={4} w={"full"}>
        <Flex
          alignItems={"center"}
          justifyContent={"start"}
          w={"full"}
          gap={2}
          p={2}
        >
          <Avatar src="/img1.png" name="asaprogrammer" size={"lg"} />
          <Flex flexDir={"column"} justifyContent={"center"}>
            <Box fontWeight={"bold"}>asaprogrammer</Box>
            <Box fontSize={12} opacity={0.5}>
              @asaprogrammer
            </Box>
          </Flex>
        </Flex>
        <Grid templateColumns={"repeat(3, 1fr)"} gap={5}>
          <Flex
            flexDir={"column"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Box fontSize={18}>32</Box>
            <Box fontSize={12}>Bài viết</Box>
          </Flex>
          <Flex
            flexDir={"column"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Box fontSize={18}>1,200</Box>
            <Box fontSize={12}>Ngườu theo dõi</Box>
          </Flex>
          <Flex
            flexDir={"column"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Box fontSize={18}>1,200</Box>
            <Box fontSize={12}>Đang theo dõi</Box>
          </Flex>
        </Grid>
        <Flex></Flex>
      </VStack>
    </Box>
  );
};

export default memo(User);
