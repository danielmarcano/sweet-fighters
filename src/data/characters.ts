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

const LUDOVICO = CharacterFactory.createCharacter(
  BaseCharacter,
  "Ludovico",
  "/images/avatars/ludovico.png",
  35,
  35,
  15,
);

export const CHARACTERS = [FLORA, LUDOVICO];
