import Phaser from "phaser";
import { Example } from "./example";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 800,
  scene: Example,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
    },
  },
};

export { config };
