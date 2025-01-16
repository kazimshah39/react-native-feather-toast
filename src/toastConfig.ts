import { ToastType } from "./types";

export const getToastConfig = (type: ToastType = "info") => {
  switch (type) {
    case "success":
      return {
        backgroundColor: "#10B981",
        icon: "check-circle",
        iconColor: "#ffffff",
      };
    case "error":
      return {
        backgroundColor: "#EF4444",
        icon: "x-circle",
        iconColor: "#ffffff",
      };
    case "warning":
      return {
        backgroundColor: "#F59E0B",
        icon: "alert-circle",
        iconColor: "#ffffff",
      };
    default:
      return {
        backgroundColor: "#3B82F6",
        icon: "info",
        iconColor: "#ffffff",
      };
  }
};
