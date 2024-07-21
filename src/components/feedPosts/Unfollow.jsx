import { Avatar, Flex, Text } from "@chakra-ui/react";
import React, { memo } from "react";

const Unfollow = ({ onClose }) => {
  return (
    <Flex alignItems={"center"} flexDir={"column"}>
      <Avatar src="/img1.png" name="asaprogrammer" size={"xl"} my={5} />
      <Text as={"small"} mb={5}>
        Bỏ theo dõi @asaprogrammer?
      </Text>
      <Flex
        py={3}
        borderY={"1px solid gray"}
        w={"full"}
        justifyContent={"center"}
        fontWeight={"bold"}
        color={"red.500"}
        cursor={"pointer"}
      >
        Bỏ theo dõi
      </Flex>
      <Flex
        py={3}
        w={"full"}
        justifyContent={"center"}
        cursor={"pointer"}
        onClick={onClose}
      >
        Hủy
      </Flex>
    </Flex>
  );
};

export default memo(Unfollow);
