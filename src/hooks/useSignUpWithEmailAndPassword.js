import { auth, firestore } from "../firebase/firebase";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import useShowToast from "./useShowToast";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import useAuthStore from "../store/authStore";

const useSignUpWithEmailAndPassword = () => {
  const { showToast } = useShowToast();
  const loginUser = useAuthStore((state) => state.login);
  const [createUserWithEmailAndPassword, , loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const signup = async (data) => {
    const usersRef = collection(firestore, "users");
    // email
    const qEmail = query(usersRef, where("email", "==", data.email));
    const qEmailSnapshot = await getDocs(qEmail);
    // userName
    const qUserName = query(usersRef, where("userName", "==", data.userName));
    const qUserNameSnapshot = await getDocs(qUserName);
    // query email
    if (!qEmailSnapshot.empty) {
      showToast("Email đã tồn tại!", "error");
      return;
    }
    // query usernName
    if (!qUserNameSnapshot.empty) {
      showToast("Tên người dùng đã tồn tại!", "error");
      return;
    }

    try {
      const newUser = await createUserWithEmailAndPassword(
        data.email,
        data.password
      );
      if (!newUser && error) {
        showToast(error.message, "error");
        return;
      }
      if (newUser) {
        const userData = {
          uid: newUser.user.uid,
          email: data.email,
          userName: data.userName,
          fullName: data.fullName,
          bio: "",
          avatar: "",
          followers: [],
          following: [],
          posts: [],
          validated: false,
          savedPosts: [],
          link: "",
          gender: "",
          createdAt: Date.now(),
        };
        await setDoc(doc(firestore, "users", newUser.user.uid), userData);
        localStorage.setItem("user-info", JSON.stringify(userData));
        loginUser(userData);
        showToast("Đăng ký thành công", "success");
      }
    } catch (error) {
      showToast(error.message, "error");
    }
  };

  return { signup, loading, error };
};

export default useSignUpWithEmailAndPassword;
