import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import useShowToast from "./useShowToast";
import { auth, firestore } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import useAuthStore from "../store/authStore";

const useLoginWithEmailAndPassword = () => {
  const { showToast } = useShowToast();
  const loginUser = useAuthStore((state) => state.login);
  const [signInWithEmailAndPassword, , loading, error] =
    useSignInWithEmailAndPassword(auth);

  const login = async (data) => {
    try {
      const userCred = await signInWithEmailAndPassword(
        data.email,
        data.password
      );
      if (userCred) {
        const docRef = doc(firestore, "users", userCred.user.uid);
        const docSnap = await getDoc(docRef);
        localStorage.setItem("user-info", JSON.stringify(docSnap.data()));
        loginUser(docSnap.data());
        showToast("Đăng nhập thành công!", "success");
      }
    } catch (error) {
      showToast(error.message, "error");
    }
  };
  return { login, loading, error };
};

export default useLoginWithEmailAndPassword;
