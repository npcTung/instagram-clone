import {
  Container,
  Flex,
  Link,
  Skeleton,
  SkeletonCircle,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { ProfileHeader, ProfilePosts, ProfileTabs } from "../../components";
import { useParams } from "react-router-dom";
import useGetUserByUserName from "../../hooks/useGetUserByUserName";
import useAuthStore from "../../store/authStore";
import { Link as RouterLink } from "react-router-dom";
import path from "../../utils/path";

const UserNotFound = () => (
  <Flex
    flexDir={"column"}
    textAlign={"center"}
    mx={"auto"}
    h={"100vh"}
    justifyContent={"center"}
  >
    <Text as={"span"} fontSize={"2xl"}>
      User Not Found
    </Text>
    <Link
      as={RouterLink}
      to={path.PUBLIC}
      color={"blue.500"}
      w={"max-content"}
      mx={"auto"}
    >
      Trở về trang chủ
    </Link>
  </Flex>
);

const ProfileHeaderSkeleton = () => (
  <Flex
    gap={{ base: "4", sm: "10" }}
    py={10}
    direction={{ base: "column", sm: "row" }}
    justifyContent={"center"}
    alignItems={"center"}
  >
    <SkeletonCircle size={"24"} />
    <VStack
      alignItems={{ base: "center", sm: "flex-start" }}
      gap={2}
      mx={"auto"}
      flex={1}
    >
      <Skeleton h={"12px"} w={"150px"} />
      <Skeleton h={"12px"} w={"150px"} />
    </VStack>
  </Flex>
);

const UserPage = () => {
  const { userName } = useParams();
  const { isLoading, user } = useGetUserByUserName(userName);
  const currentUser = useAuthStore((state) => state.user);
  const isEdit = user?.uid === currentUser.uid ? true : false;
  const userNotFound = !isLoading && !user;

  if (userNotFound) return <UserNotFound />;

  return (
    <Container maxW={"container.lg"}>
      <Flex
        py={10}
        px={4}
        pl={{ base: 4, md: 10 }}
        w={"full"}
        mx={"auto"}
        flexDir={"column"}
      >
        {!isLoading && user && <ProfileHeader data={user} isEdit={isEdit} />}
        {isLoading && <ProfileHeaderSkeleton />}
      </Flex>
      <Flex
        px={{ base: 2, sm: 4 }}
        maxW={"full"}
        mx={"auto"}
        borderTop={"2px solid"}
        borderColor={useColorModeValue("gray.300", "gray.800")}
        direction={"column"}
        gap={2}
      >
        <ProfileTabs />
        <ProfilePosts />
      </Flex>
    </Container>
  );
};

export default UserPage;
