import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  Tooltip,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React, { memo, useRef, useState } from "react";
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../../utils/constants";
import { ModalChildren, PostDetail, User } from "..";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import icons from "../../utils/icons";

const { BsEmojiSmile, BsBookmark, BsBookmarkFill } = icons;

const PostFooter = ({ isPostDetail }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(1000);
  const [bookmark, setBookmark] = useState(false);
  const [commentText, setCommentText] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const inputRef = useRef(null);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const handleComment = () => {
    if (commentText !== "") {
      console.log(commentText);
      setCommentText("");
    }
  };

  const addEmoji = (e) => {
    const sym = e.unified.split("_");
    const codeArray = [];
    sym.forEach((el) => codeArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codeArray);
    setCommentText(commentText + emoji);
  };

  const handleClickComment = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <Flex flexDir={"column"} w={"full"} mx={"auto"} pb={{ base: 2 }}>
      <ModalChildren
        close
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "3xl", md: "6xl" }}
        isCentered
        bg={useColorModeValue("white", "black")}
        children={<PostDetail />}
      />
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={2}>
        <Box cursor={"pointer"} color={liked && "red.500"} onClick={handleLike}>
          {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        <Box
          cursor={"pointer"}
          onClick={isPostDetail ? handleClickComment : onOpen}
        >
          <CommentLogo />
        </Box>
        <Box cursor={"pointer"} onClick={() => setBookmark(!bookmark)}>
          {bookmark ? <BsBookmarkFill size={22} /> : <BsBookmark size={22} />}
        </Box>
      </Flex>
      <Text>{`${likes.toLocaleString("vi-VN")} lượt thích`}</Text>
      {!isPostDetail ? (
        <>
          <Flex alignItems={"center"} gap={1} fontSize={"sm"}>
            <Tooltip
              label={<User />}
              hasArrow
              boxShadow={"dark-lg"}
              openDelay={500}
              bg={useColorModeValue("gray.100", "gray.800")}
              color={useColorModeValue("black", "white")}
            >
              <Text as={"span"} cursor={"pointer"} fontWeight={700}>
                asaprogrammer_
              </Text>
            </Tooltip>
            <Text as={"span"} fontWeight={400}>
              Feeling good
            </Text>
          </Flex>
          <Text
            as={"span"}
            fontSize={"sm"}
            color={"gray"}
            cursor={"pointer"}
            onClick={onOpen}
          >
            Xem tất cả 1,000 bình luận
          </Text>
        </>
      ) : (
        <Text
          as={"small"}
          opacity={0.5}
          cursor={"pointer"}
          _hover={{ textDecor: "underline" }}
          transition={"all 0.5s ease"}
          w={"fit-content"}
        >
          1 ngày
        </Text>
      )}
      <InputGroup
        display={{ base: "none", md: "block" }}
        borderBottomWidth={1}
        borderColor={"gray.300"}
      >
        <InputLeftElement borderStyle={"none"} bg={"transparent"}>
          <Popover placement="top">
            <PopoverTrigger>
              <Box
                cursor={"pointer"}
                _hover={{ color: "gray.500" }}
                transition={"all"}
              >
                <BsEmojiSmile />
              </Box>
            </PopoverTrigger>
            <PopoverContent bg={useColorModeValue("white", "#151617")}>
              <PopoverBody zIndex={50}>
                <Picker
                  data={data}
                  emojiSize={20}
                  emojiButtonSize={28}
                  onEmojiSelect={addEmoji}
                  maxFrequentRows={0}
                  theme={useColorModeValue("light", "dark")}
                />
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </InputLeftElement>
        <Input
          variant="flushed"
          placeholder={"Viết bình luận..."}
          fontSize={14}
          ref={inputRef}
          borderRadius={"none"}
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <InputRightElement borderStyle={"none"} bg={"transparent"}>
          <Flex alignItems={"center"} gap={2}>
            <Box
              color={"blue.500"}
              as={"span"}
              cursor={"pointer"}
              onClick={handleComment}
            >
              Đăng
            </Box>
          </Flex>
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
};

export default memo(PostFooter);
