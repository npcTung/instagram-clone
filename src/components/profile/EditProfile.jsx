import {
  Avatar,
  Box,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Textarea,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { memo, useEffect, useState } from "react";
import icons from "../../utils/icons";
import { getBase64 } from "../../utils/helpers";
import { InputForm, SelectForm } from "..";
import useShowToast from "../../hooks/useShowToast";

const {
  PiLinkSimpleBold,
  FaUserLarge,
  RiShieldUserFill,
  MdEmail,
  IoInformationCircle,
  FaPhone,
  CgGenderFemale,
  CgGenderMale,
} = icons;

const genders = [
  { code: "male", value: "Nam" },
  { code: "female", value: "Nữ" },
];

const EditProfile = ({ register, errors, data, reset, watch }) => {
  const [avatar, setAvatar] = useState(null);
  const { showToast } = useShowToast();

  const handlePreviewAvatar = async (file) => {
    if (
      file.type !== "image/png" &&
      file.type !== "image/jpg" &&
      file.type !== "image/jpeg"
    ) {
      showToast(
        "Định dạng ảnh sai chỉ nhận định dạng file có đuôi .png hoặc .jpg",
        "info"
      );
      return;
    } else {
      const base64 = await getBase64(file);
      setAvatar(base64);
    }
  };

  useEffect(() => {
    if (watch("avatar")?.length > 0) handlePreviewAvatar(watch("avatar")[0]);
  }, [watch("avatar")]);

  useEffect(() => {
    reset({
      fullName: data.fullName || "",
      userName: data.userName || "",
      email: data.email || "",
      bio: data.bio || "",
      link: data.link || "",
      phone: data.phone || "",
      gender: data.gender || "",
    });
    setAvatar(data.avatar || null);
  }, [data]);

  return (
    <Flex
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
      borderY={"1px solid"}
      borderColor={useColorModeValue("gray.300", "gray.600")}
    >
      <Stack
        spacing={4}
        w={"full"}
        maxW={"xl"}
        bg={useColorModeValue("white", "gray.700")}
        p={6}
      >
        <FormControl id="userName">
          <FormLabel>Avatar</FormLabel>
          <Stack direction={["column", "row"]} spacing={6}>
            <Center>
              <Avatar size="2xl" src={avatar} />
            </Center>
            <Center w="full">
              <FormControl>
                <FormLabel
                  htmlFor="avatar"
                  w="full"
                  p={2}
                  textAlign={"center"}
                  cursor={"pointer"}
                  borderRadius={"lg"}
                  bg={useColorModeValue("gray.300", "gray.500")}
                  _hover={{ bg: useColorModeValue("gray.400", "gray.600") }}
                >
                  Tải ảnh
                </FormLabel>
                <Input id="avatar" type="file" hidden {...register("avatar")} />
              </FormControl>
            </Center>
          </Stack>
        </FormControl>
        <Flex alignItems={"center"} gap={5}>
          <InputForm
            label={"Tên tài khoản"}
            id={"userName"}
            register={register}
            errors={errors}
            wf
            placeholder={"Tên tài khoản..."}
            isRequired
            iconLeft={<FaUserLarge />}
            validate={{
              required: "Điền thông tin bắt buộc.",
              pattern: {
                value: /^[a-zA-Z0-9_]*$/,
                message: "Tên người dùng không được có dấu, khoảng trắng",
              },
            }}
          />
          <InputForm
            label={"Họ và tên"}
            id={"fullName"}
            register={register}
            placeholder={"Họ và tên..."}
            wf
            errors={errors}
            isRequired
            iconLeft={<RiShieldUserFill />}
            validate={{
              required: "Điền thông tin bắt buộc.",
            }}
          />
        </Flex>
        <Flex alignItems={"center"} gap={5}>
          <InputForm
            label={"Số điện thoại"}
            id={"phone"}
            register={register}
            placeholder={"Số điện thoại..."}
            wf
            iconLeft={<FaPhone />}
            errors={errors}
            isRequired
            validate={{
              required: "Điền thông tin bắt buộc.",
              pattern: {
                value: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
                message: "Số điện thoại không hợp lệ",
              },
            }}
          />
          <SelectForm
            label={"Giới tính"}
            id={"gender"}
            register={register}
            wf
            errors={errors}
            isRequired
            iconLeft={
              data.gender === "male" ? (
                <CgGenderMale size={20} />
              ) : (
                <CgGenderFemale size={20} />
              )
            }
            validate={{ required: "Điền thông tin bắt buộc." }}
            options={genders}
          />
        </Flex>
        <InputForm
          label={"Địa chỉ email"}
          id={"email"}
          type="email"
          register={register}
          placeholder={"Email..."}
          wf
          errors={errors}
          isRequired
          disabled
          iconLeft={<MdEmail />}
          validate={{
            required: "Điền thông tin bắt buộc.",
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Định dạng email không hợp lệ",
            },
          }}
        />
        <InputForm
          label={"Liên kết"}
          id={"link"}
          register={register}
          placeholder={"Liên kết..."}
          wf
          errors={errors}
          isRequired
          iconLeft={<PiLinkSimpleBold />}
          validate={{
            required: "Điền thông tin bắt buộc.",
          }}
        />
        <FormControl isRequired>
          <FormLabel htmlFor="bio">Mô tả</FormLabel>
          <InputGroup>
            <Textarea
              id="bio"
              {...register("bio", { required: "Điền thông tin bắt buộc." })}
              w={"full"}
              minH={"150px"}
              maxH={"300px"}
              placeholder="Mô tả..."
            />
            {errors["bio"] && (
              <InputRightElement>
                <Tooltip
                  hasArrow
                  label={errors["bio"]?.message}
                  placement="right"
                >
                  <Box>
                    <IoInformationCircle size={20} color="red" />
                  </Box>
                </Tooltip>
              </InputRightElement>
            )}
          </InputGroup>
        </FormControl>
      </Stack>
    </Flex>
  );
};

export default memo(EditProfile);
