class PlacementTiles extends Sprite {
  constructor({ position = { x: 0, y: 0 } }) {
    super({
      position,
      imageSrc: ImagesLoded.gridSelector,
    });
    this.coordinates = position;
    this.rePotition();
    this.size = gridSize;
    this.color = "rgba(255, 255, 255, 1)";
    this.isOccupied = false;

    this.drawTower = new Sprite({
      imageSrc: ImagesLoded.game_interface_towers,
      frames: { maxX: 4, maxY: 12 },
    });

    this.drawLiveBar = new Sprite({
      imageSrc: ImagesLoded.towerBorder_HEALTH_TOWER_ANIMATION_frames_frames,
      frames: { maxX: 30, maxY: 1, current: 29 },
    });

    this.drawShield = new Sprite({
      imageSrc: ImagesLoded.SHIELD_FOR_TOWERS_animation,
      frames: { maxX: 30, maxY: 1 },
    });

    this.drawRadiusEnd = new Sprite({
      imageSrc: ImagesLoded.radarTowerOpacity,
      frames: { maxX: 16, maxY: 1 },
    });
  }

  rePotition() {
    this.position = {
      x: this.coordinates.x * gridSize.width - gridSize.width / 3,
      y: this.coordinates.y * gridSize.height,
    };
  }

  drawTilePreview() {
    if (activeCard) {
      const radius = this.resize(activeCard.card.range[0], "width");
      this.drawCard.drawCutandResize(
        {
          startCutX: 130,
          startCutY: 200,
          endWidthX: 600,
          endHeightY: 500,
        },
        {
          x: this.position.x + this.resize(20, "width"),
          y: this.position.y + this.resize(12, "height"),
        },
        {
          width: resize(80, "width"),
          height: resize(80, "height"),
        }
      );
      this.drawTower.drawBySegment(
        LevelsImage[activeCard.card.name][0],
        this.position
      );
      this.drawLiveBar.drawBySegment(
        {
          imageX: this.drawLiveBar.frame.current,
          imageY: 0,
        },
        this.position
      );
      if (activeCard.card.range[0] > 0) {
        this.drawRadiusEnd.drawBySegment(
          {
            imageX: this.drawRadiusEnd.frame.current,
            imageY: 0,
          },
          {
            x: this.position.x - radius + this.resize(60, "width"),
            y: this.position.y - radius + this.resize(60, "width"),
          },
          {
            width: radius * 2,
            height: radius * 2,
          }
        );
        this.drawRadiusEnd.update();
      }
    }
  }

  draw() {
    //super.draw()
    ctx.fillStyle = this.color;
    ctx.fillRect(
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
  }

  update(mouse) {
    //this.draw()
    if (
      mouse.x > this.position.x &&
      mouse.x < this.position.x + gridSize.width &&
      mouse.y > this.position.y &&
      mouse.y < this.position.y + gridSize.height
    ) {
      if (activeCard) {
        this.drawCard = new Sprite({
          imageSrc: activeCard.card.card,
          frames: { maxX: 1, maxY: 1 },
        });
      }
      super.drawTile();
      this.drawTilePreview();
    } else {
      this.color = "rgba(255, 255, 255, 0.3)";
    }
  }
}
