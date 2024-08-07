import {
  Tab,
  TabIndicator,
  TabList,
  Tabs,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { memo } from "react";
import icons from "../../utils/icons";

const { BsGrid3X3, BsBookmark, BsSuitHeart } = icons;

const ProfileTabs = () => {
  return (
    <Tabs position="relative" align="center">
      <TabList>
        <Tab fontSize={"sm"} display={"flex"} gap={1}>
          <BsGrid3X3 />
          Bài viết
        </Tab>
        <Tab fontSize={"sm"} display={"flex"} gap={1}>
          <BsBookmark />
          Đã lưu
        </Tab>
        <Tab fontSize={"sm"} display={"flex"} gap={1}>
          <BsSuitHeart />
          Đã thích
        </Tab>
      </TabList>
    </Tabs>
  );
};

export default memo(ProfileTabs);
