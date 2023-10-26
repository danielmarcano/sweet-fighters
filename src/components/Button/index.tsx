import type { ReactNode } from "react";

import { obtainCSSColor, CSSColor } from "@/utils/obtainCSSColor";
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
  const cssColor = obtainCSSColor(disabled ? CSSColor.GHOST : color);

  return (
    <button
      type={type}
      className={`${className} ${styles.container}`}
      style={{ color: cssColor, borderColor: cssColor }}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
