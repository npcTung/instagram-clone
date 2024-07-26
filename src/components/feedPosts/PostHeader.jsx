import {
  Avatar,
  Box,
  Flex,
  Link,
  Tooltip,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React, { memo, useCallback, useState } from "react";
import icons from "../../utils/icons";
import { Link as RouterLink } from "react-router-dom";
import { AlertDialgog, ModalChildren, OptionListPost, Unfollow } from "..";
import { User } from "..";

const { BsThreeDots } = icons;

const PostHeader = () => {
  const showOptionMenu = useDisclosure();
  const showAlert = useDisclosure();
  const [following, setFollowing] = useState(false);

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
      >
        <Unfollow onClose={showAlert.onClose} />
      </AlertDialgog>
      <ModalChildren
        isCentered
        size={"sm"}
        bg={"#262626"}
        isOpen={showOptionMenu.isOpen}
        onClose={showOptionMenu.onClose}
      >
        <OptionListPost showOptionMenu={showOptionMenu} showAlert={showAlert} />
      </ModalChildren>
      <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Flex alignItems={"center"} gap={2}>
          <Tooltip
            label={<User />}
            hasArrow
            openDelay={500}
            bg={useColorModeValue("gray.100", "gray.800")}
            color={useColorModeValue("black", "white")}
            boxShadow={"dark-lg"}
          >
            <Link as={RouterLink} to={"#"}>
              <Avatar
                src="/1.png"
                name="asaprogrammer"
                size={"sm"}
                zIndex={10}
              />
            </Link>
          </Tooltip>
          <Flex gap={1} alignItems={"center"}>
            <Tooltip
              label={<User />}
              hasArrow
              openDelay={500}
              bg={useColorModeValue("gray.100", "gray.800")}
              color={useColorModeValue("black", "white")}
              boxShadow={"dark-lg"}
            >
              <Link as={RouterLink} to={"#"} fontSize={14} fontWeight={"bold"}>
                asaprogrammer
              </Link>
            </Tooltip>
            <Box color={"gray.500"}>•</Box>
            <Link as={RouterLink} to={"#"} fontSize={12} opacity={0.5}>
              1 ngày
            </Link>
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
        </Flex>
        <Tooltip
          label="Tùy chọn khác"
          hasArrow
          placement="right-end"
          color={useColorModeValue("black", "white")}
          bg={useColorModeValue("gray.300", "gray.700")}
          openDelay={500}
        >
          <Box cursor={"pointer"} onClick={showOptionMenu.onOpen}>
            <BsThreeDots size={20} />
          </Box>
        </Tooltip>
      </Flex>
    </>
  );
};

export default memo(PostHeader);
