import { useEffect, useState } from "react";
import useShowToast from "./useShowToast";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import userStore from "../store/userStore";

const useGetUserByUserName = (userName) => {
  const [isLoading, setIsLoading] = useState(true);
  const { showToast } = useShowToast();
  const { user, setUser } = userStore();

  const getUser = async (username) => {
    setIsLoading(true);
    try {
      const q = query(
        collection(firestore, "users"),
        where("userName", "==", username)
      );
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) return setUser(null);
      let userDoc;
      querySnapshot.forEach((doc) => (userDoc = doc.data()));
      setUser(userDoc);
    } catch (error) {
      showToast(error.message, "error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (userName) getUser(userName);
  }, [userName, setUser, showToast]);
  return { isLoading, user };
};

export default useGetUserByUserName;
