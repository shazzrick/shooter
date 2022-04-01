import Phaser from 'phaser';
import ScrollingBackground from './backgrounds';
import { getLocalScores } from '../localStorage';
import { submitHighScore } from '../API/leaderboardCall';

export default class GameOver extends Phaser.Scene {
  constructor() {
    super({ key: 'GameOver' });
  }

  preload() {
    this.load.image('sprBtnRecord', '../src/assets/sprBtnRecord.png');
    this.load.image('sprBtnRecordDown', '../src/assets/sprBtnRecordDown.png');
    this.load.image('sprBtnRecordHover', '../src/assets/sprBtnRecordHover.png');
    this.load.image('gameOverTitle', '../src/assets/titleGameOver2.png');
  }

  create() {
    this.gameOverTitle = this.add.image(
      this.game.config.width * 0.5,
      this.game.config.height * 0.1,
      'gameOverTitle',
    );

    this.scores = getLocalScores();
    this.gameOverSceneScore = this.add.text(
      this.game.config.width * 0.6,
      this.game.config.height * 0.72,
      `Score: ${this.scores[0]}`, {
        color: '#d0c600',
        fontFamily: 'sans-serif',
        fontSize: '30px',
        lineHeight: 1.3,
        align: 'center',
      },
    );

    this.sfx = {
      btnOver: this.sound.add('sndBtnOver', { volume: 0.1 }),
      btnDown: this.sound.add('sndBtnDown', { volume: 0.1 }),
    };

    this.btnRestart = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.9,
      'sprBtnRestart',
    );

    this.btnRestart.setInteractive();
    this.createButton(this.btnRestart, 'sprBtnRestart', 'sprBtnRestartHover', 'sprBtnRestartDown');
    this.btnRestart.on('pointerup', () => {
      this.btnRestart.setTexture('sprBtnRestart');
      this.scene.start('GameMain');
    }, this);

    this.btnRecord = this.add.sprite(
      this.game.config.width * 0.85,
      this.game.config.height * 0.9,
      'sprBtnRecord',
    );

    this.btnRecord.setInteractive();
    this.createButton(this.btnRecord, 'sprBtnRecord', 'sprBtnRecordHover', 'sprBtnRecordDown');
    this.btnRecord.on('pointerup', () => {
      this.btnRecord.setTexture('sprBtnRecord');
      this.scene.start('SceneLeaderBoard');
    }, this);

    this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    this.backgrounds = [];
    for (let i = 0; i < 5; i += 1) {
      const keys = ['sprBg0', 'sprBg1'];
      const key = keys[Phaser.Math.Between(0, keys.length - 1)];
      const bg = new ScrollingBackground(this, key, i * 10);
      this.backgrounds.push(bg);
    }

    this.userName = '';

    const div = document.createElement('div');
    div.innerHTML = `
      <input type="text" id="nameField" placeholder="Enter your name" style="font-size: 1.5rem width: ${this.game.config.width * 0.25}"><br>
      <input type="button" name="submitButton" value="Submit Score" style="font-size: 1.5rem">
    `;

    const element = this.add.dom(280, 480, div);
    element.addListener('click');

    element.on('click', (event) => {
      if (event.target.name === 'submitButton') {
        const inputText = document.getElementById('nameField');
        if (inputText.value !== '') {
          element.removeListener('click');
          element.setVisible(false);
          this.userName = inputText.value;
          this.submit = submitHighScore(this.userName, this.scores[0]);
          this.submit.then(() => {
            this.scene.start('SceneLeaderBoard');
          });
        }
      }
    });
  }

  update() {
    for (let i = 0; i < this.backgrounds.length; i += 1) {
      this.backgrounds[i].update();
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