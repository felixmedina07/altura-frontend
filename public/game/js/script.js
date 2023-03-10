const canvas = document.getElementById("canvas");
const body = document.getElementById("body");
const coinText = document.getElementById("coin");
const scoreText = document.getElementById("score");
const waveText = document.getElementById("wave");
const levelText = document.getElementById("level");
const message = document.getElementById("message");
const messageBackground = document.getElementById("messageBackground");
const stats = document.getElementById("stats");
const statsItems = document.getElementsByClassName("statsItem");
const loading = document.getElementById("loading");
const container = document.getElementById("container");
const currentWave = document.getElementById("currentWave");
const ctx = canvas.getContext("2d");
const SERVER_URL = "https://ops-defender-api.herokuapp.com/api/v1";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let activeTile = undefined;
let activeCard = undefined;
let upgradeTile = undefined;
let showCardDeck = undefined;
let isImageLoaded = false;
let isOpenMenuOptions = false;
let generateMoney = false;
let frame = 0;

const speedUp = 1;

message.addEventListener("click", () => {
  location.reload();
});

const displayOptions = {
  width: 2560,
  height: 1440,
};

const mouse = {
  x: undefined,
  y: undefined,
};

let centerCanvas = {
  width: canvas.width / 2,
  height: canvas.height / 2,
};

const gridMaxHorizontal = displayOptions.width / 120;
const gridMaxVertical = displayOptions.height / 120;

let gridSize = {
  width: canvas.width / gridMaxHorizontal,
  height: canvas.height / gridMaxVertical,
};

const buildings = [];
const enemies = [];
const explosions = [];
const levels = [];
const radarAttacks = [];
const projectileAudio = [];

let pathPoints = [];
let ImagesLoded = {};

const Images = new LoadGameImage();

let userResources;
let rePotition;
let menu;

const resize = (px, orientation) => {
  if ("width" === orientation)
    return (px * canvas.width) / displayOptions.width;
  if ("height" === orientation)
    return (px * canvas.height) / displayOptions.height;
};

