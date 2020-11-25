import Phaser from 'phaser';
import playGame from "./scene/playGame";

export const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 10000 }
        }
    },
    scene: playGame
};
const game = new Phaser.Game(config);