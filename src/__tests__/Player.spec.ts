import { Character } from "../lib/Character.class";
import { Player } from "../lib/Player.class";

export function setUpPlayer(activateAvoidMode?: boolean) {
  const normalLoveActionPower = 5;
  const specialLoveActionPower = 15;
  const maximumAvoidActionPower = 90;

  const character = new Character(normalLoveActionPower, specialLoveActionPower, maximumAvoidActionPower);

  const player = new Player('Jane', character);

  if (activateAvoidMode) {
    player.activateAvoidMode();
  }

  return {
    character,
    player,
    normalLoveActionPower,
    specialLoveActionPower,
    maximumAvoidActionPower,
  }
}

describe('Player', () => {
  it('Should set the correct name and character', () => {
    const { character, player } =  setUpPlayer();

    expect(player.character).toBe(character);
    expect(player.name).toBe('Jane');
  });

  describe('loveTaken', () => {
    it('Should set loveTaken to 0 by default', () => {
      const { player } =  setUpPlayer();

      expect(player.loveTaken).toBe(0);
    });

    it('Will set loveTaken to 100 when passing 101 to loveTaken', () => {
      const { player } =  setUpPlayer();

      player.takeLove(101);

      expect(player.loveTaken).toBe(100);
    });
  });

  describe('avoidMode', () => {
    it('Should set avoidMode to false by default', () => {
      const { player } =  setUpPlayer();

      expect(player.avoidMode).toBe(false);
    });

    it('Executing activateAvoidMode and deactivateAvoidMode will change avoidMode to true and false', () => {
      const { player } =  setUpPlayer();

      player.activateAvoidMode();

      expect(player.avoidMode).toBe(true);

      player.deactivateAvoidMode();

      expect(player.avoidMode).toBe(false);
    });
  });

  describe('performLoveAction', () => {
    it('It gives the opponent the same amount of love as the normalLovePower', () => {
      const { player, normalLoveActionPower } =  setUpPlayer();
      const { player: opponentPlayer } =  setUpPlayer();

      expect(opponentPlayer.loveTaken).toBe(0);

      player.performLoveAction(opponentPlayer, normalLoveActionPower);

      expect(opponentPlayer.loveTaken).toBe(normalLoveActionPower);
    });

    it('When the oponent is in avoidMode, the amount of love given equals the normalLovePower minus the opponent maximumAvoidActionPower', () => {
      const { player, normalLoveActionPower } =  setUpPlayer();
      const { player: opponentPlayer } =  setUpPlayer(true);

      expect(opponentPlayer.loveTaken).toBe(0);

      player.performLoveAction(opponentPlayer, normalLoveActionPower);

      const avoidedLove = normalLoveActionPower * opponentPlayer.character.maximumAvoidPower;

      expect(opponentPlayer.loveTaken).toBe(normalLoveActionPower - avoidedLove);
    });
  });

});
