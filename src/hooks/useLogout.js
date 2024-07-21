import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";

const useLogout = () => {
  const [signOut, loading, error] = useSignOut(auth);
  const { showToast } = useShowToast();
  const logoutUser = useAuthStore((state) => state.logout);

  const logout = async () => {
    try {
      await signOut();
      localStorage.removeItem("user-info");
      logoutUser();
    } catch (error) {
      showToast(error.message, "error");
    }
  };
  return { logout, loading, error };
};

export default useLogout;
