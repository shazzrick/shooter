import Phaser from 'phaser';
import MainMenu from '../src/scenes/MainMenu';
import GameMain from '../src/scenes/GameMain';
import GameOver from '../src/scenes/GameOver';
import SceneLeaderBoard from '../src/scenes/SceneLeaderBoard';

function gameRun() {
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

  const game = new Phaser.Game(config);

  return game;
}

export default gameRun;