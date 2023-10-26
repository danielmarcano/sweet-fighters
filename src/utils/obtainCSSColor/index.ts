/**
 * These values used in this enum are the
 * colors defined in the colors.css file
 */
export enum CSSColor {
  ROSE = "rose",
  SUNNY = "sunny",
  GRASS = "grass",
  MOUNTAIN = "mountain",
  BEACH = "beach",
  NIGHT = "night",
  GHOST = "ghost",
}

export function obtainCSSColor(color: CSSColor) {
  return `var(--${color})`;
}
