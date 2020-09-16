/* eslint-disable no-use-before-define */
import Phaser from 'phaser';
import MainMenu from './scenes/MainMenu';
import GameMain from './scenes/GameMain';
import GameOver from './scenes/GameOver';

const config = {
  type: Phaser.WEBGL,
  parent: 'phaser-example',
  width: 880,
  height: 640,
  backgroundColor: 'black',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
    },
  },
  scene: [
    MainMenu,
    GameMain,
    GameOver,
  ],
  pixelArt: true,
  roundPixels: true,
};

// eslint-disable-next-line no-unused-vars
const game = new Phaser.Game(config);