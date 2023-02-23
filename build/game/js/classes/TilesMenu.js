class TilesMenu extends Sprite {
  constructor() {
    super({
      imageSrc: ImagesLoded.icons,
      frames: {
        maxX: 3,
        maxY: 4,
      },
    });
    this.rePotition();
  }

  rePotition() {
    this.infoPosition = {
      x: centerCanvas.width - this.resize(250, "width"),
      y: this.resize(110, "height"),
    };
    this.upgradePosition = {
      x: this.infoPosition.x + this.resize(170, "width"),
      y: this.infoPosition.y,
    };
    this.sellPosition = {
      x: this.upgradePosition.x + this.resize(170, "width"),
      y: this.infoPosition.y,
    };
  }

  draw() {
    if (upgradeTile) {
      super.drawBySegment(IconImage.info, this.infoPosition);
      if (upgradeTile.cardLevel === 0) {
        super.drawBySegment(IconImage.nomalTower, this.upgradePosition);
      }
      if (upgradeTile.cardLevel === 1) {
        super.drawBySegment(IconImage.towerOne, this.upgradePosition);
      }
      if (upgradeTile.cardLevel === 2) {
        super.drawBySegment(IconImage.towerTow, this.upgradePosition);
      }
      if (upgradeTile.cardLevel === 3) {
        super.drawBySegment(IconImage.towerThree, this.upgradePosition);
      }
      super.drawBySegment(IconImage.sell, this.sellPosition);
      super.drawBySegment(IconImage.selectBuilding, {
        x: upgradeTile.position.x - this.resize(20, "width"),
        y: upgradeTile.position.y - this.resize(20, "width"),
      });
    }
  }

  click(x, y) {
    //upgrade card
    if (
      x > this.upgradePosition.x &&
      x < this.upgradePosition.x + this.resize(120, "width") &&
      y > this.upgradePosition.y &&
      y < this.upgradePosition.y + this.resize(120, "height") &&
      upgradeTile.cardLevel < 3 &&
      userResources.isCoinAvailable(
        upgradeTile.cardInfo.price[upgradeTile.cardLevel + 1]
      )
    ) {
      userResources.setCoin(
        -upgradeTile.cardInfo.price[upgradeTile.cardLevel + 1]
      );
      upgradeTile.cardLevel += 1;
      upgradeTile.upgradeBuilding();
    }
    // sell card
    if (
      x > this.sellPosition.x &&
      x < this.sellPosition.x + this.resize(120, "width") &&
      y > this.sellPosition.y &&
      y < this.sellPosition.y + this.resize(120, "height")
    ) {
      const buildingIndex = buildings.findIndex(
        (building) => building === upgradeTile
      );
      for (let j = userResources.placementTilesData.length - 1; j >= 0; j--) {
        const tile = userResources.placementTilesData[j];
        if (
          tile.position.x === upgradeTile.position.x &&
          tile.position.y === upgradeTile.position.y
        ) {
          tile.isOccupied = false;
        }
      }
      userResources.setCoin(
        upgradeTile.cardInfo.price[upgradeTile.cardLevel] / 2
      );
      buildings.splice(buildingIndex, 1);
      upgradeTile = undefined;
      userResources.setPath();
    }
    //sell all cards
    if (
      x > this.infoPosition.x &&
      x < this.infoPosition.x + this.resize(120, "width") &&
      y > this.infoPosition.y &&
      y < this.infoPosition.y + this.resize(120, "height")
    ) {
      let coin = 0;
      buildings.forEach((building) => {
        coin += building.cardInfo.price[building.cardLevel] / 2;
      });
      buildings.splice(0, buildings.length);

      userResources.placementTilesData.forEach((tile) => {
        tile.isOccupied = false;
      });
      upgradeTile = undefined;
      userResources.setCoin(coin);
      userResources.setPath();
    }
  }
}
