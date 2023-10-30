import { BaseCharacter } from "@/lib/Character/BaseCharacter.class";

describe("Character", () => {
  it("Should create a new Character with the right properties", () => {
    const character = new BaseCharacter("Jane", "/path", 20, 35, 15);

    expect(character.name).toBe("Jane");
    expect(character.avatarSrcPath).toBe("/path");
    expect(character.normalLovePower).toBe(20);
    expect(character.specialLovePower).toBe(35);
    expect(character.maximumAvoidPower).toBe(0.15);
  });

  it("Sets maximumAvoidPower to 0.05 when we pass it 2, a value lower than that", () => {
    const character = new BaseCharacter("Jane", "/path", 20, 35, 4);

    expect(character.maximumAvoidPower).toBe(0.05);
  });

  it("Sets maximumAvoidPower to 0.05 when we pass it a value lower than 5", () => {
    const character = new BaseCharacter("Jane", "/path", 20, 35, 4);

    expect(character.maximumAvoidPower).toBe(0.05);
  });
});
