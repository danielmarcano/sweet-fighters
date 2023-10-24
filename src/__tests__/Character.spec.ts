import { BaseCharacter } from "../lib/BaseCharacter.class";

describe("Character", () => {
  test("Should create a new Character with the right properties", () => {
    const character = new BaseCharacter(20, 35, 15);

    expect(character.normalLovePower).toBe(20);
    expect(character.specialLovePower).toBe(35);
    expect(character.maximumAvoidPower).toBe(0.15);
  });

  test("It sets maximumAvoidPower to 0.05 when we pass it 2, a value lower than that", () => {
    const character = new BaseCharacter(20, 35, 4);

    expect(character.maximumAvoidPower).toBe(0.05);
  });

  test("It sets maximumAvoidPower to 0.05 when we pass it a value lower than 5", () => {
    const character = new BaseCharacter(20, 35, 4);

    expect(character.maximumAvoidPower).toBe(0.05);
  });
});
