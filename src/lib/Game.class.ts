import type { Player } from "@/lib/Player.class";
import { ActionType } from "@/lib/ActionType.enum";

export class Game {
  player1: Player;
  player2: Player;
  #currentPlayer: Player;
  #winner?: Player;

  constructor(player1: Player, player2: Player) {
    this.player1 = player1;
    this.player2 = player2;

    this.#currentPlayer = this.player1;
  }

  endPlayerTurn() {
    this.calculateGameStatus();

    this.updateCurrentPlayer();
  }

  calculateGameStatus() {
    if (this.player1.loveTaken === 100) {
      this.#winner = this.player1;
    }

    if (this.player2.loveTaken === 100) {
      this.#winner = this.player2;
    }
  }

  updateCurrentPlayer() {
    this.#currentPlayer =
      this.#currentPlayer === this.player1 ? this.player2 : this.player1;
  }

  playTurn(actionType: ActionType) {
    switch (actionType) {
      case ActionType.AVOID_ACTION:
        this.currentPlayer.activateAvoidMode();

        break;
      case ActionType.LOVE_NORMAL_ACTION:
        this.currentPlayer.performLoveAction(
          this.currentOpponent,
          this.currentPlayer.character.normalLovePower,
        );

        break;
      case ActionType.LOVE_SPECIAL_ACTION:
        this.currentPlayer.performLoveAction(
          this.currentOpponent,
          this.currentPlayer.character.specialLovePower,
        );

        break;
    }

    this.endPlayerTurn();
  }

  get currentPlayer() {
    return this.#currentPlayer;
  }

  get currentOpponent() {
    return this.#currentPlayer === this.player1 ? this.player2 : this.player1;
  }

  get isGameOver() {
    return Boolean(this.#winner);
  }
}
