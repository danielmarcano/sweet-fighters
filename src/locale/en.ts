/*
 * Provisional translations file.
 *
 * Once we add a translations library, we can turn this file into "en.json",
 * and place the "locale" directory within the "public" one
 */

export const translations = {
  "screens.main.musicButton.turnOffLabel": "Turn sound off",
  "screens.main.musicButton.turnOnLabel": "Turn sound on",
  "screens.main.title": "Sweet Fighters",
  "screens.main.startGameLabel": "Start Game",

  "screens.playerSelect.title": (playerNumber: number) =>
    `Select Player ${playerNumber}`,
  "screens.playerSelect.avatarAlt": (characterName: string) =>
    `${characterName} avatar`,
  "screens.playerSelect.previousLabel": "Prev",
  "screens.playerSelect.nextLabel": "Next",
  "screens.playerSelect.playLabel": "Play",
};
