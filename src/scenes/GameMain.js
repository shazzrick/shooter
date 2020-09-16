import Phaser from 'phaser';

export default class GameMain extends Phaser.Scene {
  constructor() {
    super({ key: 'GameMain' });
  }

  preload() {
    this.load.image('sprBg0', '..src/assets/P3SpaceShooterContent/sprBg0.png');
    this.load.image('sprBg1', '..src/assets/P3SpaceShooterContent/sprBg1.png');
    this.load.spritesheet('sprExplosion', '..src/assets/P3SpaceShooterContent/sprExplosion.png', {
      frameWidth: 32,
      frameHeight: 32,
    });

    this.load.spritesheet('sprEnemy0', '..src/assets/P3SpaceShooterContent/sprEnemy0.png', {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.image('sprEnemy1', '..src/assets/P3SpaceShooterContent/sprEnemy1.png');
    this.load.spritesheet('sprEnemy2', '..src/assets/P3SpaceShooterContent/sprEnemy2.png', {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.image('sprLaserEnemy0', '..src/assets/P3SpaceShooterContent/sprLaserEnemy0.png');
    this.load.image('sprLaserPlayer', '..src/assets/P3SpaceShooterContent/sprLaserPlayer.png');
    this.load.spritesheet('sprPlayer', '..src/assets/P3SpaceShooterContent/sprPlayer.png', {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.audio('sndExplode0', '..src/assets/P3SpaceShooterContent/sndExplode0.wav');
    this.load.audio('sndExplode1', '..src/assets/P3SpaceShooterContent/sndExplode1.wav');
    this.load.audio('sndLaser', '..src/assets/P3SpaceShooterContent/sndLaser.wav');
  }

  create() {

  }
}