Images.loadImages()
  .then((images) => {
    ImagesLoded = images;
    container.style.display = "inline-block";

    menu = new Menu();
    const background = new Background();
    const menuTile = new TilesMenu();
    const showCard = new CardView();
    const menuOptions = new MenuOptions();

    userResources = new UserResources({
      coin: 50.0,
      score: 0,
      heart: {
        max: 1,
      },
      level: 0,
      wave: 0,
    });

    const EnemyTower = new Tower({
      position: { x: resize(120, "width"), y: 0 },
    });

    const EnemyCardHolder = new CardHolder({
      imageSrc: ImagesLoded.enemyWallet,
      cards: levels[userResources.level].wave[userResources.wave].index.map(
        (enemy) => {
          return enemyCardsData[enemy];
        }
      ),
    });

    const OwnCardHolder = new CardHolder({
      imageSrc: ImagesLoded.ownCardHolder,
      mode: "horizontal",
      cards: Images.cards,
    });

    const heartImage = new Sprite({
      position: {
        x: canvas.width - resize(250, "width"),
        y: resize(200, "height"),
      },
      imageSrc: ImagesLoded.healthBar,
      frames: { max: 51, current: 0 },
      offSet: { x: 0, y: 0 },
    });

    const playButtom = new Play({
      position: {
        x: 0,
        y: canvas.height - resize(300, "height"),
      },
    });

    rePotition = () => {
      userResources.rePotition();
      menu.rePosition();
      playButtom.rePotition({
        potition: {
          x: 0,
          y: canvas.height - resize(300, "height"),
        },
      });
      heartImage.position = {
        x: canvas.width - resize(250, "width"),
        y: resize(200, "height"),
      };
      EnemyTower.rePotition({
        position: { x: resize(120, "width"), y: 0 },
      });
      menuOptions.rePotition();
      menuTile.rePotition();
      userResources.setPath();
      buildings.forEach((building) => building.rePotition());
      EnemyCardHolder.rePotition();
      OwnCardHolder.rePotition();
    };

    window.onresize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      centerCanvas = {
        width: canvas.width / 2,
        height: canvas.height / 2,
      };
      gridSize = {
        width: canvas.width / gridMaxHorizontal,
        height: canvas.height / gridMaxVertical,
      };
      rePotition();
    };

    const playAudios = () => {
      projectileAudio.forEach((audio, i) => {
        if (audio.ended) {
          projectileAudio.splice(i, 1);
          return;
        }
        if (audio.paused) {
          audio.play();
        }
      });
    };

    const animate = () => {
      const animationId = requestAnimationFrame(animate);
      background.draw();
      playAudios();
      userResources.placementTilesData.forEach((tile) => tile.update(mouse));
      const currentLevel = userResources.getCurrentLevel();

      if (!currentLevel.isWaveCountAvaliable() && enemies.length === 0) {
        userResources.wave++;
        generateMoney = true;
        userResources.setCurrentWave();
        userResources.playWaveSound();
        if (userResources.wave > userResources.getCurrentLevel().wave.length) {
          userResources.level += 1;
          userResources.wave = 0;
          userResources.setIdicatorsData();
          if (levels[userResources.level]) {
            levels.push(
              new Level(
                JSON.parse(JSON.stringify(LevelsData[LevelsData.length - 1]))
              )
            );
          }
        }
        const wave = userResources.getCurrentWave();
        if (wave) {
          const cardsEnemy = wave.index.map((enemy) => {
            return enemyCardsData[enemy];
          });
          EnemyCardHolder.refreshCards(cardsEnemy);
        }
      }

      if (
        frame % levels[userResources.level].wavehold === 0 &&
        levels[userResources.level].isWaveCountAvaliable() &&
        waveText.style.display === "flex" &&
        EnemyTower.frame.current.x === 14 &&
        EnemyTower.frame.current.y === 2 &&
        playButtom.state !== "start"
      ) {
        if (userResources.waveSound) userResources.spawnEnemies();
      }

      //Drawing the buildings and cards
      buildings.forEach((building, buildingIndex) => {
        building.target = null;

        if (building.lastLevelAbility("DISABLERANGE")) {
          building.target = enemies[0];
        } else {
          const validEnemies = enemies.filter((enemy) => {
            const xDifference = enemy.center.x - building.center.x;
            const yDifference = enemy.center.y - building.center.y;
            const distance = Math.hypot(xDifference, yDifference);
            return distance < building.radius;
          });

          building.target = validEnemies[0];
        }

        for (let i = building.projetiles.length - 1; i >= 0; i--) {
          const projectile = building.projetiles[i];
          const isCrached = projectile.update(building, playButtom.state);
          if (isCrached > 0) {
            if (typeof building.cardInfo.explosion === "number") {
              explosions.push(
                new Explosion({
                  projectile: projectile,
                  explosion: building.cardInfo.explosion,
                  trigger: projectile.trigger,
                })
              );
            }
            building.projetiles.splice(i, 1);
          }

          if (
            projectile.position.x < 0 ||
            projectile.position.x > canvas.width ||
            projectile.position.y < 0 ||
            projectile.position.y > canvas.height
          ) {
            building.projetiles.splice(i, 1);
          }
        }

        building.update(playButtom.state);
        building.buildBorder();
        building.buildLiveBar();
        building.buildRadius();

        if (building.health.current <= 0) {
          for (
            let j = userResources.placementTilesData.length - 1;
            j >= 0;
            j--
          ) {
            const tile = userResources.placementTilesData[j];
            if (
              tile.position.x === building.position.x &&
              tile.position.y === building.position.y
            ) {
              tile.isOccupied = false;
            }
          }
          buildings.splice(buildingIndex, 1);
          userResources.setPath();
        }
      });

      for (let i = radarAttacks.length - 1; i >= 0; i--) {
        const radarAttack = radarAttacks[i];
        radarAttack.draw();
        if (
          radarAttack.imagePosition.imageY ===
            radarAttack.imagePositionMax.imageY &&
          radarAttack.imagePosition.imageX === radarAttack.frame.maxX - 1
        ) {
          radarAttacks.splice(i, 1);
        }
      }

      pathPoints.forEach((point) => {
        point.drawBySegment({ imageX: 1, imageY: 2 }, point.position, {
          width: resize(120, "width"),
          height: resize(120, "height"),
        });
      });

      const lastPath =
        userResources.pathData[userResources.pathData.length - 1];
      const point = userResources.pathPosition[lastPath[1]][lastPath[0]];

      for (let i = enemies.length - 1; i >= 0; i--) {
        const enemy = enemies[i];
        enemy.drawCardImage();
        enemy.update(playButtom.state);
        enemy.drawShieldAndArmor();

        const validEnemies = buildings.filter((building) => {
          const xDifference = building.center.x - enemy.center.x;
          const yDifference = building.center.y - enemy.center.y;
          const distance = Math.hypot(xDifference, yDifference);
          return distance < enemy.radius;
        });
        enemy.target = validEnemies[0];

        if (enemy.health.current <= 0) {
          projectileAudio.push(new Audio());
          const currentAudio = projectileAudio[projectileAudio.length - 1];
          currentAudio.src = `/game/sounds/enemyDie.mp3`;
          currentAudio.volume = userResources.effectVolumen;
          userResources.setScore(1);
          userResources.setCoin(enemy.enemyCard.coin);
          const cards = enemy.enemyCard.spawn.map((spawn) => {
            return enemyCardsData.filter((card) => card.img === spawn)[0];
          });
          cards.forEach((card, index) => {
            for (let i = 0; i < enemy.enemyCard.spawnCount; i++) {
              enemies.push(
                new Enemy({
                  enemyCard: card,
                  position: {
                    x: enemy.position.x - resize((120 + index) * i, "width"),
                    y: enemy.position.y,
                  },
                  waypointIndex: enemy.waypointIndex,
                })
              );
            }
          });
          enemies.splice(i, 1);
        }

        for (let i = enemy.projetiles.length - 1; i >= 0; i--) {
          const projectile = enemy.projetiles[i];
          const isCrached = projectile.update(enemy, playButtom.state);
          if (isCrached > 0) {
            enemy.projetiles.splice(i, 1);
          }

          if (
            projectile.position.x < 0 ||
            projectile.position.x > canvas.width ||
            projectile.position.y < 0 ||
            projectile.position.y > canvas.height
          ) {
            enemy.projetiles.splice(i, 1);
          }
        }

        if (
          Math.round(enemy.position.x) >= Math.round(point.position.x) - 1 &&
          Math.round(enemy.position.x) <= Math.round(point.position.x) + 1 &&
          Math.round(enemy.position.y) >= Math.round(point.position.y) - 1 &&
          Math.round(enemy.position.y) <= Math.round(point.position.y) + 1
        ) {
          projectileAudio.push(new Audio());
          const currentAudio = projectileAudio[projectileAudio.length - 1];
          currentAudio.src = `/game/sounds/resingEnemy.wav`;
          currentAudio.volume = userResources.effectVolumen;
          userResources.setHeart(-enemy.enemyCard.baseDemage);
          enemies.splice(i, 1);
          if (
            userResources.heart.current >= userResources.heart.max ||
            (userResources.coin < 5 && buildings.length <= 0)
          ) {
            userResources.sendScore().then(() => {
              message.style.left = "50%";
              messageBackground.style.left = "50%";
              stats.style.top = "30%";
              for (let i = 0; i < statsItems.length; i++) {
                const item = statsItems[i];
                item.style.top = "33%";
                userResources.setStatsData(item);
              }
            });
            cancelAnimationFrame(animationId);
          }
        }
      }

      for (let i = explosions.length - 1; i >= 0; i--) {
        const explosion = explosions[i];
        explosion.draw();
        if (explosion.frame.current >= explosion.frame.maxX) {
          explosions.splice(i, 1);
        }
      }

      menu.draw();
      heartImage.frame.current = Math.round(
        (userResources.heart.current * heartImage.frame.max) /
          userResources.heart.max
      );
      heartImage.drawImageCube();
      EnemyCardHolder.draw();
      EnemyCardHolder.drawCards();
      EnemyTower.update();
      OwnCardHolder.draw();
      OwnCardHolder.drawCards();
      playButtom.draw();
      menuTile.draw();
      showCard.drawSmallImage();
      showCard.drawBigImage();
      menuOptions.draw();
      menuOptions.drawSelector();
      frame++;
    };

    animate();

    canvas.addEventListener("mousedown", ({ clientX, clientY }) => {
      menuOptions.moveAudioSelector({ clientX, clientY });
    });

    canvas.addEventListener("click", ({ clientX, clientY }) => {
      userResources.backgroundNoice.play();

      menuOptions.click({ clientX, clientY });
      if (isOpenMenuOptions) return;
      const isOpenEnemyBanner = EnemyCardHolder.open(clientX, clientY);
      const isOpenUserBanner = OwnCardHolder.open(clientX, clientY);
      if (isOpenEnemyBanner || isOpenUserBanner) return;

      if (
        activeTile &&
        !activeTile.isOccupied &&
        (activeCard || upgradeTile) &&
        userResources.isCoinAvailable(activeCard?.card?.price[0] ?? 0)
      ) {
        userResources.playBuildingTower();
        activeTile.isOccupied = true;
        userResources.setPath();
        if (userResources.pathData.length === 0) {
          activeTile.isOccupied = false;
          userResources.setPath();
          return;
        }
        if (upgradeTile) {
          for (
            let j = userResources.placementTilesData.length - 1;
            j >= 0;
            j--
          ) {
            const tile = userResources.placementTilesData[j];
            if (
              tile.position.x === upgradeTile.position.x &&
              tile.position.y === upgradeTile.position.y
            ) {
              tile.isOccupied = false;
            }
          }
          upgradeTile.coordinates = {
            x: activeTile.coordinates.x,
            y: activeTile.coordinates.y,
          };
          upgradeTile.rePotition();
          activeTile.isOccupied = true;
          return;
        }
        userResources.setCoin(-activeCard.card.price[0]);
        buildings.push(
          new Building({
            position: {
              x: activeTile.coordinates.x,
              y: activeTile.coordinates.y,
            },
            levelInfo: levels[userResources.level].tower,
            cardInfo: activeCard.card,
          })
        );
        buildings.sort((a, b) => {
          return a.position.y - b.position.y;
        });
        return;
      }

      if (activeTile && activeTile.isOccupied && !EnemyCardHolder.isOpen) {
        activeCard = undefined;
        OwnCardHolder.cardsPotitions.forEach((item) => {
          item.isSelected = false;
        });
        const building = buildings.find(
          (building) =>
            building.position.x === activeTile.position.x &&
            building.position.y === activeTile.position.y
        );
        if (upgradeTile === building) {
          upgradeTile = undefined;
          return;
        }
        upgradeTile = building;
      }

      if (
        clientX > playButtom.position.x &&
        clientX < playButtom.position.x + playButtom.crop.widthR &&
        clientY > playButtom.position.y &&
        clientY < playButtom.position.y + playButtom.crop.heightR
      ) {
        waveText.style.display = "flex";
        playButtom.resetPush();
        EnemyTower.startAnimation();
      }

      menuTile.click(clientX, clientY);
      menu.click(clientX, clientY);
    });

    canvas.addEventListener("mousemove", ({ clientX, clientY }) => {
      background.mouseMovement({ clientX, clientY });
      const menu = menuOptions.hover({ clientX, clientY });

      if (menu) return;
      mouse.x = clientX;
      mouse.y = clientY;

      const isBanner = OwnCardHolder.hoverCard({ clientX, clientY });
      if (isBanner) return;

      activeTile = null;
      for (i = 0; i < userResources.placementTilesData.length; i++) {
        const tile = userResources.placementTilesData[i];
        if (
          mouse.x > tile.position.x &&
          mouse.x < tile.position.x + gridSize.width &&
          mouse.y > tile.position.y &&
          mouse.y < tile.position.y + gridSize.height
        ) {
          activeTile = tile;
          break;
        }
      }
    });

    document.addEventListener("fullscreenchange", exitHandler);
    document.addEventListener("webkitfullscreenchange", exitHandler);
    document.addEventListener("mozfullscreenchange", exitHandler);
    document.addEventListener("MSFullscreenChange", exitHandler);

    function exitHandler() {
      if (
        !document.fullscreenElement &&
        !document.webkitIsFullScreen &&
        !document.mozFullScreen &&
        !document.msFullscreenElement
      ) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        centerCanvas = {
          width: canvas.width / 2,
          height: canvas.height / 2,
        };
        gridSize = {
          width: canvas.width / gridMaxHorizontal,
          height: canvas.height / gridMaxVertical,
        };
        rePotition();
      }
    }
  })
  .catch((e) => {
    console.log("exection:" + e);
  })
  .finally(() => {
    loading.style.display = "none";
  });
