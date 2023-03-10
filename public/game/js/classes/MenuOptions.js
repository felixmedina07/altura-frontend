class MenuOptions extends Sprite {
  constructor() {
    super({
      imageSrc: ImagesLoded.menu,
      frames: {
        maxX: 5,
        maxY: 2,
      },
    });
    this.rePotition();
    this.frame.current = 0;
    this.optionSelected = "none";

    this.maxVolumen = 0.5;

    this.masterVolumen = new Sprite({
      imageSrc: ImagesLoded.volumeSelector,
      frames: {
        maxX: 1,
        maxY: 1,
      },
    });

    this.acceptModal = new Sprite({
      imageSrc: ImagesLoded.acceptModal,
      frames: {
        maxX: 2,
        maxY: 1,
      },
    });
  }

  rePotition() {
    this.menuPosition = {
      x: centerCanvas.width - this.resize(200, "width"),
      y: centerCanvas.height - this.resize(300, "height"),
    };
    this.menuPositionClicked = {
      x: centerCanvas.width - this.resize(200, "width"),
      y: centerCanvas.height - this.resize(260, "height"),
    };
  }

  drawAcceptModal() {
    if (isOpenMenuOptions && this.optionSelected === "acceptModal") {
      this.acceptModal.drawBySegment(
        { imageX: 0, imageY: 0 },
        {
          x: centerCanvas.width - this.resize(400, "width"),
          y: centerCanvas.height - this.resize(150, "height"),
        },
        { width: this.resize(800, "width"), height: this.resize(300, "height") }
      );
    }
  }

  drawSelector() {
    if (isOpenMenuOptions && this.optionSelected === "settings") {
      this.masterVolumen.drawBySegment(
        {
          imageX: 0,
          imageY: 0,
        },
        {
          x: this.positionSelectormasterVolumen,
          y: this.menuPosition.y + resize(85, "height"),
        }
      );
      this.masterVolumen.drawBySegment(
        {
          imageX: 0,
          imageY: 0,
        },
        {
          x: this.positionSelectormusicVolumen,
          y: this.menuPosition.y + resize(170, "height"),
        }
      );
      this.masterVolumen.drawBySegment(
        {
          imageX: 0,
          imageY: 0,
        },
        {
          x: this.positionSelectorshotVolumen,
          y: this.menuPosition.y + resize(250, "height"),
        }
      );
      this.masterVolumen.drawBySegment(
        {
          imageX: 0,
          imageY: 0,
        },
        {
          x: this.positionSelectoreffectVolumen,
          y: this.menuPosition.y + resize(335, "height"),
        }
      );
    }
  }

  moveAudioSelector(client) {
    if (isOpenMenuOptions && this.optionSelected === "settings") {
      const clikedmasterVolumen = super.click(
        client,
        {
          x: this.menuPosition.x + resize(50, "width"),
          y: this.menuPosition.y + resize(85, "height"),
        },
        {
          width: resize(360, "width"),
          height: resize(40, "height"),
        }
      );
      const clikedmusicVolumen = super.click(
        client,
        {
          x: this.menuPosition.x + resize(50, "width"),
          y: this.menuPosition.y + resize(170, "height"),
        },
        {
          width: resize(360, "width"),
          height: resize(40, "height"),
        }
      );
      const clikedshotVolumen = super.click(
        client,
        {
          x: this.menuPosition.x + resize(50, "width"),
          y: this.menuPosition.y + resize(250, "height"),
        },
        {
          width: resize(360, "width"),
          height: resize(40, "height"),
        }
      );
      const clikedeffectVolumen = super.click(
        client,
        {
          x: this.menuPosition.x + resize(50, "width"),
          y: this.menuPosition.y + resize(335, "height"),
        },
        {
          width: resize(360, "width"),
          height: resize(40, "height"),
        }
      );
      const width =
        this.menuPosition.x +
        resize(410, "width") -
        (this.menuPosition.x + resize(50, "width"));
      const position =
        client.clientX - (this.menuPosition.x + resize(50, "width"));
      const volumen = (position * this.maxVolumen) / width;

      if (clikedmasterVolumen) {
        this.positionSelectormasterVolumen = client.clientX;
        this.positionSelectormusicVolumen = client.clientX;
        this.positionSelectorshotVolumen = client.clientX;
        this.positionSelectoreffectVolumen = client.clientX;
        this.changeVolumenMaster(volumen);
      }
      if (clikedmusicVolumen) {
        this.positionSelectormusicVolumen = client.clientX;
        this.changeVolumenMusic(volumen);
      }
      if (clikedshotVolumen) {
        this.positionSelectorshotVolumen = client.clientX;
        this.changeVolumenShot(volumen);
      }
      if (clikedeffectVolumen) {
        this.positionSelectoreffectVolumen = client.clientX;
        this.changeVolumenEffect(volumen);
      }
    }
  }

  changeVolumenMusic(volumen) {
    userResources.backgroundNoice.volume = volumen;
  }

  changeVolumenMaster(volumen) {
    this.changeVolumenMusic(volumen);
    this.changeVolumenShot(volumen);
    this.changeVolumenEffect(volumen);
  }

  changeVolumenShot(volumen) {
    userResources.shotVolume = volumen;
  }

  changeVolumenEffect(volumen) {
    userResources.waveSound.volume = volumen;
    userResources.buildingTower.volume = volumen;
    userResources.effectVolumen = volumen;
  }

  draw() {
    if (isOpenMenuOptions) {
      (ctx.fillStyle = "rgba(0, 0, 0, 0.9)"),
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      switch (this.optionSelected) {
        case "none": {
          super.drawBySegment(
            { imageX: this.frame.current, imageY: 0 },
            this.menuPosition
          );
          break;
        }
        case "settings": {
          super.drawBySegment({ imageX: 0, imageY: 1 }, this.menuPosition);
        }
      }
    }
  }

  hover(client) {
    const clicked = super.click(client, this.menuPositionClicked, {
      width: this.crop.widthR,
      height: this.crop.heightR - this.resize(120, "height"),
    });
    if (isOpenMenuOptions && clicked) {
      const selected = client.clientY - this.menuPosition.y;
      this.frame.current =
        Math.round(
          (selected * this.frame.maxX) /
            (this.crop.heightR - this.resize(100, "height"))
        ) - 1;
      return true;
    }
    return false;
  }

  click(client) {
    const cliked = super.click(client, this.menuPositionClicked, {
      width: this.crop.widthR,
      height: this.crop.heightR,
    });
    if (isOpenMenuOptions && cliked) {
      if (this.optionSelected === "none") {
        switch (this.frame.current) {
          case 0: {
            isOpenMenuOptions = false;
            break;
          }
          case 1: {
            this.optionSelected = "acceptModal";
            break;
          }
          case 2: {
            console.log("collections");
            break;
          }
          case 3: {
            const width =
              this.menuPosition.x +
              resize(410, "width") -
              (this.menuPosition.x + resize(50, "width"));

            this.positionSelectormasterVolumen =
              this.menuPosition.x +
              resize(50, "width") +
              (width * userResources.backgroundNoice.volume) / this.maxVolumen;
            this.positionSelectormusicVolumen =
              this.menuPosition.x +
              resize(50, "width") +
              (width * userResources.backgroundNoice.volume) / this.maxVolumen;
            this.positionSelectorshotVolumen =
              this.menuPosition.x +
              resize(50, "width") +
              (width * userResources.shotVolume) / this.maxVolumen;
            this.positionSelectoreffectVolumen =
              this.menuPosition.x +
              resize(50, "width") +
              (width * userResources.effectVolumen) / this.maxVolumen;
            this.optionSelected = "settings";
            break;
          }
          case 4: {
            window.close(``, `_parent`, ``);
            break;
          }
        }
      }
      if (this.optionSelected === "settings") {
        const closeClicked = super.click(
          client,
          {
            x: this.menuPosition.x + resize(215, "width"),
            y: this.menuPosition.y + resize(370, "height"),
          },
          {
            width: resize(50, "width"),
            height: resize(50, "height"),
          }
        );
        if (closeClicked) {
          this.optionSelected = "none";
        }
      }
      if (this.optionSelected === "acceptModal") {
        const y = this.resize(40, "height");
        const height = this.resize(40, "height");
        const width = this.resize(120, "width");
        const closeClickedYes = super.click(
          client,
          {
            x: centerCanvas.width - this.resize(195, "width"),
            y: centerCanvas.height + y,
          },
          {
            width: width,
            height: height,
          }
        );
        if (closeClickedYes) {
          location.reload();
          return;
        }
        const closeClickedNo = super.click(
          client,
          {
            x: centerCanvas.width + this.resize(80, "width"),
            y: centerCanvas.height + y,
          },
          {
            width: width,
            height: height,
          }
        );
        if (closeClickedYes || closeClickedNo) {
          this.optionSelected = "none";
        }
      }
    }

    return false;
  }
}
