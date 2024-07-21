import {
  Avatar,
  Flex,
  Text,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { memo, useState } from "react";
import { User } from "..";
import icons from "../../utils/icons";

const { BsSuitHeart, BsSuitHeartFill } = icons;

const Comment = () => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(2000);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <Flex gap={4} justifyContent={"space-between"} w={"full"} pr={3}>
      <Flex gap={4}>
        <Avatar src="/img3.png" name="nameProfile" size={"sm"} />
        <Flex direction={"column"}>
          <Flex gap={2}>
            <Tooltip
              label={<User />}
              hasArrow
              openDelay={500}
              bg={useColorModeValue("gray.100", "gray.800")}
              color={useColorModeValue("black", "white")}
            >
              <Text
                as={"span"}
                fontWeight={"bold"}
                fontSize={12}
                cursor={"pointer"}
              >
                nameProfile
              </Text>
            </Tooltip>
            <Text as={"span"} fontSize={14}>
              như loz
            </Text>
          </Flex>
          <Flex gap={4}>
            <Text as={"span"} fontSize={12} color={"gray"}>
              1 ngày
            </Text>
            <Text as={"span"} fontSize={12} color={"gray"}>
              <Text as={"b"}>{likes.toLocaleString("vi-VN")}</Text> lượt thích
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Text as={"span"} cursor={"pointer"} onClick={handleLike}>
        {liked ? <BsSuitHeartFill color="red" /> : <BsSuitHeart />}
      </Text>
    </Flex>
  );
};

export default memo(Comment);
