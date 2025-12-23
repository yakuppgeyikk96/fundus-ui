import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.scss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) => {
  const classNames = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
};
