import type { ReactNode } from "react";
import type { CSSColor } from "@/utils/obtainCSSColor";
import { obtainCSSColor } from "@/utils/obtainCSSColor";
import styles from "./index.module.css";

type ButtonProps = Partial<Omit<HTMLButtonElement, "children">> & {
  color: CSSColor;
  /**
   *  @default "button"
   */
  type?: "button" | "submit";
  children?: ReactNode;
  disabled?: boolean;
  onClick: () => void;
  className?: string;
};

export function Button({
  type = "button",
  color,
  children,
  disabled,
  onClick,
  className,
}: ButtonProps) {
  const CSSColor = obtainCSSColor(color);

  return (
    <button
      type={type}
      className={`${className} ${styles.container}`}
      style={{ color: CSSColor, borderColor: CSSColor }}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
