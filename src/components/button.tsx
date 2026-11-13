import React from "react";

interface Props {
  border: string;
  borderColor?: string;
  textColor?: string;
  color: string;
  children?: React.ReactNode;
  height: string;
  onClick: () => void;
  radius: string;
  width: string;
}

const Button: React.FC<Props> = ({
  border,
  borderColor,
  textColor,
  color,
  children,
  height,
  onClick,
  radius,
  width,
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color,
        color: textColor,
        border,
        borderColor,
        borderRadius: radius,
        height,
        width,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
