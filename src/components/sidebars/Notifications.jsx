import { Box, Flex, Tooltip } from "@chakra-ui/react";
import React, { memo } from "react";
import { NotificationsLogo } from "../../utils/constants";

const Notifications = () => {
  return (
    <Tooltip
      hasArrow
      label={"Thông báo"}
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
        <NotificationsLogo />
        <Box display={{ base: "none", md: "block" }}>Thông báo</Box>
      </Flex>
    </Tooltip>
  );
};

export default memo(Notifications);
