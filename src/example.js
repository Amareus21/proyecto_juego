import Phaser from "phaser";

export class Example extends Phaser.Scene {
  body;

  preload() {
    this.load.image("personaje", "assets/personaje.png");
  }

  create() {
    this.body = this.physics.add.image(1, 800, "personaje");
    this.body.setCollideWorldBounds();
    this.body.scale = 0.5;
    this.body.setBounce(1,1)
    this.body.setVelocity(600,900)
  }
  update() {
    const d = this.input.keyboard.addKey("d");
    const s = this.input.keyboard.addKey("s");
    const a = this.input.keyboard.addKey("a");
   
  }
}
