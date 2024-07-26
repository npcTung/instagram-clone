import { Box, Flex, Spinner } from "@chakra-ui/react";
import React from "react";
import Header from "../header/Header";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";
import path from "../../utils/path";
import { useLocation } from "react-router-dom";

const PageLayoutSpinner = () => (
  <Flex
    flexDir={"column"}
    h={"100vh"}
    alignItems={"center"}
    justifyContent={"center"}
  >
    <Spinner size={"xl"} />
  </Flex>
);

const PageLayOut = ({ children }) => {
  const { pathname } = useLocation();
  const [user, loading] = useAuthState(auth);
  const canRenderHeader = pathname !== path.LOGIN && user;

  const checkingUserIsAuth = !user && loading;
  if (checkingUserIsAuth) return <PageLayoutSpinner />;

  return (
    <Flex>
      {canRenderHeader && (
        <Box w={{ base: "70px", md: "240px" }}>
          <Header />
        </Box>
      )}
      <Box flex={1} w={{ base: "calc(100%-70px)", md: "calc(100%-240px)" }}>
        {children}
      </Box>
    </Flex>
  );
};

export default PageLayOut;
