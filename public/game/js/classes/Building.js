class Building extends Sprite {
  constructor({
    position = { x: 0, y: 0 },
    cardInfo = {
      img: "",
      creationAnimation: "",
      frames: {
        create: 1,
      },
      name: "",
      isShooting: false,
      attack: 0,
      penetration: 0,
      breaker: 0,
      deffence: 0,
      typeOfFire: "shot",
      attackSpeed: 0,
      shield: 0,
      range: 0,
    },
  }) {
    super({
      position: { x: 0, y: 0 },
      imageSrc: cardInfo.card,
      frames: {
        max: 1,
      },
      offSet: cardInfo.offset,
    });
    this.cardLevel = 0;
    this.coordinates = position;
    this.cardInfo = cardInfo;
    this.rePotition();
    this.upgradeBuilding();
    this.projetiles = [];
    this.target = null;

    this.specialAbilityFrame = 0;

    this.drawRadiusStart = new Sprite({
      imageSrc: ImagesLoded.radarTowerChanging,
      frames: { maxX: 11, maxY: 1 },
    });
    this.drawRadiusEnd = new Sprite({
      imageSrc: ImagesLoded.radarTowerOpacity,
      frames: { maxX: 16, maxY: 1 },
    });

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
  }

  upgradeBuilding() {
    this.shield = {
      max: this.cardInfo.shield[this.cardLevel],
      current: this.cardInfo.shield[this.cardLevel],
    };
    this.health = {
      max: this.cardInfo.deffence[this.cardLevel],
      current: this.cardInfo.deffence[this.cardLevel],
    };
    this.shootDemage = {
      attack: this.cardInfo.attack[this.cardLevel],
      penetration: this.cardInfo.penetration[this.cardLevel],
      breaker: this.cardInfo.breaker[this.cardLevel],
    };
    this.shootSpeed = this.cardInfo.attackSpeed[this.cardLevel];
    this.radius = this.resize(this.cardInfo.range[this.cardLevel], "width");
    this.drawRadarAttack.setSize(this.radius);
  }

  rePotition() {
    super.rePotition();
    this.center = {
      x: this.position.x + this.resize(120, "width") / 2,
      y: this.position.y + this.resize(120, "height") / 2,
    };
    this.radius = this.resize(this.cardInfo.range[this.cardLevel], "width");

    this.drawRadarAttack = new RadarAttack({
      position: this.position,
      image: {
        imageX: this.cardInfo.shotPosition?.imageX || 0,
        imageY: this.cardInfo.shotPosition?.imageY || 0,
      },
      radius: this.radius,
    });
  }

  setShield(value) {
    this.shield = {
      current: value,
      max: value,
    };
  }

  buildLiveBar() {
    this.drawLiveBar.drawBySegment(
      {
        imageX: this.drawLiveBar.frame.current,
        imageY: 0,
      },
      this.position
    );
  }

  buildBorder() {
    this.drawTower.drawBySegment(
      LevelsImage[this.cardInfo.name][this.cardLevel],
      this.position
    );
  }

  buildRadius() {
    //drawing shield
    this.drawShield.frame.current = Math.round(
      (this.shield.current * this.drawShield.frame.maxX) / this.shield.max
    );
    this.drawShield.drawBySegment(
      { imageX: this.drawShield.frame.current - 1, imageY: 0 },
      this.drawShield.position
    );
    this.drawShield.position = {
      x: this.position.x - this.resize(40, "width"),
      y: this.position.y - this.resize(40, "height"),
    };
    if (
      (this.cardInfo.isShooting || this.cardInfo.specialAbility === "boss") &&
      upgradeTile === this &&
      !this.lastLevelAbility("DISABLERANGE")
    ) {
      if (
        this.drawRadiusStart.frame.current <
        this.drawRadiusStart.frame.maxX - 1
      ) {
        this.drawRadiusStart.drawBySegment(
          {
            imageX: this.drawRadiusStart.frame.current,
            imageY: 0,
          },
          {
            x: this.center.x - this.radius,
            y: this.center.y - this.radius,
          },
          {
            width: this.radius * 2,
            height: this.radius * 2,
          }
        );
        this.drawRadiusStart.update();
      } else {
        this.drawRadiusEnd.drawBySegment(
          {
            imageX: this.drawRadiusEnd.frame.current,
            imageY: 0,
          },
          {
            x: this.center.x - this.radius,
            y: this.center.y - this.radius,
          },
          {
            width: this.radius * 2,
            height: this.radius * 2,
          }
        );
        this.drawRadiusEnd.update();
      }
    }
    if (this.cardInfo.isRadar) {
      this.drawRadarAttack.drawRadar();
    }
  }

  demage(demage) {
    if (this.shield.current > 0) {
      this.shield.current -= demage.penetration;
      return;
    }
    this.health.current -= demage.attack;
    userResources.damageTaken += demage.attack;
    this.drawLiveBar.frame.current = Math.round(
      (this.health.current * (this.drawLiveBar.frame.maxX - 1)) /
        this.health.max
    );
  }

  draw() {
    super.drawCutandResize(
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
  }

  update(state) {
    this.draw();
    if (state === "start") return;
    /* if (
      this.frame.current !== this.frame.max - 1 &&
      this.frame.max === this.cardInfo.frames.create
    )
      super.update(); */

    if (!this.target) {
      this.frame.elapsed = this.shootSpeed;
    }

    if (
      this.frame.elapsed % this.shootSpeed === 0 &&
      this.target &&
      this.cardInfo.isShooting
    ) {
      this.shoot();
    }
    if (
      this.cardInfo.specialAbility &&
      (this.specialAbilityFrame % this.shootSpeed === 0 ||
        this.cardInfo.specialAbility === "money")
    ) {
      this.specialAbility();
    }

    this.specialAbilityFrame++;

    if (
      this.target ||
      (!this.target &&
        this.frame.current !== 0 &&
        this.frame.max === this.cardInfo.frames.shooting)
    )
      super.update();
  }

  specialAbility() {
    switch (this.cardInfo.specialAbility) {
      case "shieldingTower": {
        this.buildingUpgrade(this.shieldingTower);
        this.expansionWave();
        break;
      }
      case "money": {
        if (generateMoney) {
          this.generateMoney();
        }
        break;
      }
      case "slowingEnemy": {
        this.enemyDemage(this.slowingEnemy);
        break;
      }
      case "healingTower": {
        this.buildingUpgrade(this.healingTower);
        this.expansionWave();
        break;
      }
      case "revealingEnemy": {
        this.enemyDemage(this.revealingEnemy);
        break;
      }
      case "virus": {
        this.enemyDemage(this.virus);
        break;
      }
    }
  }

  expansionWave() {
    radarAttacks.push(
      new RadarAttack({
        position: this.position,
        image: {
          imageX: this.cardInfo.shotPosition.imageX,
          imageY: this.cardInfo.shotPosition.imageY,
        },
        radius: this.radius,
      })
    );
  }

  buildingUpgrade(callback) {
    for (i = buildings.length - 1; i >= 0; i--) {
      const building = buildings[i];
      const xDifference = building.center.x - this.position.x;
      const yDifference = building.center.y - this.position.y;
      const distance = Math.hypot(xDifference, yDifference);
      callback(distance, this, building);
    }
  }

  enemyDemage(callback) {
    for (i = enemies.length - 1; i >= 0; i--) {
      const enemy = enemies[i];
      const xDifference = enemy.center.x - this.position.x;
      const yDifference = enemy.center.y - this.position.y;
      const distance = Math.hypot(xDifference, yDifference);
      callback(distance, this, enemy);
    }
  }

  shieldingTower(distance, a, b) {
    if (distance <= a.radius && b !== a) {
      b.setShield(a.cardInfo.attack[a.cardLevel]);
    }
  }

  getMoneyByPorcentage() {
    return (userResources.coin * this.cardInfo.attack[this.cardLevel]) / 100;
  }

  generateMoney() {
    userResources.setCoin(this.getMoneyByPorcentage());
    generateMoney = false;
  }

  slowingEnemy(distance, thisBuilding, enemy) {
    if (distance <= thisBuilding.radius && enemy.isVisible) {
      enemy.slowMotion(thisBuilding.lastLevelAbility("BOSSDOUBLEDEMAGE"));
    }
  }

  healingTower(distance, thisBuilding, building) {
    if (
      distance <= thisBuilding.radius &&
      thisBuilding !== building &&
      building.health.current < building.health.max
    ) {
      if (building.health.current + 10 > building.health.max) {
        building.health.current = building.health.max;
      } else {
        building.health.current += thisBuilding.shootDemage.attack;
      }
      building.drawLiveBar.frame.current = Math.round(
        (building.health.current * (building.drawLiveBar.frame.maxX - 1)) /
          building.health.max
      );
    }
  }

  revealingEnemy(distance, thisBuilding, enemy) {
    if (distance <= thisBuilding.radius) {
      enemy.setVisible();
    }
  }

  virus(distance, thisBuilding, enemy) {
    if (distance <= thisBuilding.radius && enemy.isVisible) {
      enemy.setHealth(thisBuilding.shootDemage.attack);
    }
  }

  lastLevelAbility(ability) {
    return (
      this.cardLevel === 3 && this.cardInfo.lastLevelAbility.includes(ability)
    );
  }

  shoot() {
    if (
      (this.target.isVisible || this.lastLevelAbility("SHOWINVISIBLE")) &&
      this.cardInfo.specialAbility !== "boss"
    ) {
      this.projetiles.push(
        new Projectile({
          position: {
            x: this.center.x,
            y: this.center.y,
          },
          imageSrc: ImagesLoded.shots,
          enemy: this.target,
          trigger:
            this.cardLevel === 3 && this.cardInfo.subName === "SNIPER"
              ? "missile"
              : this.cardInfo.typeOfFire,
          shotPosition: this.cardInfo.shotPosition,
          power: this.cardInfo?.power[this.cardLevel] ?? 3,
          audio: this.cardInfo.shotAudio,
        })
      );
    }
    if (
      this.target.enemyCard.isBoss &&
      this.cardInfo.specialAbility === "boss"
    ) {
      this.projetiles.push(
        new Projectile({
          position: {
            x: this.center.x,
            y: this.center.y,
          },
          imageSrc: ImagesLoded.shots,
          enemy: this.target,
          trigger: "shot",
          shotPosition: this.cardInfo.shotPosition,
          power: this.cardInfo?.power[this.cardLevel] ?? 3,
          audio: this.cardInfo.shotAudio,
        })
      );
    }

    if (this.lastLevelAbility("GRENADELAUNCHER")) {
      this.projetiles.push(
        new Projectile({
          position: {
            x: this.center.x,
            y: this.center.y,
          },
          imageSrc: ImagesLoded.shots,
          enemy: this.target,
          trigger: "granade",
          shotPosition: {
            imageX: 1,
            imageY: 0,
          },
          power: 4,
          audio: "granadeLauncheShot.mp3",
        })
      );
    }
  }
}
