import { Button, Flex } from "@chakra-ui/react";
import React, { memo } from "react";

const modalOptions = [
  { text: "Báo cáo", bold: true },
  { text: "Bỏ theo dõi", bold: true },
  { text: "Thêm vào mục yêu thích", bold: false },
  { text: "Đi đến bài viết", bold: false },
  { text: "Chia sẻ lên...", bold: false },
  { text: "Sao chép liên kết", bold: false },
  { text: "Nhúng", bold: false },
  { text: "Giới thiệu về tài khoản này", bold: false },
  { text: "Hủy", bold: false },
];

const OptionListPost = ({ showOptionMenu, showAlert }) => {
  const optionListPost = (value) => {
    if (value === "Hủy") showOptionMenu.onClose();
    else if (value === "Báo cáo") console.log(value);
    else if (value === "Bỏ theo dõi") showAlert.onOpen();
    else if (value === "Thêm vào mục yêu thích") console.log(value);
    else if (value === "Đi đến bài viết") console.log(value);
    else if (value === "Chia sẻ lên...") console.log(value);
    else if (value === "Nhúng") console.log(value);
    else if (value === "Sao chép liên kết") console.log(value);
    else if (value === "Giới thiệu về tài khoản này") console.log(value);
  };
  return (
    <Flex flexDir={"column"} borderRadius={"md"} overflow={"hidden"}>
      {modalOptions.map((el, idx) => (
        <Button
          key={idx}
          borderBottomWidth={modalOptions.length !== idx + 1 && 1}
          cursor={"pointer"}
          fontWeight={el.bold && "bold"}
          color={el.bold && "#ED4956"}
          borderRadius={"none"}
          onClick={() => optionListPost(el.text)}
        >
          {el.text}
        </Button>
      ))}
    </Flex>
  );
};

export default memo(OptionListPost);
