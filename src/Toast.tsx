import React from "react";
import { Animated, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { ToastProps } from "./types";
import { styles } from "./styles";
import { getToastConfig } from "./toastConfig";

export const Toast: React.FC<ToastProps> = ({
  title,
  description,
  type,
  fadeAnim,
  slideAnim,
}) => {
  const config = getToastConfig(type);

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
          <Feather
            name={config.icon as any}
            size={18}
            color={config.iconColor}
          />
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
