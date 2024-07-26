import React, { memo, useState } from "react";
import { InputForm, InputPassword, ModalChildren } from "..";
import { useForm } from "react-hook-form";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Button,
  Flex,
  FormLabel,
  Input,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import useLoginWithEmailAndPassword from "../../hooks/useLoginWithEmailAndPassword";
import useSendEmailResetPassword from "../../hooks/useSendEmailResetPassword";
import useShowToast from "../../hooks/useShowToast";

const Login = () => {
  const { login, loading, error } = useLoginWithEmailAndPassword();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setEmail] = useState("");
  const { sendResetPassword, sending, sendError } = useSendEmailResetPassword();
  const { showToast } = useShowToast();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    login(data);
  };

  const handleForgotPassword = async () => {
    await sendResetPassword(email);
    if (!sending) {
      showToast("Kiểm tra mail của bạn để tiếp tục thao tác", "success");
      onClose();
    }
  };

  return (
    <>
      <ModalChildren
        isOpen={isOpen}
        onClose={onClose}
        close
        isShowFooter
        handelOnclick={handleForgotPassword}
        isLoading={sending}
        textHeader={
          <Text as={"h1"} p={2} textAlign={"center"}>
            Quên mật khẩu
          </Text>
        }
      >
        <Box
          p={4}
          borderY={"1px solid"}
          borderColor={useColorModeValue("gray.300", "gray.600")}
        >
          <FormLabel htmlFor="email">Địa chỉ email</FormLabel>
          <Input
            id="email"
            type="email"
            placeholder={"Email..."}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {sendError && (
            <Alert status="error" borderRadius={"md"}>
              <AlertIcon />
              <AlertDescription>{sendError.message}</AlertDescription>
            </Alert>
          )}
        </Box>
      </ModalChildren>
      <form
        onSubmit={handleSubmit(handleLogin)}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 15,
          width: "100%",
        }}
      >
        <InputForm
          id={"email"}
          type="email"
          register={register}
          placeholder={"Email..."}
          wf
          errors={errors}
          isRequired
          validate={{
            required: "Điền thông tin bắt buộc.",
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Định dạng email không hợp lệ",
            },
          }}
        />
        <InputPassword
          id={"password"}
          register={register}
          wf
          placeholder={"Mật khẩu..."}
          errors={errors}
          validate={{
            required: "Điền thông tin bắt buộc.",
            pattern: {
              value:
                /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{5,}$/,
              message:
                "Mật khẩu phải có ít nhất 5 ký tự, chữ cái đầu viết hoa, chứa ký tự đặc biệt và số",
            },
          }}
        />
        <Flex alignItems={"center"} justifyContent={"end"}>
          <Text
            as={"span"}
            color={"blue.300"}
            cursor={"pointer"}
            _hover={{ color: "blue.500", textDecor: "underline" }}
            w={"fit-content"}
            onClick={onOpen}
          >
            Quên mật khẩu?
          </Text>
        </Flex>
        {error && (
          <Alert status="error" borderRadius={"md"}>
            <AlertIcon />
            <AlertDescription>{error.message}</AlertDescription>
          </Alert>
        )}
        <Button
          w={"full"}
          colorScheme="blue"
          size={"md"}
          fontSize={14}
          type="submit"
          isLoading={loading}
        >
          Đăng nhập
        </Button>
      </form>
    </>
  );
};

export default memo(Login);
