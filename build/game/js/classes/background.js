class Background {
  constructor() {
    this.beginingPosition = {
      x: -100,
      y: -100,
    };
    this.backgroundPosition = {
      x: this.beginingPosition.x,
      y: this.beginingPosition.y,
    };

    this.ledRightPosition = {
      x: canvas.width - resize(300, "width"),
      y: 0,
    };
    this.ledLeftPosition = {
      x: 0,
      y: 0,
    };
  }

  draw() {
    ctx.drawImage(
      ImagesLoded.background,
      this.backgroundPosition.x,
      this.backgroundPosition.y,
      canvas.width + 100,
      canvas.height + 100
    );
    ctx.drawImage(
      ImagesLoded.ledRight,
      this.ledRightPosition.x,
      this.ledRightPosition.y,
      resize(300, "width"),
      canvas.height
    );
    ctx.drawImage(
      ImagesLoded.ledLeft,
      this.ledLeftPosition.x,
      this.ledLeftPosition.y,
      resize(300, "width"),
      canvas.height
    );
    ctx.drawImage(ImagesLoded.grid, 0, 0, canvas.width, canvas.height);
  }

  mouseMovement({ clientX, clientY }) {
    this.backgroundPosition.x = this.beginingPosition.x + clientX / 50;
    this.backgroundPosition.y = this.beginingPosition.y + clientY / 50;
    this.ledLeftPosition.x = clientX / 200;
    this.ledRightPosition.x =
      canvas.width - resize(300, "width") - clientX / 200;
  }
}
