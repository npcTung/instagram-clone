import { Avatar, Button, Flex, Text } from "@chakra-ui/react";
import React, { memo } from "react";

const Unfollow = ({ onClose, data, handleOnclick, isLoading }) => {
  return (
    <Flex alignItems={"center"} flexDir={"column"}>
      <Avatar src={data.avatar} name={data.fullName} size={"xl"} my={5} />
      <Text as={"small"} mb={5}>
        {`Bỏ theo dõi @${data.userName}?`}
      </Text>
      <Button
        py={3}
        borderY={"1px solid gray"}
        w={"full"}
        fontWeight={"bold"}
        color={"red.500"}
        bg={"transparent"}
        onClick={handleOnclick}
        isLoading={isLoading}
        loadingText={"Đang xử lý..."}
      >
        Bỏ theo dõi
      </Button>
      <Button py={3} w={"full"} onClick={onClose} bg={"transparent"}>
        Hủy
      </Button>
    </Flex>
  );
};

export default memo(Unfollow);
