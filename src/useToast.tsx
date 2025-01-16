import { useCallback, useRef, useState } from "react";
import { Animated, Dimensions, Platform } from "react-native";
import type { ToastConfig, ToastType } from "./types";

const { height } = Dimensions.get("window");

export const useToast = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(-100)).current;
  const timeoutRef = useRef<NodeJS.Timeout>();
  const [toastTitle, setToastTitle] = useState<string>("");
  const [toastDescription, setToastDescription] = useState<string>("");
  const [toastType, setToastType] = useState<ToastType>("info");
  const [isVisible, setIsVisible] = useState(false);

  const handleShowToast = useCallback(
    ({
      title,
      description,
      type = "info",
      duration = 3000,
      position = "top",
    }: ToastConfig) => {
      setToastTitle(title);
      setToastDescription(description || "");
      setToastType(type);
      setIsVisible(true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      fadeAnim.setValue(0);
      slideAnim.setValue(position === "top" ? -100 : height);

      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.spring(slideAnim, {
          toValue:
            position === "top"
              ? Platform.OS === "ios"
                ? 50
                : 40
              : height - 100,
          speed: 12,
          bounciness: 8,
          useNativeDriver: true,
        }),
      ]).start();

      timeoutRef.current = setTimeout(() => {
        Animated.parallel([
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(slideAnim, {
            toValue: position === "top" ? -100 : height,
            duration: 300,
            useNativeDriver: true,
          }),
        ]).start(() => {
          setToastTitle("");
          setToastDescription("");
          setIsVisible(false);
        });
      }, duration);
    },
    []
  );

  return {
    toastTitle,
    toastDescription,
    toastType,
    isVisible,
    fadeAnim,
    slideAnim,
    handleShowToast,
  };
};
