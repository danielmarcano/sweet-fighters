import { ActionType } from "../lib/ActionType.enum";
import { BaseCharacter } from "../lib/BaseCharacter.class";
import { Game } from "../lib/Game.class";
import { Player } from "../lib/Player.class";

function createPlayer(name: string) {
  const normalLoveActionPower = 5;
  const specialLoveActionPower = 15;
  const maximumAvoidActionPower = 90;

  const character = new BaseCharacter(
    normalLoveActionPower,
    specialLoveActionPower,
    maximumAvoidActionPower,
  );

  const player = new Player(name, character);

  return player;
}

function setUpGame() {
  const game = new Game(createPlayer("Daniel"), createPlayer("Maria"));

  return game;
}

describe("Game", () => {
  it("Sets isGameOver as false by default", () => {
    const game = setUpGame();

    expect(game.isGameOver).toBeFalsy();
  });

  it("Sets isGameOver to true when one of the players reaches 100 love points", () => {
    const game = setUpGame();

    expect(game.isGameOver).toBeFalsy();

    for (let i = 0; i < 10; i++) {
      game.playTurn(game.player1, ActionType.LOVE_SPECIAL_ACTION, game.player2);
    }

    expect(game.isGameOver).toBeTruthy();
  });

  it("playTurn throws an error when trying to execute a love action without passing a target opponent", () => {
    const game = setUpGame();

    expect(() =>
      game.playTurn(game.player1, ActionType.LOVE_SPECIAL_ACTION),
    ).toThrowError(/target player/i);

    expect(() =>
      game.playTurn(game.player1, ActionType.LOVE_NORMAL_ACTION),
    ).toThrowError(/target player/i);
  });

  it("playTurn sets avoidMode correctly", () => {
    const game = setUpGame();

    expect(game.player1.avoidMode).toBeFalsy();

    game.playTurn(game.player1, ActionType.AVOID_ACTION);

    expect(game.player1.avoidMode).toBeTruthy();
  });

  it("playTurn sets gives the correct love normal action points to the opponent", () => {
    const game = setUpGame();

    game.playTurn(game.player1, ActionType.LOVE_NORMAL_ACTION, game.player2);

    expect(game.player2.loveTaken).toBe(game.player1.character.normalLovePower);
  });

  it("playTurn sets gives the correct special love action points to the opponent", () => {
    const game = setUpGame();

    game.playTurn(game.player1, ActionType.LOVE_SPECIAL_ACTION, game.player2);

    expect(game.player2.loveTaken).toBe(
      game.player1.character.specialLovePower,
    );
  });
});
