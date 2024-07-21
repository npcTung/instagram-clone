import {
  Box,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Select,
  Tooltip,
} from "@chakra-ui/react";
import React, { memo } from "react";
import icons from "../../utils/icons";

const { IoInformationCircle } = icons;

const SelectForm = ({
  wf,
  label,
  disabled,
  register,
  id,
  validate,
  placeholder,
  iconLeft,
  errors,
  options,
  isRequired,
}) => {
  return (
    <FormControl w={wf ? "full" : "fit-content"} isRequired={isRequired}>
      {label && <FormLabel htmlFor={id}>{label}</FormLabel>}
      <InputGroup>
        {iconLeft && (
          <InputLeftAddon pointerEvents={"none"}>{iconLeft}</InputLeftAddon>
        )}
        <Select
          id={id}
          {...register(id, validate)}
          disabled={disabled}
          placeholder={placeholder}
          borderColor={"gray.300"}
          borderLeftRadius={"none"}
        >
          <option value={""}>Choses option</option>
          {options?.map((el) => (
            <option key={el.code} value={el.code}>
              {el.value}
            </option>
          ))}
        </Select>
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

export default memo(SelectForm);
