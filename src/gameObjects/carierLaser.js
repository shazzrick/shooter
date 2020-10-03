import Entity from './blueprint';

export default class CarierLaser extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'carierlaser');
    this.body.velocity.y = 200;
  }
}