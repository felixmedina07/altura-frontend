class Enemy extends Sprite {
  constructor({
    position = { x: 0, y: 0 },
    enemyCard,
    waypointIndex = 0,
    level = 0,
  }) {
    super({
      position,
      imageSrc: ImagesLoded[enemyCard.deffenceAnimation],
      frames: { max: enemyCard.frames.deffence },
      color: "yellow",
    });
    this.level = level;
    this.porcentage = 500;
    this.doubleDemage = 1;
    this.enemyCard = enemyCard;
    this.isVisible = enemyCard.isVisible;
    this.normalVisible = this.isVisible;
    this.isShooting = enemyCard.isShooting;
    this.waypointIndex = waypointIndex;
    this.center = {
      x: this.position.x + this.crop.widthR / 2,
      y: this.position.y + this.crop.heightR / 2,
    };

    this.offSet = {
      x: this.resize(120, "width") / 2 - this.customSize.width / 2,
      y: this.resize(120, "height") / 2 - this.customSize.height / 2,
    };
    this.radius = this.resize(Math.round(enemyCard.range), "width");
    this.speed = this.resize(enemyCard.speed, "width");
    this.normalSpeed = this.speed;
    this.attack = this.calculateByPorcentage(enemyCard.attack) / 5;
    this.penetration = this.calculateByPorcentage(enemyCard.penetration) / 5;
    this.shootSpeed = Math.round(enemyCard.attackSpeed);
    this.health = {
      max: this.calculateByPorcentage(enemyCard.deffence),
      current: this.calculateByPorcentage(enemyCard.deffence),
    };
    this.armor = {
      max: this.calculateByPorcentage(enemyCard.armor),
      current: this.calculateByPorcentage(enemyCard.armor),
    };
    this.shield = {
      max: this.calculateByPorcentage(enemyCard.shield),
      current: this.calculateByPorcentage(enemyCard.shield),
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.side = Math.random();
    this.projetiles = [];
    this.target = null;
    this.frame.current = enemyCard.frames.deffence - 1;

    this.CardImage = new Sprite({
      position: {
        x: this.center.x,
        y: this.center.y,
      },
      imageSrc: ImagesLoded[enemyCard.creationAnimation],
      frames: { max: enemyCard.frames.create },
      customSize: {
        height: enemyCard.customSize.height,
        width: enemyCard.customSize.width,
      },
    });
    this.drawShield = new Sprite({
      position: {
        x: this.position.x,
        y: this.position.y,
      },
      imageSrc: ImagesLoded[enemyCard.shieldAnimation],
      frames: { maxX: 30, maxY: 1 },
    });
    this.drawArmor = new Sprite({
      position: {
        x: this.position.x,
        y: this.position.y,
      },
      imageSrc: ImagesLoded[enemyCard.armorAnimation],
      frames: { maxX: 16, maxY: 1 },
    });
  }

  calculateByPorcentage(item) {
    return item + (this.level * this.porcentage * item) / 100;
  }

  setHealth(attack) {
    this.health.current -= attack;
    this.frame.current = Math.round(
      (this.health.current * (this.frame.max - 1)) / this.health.max
    );
  }

  setVisible() {
    this.isVisible = true;
  }

  slowMotion(doubleDemage) {
    if (this.resize(this.enemyCard.speed, "width") === this.speed) {
      this.speed /= 2;
    }
    if (doubleDemage && this.enemyCard.isBoss) {
      this.doubleDemage = 2;
    }
  }

  normalMotion() {
    this.speed = this.resize(this.enemyCard.speed, "width");
  }

  drawCardImage() {
    if (this.isVisible) {
      //image
      this.CardImage.drawEnemy();
      this.CardImage.position = {
        x:
          this.center.x +
          this.resize(3, "width") -
          this.CardImage.customSize.width / 2,
        y: this.center.y - this.CardImage.customSize.height / 2,
      };
    }
  }

  drawShieldAndArmor() {
    if (this.isVisible) {
      //drawing armor
      this.drawArmor.frame.current = Math.round(
        (this.armor.current * this.drawArmor.frame.maxX) / this.armor.max
      );
      this.drawArmor.drawBySegment(
        { imageX: this.drawArmor.frame.current - 1, imageY: 0 },
        this.drawArmor.position
      );
      this.drawArmor.position = {
        x: this.position.x - this.resize(40, "width"),
        y: this.position.y - this.resize(40, "height"),
      };

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
    }
  }

  draw() {
    if (this.isVisible) {
      super.drawImageCube();
    }
  }

  demage(demage) {
    if (this.shield.current > 0) {
      this.shield.current -= demage.shootDemage.penetration * this.doubleDemage;
      return;
    }
    if (this.armor.current > 0) {
      this.armor.current -= demage.shootDemage.breaker * this.doubleDemage;
      return;
    }
    this.health.current -= demage.shootDemage.attack * this.doubleDemage;
    this.frame.current = Math.round(
      (this.health.current * (this.frame.max - 1)) / this.health.max
    );
  }

  update(state) {
    this.draw();
    if (state === "start") return;
    const path =
      userResources.pathData[this.waypointIndex] ??
      userResources.pathData[userResources.pathData.length - 5];

    if (userResources.pathData.length - 1 < this.waypointIndex) {
      this.waypointIndex = userResources.pathData.length - 5;
    }

    const point = userResources.pathPosition[path[1]][path[0]];
    const xDistance = point.position.x - this.position.x;
    const yDistance = point.position.y - this.position.y;
    const angel = Math.atan2(yDistance, xDistance);

    const gameSpeed = menu.speedUp
      ? this.speed + this.speed / speedUp
      : this.speed;

    this.velocity.x = Math.cos(angel) * gameSpeed;
    this.velocity.y = Math.sin(angel) * gameSpeed;

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (
      Math.round(this.position.x) >= Math.round(point.position.x) - 2 &&
      Math.round(this.position.x) <= Math.round(point.position.x) + 2 &&
      Math.round(this.position.y) >= Math.round(point.position.y) - 2 &&
      Math.round(this.position.y) <= Math.round(point.position.y) + 2 &&
      this.waypointIndex < userResources.pathData.length - 1
    ) {
      this.waypointIndex++;
    }
    this.center = {
      x: this.position.x + this.crop.widthR / 2,
      y: this.position.y + this.crop.heightR / 2,
    };
    if (
      this.frame.elapsed % this.shootSpeed === 0 &&
      this.target &&
      this.isShooting
    ) {
      this.shoot();
    }
    if (this.frame.elapsed % 500 === 0) {
      this.speed = this.normalSpeed;
      if (!this.normalVisible) this.isVisible = false;
    }
    this.frame.elapsed++;
  }

  shoot() {
    this.projetiles.push(
      new Projectile({
        position: {
          x: this.center.x,
          y: this.center.y,
        },
        enemy: this.target,
        trigger: "missile",
        shotPosition: this.enemyCard.shotPosition,
        power: this.enemyCard?.power ?? 3,
      })
    );
  }
}
