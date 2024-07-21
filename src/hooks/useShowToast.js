import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";

const useShowToast = () => {
  const toast = useToast();

  const showToast = useCallback(
    (title, status) => {
      toast({
        title,
        status,
        duration: 5000,
        isClosable: true,
      });
    },
    [toast]
  );

  const showToastLoading = useCallback(
    (examplePromise, description) => {
      toast.promise(examplePromise, {
        success: { title: "Xử lý thành công", description },
        error: {
          title: "Xử lý thất bại",
          description: "Có lỗi trong quá trình xử lý!",
        },
        loading: { title: "Đang xử lý", description: "Vui lòng đợi...!" },
      });
    },
    [toast]
  );

  return { showToast, showToastLoading };
};

export default useShowToast;
