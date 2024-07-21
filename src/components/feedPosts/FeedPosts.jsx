import {
  Box,
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  Stack,
  VStack,
} from "@chakra-ui/react";
import React, { memo, useEffect, useState } from "react";
import { FeedPost } from "..";

const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const settimeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(settimeoutId);
  }, []);

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading
        ? [...Array(5)].map((_, idx) => (
            <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
              <Flex gap={2} alignItems={"center"}>
                <SkeletonCircle size={10} />
                <VStack gap={2} alignItems={"flex-start"}>
                  <Skeleton h={"10px"} w={"200px"} />
                  <Skeleton h={"10px"} w={"200px"} />
                </VStack>
              </Flex>
              <Skeleton w={"full"}>
                <Box h={"500px"}>contents wrepped</Box>
              </Skeleton>
            </VStack>
          ))
        : [...Array(5)].map((_, idx) => <FeedPost key={idx} />)}
    </Container>
  );
};

export default memo(FeedPosts);
