import type { Character } from "./Character.interface";

export class BaseCharacter implements Character {
  name: string;
  avatarSrcPath: string;
  /**
   * An integer [1-100] representing the percentage of maximum
   * avoidance power of the character
   */
  #maximumAvoidPower: number = 0;
  normalLovePower: number;
  specialLovePower: number;

  constructor(
    name: string,
    avatarSrcPath: string,
    normalLovePower: number,
    specialLovePower: number,
    maximumAvoidPower: number,
  ) {
    this.name = name;
    this.avatarSrcPath = avatarSrcPath;
    this.maximumAvoidPower = maximumAvoidPower;
    this.normalLovePower = normalLovePower;
    this.specialLovePower = specialLovePower;
  }

  get maximumAvoidPower() {
    return this.#maximumAvoidPower;
  }

  set maximumAvoidPower(power: number) {
    this.#maximumAvoidPower = Math.max(0.05, power / 100);
  }
}
