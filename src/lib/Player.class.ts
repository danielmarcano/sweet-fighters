import type { Character } from "./Character/Character.interface";

export class Player {
  #loveTaken: number;
  #avoidMode: boolean;
  character: Character;

  constructor(character: Character) {
    this.character = character;
    this.#loveTaken = 0;
    this.#avoidMode = false;
  }

  set loveTaken(lovePoints: number) {
    this.#loveTaken = Math.min(this.loveTaken + lovePoints, 100);
  }

  get loveTaken() {
    return this.#loveTaken;
  }

  takeLove(lovePoints: number) {
    this.loveTaken = lovePoints;
  }

  get avoidMode() {
    return this.#avoidMode;
  }

  activateAvoidMode() {
    this.#avoidMode = true;
  }

  deactivateAvoidMode() {
    this.#avoidMode = false;
  }

  #calculateAvoidPower(lovePower: number): number {
    const defensePercentage = this.character.maximumAvoidPower;

    return lovePower * defensePercentage;
  }

  performLoveAction(target: Player, actionPower: number) {
    const lovePower = actionPower;

    if (!target.avoidMode) {
      target.takeLove(lovePower);

      return;
    }

    const avoidPower = target.#calculateAvoidPower(lovePower);

    const remainingLovePower = lovePower - avoidPower;

    target.takeLove(remainingLovePower);
  }
}
