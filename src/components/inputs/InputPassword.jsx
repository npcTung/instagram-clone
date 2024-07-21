import {
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { memo, useState } from "react";
import icons from "../../utils/icons";

const { IoEyeOff, IoEye, IoInformationCircle } = icons;

const InputPassword = ({
  wf,
  label,
  disabled,
  register,
  id,
  validate,
  type = "password",
  placeholder,
  iconLeft,
  errors,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormControl w={wf ? "full" : "fit-content"}>
      {label && <FormLabel htmlFor={id}>{label}</FormLabel>}
      <InputGroup>
        {iconLeft && (
          <InputLeftAddon pointerEvents={"none"}>{iconLeft}</InputLeftAddon>
        )}
        <Input
          type={showPassword ? "text" : type}
          id={id}
          {...register(id, validate)}
          disabled={disabled}
          placeholder={placeholder}
          borderColor={useColorModeValue("gray.300", "gray.600")}
        />
        {errors[id] ? (
          <InputRightElement>
            <Tooltip hasArrow label={errors[id]?.message} placement="right">
              <Box>
                <IoInformationCircle size={20} color="red" />
              </Box>
            </Tooltip>
          </InputRightElement>
        ) : (
          <InputRightElement onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <IoEye /> : <IoEyeOff />}
          </InputRightElement>
        )}
      </InputGroup>
    </FormControl>
  );
};

export default memo(InputPassword);
