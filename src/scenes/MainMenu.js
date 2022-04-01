import Phaser from 'phaser';
import ScrollingBackground from './backgrounds';

export default class MainMenu extends Phaser.Scene {
  constructor() {
    super({ key: 'MainMenu' });
  }

  preload() {
    this.load.image('sprBg0', '../src/assets/sprBg0.png');
    this.load.image('sprBg1', '../src/assets/sprBg1.png');
    this.load.image('sprBtnPlay', '../src/assets/sprBtnPlay.png');
    this.load.image('sprBtnPlayHover', '../src/assets/sprBtnPlayHover.png');
    this.load.image('sprBtnPlayDown', '../src/assets/sprBtnPlayDown.png');
    this.load.image('sprBtnRestart', '../src/assets/sprBtnRestart.png');
    this.load.image('sprBtnRestartHover', '../src/assets/sprBtnRestartHover.png');
    this.load.image('sprBtnRestartDown', '../src/assets/sprBtnRestartDown.png');
    this.load.image('arrowKeys', '../src/assets/arrows.png');
    this.load.image('spaceKey', '../src/assets/space-key.png');

    this.load.audio('sndBtnOver', '../src/assets/sndBtnOver.wav');
    this.load.audio('sndBtnDown', '../src/assets/sndBtnDown.wav');
  }

  create() {
    this.sfx = {
      btnOver: this.sound.add('sndBtnOver'),
      btnDown: this.sound.add('sndBtnDown'),
    };

    this.btnPlay = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      'sprBtnPlay',
    );

    this.btnPlay.setInteractive();

    this.btnPlay.on('pointerover', () => {
      this.btnPlay.setTexture('sprBtnPlayHover'); // set the button texture to sprBtnPlayHover
      this.sfx.btnOver.play(); // play the button over sound
    }, this);

    this.btnPlay.on('pointerout', () => {
      this.setTexture('sprBtnPlay');
    });

    this.btnPlay.on('pointerdown', () => {
      this.btnPlay.setTexture('sprBtnPlayDown');
      this.sfx.btnDown.play();
    }, this);

    this.btnPlay.on('pointerup', () => {
      this.btnPlay.setTexture('sprBtnPlay');
      this.scene.start('GameMain');
    }, this);

    this.title = this.add.text(this.game.config.width * 0.5, 128, 'SPACE SHOOTER', {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#d0c600',
      align: 'center',
    });

    this.textConfig = {
      color: '#d0c600',
      fontFamily: 'sans-serif',
      fontSize: '20px',
      lineHeight: 1.3,
      align: 'justify',
      wordWrap: {
        width: this.game.config.width * 0.8,
        useAdvancedWrap: true,
      },
    };

    this.add.text(
      this.game.config.width * 0.6,
      this.game.config.height * 0.55,
      'Controls:',
      this.textConfig,
    );

    this.arrowKeys = this.add.image(
      this.game.config.width * 0.65,
      this.game.config.height * 0.65,
      'arrowKeys',
    );

    this.add.text(
      this.game.config.width * 0.8,
      this.game.config.height * 0.65,
      'Move.',
      this.textConfig,
    );

    this.spaceKey = this.add.image(
      this.game.config.width * 0.65,
      this.game.config.height * 0.75,
      'spaceKey',
    );

    this.add.text(
      this.game.config.width * 0.8,
      this.game.config.height * 0.73,
      'Shoot.',
      this.textConfig,
    );

    this.title.setOrigin(0.5);

    this.backgrounds = [];
    for (let i = 0; i < 5; i += 1) {
      const keys = ['sprBg0', 'sprBg1'];
      const key = keys[Phaser.Math.Between(0, keys.length - 1)];
      const bg = new ScrollingBackground(this, key, i * 10);
      this.backgrounds.push(bg);
    }
  }

  update() {
    for (let i = 0; i < this.backgrounds.length; i += 1) {
      this.backgrounds[i].update();
    }
  }
}