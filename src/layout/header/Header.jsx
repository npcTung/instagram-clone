import {
  Avatar,
  Box,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { InstagramLogo, InstagramMobileLogo } from "../../utils/constants";
import icons from "../../utils/icons";
import { sidebarItems } from "../../utils/helpers";
import useLogout from "../../hooks/useLogout";
import useAuthStore from "../../store/authStore";

const { BsList, TbLogout2, FaMoon, FaSun, IoSettingsSharp } = icons;

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { logout } = useLogout();
  const currrentData = useAuthStore((state) => state.user);

  if (!currrentData) return null;

  return (
    <header id="header">
      <Box
        height={"100vh"}
        borderRight={"1px solid"}
        borderColor={"gray.300"}
        py={8}
        position={"fixed"}
        width={{ md: "250px" }}
        top={0}
        left={0}
        px={{ base: 2, md: 4 }}
      >
        <Flex direction={"column"} gap={10} w={"full"} height={"full"}>
          <Link
            to={"/"}
            as={RouterLink}
            pl={2}
            display={{ base: "none", md: "block" }}
            cursor={"pointer"}
          >
            <InstagramLogo />
          </Link>
          <Link
            to={"/"}
            as={RouterLink}
            pl={2}
            display={{ base: "block", md: "none" }}
            cursor={"pointer"}
            _hover={{ bg: "whiteAlpha.200" }}
            w={10}
            borderRadius={6}
          >
            <InstagramMobileLogo />
          </Link>
          <Flex direction={"column"} gap={5} cursor={"pointer"}>
            {sidebarItems.map((item, idx) => (
              <Tooltip
                key={idx}
                hasArrow
                label={item.text}
                placement="right"
                ml={1}
                openDelay={500}
                display={{ base: "block", md: "none" }}
              >
                <Link
                  to={item.link || null}
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
                  {item.icon}
                  <Box display={{ base: "none", md: "block" }}>{item.text}</Box>
                </Link>
              </Tooltip>
            ))}
            <Tooltip
              hasArrow
              label={"Trang cá nhân"}
              placement="right"
              ml={1}
              openDelay={500}
              display={{ base: "block", md: "none" }}
            >
              <Link
                to={`/${currrentData?.userName}` || null}
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
                  size={"sm"}
                  name={currrentData?.fullName}
                  src={currrentData?.avatar}
                />
                <Box display={{ base: "none", md: "block" }}>Trang cá nhân</Box>
              </Link>
            </Tooltip>
          </Flex>
          <Tooltip
            hasArrow
            label={"Tùy chọn"}
            placement="right"
            ml={1}
            openDelay={500}
            display={{ base: "block", md: "none" }}
          >
            <Flex
              _hover={{ bg: "whiteAlpha.400" }}
              borderRadius={6}
              px={2}
              w={{ base: 10, md: "full" }}
              mt={"auto"}
              justifyContent={{ base: "center", md: "flex-start" }}
            >
              <Menu size={"full"}>
                <MenuButton>
                  <Flex gap={4} p={2} alignItems={"center"} w={"full"}>
                    <BsList size={20} />
                    <Box display={{ base: "none", md: "block" }}>Tùy chọn</Box>
                  </Flex>
                </MenuButton>
                <MenuList>
                  <MenuItem display={"flex"} gap={4} onClick={toggleColorMode}>
                    {colorMode === "dark" ? (
                      <FaSun size={20} />
                    ) : (
                      <FaMoon size={20} />
                    )}
                    <span>
                      {colorMode === "dark" ? "Chế độ sáng" : "Chế độ tối"}
                    </span>
                  </MenuItem>
                  <MenuItem display={"flex"} gap={4} alignItems={"center"}>
                    <IoSettingsSharp size={20} />
                    <span>Cài đặt</span>
                  </MenuItem>
                  <MenuItem
                    display={"flex"}
                    gap={4}
                    alignItems={"center"}
                    onClick={async () => await logout()}
                  >
                    <TbLogout2 size={20} />
                    <span>Đăng xuất</span>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Tooltip>
        </Flex>
      </Box>
    </header>
  );
};

export default Header;
