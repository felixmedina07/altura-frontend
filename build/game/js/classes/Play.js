class Play extends Sprite {
  constructor({ position = { x: 0, y: 0 } }) {
    super({
      position,
      imageSrc: ImagesLoded.startButtom,
      frames: {
        maxX: 15,
        maxY: 2,
      },
    });
    this.frame.current = {
      x: 0,
      y: 0,
    };
    this.state = "start";
    this.startFrame = 31;
    this.pushFrame = 13;
    this.startAnimationPage = 0;
  }

  rePotition({ potition }) {
    this.position = potition;
  }

  draw() {
    super.drawBySegment(
      {
        imageX: this.frame.current.x,
        imageY: this.frame.current.y,
      },
      this.position,
      {
        width: this.resize(300, "width"),
        height: this.resize(300, "height"),
      }
    );
    if (this.state === "start") {
      this.initAnimation();
    }
    if (this.state === "push") {
      this.pushAnimation();
    }
  }

  resetPush() {
    if (
      this.frame.current.x === this.frame.maxX - 1 &&
      this.frame.current.y == 0
    ) {
      userResources.playWaveSound();
      this.state = "push";
      this.frame.current.y = 1;
      this.frame.current.x = 0;
    } else {
      this.state = "start";
      this.frame.current.y = 0;
      this.frame.current.x = 0;
    }
  }

  pushAnimation() {
    if (
      this.frame.current.y == 1 &&
      this.frame.current.x < this.frame.maxX - 1
    ) {
      this.update(() => this.frame.current.x++);
    }
  }

  initAnimation() {
    if (this.frame.current.y < 1) {
      if (this.frame.current.x < this.frame.maxX - 1) {
        this.update(() => this.frame.current.x++);
      }
    }
  }
}
