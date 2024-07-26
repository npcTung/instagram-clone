import React, { memo } from "react";
import {
  ChatLink,
  CreatePost,
  Home,
  Notifications,
  ProfileLink,
  Search,
} from "..";

const SidebarItem = () => {
  return (
    <>
      <Home />
      <Search />
      <Notifications />
      <CreatePost />
      <ChatLink />
      <ProfileLink />
    </>
  );
};

export default memo(SidebarItem);
