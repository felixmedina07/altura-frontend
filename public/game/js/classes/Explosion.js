class Explosion extends Sprite {
  constructor({ projectile, explosion, trigger }) {
    super({
      imageSrc: ImagesLoded.explotions,
      frames: {
        maxX: 10,
        maxY: 6,
        current: 0,
      },
    });

    if (trigger === "granade") {
      this.position = {
        x: projectile.targetPosition.x - this.resize(40, "width"),
        y: projectile.targetPosition.y - this.resize(40, "width"),
      };
    } else {
      this.position = {
        x: projectile.enemy.center.x,
        y: projectile.enemy.center.y - this.resize(40, "height"),
      };
    }
    this.explosion = explosion;
  }

  draw() {
    this.drawBySegment(
      { imageY: this.explosion, imageX: this.frame.current },
      this.position
    );
    super.update(() => {
      this.frame.current++;
    });
  }
}
