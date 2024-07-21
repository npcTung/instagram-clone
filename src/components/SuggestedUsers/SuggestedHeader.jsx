import { Avatar, Box, Flex, Link, Text } from "@chakra-ui/react";
import React, { memo } from "react";
import useLogout from "../../hooks/useLogout";
import useAuthStore from "../../store/authStore";
import { Link as RouterLink } from "react-router-dom";

const SuggestedHeader = () => {
  const { logout } = useLogout();
  const currenData = useAuthStore((state) => state.user);

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Link as={RouterLink} to={`/${currenData?.userName}`}>
        <Flex alignItems={"center"} gap={2}>
          <Avatar src={currenData?.avatar} name={currenData?.fullName} />
          <Text fontSize={12} fontWeight={"bold"}>
            {currenData?.userName}
          </Text>
        </Flex>
      </Link>
      <Box
        fontSize={12}
        fontWeight={"medium"}
        color={"blue.400"}
        cursor={"pointer"}
        onClick={logout}
      >
        Đăng xuất
      </Box>
    </Flex>
  );
};

export default memo(SuggestedHeader);
