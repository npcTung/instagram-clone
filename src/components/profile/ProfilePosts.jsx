import { Box, Grid, Skeleton, VStack } from "@chakra-ui/react";
import React, { memo, useEffect, useState } from "react";
import ProfilePost from "./ProfilePost";

const ProfilePosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const settimeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(settimeoutId);
  }, []);

  return (
    <Grid
      templateColumns={{ sm: "repeat(3,1fr)", md: "repeat(1,1fr" }}
      gap={1}
      columnGap={1}
    >
      {isLoading ? (
        [...Array(5)].map((_, idx) => (
          <VStack key={idx} gap={4}>
            <Skeleton w={"full"}>
              <Box h={"300px"}>contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))
      ) : (
        <>
          {[...Array(5)].map((_, idx) => (
            <ProfilePost key={idx} />
          ))}
        </>
      )}
    </Grid>
  );
};

export default memo(ProfilePosts);
