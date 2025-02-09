import type { Animated } from "react-native";

export type ToastType = "success" | "error" | "info" | "warning";

export interface ToastConfig {
  title: string;
  description?: string;
  type?: ToastType;
  duration?: number;
  position?: "top" | "bottom";
}

export interface ToastProps {
  title: string;
  description?: string;
  type: ToastType;
  fadeAnim: Animated.Value;
  slideAnim: Animated.Value;
  onDismiss: () => void;
}
