import type { Character } from "./Character.interface";

export class CharacterFactory {
  static createCharacter(
    characterClass: new (
      name: string,
      avatarSrcPath: string,
      normalLovePower: number,
      specialLovePower: number,
      maximumAvoidPower: number,
    ) => Character,
    name: string,
    avatarSrcPath: string,
    maximumAvoidPower: number,
    normalLovePower: number,
    specialLovePower: number,
  ): Character {
    return new characterClass(
      name,
      avatarSrcPath,
      normalLovePower,
      specialLovePower,
      maximumAvoidPower,
    );
  }
}
