import React, { memo } from "react";
import { useForm } from "react-hook-form";
import { InputForm, InputPassword } from "..";
import { Button } from "@chakra-ui/react";
import useSignUpWithEmailAndPassword from "../../hooks/useSignUpWithEmailAndPassword";
import useShowToast from "../../hooks/useShowToast";

const SignUp = () => {
  const { signup, loading, error } = useSignUpWithEmailAndPassword();
  const { showToast } = useShowToast();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handelRegister = (data) => {
    const { confirmPassword, ...payload } = data;
    signup(payload);
    if (error) showToast(error.message, "error");
  };

  return (
    <form
      onSubmit={handleSubmit(handelRegister)}
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
        validate={{
          required: "Điền thông tin bắt buộc.",
          pattern: {
            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: "Định dạng email không hợp lệ",
          },
        }}
      />
      <InputForm
        id={"userName"}
        register={register}
        placeholder={"Tên tài khoản..."}
        wf
        errors={errors}
        validate={{
          required: "Điền thông tin bắt buộc.",
          pattern: {
            value: /^[a-zA-Z0-9_]*$/,
            message: "Tên người dùng không được có dấu, khoảng trắng",
          },
        }}
      />
      <InputForm
        id={"fullName"}
        register={register}
        placeholder={"Họ và tên..."}
        wf
        errors={errors}
        validate={{
          required: "Điền thông tin bắt buộc.",
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
      <InputPassword
        id={"confirmPassword"}
        register={register}
        wf
        placeholder={"Nhập lại mật khẩu..."}
        errors={errors}
        validate={{
          required: "Điền thông tin bắt buộc.",
          validate: (value) =>
            value === password.value || "Mật khẩu không khớp",
        }}
      />
      <Button
        w={"full"}
        colorScheme="blue"
        size={"md"}
        fontSize={14}
        type="submit"
        isLoading={loading}
      >
        Đăng ký
      </Button>
    </form>
  );
};

export default memo(SignUp);
