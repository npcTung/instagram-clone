import { useEffect, useState } from "react";
import useAuthStore from "../store/authStore";
import useUserStore from "../store/userStore";
import useShowToast from "./useShowToast";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useFollowUser = (userId, onClose) => {
  const [isUpdateFollwing, setIsUpdateFollwing] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const { authUser, setAuthUser } = useAuthStore();
  const { user, setUser } = useUserStore();
  const { showToast } = useShowToast();

  const handleFollowUser = async () => {
    setIsUpdateFollwing(true);
    try {
      const currentUserRef = doc(firestore, "users", authUser.uid);
      const userToFollowOrUnfollowRef = doc(firestore, "users", userId);

      await updateDoc(currentUserRef, {
        following: isFollowing ? arrayRemove(userId) : arrayUnion(userId),
      });

      await updateDoc(userToFollowOrUnfollowRef, {
        followers: isFollowing
          ? arrayRemove(authUser.uid)
          : arrayUnion(authUser.uid),
      });

      if (isFollowing) {
        // unfollow
        setAuthUser({
          ...authUser,
          following: authUser.following.filter((uid) => uid !== userId),
        });
        setUser({
          ...user,
          followers: user.followers.filter((uid) => uid !== authUser.uid),
        });

        localStorage.setItem(
          "user-info",
          JSON.stringify({
            ...authUser,
            following: authUser.following.filter((uid) => uid !== userId),
          })
        );
        setIsFollowing(false);
        onClose();
      } else {
        // follow
        setAuthUser({
          ...authUser,
          following: [...authUser.following, userId],
        });
        setUser({ ...user, followers: [...user.followers, authUser.uid] });

        localStorage.setItem(
          "user-info",
          JSON.stringify({
            ...authUser,
            following: [...authUser.following, userId],
          })
        );
        setIsFollowing(true);
      }
    } catch (error) {
      showToast(error.message, "error");
    } finally {
      setIsUpdateFollwing(false);
    }
  };

  useEffect(() => {
    if (authUser) {
      const isFollowing = authUser.following.includes(userId);
      setIsFollowing(isFollowing);
    }
  }, [authUser, userId]);

  return { isUpdateFollwing, isFollowing, handleFollowUser };
};

export default useFollowUser;
