import React, { useEffect } from "react";
import { View, KeyboardAvoidingView, Platform } from "react-native";
import { Toast } from "./Toast";
import { styles } from "./styles";
import { useToast } from "./useToast";
import type { ToastConfig } from "./types";

// Create a static reference to store the toast showing function
let showToastRef: ((config: ToastConfig) => void) | null = null;

// Singleton function to show toast from anywhere
export function showToast(config: ToastConfig) {
  if (showToastRef) {
    showToastRef(config);
  }
}

export const ToastRoot: React.FC = () => {
  const {
    toastTitle,
    toastDescription,
    toastType,
    isVisible,
    fadeAnim,
    slideAnim,
    handleShowToast,
  } = useToast();

  // Set up the static reference when component mounts
  useEffect(() => {
    showToastRef = handleShowToast;
    return () => {
      showToastRef = null;
    };
  }, [handleShowToast]);

  if (!isVisible) return null;

  return (
    <View style={styles.rootWrapper} pointerEvents="box-none">
      <KeyboardAvoidingView
        style={styles.toastWrapper}
        pointerEvents="box-none"
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <Toast
          title={toastTitle}
          description={toastDescription}
          type={toastType}
          fadeAnim={fadeAnim}
          slideAnim={slideAnim}
        />
      </KeyboardAvoidingView>
    </View>
  );
};
