import { RandomInt, RandomKey } from "./types";

export const randomKey: RandomKey = () => {
  const random: RandomInt = (min, max) => (
    min + Math.random() * (max - min)
  );

  return `key${random(0, 9)}${random(0, 9)}${random(0, 9)}${random(0, 9)}${random(0, 9)}`;
};
