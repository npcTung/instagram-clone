import {
  Box,
  Divider,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { memo, useState } from "react";
import { GoogleAuth, Login, SignUp } from "..";

const AuthFrom = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Flex flexDir={"column"} gap={5}>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4} w={"300px"}>
          <Image src="/logo.png" h={24} cursor={"pointer"} alt="Instagram" />
          {isLogin ? <Login /> : <SignUp />}
          <HStack w={"full"}>
            <Divider />
            <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
              HOẶC
            </Text>
            <Divider />
          </HStack>
          <GoogleAuth prefix={isLogin ? "Đăng nhập" : "Đăng ký"} />
        </VStack>
      </Box>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "Bạn chưa có tài khoản?" : "Bạn đã có tài khoản?"}
          </Box>
          <Box
            color={"blue.500"}
            onClick={() => setIsLogin(!isLogin)}
            cursor={"pointer"}
          >
            {isLogin ? "Đăng ký" : "Đăng nhập"}
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default memo(AuthFrom);
