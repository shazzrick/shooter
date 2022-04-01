/* eslint-disable no-use-before-define */
import Phaser from 'phaser';
import MainMenu from './scenes/MainMenu';
import GameMain from './scenes/GameMain';
import GameOver from './scenes/GameOver';
import SceneLeaderBoard from './scenes/SceneLeaderBoard';
import 'regenerator-runtime/runtime';

const config = {
  type: Phaser.WEBGL,
  parent: 'phaser-example',
  width: 480,
  height: 640,
  backgroundColor: 'black',
  dom: {
    createContainer: true,
  },
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
    SceneLeaderBoard,
  ],
  pixelArt: true,
  roundPixels: true,
};

// eslint-disable-next-line no-unused-vars
const game = new Phaser.Game(config);