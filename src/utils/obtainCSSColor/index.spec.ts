import { CSSColor, obtainCSSColor } from ".";

const colorsToTest = Object.values(CSSColor).map((color) => ({
  color,
  varColor: `var(--${color})`,
}));

describe("obtainCSSColor", () => {
  test.each(colorsToTest)(
    "Returns $varColor when passed $color",
    ({ varColor, color }) => {
      expect(obtainCSSColor(color)).toBe(varColor);
    },
  );
});
