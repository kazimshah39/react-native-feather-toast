import React from "react";
import { Animated, Text, View } from "react-native";
import { ToastProps } from "./types";
import { styles } from "./styles";
import { getToastConfig } from "./toastConfig";
import { Icons } from "./icons";

export const Toast: React.FC<ToastProps> = ({
  title,
  description,
  type,
  fadeAnim,
  slideAnim,
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
      </View>
    </Animated.View>
  );
};
