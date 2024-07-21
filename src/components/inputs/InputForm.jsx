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
import React, { memo } from "react";
import icons from "../../utils/icons";

const { IoInformationCircle } = icons;

const InputForm = ({
  wf,
  label,
  disabled,
  register,
  id,
  validate,
  type = "text",
  placeholder,
  iconLeft,
  errors,
  isRequired,
}) => {
  return (
    <FormControl w={wf ? "full" : "fit-content"} isRequired={isRequired}>
      {label && <FormLabel htmlFor={id}>{label}</FormLabel>}
      <InputGroup>
        {iconLeft && (
          <InputLeftAddon pointerEvents={"none"}>{iconLeft}</InputLeftAddon>
        )}
        <Input
          type={type}
          id={id}
          {...register(id, validate)}
          disabled={disabled}
          placeholder={placeholder}
          borderColor={useColorModeValue("gray.300", "gray.600")}
        />
        {errors[id] && (
          <InputRightElement>
            <Tooltip hasArrow label={errors[id]?.message} placement="right">
              <Box>
                <IoInformationCircle size={20} color="red" />
              </Box>
            </Tooltip>
          </InputRightElement>
        )}
      </InputGroup>
    </FormControl>
  );
};

export default memo(InputForm);
