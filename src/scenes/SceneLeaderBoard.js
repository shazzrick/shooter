import Phaser from 'phaser';
import ScrollingBackground from './backgrounds';
import { getScoreBoard } from '../API/leaderboardCall';

class SceneLeaderBoard extends Phaser.Scene {
  constructor() {
    super({ key: 'SceneLeaderBoard' });
  }

  preload() {
    this.load.image('sprBg0', '../src/assets/sprBg0.png');
    this.load.image('sprBg1', '../src/assets/sprBg1.png');
    this.load.image('sprBtnRestart', '../src/assets/sprBtnRestart.png');
    this.load.image('sprBtnMainMenu', '../src/assets/sprBtnMainMenu.png');
    this.load.image('sprBtnRestartHover', '../src/assets/sprBtnRestartHover.png');
    this.load.image('sprBtnRestartDown', '../src/assets/sprBtnRestartDown.png');
    this.load.image('leaderBoardTitle', '../src/assets/leaderBoard.png');

    this.load.scenePlugin({
      key: 'rexuiplugin',
      url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
      sceneKey: 'rexUI',
    });
  }

  create() {
    this.gameTitle = this.add.image(
      this.game.config.width * 0.5,
      this.game.config.height * 0.1,
      'leaderBoardTitle',
    );

    this.sfx = {
      btnOver: this.sound.add('sndBtnOver', { volume: 0.1 }),
      btnDown: this.sound.add('sndBtnDown', { volume: 0.1 }),
    };

    this.btnRestart = this.add.sprite(
      this.game.config.width * 0.3,
      this.game.config.height * 0.9,
      'sprBtnRestart',
    );

    this.btnRestart.setInteractive();
    this.createButton(this.btnRestart, 'sprBtnRestart', 'sprBtnRestartHover', 'sprBtnRestartDown');
    this.btnRestart.on('pointerup', () => {
      this.btnRestart.setTexture('sprBtnRestart');
      this.scene.start('GameMain');
    }, this);

    this.btnMainMenu = this.add.sprite(
      this.game.config.width * 0.6,
      this.game.config.height * 0.9,
      'sprBtnMainMenu',
    );

    this.btnMainMenu.setInteractive();
    this.createButton(this.btnMainMenu, 'sprBtnMainMenu', 'sprBtnMainMenu', 'sprBtnMainMenu');
    this.btnMainMenu.on('pointerup', () => {
      this.btnMainMenu.setTexture('sprBtnMainMenu');
      this.scene.start('MainMenu');
    }, this);

    this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    this.backgrounds = [];
    for (let i = 0; i < 5; i += 1) {
      const keys = ['sprBg0', 'sprBg1'];
      const key = keys[Phaser.Math.Between(0, keys.length - 1)];
      const bg = new ScrollingBackground(this, key, i * 10);
      this.backgrounds.push(bg);
    }

    this.getScores = getScoreBoard();

    this.getScores.then(scores => {
      this.config = {
        color: '#d0c600',
        fontFamily: 'sans-serif',
        fontSize: '3vw',
        lineHeight: 1.3,
        align: 'center',
      };

      const scrollMode = 0;
      this.rexUI.add.gridTable({
        x: this.game.config.width * 0.46,
        y: 320,
        width: 400,
        height: 420,
        scrollMode,
        table: {
          cellWidth: (scrollMode === 0) ? undefined : 60,
          cellHeight: (scrollMode === 0) ? 60 : undefined,
          columns: 3,
          mask: {
            padding: 2,
          },
          reuseCellContainer: true,
        },
        slider: {
          track: this.rexUI.add.roundRectangle(0, 0, 20, 10, 10, 0xfcf8a2),
          thumb: this.rexUI.add.roundRectangle(0, 0, 0, 0, 13, 0x847d00),
        },
        createCellContainerCallback(cell, cellContainer) {
          const { scene } = cell;
          const { width } = cell;
          const { height } = cell;
          const { item } = cell;
          if (cellContainer === null) {
            cellContainer = scene.rexUI.add.label({
              width,
              height,
              align: 'center',
              orientation: scrollMode,
              text: scene.add.text(0, 0, '', {
                color: '#d0c600',
                fontFamily: 'sans-serif',
                fontSize: '2vw',
                lineHeight: 1.3,
              }),
            });
          }

          cellContainer.setMinSize(width, height);
          cellContainer.getElement('text').setText(item);
          return cellContainer;
        },
        items: this.getItems(20, scores),
      })
        .layout();
    });

    this.getItems = (count, score) => {
      const data = ['Rank', 'User', 'Score'];

      for (let i = 0; i < count; i += 1) {
        if (score[i]) {
          data.push(i + 1);
          data.push(score[i][1]);
          data.push(score[i][0]);
        }
      }
      return data;
    };
  }

  update() {
    if (this.keySpace.isDown) {
      this.scene.start('GameMain');
    }
  }

  createButton(btn, spr, sprHover, sprDown) {
    btn.on('pointerover', () => {
      btn.setTexture(sprHover);
      this.sfx.btnOver.play();
    }, this);

    btn.on('pointerout', () => {
      btn.setTexture(spr);
    });

    btn.on('pointerdown', () => {
      btn.setTexture(sprDown);
      this.sfx.btnDown.play();
    }, this);
  }
}

export default SceneLeaderBoard;