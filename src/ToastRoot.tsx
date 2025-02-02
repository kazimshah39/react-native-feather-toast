import React, { useEffect } from "react";
import { View, KeyboardAvoidingView, Platform } from "react-native";
import { Toast } from "./Toast";
import { styles } from "./styles";
import { useToast } from "./useToast";
import type { ToastConfig } from "./types";

class ToastEmitter {
  private static instance: ToastEmitter;
  private listeners: ((config: ToastConfig) => void)[] = [];

  private constructor() {}

  static getInstance() {
    if (!ToastEmitter.instance) {
      ToastEmitter.instance = new ToastEmitter();
    }
    return ToastEmitter.instance;
  }

  addListener(callback: (config: ToastConfig) => void) {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter(
        (listener) => listener !== callback
      );
    };
  }

  emit(config: ToastConfig) {
    this.listeners.forEach((listener) => listener(config));
  }
}

export function showToast(config: ToastConfig) {
  ToastEmitter.getInstance().emit(config);
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
    handleDismiss,
  } = useToast();

  useEffect(() => {
    const unsubscribe = ToastEmitter.getInstance().addListener(handleShowToast);
    return () => unsubscribe();
  }, [handleShowToast]);

  if (!isVisible) return null;

  return (
    <View style={[styles.rootWrapper]} pointerEvents="box-none">
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
          onDismiss={handleDismiss}
        />
      </KeyboardAvoidingView>
    </View>
  );
};
