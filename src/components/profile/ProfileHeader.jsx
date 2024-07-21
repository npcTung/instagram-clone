import {
  Avatar,
  AvatarGroup,
  Button,
  Flex,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { memo } from "react";
import { EditProfile, ModalChildren } from "..";
import { useForm } from "react-hook-form";

const ProfileHeader = ({ data, isEdit }) => {
  const isShowEditUser = useDisclosure();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const handleEditProfile = (dataProfile) => {
    console.log(dataProfile);
  };

  return (
    <>
      <ModalChildren
        isOpen={isShowEditUser.isOpen}
        onClose={isShowEditUser.onClose}
        isCentered
        scrollBehavior={"inside"}
        close
        isShowFooter
        size={"xl"}
        handelOnclick={handleSubmit(handleEditProfile)}
        textHeader={
          <Text as={"h1"} p={2} textAlign={"center"}>
            Chỉnh sửa hồ sơ
          </Text>
        }
        children={
          <EditProfile
            register={register}
            errors={errors}
            data={data}
            reset={reset}
            watch={watch}
          />
        }
      />
      <Flex
        gap={{ base: 4, sm: 10 }}
        py={10}
        direction={{ base: "column", sm: "row" }}
      >
        <AvatarGroup
          size={{ base: "xl", md: "2xl" }}
          justifySelf={"center"}
          alignSelf={"flex-start"}
          mx={"auto"}
        >
          <Avatar src={data?.avatar} name={data?.fullName} />
        </AvatarGroup>
        <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
          <Flex
            gap={4}
            direction={{ base: "column", sm: "row" }}
            justifyContent={{ base: "center", sm: "flex-start" }}
            alignItems={{ base: "center" }}
            w={"full"}
          >
            <Text as={"span"} fontSize={{ base: "sm", md: "lg" }}>
              {data?.userName}
            </Text>
            <Flex gap={2} alignItems={"center"} justifyContent={"center"}>
              {isEdit ? (
                <Button
                  colorScheme={"gray"}
                  bg={useColorModeValue("gray.300", "gray.700")}
                  size={{ base: "sx", md: "sm" }}
                  onClick={isShowEditUser.onOpen}
                >
                  Chỉnh sửa hồ sơ
                </Button>
              ) : (
                <>
                  <Button
                    colorScheme={"gray"}
                    bg={useColorModeValue("gray.300", "gray.700")}
                    size={{ base: "sx", md: "sm" }}
                  >
                    Theo dõi
                  </Button>
                  <Button
                    colorScheme={"gray"}
                    bg={useColorModeValue("gray.300", "gray.700")}
                    size={{ base: "sx", md: "sm" }}
                  >
                    Nhắn tin
                  </Button>
                </>
              )}
            </Flex>
          </Flex>
          <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>
            <Text as={"span"} mr={1} fontSize={{ base: "xs", md: "sm" }}>
              <Text as={"b"}>{data?.posts?.length}</Text> bài viết
            </Text>
            <Text
              as={"span"}
              fontSize={{ base: "xs", md: "sm" }}
              textAlign={"center"}
            >
              người theo dõi <Text as={"b"}>{data?.followers?.length}</Text>
            </Text>
            <Text
              as={"span"}
              mr={1}
              fontSize={{ base: "xs", md: "sm" }}
              textAlign={"center"}
            >
              Đang theo dõi <Text as={"b"}>{data?.following?.length}</Text>{" "}
              người dùng
            </Text>
          </Flex>
          <Flex alignItems={"center"} gap={4}>
            <Text as={"span"} fontWeight={"bold"}>
              {data?.fullName}
            </Text>
          </Flex>
          <Text as={"span"}>{data?.bio ? data.bio : "Chưa có mô tả nào"}</Text>
        </VStack>
      </Flex>
    </>
  );
};

export default memo(ProfileHeader);
