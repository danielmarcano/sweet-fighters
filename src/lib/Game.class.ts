import { ActionType } from "./ActionType.enum";
import { Player } from "./Player.class";

export class Game {
  player1: Player;
  player2: Player;
  #winner?: Player;

  constructor(player1: Player, player2: Player) {
    this.player1 = player1;
    this.player2 = player2;
  }

  calculateGameStatus() {
    if (this.player1.loveTaken === 100) {
      this.#winner = this.player1;
    }

    if (this.player2.loveTaken === 100) {
      this.#winner = this.player2;
    }
  }

  playTurn(player: Player, actionType: ActionType, target?: Player) {
    switch (actionType) {
      case ActionType.AVOID_ACTION:
        player.activateAvoidMode();
        break;
      case ActionType.LOVE_NORMAL_ACTION:
        if (!target) {
          throw new Error('Target player is required for love action.');
        }

        player.performLoveAction(target, player.character.normalLovePower);

        break;
      case ActionType.LOVE_SPECIAL_ACTION:
        if (!target) {
          throw new Error('Target player is required for love action.');
        }

        player.performLoveAction(target, player.character.specialLovePower);
        break;
    }

    this.calculateGameStatus();
  }

  get isGameOver() {
    return Boolean(this.#winner);
  }
}
