import { useState } from "react";
import useShowToast from "./useShowToast";

const usePreviewImg = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const { showToast } = useShowToast();

  const handleImageChange = (file) => {
    if (
      file.type !== "image/png" &&
      file.type !== "image/jpg" &&
      file.type !== "image/jpeg"
    ) {
      showToast(
        "Định dạng ảnh sai chỉ nhận định dạng file có đuôi .png hoặc .jpg",
        "info"
      );
      setSelectedFile(null);
    } else {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => setSelectedFile(reader.result);
      reader.onerror = (error) => showToast(error, "error");
    }
  };
  return { handleImageChange, setSelectedFile, selectedFile };
};

export default usePreviewImg;
