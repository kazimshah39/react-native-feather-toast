import React from "react";
import { ToastProps } from "./types";
import { styles } from "./styles";
import { getToastConfig } from "./toastConfig";
import { Icons } from "./icons";
import { Animated, Text, View, TouchableOpacity } from "react-native";

export const Toast: React.FC<ToastProps> = ({
  title,
  description,
  type,
  fadeAnim,
  slideAnim,
  onDismiss,
}) => {
  const config = getToastConfig(type);
  const Icon = Icons[type] || Icons.info;

  return (
    <Animated.View
      style={[
        styles.toastContainer,
        {
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }],
          backgroundColor: config.backgroundColor,
        },
      ]}
    >
      <View style={styles.toastContent}>
        <View style={styles.iconContainer}>
          <Icon color={config.iconColor} size={18} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.toastText}>{title}</Text>
          {description && (
            <Text style={styles.descriptionText}>{description}</Text>
          )}
        </View>
        <TouchableOpacity onPress={onDismiss} style={styles.dismissButton}>
          <Icons.close color={config.iconColor} size={14} />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};
