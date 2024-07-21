import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import useShowToast from "./useShowToast";
import { auth, firestore } from "../firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const useSendEmailResetPassword = () => {
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  const { showToast } = useShowToast();

  const sendResetPassword = async (email) => {
    const usersRef = collection(firestore, "users");
    // email
    const q = query(usersRef, where("email", "==", email));
    const qSnapshot = await getDocs(q);
    // query email
    if (qSnapshot.empty) {
      showToast("Không tìm thấy email!", "error");
      return;
    }
    try {
      await sendPasswordResetEmail(email);
    } catch (error) {
      showToast(error.message, "error");
    }
  };

  return { sendResetPassword, sending, sendError: error };
};

export default useSendEmailResetPassword;
