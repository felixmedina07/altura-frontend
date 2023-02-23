class Sprite {
  constructor({
    position = { x: 0, y: 0 },
    imageSrc = new Image(),
    frames = {
      max: 1,
      current: 0,
      maxX: 1,
      maxY: 1,
      currentX: 1,
      currentY: 1,
    },
    offSet = { x: 0, y: 0 },
    color = "blue",
    customSize = { width: 120, height: 120 },
  }) {
    this.position = position;
    this.image = imageSrc;
    this.customSize = {
      width: this.resize(customSize.width, "width"),
      height: this.resize(customSize.height, "height"),
    };
    this.frame = {
      max: frames.max,
      current: frames.current ?? 0,
      elapsed: 0,
      hold: 4,
      maxX: frames.maxX,
      maxY: frames.maxY,
      currentX: frames.currentX,
      currentY: frames.currentY,
    };
    this.size = {
      width: this.resize(120, "width"),
      height: this.resize(120, "height"),
    };
    this.offSet = offSet;
    this.color = color;
    this.crop = {
      position: {
        x: this.position.x,
        y: this.position.y,
      },
      width: this.image.width,
      height: this.image.height,
      widthR:
        (this.image.width * canvas.width) /
        displayOptions.width /
        this.frame.max,
      heightR: (this.image.height * canvas.height) / displayOptions.height,
    };
  }

  rePotition() {
    this.position = {
      x: this.coordinates.x * gridSize.width - gridSize.width / 3,
      y: this.coordinates.y * gridSize.height,
    };
  }

  drawCutandResize(
    { startCutX, startCutY, endWidthX, endHeightY } = {
      startCutX: 0,
      startCutY: 0,
    },
    { x, y },
    { width, height } = { width: undefined, height: undefined }
  ) {
    this.crop = {
      position: {
        x: startCutX,
        y: startCutY,
      },
      width: endWidthX || cropWidth,
      height: endHeightY || cropHeight,
      widthR: width || this.resize(cropWidth, "width"),
      heightR: height || this.resize(cropHeight, "height"),
    };
    ctx.drawImage(
      this.image,
      this.crop.position.x,
      this.crop.position.y,
      this.crop.width,
      this.crop.height,
      x,
      y,
      this.crop.widthR,
      this.crop.heightR
    );
  }

  drawBySegment(
    { imageX, imageY },
    { x, y },
    { width, height } = { width: undefined, height: undefined }
  ) {
    const cropWidth = this.image.width / this.frame.maxX;
    const cropHeight = this.image.height / this.frame.maxY;
    this.crop = {
      position: {
        x: cropWidth * imageX,
        y: cropHeight * imageY,
      },
      width: cropWidth,
      height: cropHeight,
      widthR: width || this.resize(cropWidth, "width"),
      heightR: height || this.resize(cropHeight, "height"),
    };
    ctx.drawImage(
      this.image,
      this.crop.position.x,
      this.crop.position.y,
      this.crop.width,
      this.crop.height,
      x,
      y,
      this.crop.widthR,
      this.crop.heightR
    );
  }

  draw() {
    const cropWidth = this.image.width / this.frame.max;
    this.crop = {
      position: {
        x: cropWidth * this.frame.current,
        y: 0,
      },
      width: cropWidth,
      height: this.image.height,
    };
    this.drawImage();
  }

  drawTile() {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      gridSize.width,
      gridSize.height
    );
  }

  drawImageCube({ radius } = { radius: undefined }) {
    const cropWidth = this.image.width / this.frame.max;
    this.crop = {
      position: {
        x: cropWidth * this.frame.current,
        y: 0,
      },
      width: cropWidth,
      height: this.image.height,
      widthR: radius
        ? radius
        : (this.image.width * canvas.width) /
          displayOptions.width /
          this.frame.max,
      heightR: radius
        ? radius
        : (this.image.height * canvas.height) / displayOptions.height,
    };
    this.drawAnimationResize();
  }

  drawEnemy() {
    this.crop = {
      position: {
        x: 0,
        y: 0,
      },
      width: this.image.width,
      height: this.image.height,
      widthR: this.customSize.width,
      heightR: this.customSize.height,
    };
    ctx.save();
    ctx.beginPath();
    ctx.arc(
      this.position.x + (this.customSize.width / 2 + this.offSet.x),
      this.position.y + (this.customSize.height / 2 + this.offSet.y),
      this.crop.widthR / 2,
      0,
      Math.PI * 2,
      false
    );
    ctx.clip();
    this.drawAnimationResize();
    ctx.restore();
  }

  drawAnimationResize() {
    ctx.drawImage(
      this.image,
      this.crop.position.x,
      this.crop.position.y,
      this.crop.width,
      this.crop.height,
      this.position.x + this.resize(this.offSet.x, "width"),
      this.position.y + this.resize(this.offSet.y, "height"),
      this.crop.widthR,
      this.crop.heightR
    );
  }

  dawImageRotate(
    { deg, width, height, offSet, imageX, imageY } = {
      deg: 0,
      width: undefined,
      height: undefined,
      offSet: { x: 0, y: 0 },
    }
  ) {
    const cropWidth = this.image.width / this.frame.maxX;
    const cropHeight = this.image.height / this.frame.maxY;
    this.crop = {
      position: {
        x: cropWidth * imageX,
        y: cropHeight * imageY,
      },
      width: cropWidth,
      height: cropHeight,
      widthR: width ? width : this.resize(cropWidth, "width"),
      heightR: height ? height : this.resize(cropHeight, "height"),
    };
    ctx.save();
    if (width) {
      ctx.translate(
        this.position.x - this.crop.widthR / 2,
        this.position.y - this.crop.heightR / 2
      );
    } else {
      ctx.translate(this.position.x, this.position.y);
    }
    ctx.translate(this.crop.widthR / 2, this.crop.heightR / 2);
    ctx.rotate(deg);

    ctx.drawImage(
      this.image,
      this.crop.position.x,
      this.crop.position.y,
      this.crop.width,
      this.crop.height,
      -this.crop.widthR / 2 + offSet.x,
      -this.crop.heightR / 2 + offSet.y,
      this.crop.widthR,
      this.crop.heightR
    );
    ctx.restore();
  }

  drawImage() {
    ctx.drawImage(
      this.image,
      this.crop.position.x,
      this.crop.position.y,
      this.crop.width,
      this.crop.height,
      this.position.x + this.offSet.x,
      this.position.y + this.offSet.y,
      this.crop.width,
      this.crop.height
    );
  }

  resize(px, orientation) {
    if ("width" === orientation)
      return (px * canvas.width) / displayOptions.width;
    if ("height" === orientation)
      return (px * canvas.height) / displayOptions.height;
  }

  update(callback) {
    this.frame.elapsed++;
    if (this.frame.elapsed % this.frame.hold === 0) {
      if (typeof callback === "function") {
        callback();
        return;
      }
      this.frame.current++;
      if (this.frame.current >= this.frame.max) {
        this.frame.current = 0;
      }
      if (this.frame.current >= this.frame.maxX) {
        this.frame.current = 0;
      }
    }
  }

  click(client, position, size) {
    if (
      client.clientX > position.x &&
      client.clientX < position.x + size.width &&
      client.clientY > position.y &&
      client.clientY < position.y + size.height
    ) {
      return true;
    }
    return false;
  }
}
