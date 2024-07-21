import {
  Box,
  Container,
  Divider,
  Flex,
  HStack,
  Image,
  Text,
  Tooltip,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { AuthForm } from "../../components";
import icons from "../../utils/icons";

const { FaSun, FaMoon } = icons;

const Login = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      minH={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      px={4}
      position={"relative"}
    >
      <Box
        position={"absolute"}
        top={1}
        right={1}
        cursor={"pointer"}
        onClick={toggleColorMode}
      >
        {colorMode === "dark" ? (
          <Tooltip hasArrow label={"Đổi chế đội sáng"}>
            <Box>
              <FaSun size={20} />
            </Box>
          </Tooltip>
        ) : (
          <Tooltip hasArrow label="Đổi chế độ tối">
            <Box>
              <FaMoon size={20} />
            </Box>
          </Tooltip>
        )}
      </Box>
      <Container maxW={"container.md"} padding={0}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
          <Box display={{ base: "none", md: "block" }}>
            <Image src="/auth.png" h={650} alt="Phone img" />
          </Box>
          <VStack spacing={4} align={"stretch"}>
            <AuthForm />
            <HStack>
              <Divider />
              <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
                or continue with
              </Text>
              <Divider />
            </HStack>
            <Flex gap={5} justifyContent={"center"}>
              <Image src="/playstore.png" h={10} alt="Playstore logo" />
              <Image src="/microsoft.png" h={10} alt="Microsoft logo" />
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Login;
