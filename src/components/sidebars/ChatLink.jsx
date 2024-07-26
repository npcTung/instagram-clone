import { Box, Link, Tooltip } from "@chakra-ui/react";
import React, { memo } from "react";
import path from "../../utils/path";
import { Link as RouterLink } from "react-router-dom";
import { MessagesLogo } from "../../utils/constants";

const ChatLink = () => {
  return (
    <Tooltip
      hasArrow
      label={"Tin nhắn"}
      placement="right"
      ml={1}
      openDelay={500}
      display={{ base: "block", md: "none" }}
    >
      <Link
        to={path.CHAT || null}
        display={"flex"}
        as={RouterLink}
        alignItems={"center"}
        gap={4}
        _hover={{ bg: "whiteAlpha.400" }}
        borderRadius={6}
        p={2}
        w={{ base: 10, md: "full" }}
        justifyContent={{ base: "center", md: "flex-start" }}
      >
        <MessagesLogo />
        <Box display={{ base: "none", md: "block" }}>Tin nhắn</Box>
      </Link>
    </Tooltip>
  );
};

export default memo(ChatLink);
