import { Avatar, Box, Link, Tooltip } from "@chakra-ui/react";
import React, { memo } from "react";
import useAuthStore from "../../store/authStore";
import { Link as RouterLink } from "react-router-dom";

const ProfileLink = () => {
  const currrentData = useAuthStore((state) => state.authUser);

  return (
    <Tooltip
      hasArrow
      label={"Trang cá nhân"}
      placement="right"
      ml={1}
      openDelay={500}
      display={{ base: "block", md: "none" }}
    >
      <Link
        to={`/@${currrentData?.userName}` || null}
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
        <Avatar
          size={"xs"}
          name={currrentData?.fullName}
          src={currrentData?.avatar}
        />
        <Box display={{ base: "none", md: "block" }}>Trang cá nhân</Box>
      </Link>
    </Tooltip>
  );
};

export default memo(ProfileLink);
