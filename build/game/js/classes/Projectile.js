class Projectile extends Sprite {
  constructor({
    position = { x: 0, y: 0 },
    enemy,
    trigger = "shot",
    shotPosition,
    power = 3,
    audio,
  }) {
    super({
      position,
      imageSrc: ImagesLoded.shots,
      frames: {
        maxX: 3,
        maxY: 3,
      },
    });
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.shotPosition = shotPosition;
    this.enemy = enemy;
    this.radius = 10;
    this.power = power * userResources.speedGame;
    this.angle = 0;
    this.trigger = trigger;
    this.targetPosition = {
      x: this.enemy.center.x,
      y: this.enemy.center.y,
    };
    this.origin = {
      x: this.position.x,
      y: this.position.y,
    };
    this.center = {
      x: this.position.x + this.crop.widthR / 2,
      y: this.position.y + this.crop.heightR / 2,
    };
    this.widthLaser = undefined;
    this.offSetLaser = { x: 0, y: 0 };
    this.frameGranade = 2;

    if (audio) {
      projectileAudio.push(new Audio());
      const currentAudio = projectileAudio[projectileAudio.length - 1];
      currentAudio.src = `/game/sounds/${audio}`;
      currentAudio.volume = userResources.shotVolume;
    }
  }

  update(shootDemage, state) {
    switch (this.trigger) {
      case "shot": {
        this.dawImageRotate({
          deg: this.angle,
          offSet: { x: 0, y: 0 },
          ...this.shotPosition,
          width: 30,
          height: 30,
        });
        if (state === "start") return;
        return this.followPath(shootDemage);
      }
      case "missile": {
        this.dawImageRotate({
          deg: this.angle,
          offSet: { x: 0, y: 0 },
          ...this.shotPosition,
          width: 30,
          height: 30,
        });
        if (state === "start") return;
        return this.followEnemy(shootDemage);
      }
      case "granade": {
        this.dawImageRotate({
          deg: this.angle,
          offSet: { x: 0, y: 0 },
          ...this.shotPosition,
          width: 30,
          height: 30,
        });
        if (state === "start") return;
        return this.followPosition(shootDemage);
      }
      case "laser": {
        this.dawImageRotate({
          deg: this.angle,
          width: this.widthLaser,
          offSet: this.offSetLaser,
          ...this.shotPosition,
          height: 30,
        });
        if (state === "start") return;
        return this.laser(shootDemage);
      }
    }
  }

  followPath(shootDemage) {
    this.angle = Math.atan2(
      this.targetPosition.y - this.origin.y,
      this.targetPosition.x - this.origin.x
    );

    const gameSpeed = menu.speedUp
      ? this.power + this.power / speedUp
      : this.power;

    this.velocity.x = Math.cos(this.angle) * gameSpeed;
    this.velocity.y = Math.sin(this.angle) * gameSpeed;

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    for (let i = enemies.length - 1; i >= 0; i--) {
      const enemy = enemies[i];
      const xDifference = enemy.center.x - this.position.x;
      const yDifference = enemy.center.y - this.position.y;
      const distance = Math.hypot(xDifference, yDifference);
      if (distance < this.resize(20, "width") + this.radius) {
        enemy.demage(shootDemage);
        return 1;
      }
    }
  }

  followEnemy(shootDemage) {
    this.angle = Math.atan2(
      this.enemy.center.y - this.position.y,
      this.enemy.center.x - this.position.x
    );
    const gameSpeed = menu.speedUp
      ? this.power + this.power / speedUp
      : this.power;

    this.velocity.x = Math.cos(this.angle) * gameSpeed;
    this.velocity.y = Math.sin(this.angle) * gameSpeed;

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    const xDifference = this.enemy.center.x - this.position.x;
    const yDifference = this.enemy.center.y - this.position.y;
    const distance = Math.hypot(xDifference, yDifference);

    if (distance < this.resize(20, "width") + this.radius) {
      this.enemy.demage(shootDemage);
      return 1;
    }
    return 0;
  }

  followPosition(shootDemage) {
    let isCrached = 0;
    const xDifference = this.targetPosition.x - this.position.x;
    const yDifference = this.targetPosition.y - this.position.y;
    const distance = Math.hypot(xDifference, yDifference);
    if (distance < 3) {
      this.frameGranade++;
    }
    for (let i = enemies.length - 1; i >= 0; i--) {
      const enemy = enemies[i];

      const xDifferenceEnemy = enemy.center.x - this.position.x;
      const yDifferenceEnemy = enemy.center.y - this.position.y;
      const distanceEnemy = Math.hypot(xDifferenceEnemy, yDifferenceEnemy);

      if (this.frameGranade % 20 === 0) {
        if (distanceEnemy <= this.resize(80, "width"))
          enemy.demage(shootDemage);
        isCrached++;
      }
    }
    this.angle = Math.atan2(
      this.targetPosition.y - this.position.y,
      this.targetPosition.x - this.position.x
    );
    const gameSpeed = menu.speedUp
      ? this.power + this.power / speedUp
      : this.power;
    this.velocity.x = Math.cos(this.angle) * gameSpeed;
    this.velocity.y = Math.sin(this.angle) * gameSpeed;

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    return isCrached;
  }

  laser(shootDemage) {
    this.angle = Math.atan2(
      this.enemy.center.y - this.position.y,
      this.enemy.center.x - this.position.x
    );
    const xDifference = this.enemy.center.x - this.position.x;
    const yDifference = this.enemy.center.y - this.position.y;
    const distance = Math.hypot(xDifference, yDifference);

    this.offSetLaser = {
      x: distance / 2,
      y: 0,
    };

    this.widthLaser = distance;
    if (this.frameGranade % 40 === 0) {
      this.enemy.demage(shootDemage);
      return 1;
    }
    this.frameGranade++;
    return 0;
  }
}
