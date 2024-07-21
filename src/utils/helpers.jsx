import {
  CreatePostLogo,
  NotificationsLogo,
  SearchLogo,
  MessagesLogo,
} from "./constants";
import icons from "./icons";
import path from "./path";

const { IoHome } = icons;

export const sidebarItems = [
  {
    icon: <IoHome size={20} />,
    text: "Trang chủ",
    link: path.PUBLIC,
  },
  {
    icon: <SearchLogo />,
    text: "Tìm kiếm",
  },
  {
    icon: <NotificationsLogo />,
    text: "Thông báo",
  },
  {
    icon: <CreatePostLogo />,
    text: "Tạo",
  },
  {
    icon: <MessagesLogo />,
    text: "Tin nhắn",
    link: path.CHAT,
  },
];

export const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};
