import { ActionType } from "@/lib/ActionType.enum";
import { BaseCharacter } from "@/lib/Character/BaseCharacter.class";
import { Game } from "@/lib/Game.class";
import { Player } from "@/lib/Player.class";

function createPlayer(name: string, specialLoveActionPower: number = 30) {
  const avatarSrcPath = "/path";
  const normalLoveActionPower = 5;
  const maximumAvoidActionPower = 90;

  const character = new BaseCharacter(
    name,
    avatarSrcPath,
    normalLoveActionPower,
    specialLoveActionPower,
    maximumAvoidActionPower,
  );

  const player = new Player(character);

  return player;
}

function setUpGame() {
  const game = new Game(createPlayer("Xion"), createPlayer("Mimi"));

  return game;
}

describe("Game", () => {
  it("Sets currentPlayer as first player by default", () => {
    const game = setUpGame();

    expect(game.player1).toBe(game.currentPlayer);
  });

  it("Sets isGameOver as false by default", () => {
    const game = setUpGame();

    expect(game.isGameOver).toBeFalsy();
  });

  it("Sets isGameOver to true when one of the players reaches 100 love points", () => {
    const game = new Game(createPlayer("Xion", 100), createPlayer("Mimi"));

    expect(game.isGameOver).toBeFalsy();

    game.playTurn(ActionType.LOVE_SPECIAL_ACTION);

    expect(game.isGameOver).toBeTruthy();
  });

  it("playTurn sets avoidMode correctly", () => {
    const game = setUpGame();

    expect(game.player1.avoidMode).toBeFalsy();

    game.playTurn(ActionType.AVOID_ACTION);

    expect(game.player1.avoidMode).toBeTruthy();
  });

  it("playTurn sets gives the correct love normal action points to the opponent", () => {
    const game = setUpGame();

    game.playTurn(ActionType.LOVE_NORMAL_ACTION);

    expect(game.player2.loveTaken).toBe(game.player1.character.normalLovePower);
  });

  it("playTurn sets gives the correct special love action points to the opponent", () => {
    const game = setUpGame();

    game.playTurn(ActionType.LOVE_SPECIAL_ACTION);

    expect(game.player2.loveTaken).toBe(
      game.player1.character.specialLovePower,
    );
  });

  it("Changes currentPlayer to the opposite one after playTurn is called", () => {
    const game = setUpGame();

    expect(game.player1).toBe(game.currentPlayer);

    game.playTurn(ActionType.LOVE_SPECIAL_ACTION);

    expect(game.player2).toBe(game.currentPlayer);
  });
});
