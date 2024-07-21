import React, { memo, useEffect, useState } from "react";
import { SuggestedHeader, SuggestedUser } from "..";
import {
  Box,
  Flex,
  Text,
  VStack,
  Link,
  SkeletonCircle,
  Skeleton,
} from "@chakra-ui/react";

const SuggestedUsers = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const settimeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(settimeoutId);
  }, []);

  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Gợi ý cho bạn
        </Text>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          _hover={{ color: "gray.500" }}
          cursor={"pointer"}
        >
          Tất cả
        </Text>
      </Flex>
      {isLoading
        ? [...Array(5)].map((_, idx) => (
            <Flex key={idx} gap={2} alignItems={"center"}>
              <SkeletonCircle size={10} />
              <VStack gap={2} alignItems={"flex-start"}>
                <Skeleton h={"10px"} w={"200px"} />
                <Skeleton h={"10px"} w={"200px"} />
              </VStack>
            </Flex>
          ))
        : [...Array(5)].map((_, idx) => <SuggestedUser key={idx} />)}
      <Box
        fontSize={12}
        color={"gray.500"}
        alignItems={"start"}
        mt={5}
        w={"full"}
      >
        <Text as={"span"}>© 2024 INSTAGRAM FROM META </Text>
        <Link href={"#"} target="_blank" color="'blue.500" fontSize={14}>
          As a Programmer
        </Link>
      </Box>
    </VStack>
  );
};

export default memo(SuggestedUsers);
