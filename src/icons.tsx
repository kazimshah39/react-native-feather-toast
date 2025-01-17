import React from "react";
import { Svg, Path, Circle } from "react-native-svg";

interface IconProps {
  size?: number;
  color?: string;
}

const defaultProps = {
  size: 18,
  color: "#FFFFFF",
};

export const Icons = {
  info: ({
    size = defaultProps.size,
    color = defaultProps.color,
  }: IconProps) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" />
      <Path
        d="M12 8h.01"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <Path
        d="M11 12h1v4h1"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  ),

  success: ({
    size = defaultProps.size,
    color = defaultProps.color,
  }: IconProps) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" />
      <Path
        d="M8 12l3 3 5-5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  ),

  error: ({
    size = defaultProps.size,
    color = defaultProps.color,
  }: IconProps) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" />
      <Path
        d="M15 9l-6 6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <Path d="M9 9l6 6" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </Svg>
  ),

  warning: ({
    size = defaultProps.size,
    color = defaultProps.color,
  }: IconProps) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" />
      <Path d="M12 8v4" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <Path
        d="M12 16h.01"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  ),
};
