class RadarAttack extends Sprite {
  constructor({
    position = { x: 0, y: 0 },
    image = { imageX: 0, imageY: 0 },
    radius = 120,
  }) {
    super({
      imageSrc: ImagesLoded.redares,
      frames: {
        maxX: 15,
        maxY: 10,
      },
    });
    this.imagePositionMax = {
      imageX: image.imageX,
      imageY: image.imageY + 1,
    };
    this.imagePosition = image;
    this.initialPotition = position;
    this.setSize(radius);
  }

  setSize(radius) {
    this.radius = radius;
    this.size = {
      width: radius * 2,
      height: radius * 2,
    };
    this.position = {
      x: this.initialPotition.x - (radius - this.resize(60, "width")),
      y: this.initialPotition.y - (radius - this.resize(60, "height")),
    };
  }

  draw() {
    super.drawBySegment(this.imagePosition, this.position, this.size);
    super.update(() => {
      if (this.imagePosition.imageX < this.frame.maxX - 1) {
        this.imagePosition.imageX++;
        return;
      }
      if (this.imagePosition.imageY < this.imagePositionMax.imageY) {
        this.imagePosition.imageY++;
        this.imagePosition.imageX = 0;
      }
    });
  }

  drawRadar() {
    super.drawBySegment(this.imagePosition, this.position, this.size);
    super.update(() => {
      if (this.imagePosition.imageX < this.frame.maxX - 1) {
        this.imagePosition.imageX++;
        return;
      }
      if (this.imagePosition.imageY < this.imagePositionMax.imageY) {
        this.imagePosition.imageY++;
        this.imagePosition.imageX = 0;
        return;
      }
      this.imagePosition.imageY -= 1;
      this.imagePosition.imageX = 0;
    });
  }
}
