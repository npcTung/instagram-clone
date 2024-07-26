import { useState } from "react";
import useAuthStore from "../store/authStore";
import useShowToast from "./useShowToast";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { firestore, storage } from "../firebase/firebase";
import { doc, updateDoc } from "firebase/firestore";
import useUserStore from "../store/userStore";

const useEditProfile = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const authUser = useAuthStore((state) => state.user);
  const setAuthUser = useAuthStore((state) => state.setUser);
  const setUserProfile = useUserStore((state) => state.setUser);
  const { showToast } = useShowToast();

  const editProFile = async (data, selectedFile) => {
    if (isUpdating || !authUser) return;
    setIsUpdating(true);

    const storageRef = ref(storage, `profilePics/${authUser.uid}`);
    const userDocRef = doc(firestore, "users", authUser.uid);

    let URL = "";

    try {
      if (selectedFile) {
        await uploadString(storageRef, selectedFile, "data_url");
        URL = await getDownloadURL(ref(storage, `profilePics/${authUser.uid}`));
      }

      const updateUser = {
        ...authUser,
        userName: data.userName || authUser.userName,
        fullName: data.fullName || authUser.fullName,
        bio: data.bio || authUser.bio,
        avatar: URL || authUser.avatar,
        gender: data.gender || authUser.gender,
        link: data.link || authUser.link,
        phone: data.phone || authUser.phone,
      };

      await updateDoc(userDocRef, updateUser);
      localStorage.setItem("user-info", JSON.stringify(updateUser));
      setAuthUser(updateUser);
      setUserProfile(updateUser);
      showToast("Cập nhập hồ sơ người dùng thành công!", "success");
    } catch (error) {
      showToast(error.message, "error");
    } finally {
      setIsUpdating(false);
    }
  };
  return { editProFile, isUpdating };
};

export default useEditProfile;
