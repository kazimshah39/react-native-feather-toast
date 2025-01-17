import React, { useCallback, useRef, useState, useEffect } from "react";
import { Animated, Dimensions, Platform, StatusBar } from "react-native";
import type { ToastConfig, ToastType } from "./types";

const { height, width } = Dimensions.get("window");

export const useToast = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(-100)).current;
  const timeoutRef = useRef<NodeJS.Timeout>();
  const [toastTitle, setToastTitle] = useState<string>("");
  const [toastDescription, setToastDescription] = useState<string>("");
  const [toastType, setToastType] = useState<ToastType>("info");
  const [isVisible, setIsVisible] = useState(false);

  // Calculate bottom position based on platform and screen dimensions
  const getToastPosition = useCallback((position: "top" | "bottom") => {
    if (position === "top") {
      return Platform.OS === "ios" ? 50 : 40;
    }

    // For bottom position, consider:
    // 1. Status bar height on Android
    // 2. iPhone home indicator height
    // 3. General safe padding
    const statusBarHeight =
      Platform.OS === "android" ? StatusBar.currentHeight || 0 : 0;
    const homeIndicatorHeight = Platform.OS === "ios" && height >= 812 ? 34 : 0;
    const safePadding = 16;

    return height - (statusBarHeight + homeIndicatorHeight + safePadding + 100);
  }, []);

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

      const targetPosition = getToastPosition(position);

      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.spring(slideAnim, {
          toValue: targetPosition,
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
    [getToastPosition]
  );

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

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
