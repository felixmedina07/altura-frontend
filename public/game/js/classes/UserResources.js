class UserResources {
  constructor({
    coin = 100,
    score = 0,
    heart = { max: 20 },
    level = 0,
    wave = 0,
  }) {
    this.heart = {
      current: 0,
      max: heart.max,
    };
    this.level = level;
    this.wave = wave;
    this.coin = coin;
    this.score = score;
    this.placementTilesData = [];
    this.path = [];
    this.speedGame = 1;

    this.maxCoin = 1000000;

    this.start();
    this.setIdicatorsData();
    this.setPath();
    this.backgroundNoice = new Audio();
    this.backgroundNoice.src = "/game/sounds/backgroundNoice.mp3";
    this.backgroundNoice.volume = 0.13;
    this.backgroundNoice.loop = true;

    this.shotVolume = 0.13;
    this.effectVolumen = 0.13;

    this.waveSound = new Audio();
    this.waveSound.src = "/game/sounds/startAWave.mp3";
    this.waveSound.volume = 0.13;

    this.buildingTower = new Audio();
    this.buildingTower.src = "/game/sounds/buildingTower.mp3";
    this.buildingTower.volume = 0.13;
  }

  playBuildingTower() {
    this.buildingTower.currentTime = 0;
    this.buildingTower.play();
  }

  playWaveSound() {
    this.waveSound.currentTime = 0;
    this.waveSound.play();
  }

  spawnEnemies = () => {
    const startPosition = Math.random();
    const currentLevel = levels[this.level].wave[this.wave];
    for (let i = 0; i < currentLevel.index.length; i++) {
      const enemy = currentLevel.index[i];
      if (currentLevel.count[i] !== 0) {
        enemies.push(
          new Enemy({
            position: {
              x: resize(300, "width"),
              y:
                startPosition > 0.5
                  ? centerCanvas.height
                  : centerCanvas.height - resize(120, "height"),
            },
            enemyCard: enemyCardsData[enemy],
            level: this.level,
          })
        );
        currentLevel.count[i] -= 1;
        return;
      }
    }
  };

  getCurrentLevel() {
    return levels[this.level];
  }

  getCurrentWave() {
    return this.getCurrentLevel().wave[this.wave];
  }

  isCoinAvailable(price) {
    return this.coin - price >= 0;
  }

  start() {
    this.rePotition();
    LevelsData.forEach((level) => {
      levels.push(new Level(JSON.parse(JSON.stringify(level))));
    });
    //levels.push(new Level());
    const placementTilesDta2D = [];
    for (let i = 0; i < placementTiles.length; i += 22) {
      placementTilesDta2D.push(placementTiles.slice(i, i + 22));
    }

    placementTilesDta2D.forEach((row, Y) => {
      row.forEach((symbol, X) => {
        if (symbol === 14) {
          this.placementTilesData.push(
            new PlacementTiles({
              position: {
                x: X,
                y: Y,
              },
            })
          );
        }
      });
    });
  }

  rePotition() {
    this.placementTilesData.forEach((tile) => {
      tile.rePotition();
    });
    this.setIdicatorsData();
  }

  setPath() {
    this.path = [];
    this.pathPosition = [];
    pathPoints = [];
    for (let i = 0; i < this.placementTilesData.length; i += 16) {
      const tiles = this.placementTilesData.slice(i, i + 16);
      let result = [];
      this.pathPosition.push(tiles);
      for (let j = 0; j < tiles.length; j++) {
        const tile = tiles[j];
        if (!tile.isOccupied) {
          result.push(0);
        } else {
          result.push(1);
        }
      }
      this.path.push(result);
    }
    const grid = new PF.Grid(this.path);
    const finder = new PF.AStarFinder();
    this.pathData = finder.findPath(0, 3, 15, 3, grid);

    for (let h = 0; h < this.pathData.length; h++) {
      const path = this.pathData[h];
      const positionPoint = this.pathPosition[path[1]][path[0]];
      pathPoints.push(
        new Sprite({
          position: {
            x: positionPoint.position.x + this.resize(0, "width"),
            y: positionPoint.position.y + this.resize(0, "height"),
          },
          frames: {
            maxX: 3,
            maxY: 3,
          },
          imageSrc: ImagesLoded.shots,
        })
      );
    }
  }

  setLevel(level) {
    if (level) this.level += level;
    levelText.innerHTML = "level " + (this.level + 1);
    levelText.style.fontSize = this.setSize(50, "width");
    levelText.style.top = this.setSize(60, "height");
    levelText.style.left = canvas.width + this.resize(200, "width");
    levelText.style.width = this.setSize(200, "width");
  }

  setScore(score) {
    if (score) this.score += score;
    scoreText.innerHTML = this.score;
    scoreText.style.fontSize = this.setSize(50, "width");
    scoreText.style.top = this.setSize(118, "height");
    scoreText.style.left = this.setSize(400, "width");
    scoreText.style.width = this.setSize(200, "width");
  }

  setCoin(coin) {
    if (coin && this.coin < this.maxCoin && coin > 0) {
      const coinResult = Number.parseFloat(this.coin) + Number.parseFloat(coin);
      this.coin = Number.parseFloat(coinResult).toFixed(1);
      if (this.coin >= this.maxCoin) this.coin = this.maxCoin;
    }
    if (coin < 0) {
      const coinResult = Number.parseFloat(this.coin) + Number.parseFloat(coin);
      this.coin = Number.parseFloat(coinResult).toFixed(1);
    }

    coinText.innerHTML = this.coin;
    coinText.style.fontSize = this.setSize(50, "width");
    coinText.style.top = this.setSize(118, "height");
    coinText.style.right = this.setSize(400, "width");
    coinText.style.width = this.setSize(200, "width");
  }

  setCurrentWave() {
    currentWave.innerHTML = "Wave " + (this.wave + 1);
    currentWave.style.fontSize = this.setSize(50, "width");
    currentWave.style.top = this.setSize(60, "height");
    currentWave.style.left = canvas.width - this.resize(200, "width");
    currentWave.style.width = this.setSize(200, "width");
  }

  setHeart(heart) {
    if (heart) this.heart.current -= heart;
  }

  setIdicatorsData() {
    this.setHeart();
    this.setScore();
    this.setCoin();
    this.setLevel();
    this.setCurrentWave();
  }

  setSize(px, orientation) {
    return this.resize(px, orientation) + "px";
  }

  resize(px, orientation) {
    if ("width" === orientation)
      return (px * canvas.width) / displayOptions.width;
    if ("height" === orientation)
      return (px * canvas.height) / displayOptions.height;
  }
}
