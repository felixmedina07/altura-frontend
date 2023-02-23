class Menu extends Sprite {
  constructor() {
    super({
      imageSrc: ImagesLoded.icons,
      frames: {
        maxX: 3,
        maxY: 4,
      },
    });
    this.speedUp = false;
    this.rePosition();
  }

  rePosition() {
    this.speedUpPosition = {
      x: canvas.width - this.resize(400, "width"),
      y: canvas.height - this.resize(220, "height"),
    };
    this.menuPosition = {
      x: this.speedUpPosition.x + this.resize(100, "width"),
      y: this.speedUpPosition.y,
    };
    this.fullScreenPosition = {
      x: this.menuPosition.x + this.resize(100, "width"),
      y: this.menuPosition.y,
    };
  }

  draw() {
    if (this.speedUp) {
      super.drawBySegment(IconImage.speedUp, this.speedUpPosition);
    } else {
      super.drawBySegment(IconImage.speedStop, this.speedUpPosition);
    }
    super.drawBySegment(IconImage.menu, this.menuPosition);
    super.drawBySegment(IconImage.fullScreen, this.fullScreenPosition);
  }

  click(clientX, clientY) {
    this.speedUpClick({ clientX, clientY });
    this.menu({ clientX, clientY });
    this.fullScreen({ clientX, clientY });
  }

  speedUpClick(client) {
    const isClicked = super.click(client, this.speedUpPosition, {
      width: this.resize(120, "width"),
      height: this.resize(120, "height"),
    });
    if (isClicked) {
      this.speedUp = !this.speedUp;
    }
  }

  menu(client) {
    const isClicked = super.click(client, this.menuPosition, {
      width: this.resize(120, "width"),
      height: this.resize(120, "height"),
    });
    if (isClicked) {
      isOpenMenuOptions = !isOpenMenuOptions;
    }
  }

  fullScreen(client) {
    const isClicked = super.click(client, this.fullScreenPosition, {
      width: this.resize(100, "width"),
      height: this.resize(100, "height"),
    });
    if (isClicked) {
      if (!document.fullscreenElement) {
        body.requestFullscreen({ navigationUI: "show" });
      } else {
        document.exitFullscreen();
      }
    }
  }
}
