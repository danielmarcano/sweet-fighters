import { BaseCharacter } from "@/lib/Character/BaseCharacter.class";
import { CharacterFactory } from "@/lib/Character/CharacterFactory.class";

const FLORA = CharacterFactory.createCharacter(
  BaseCharacter,
  "Flora",
  "/images/avatars/flora.png",
  50,
  20,
  30,
);

export const CHARACTERS = [FLORA];
