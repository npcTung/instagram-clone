import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Link,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import React, { memo, useRef } from "react";
import { SearchLogo } from "../../utils/constants";
import { ModalChildren, SuggestedUser } from "..";
import useSearchUser from "../../hooks/useSearchUser";
import { Link as RouterLink } from "react-router-dom";

const Search = () => {
  const searchRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isLoading, user, getUserProfile, setUser } = useSearchUser();

  const handleSearchUser = (e) => {
    e.preventDefault();
    getUserProfile(searchRef.current.value);
  };

  return (
    <>
      <ModalChildren
        isOpen={isOpen}
        onClose={() => {
          setUser(null);
          onClose();
        }}
        close
        motionPreset={"slideInLeft"}
        textHeader={
          <Text as={"h1"} p={2} textAlign={"center"}>
            Tìm kiếm ngường dùng
          </Text>
        }
      >
        <form
          style={{
            padding: "20px",
            borderWidth: "1px 0 0 0",
            borderColor: "#CBD5E0",
          }}
          onSubmit={handleSearchUser}
        >
          <FormControl>
            <FormLabel id="userName">Tên người dùng</FormLabel>
            <InputGroup>
              <InputLeftAddon pointerEvents={"none"}>
                <SearchLogo size={15} />
              </InputLeftAddon>
              <Input
                id="userName"
                placeholder="Nhập tên người dùng..."
                ref={searchRef}
              />
            </InputGroup>
          </FormControl>
          <Flex w={"full"} justifyContent={"flex-end"}>
            <Button
              type="submit"
              ml={"auto"}
              size={"md"}
              my={4}
              isLoading={isLoading}
              loadingText={"Đang xử lý..."}
            >
              Tìm kiếm
            </Button>
          </Flex>
        </form>
        <Divider />
        <Box p={4}>
          {user && (
            <Link
              as={RouterLink}
              _hover={{ textDecor: "none" }}
              to={`/@${user.userName}`}
              onClick={() => {
                setUser(null);
                onClose();
              }}
            >
              <SuggestedUser data={user} isSearch setUser={setUser} />
            </Link>
          )}
        </Box>
      </ModalChildren>
      <Tooltip
        hasArrow
        label={"Tìm kiếm"}
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
          onClick={onOpen}
        >
          <SearchLogo />
          <Box display={{ base: "none", md: "block" }}>Tìm kiếm</Box>
        </Flex>
      </Tooltip>
    </>
  );
};

export default memo(Search);
