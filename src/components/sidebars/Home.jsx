import { Box, Link, Tooltip } from "@chakra-ui/react";
import React, { memo } from "react";
import { Link as RouterLink } from "react-router-dom";
import icons from "../../utils/icons";

const { IoHome } = icons;

const Home = () => {
  return (
    <Tooltip
      hasArrow
      label={"Trang chủ"}
      placement="right"
      ml={1}
      openDelay={500}
      display={{ base: "block", md: "none" }}
    >
      <Link
        to={"/" || null}
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
        <IoHome size={24} />
        <Box display={{ base: "none", md: "block" }}>Trang chủ</Box>
      </Link>
    </Tooltip>
  );
};

export default memo(Home);
