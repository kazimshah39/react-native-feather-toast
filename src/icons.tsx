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
    <Svg width={size} height={size} viewBox="0 0 15 15" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.445.609a1.1 1.1 0 00-1.89 0L.161 11.337A1.1 1.1 0 001.106 13h12.788a1.1 1.1 0 00.945-1.663L8.445.609zm-1.03.512a.1.1 0 01.17 0l6.395 10.728a.1.1 0 01-.086.151H1.106a.1.1 0 01-.086-.151L7.414 1.12zm-.588 3.365a.674.674 0 111.346 0L8.02 8.487a.52.52 0 01-1.038 0l-.154-4zm1.423 5.99a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        fill={color}
      />
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
  close: ({
    size = defaultProps.size,
    color = defaultProps.color,
  }: IconProps) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M18 6L6 18"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 6L18 18"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  ),
};
