import { Flex, Image, Text } from "@chakra-ui/react";
import React, { memo } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth, firestore } from "../../firebase/firebase";
import useShowToast from "../../hooks/useShowToast";
import useAuthStore from "../../store/authStore";
import { doc, getDoc, setDoc } from "firebase/firestore";

const GoogleAuth = ({ prefix }) => {
  const [signInWithGoogle, , , error] = useSignInWithGoogle(auth);
  const { showToast } = useShowToast();
  const loginUser = useAuthStore((state) => state.login);

  const handelGoogleAuth = async () => {
    try {
      const newUser = await signInWithGoogle();
      if (!newUser && error) {
        showToast(error.message, "error");
        return;
      }
      const userRef = doc(firestore, "users", newUser.user.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const userDoc = userSnap.data();
        localStorage.setItem("user-info", JSON.stringify(userDoc));
        loginUser(userDoc);
        showToast("Đăng nhập thành công", "success");
      } else {
        const userDoc = {
          uid: newUser.user.uid,
          email: newUser.user.email,
          userName: newUser.user.email.split("@")[0],
          fullName: newUser.user.displayName,
          bio: "",
          avatar: newUser.user.photoURL,
          followers: [],
          following: [],
          posts: [],
          validated: false,
          savedPosts: [],
          link: "",
          gender: "",
          createdAt: Date.now(),
        };
        await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
        localStorage.setItem("user-info", JSON.stringify(userDoc));
        loginUser(userDoc);
        showToast("Đăng ký thành công", "success");
      }
    } catch (error) {
      showToast(error.message, "error");
    }
  };

  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      cursor={"pointer"}
      onClick={handelGoogleAuth}
    >
      <Image src="/google.png" w={5} alt="'Google logo" />
      <Text mx={2} color={"blue.500"}>
        {`${prefix} với Google`}
      </Text>
    </Flex>
  );
};

export default memo(GoogleAuth);
