import Phaser from 'phaser';

export default class ExplosionScene extends Phaser.Scene {
  private smokeEmitter!: Phaser.GameObjects.Particles.ParticleEmitter;

  constructor() {
    super({ key: 'ExplosionScene' });
  }

  preload(): void {
    // không load texture ngoài
  }

  create(): void {
    // 1) Vẽ gradient khói → texture 'smoke'
    const size = 128;
    const g = this.add.graphics();
    const c = size/2;
    for (let r = c; r > 0; r -= 4) {
      const alpha = Phaser.Math.Linear(0.1, 0.6, r/c);
      g.fillStyle(0x888888, alpha).fillCircle(c, c, r);
    }
    g.generateTexture('smoke', size, size);
    g.destroy();

    // 2) Tạo emitter trực tiếp, không cần createEmitter()
    this.smokeEmitter = this.add.particles(
      /*textureKey=*/0, 0, 'smoke',
      /*config=*/ {
        // vị trí khởi tạo, sẽ override trong explode()
        x: 0, 
        y: 0,

        // tắt tự động emit
        frequency: -1,

        // cấu hình hạt
        speed:       { min: 100, max: 200 },
        angle:       { min: -135, max: -45 },
        scale:       { start: 0.5, end: 2 },
        alpha:       { start: 1,   end: 0 },
        lifespan:    { min: 800,   max: 1200 },
        gravityY:    300,
        blendMode:   'ADD',

        // số hạt mỗi lần bạn gọi explode()
        quantity:    50
      }
    ) as Phaser.GameObjects.Particles.ParticleEmitter;

    // 3) Demo: mỗi 2s gọi nổ khói ở vị trí random
    this.time.addEvent({
      delay: 2000,
      loop: true,
      callback: () =>
        this.explodeAt(
          Phaser.Math.Between(100, this.scale.width  - 100),
          Phaser.Math.Between(100, this.scale.height - 100)
        )
    });
  }

  private explodeAt(x: number, y: number) {
    // di chuyển emitter và phát nổ 1 lần
    this.smokeEmitter.setPosition(x, y);
    this.smokeEmitter.explode(50, x, y);
  }
}
