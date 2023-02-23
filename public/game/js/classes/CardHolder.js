class CardHolder extends Sprite {
  constructor({ position = { x: 0, y: 0 }, mode = "vertical", cards = [] }) {
    super({
      position,
      imageSrc:
        mode === "vertical"
          ? ImagesLoded.enemyCardHolder
          : ImagesLoded.ownCardHolderUp,
    });
    this.cardsEnemy = new Sprite({
      imageSrc: ImagesLoded.allGameEnemyCards,
      frames: {
        maxX: 3,
        maxY: 8,
      },
    });
    this.cardsOwn = new Sprite({
      imageSrc: ImagesLoded.allGameCards,
      frames: {
        maxX: 3,
        maxY: 6,
      },
    });
    this.cardSelector = new Sprite({
      imageSrc: ImagesLoded.cardSelector,
      frames: {
        max: 1,
      },
    });
    this.cards = cards;
    this.last = 0;
    this.cardsForPage = cards.slice(0, 5);
    this.cardsPotitions = [];
    this.mode = mode;
    this.rePotition();
    this.refreshPotitions();
    this.isOpen = false;

    if (this.isOpen && this.mode === "horizontal") {
      this.image = ImagesLoded.ownCardHolderDown;
    }
    if (!this.isOpen && this.mode === "horizontal") {
      this.image = ImagesLoded.ownCardHolderUp;
    }
  }

  rePotition() {
    if (this.mode === "vertical") {
      this.position.x = -this.crop.widthR + this.resize(110, "width");
      this.position.y = this.resize(240, "height");
    } else {
      this.position.y = canvas.height - this.resize(100, "height");
      this.position.x = this.resize(350, "width");
    }
    this.refreshPotitions();
  }

  refreshPotitions() {
    this.cardsPotitions = [];
    for (let i = 0; i < this.cardsForPage.length; i++) {
      const cardData = this.cardsForPage[i];
      this.cardsPotitions.push(
        new Card({
          position:
            this.mode === "vertical"
              ? {
                  x: this.position.x + this.resize(50, "width"),
                  y:
                    ((this.crop.heightR - this.resize(350, "height")) / 5) * i +
                    this.position.y +
                    this.resize(150, "height"),
                }
              : {
                  x:
                    ((this.crop.widthR - this.resize(200, "width")) / 5) * i +
                    this.position.x +
                    this.resize(150, "width"),
                  y: canvas.height,
                },
          card: cardData,
          size: {
            width: this.resize(230, "width"),
            height: this.resize(300, "height"),
          },
        })
      );
    }
  }

  refreshCards(cards) {
    this.cards = cards;
    this.cardsForPage = cards.slice(0, 5);
    this.refreshPotitions();
  }

  drawCards() {
    if (this.mode === "vertical") {
      for (let i = 0; i < this.cardsPotitions.length; i++) {
        const cardData = this.cardsPotitions[i];
        const x = this.position.x + cardData.size.width / 4;
        if (x !== cardData.position.x) {
          cardData.position.x = x;
        }
        this.cardsEnemy.drawBySegment(
          cardData.card.position,
          cardData.position,
          cardData.size
        );
        if (cardData.isSelected) {
          this.cardSelector.position = {
            x: cardData.position.x - this.resize(20, "width"),
            y: cardData.position.y - this.resize(20, "height"),
          };
          this.cardSelector.drawImageCube();
        }
      }
    }
    if (this.mode === "horizontal") {
      for (let i = 0; i < this.cardsPotitions.length; i++) {
        const cardData = this.cardsPotitions[i];
        const y = this.position.y + cardData.size.height / 4;
        if (y !== cardData.position.y + this.resize(15, "height")) {
          cardData.position.y = y + this.resize(15, "height");
        }
        cardData.drawBySegment(
          { imageX: 0, imageY: 0 },
          cardData.position,
          cardData.size
        );
        if (cardData.isSelected) {
          this.cardSelector.position = {
            x: cardData.position.x - this.resize(20, "width"),
            y: cardData.position.y - this.resize(20, "height"),
          };
          this.cardSelector.drawImageCube();
        }
      }
    }
  }

  draw() {
    super.drawImageCube();
    if (this.isOpen && this.frame.elapsed % this.frame.hold === 0) {
      if (
        this.mode === "vertical" &&
        this.position.x < -this.resize(20, "width")
      ) {
        this.position.x += 5;
      }
      if (
        this.mode === "horizontal" &&
        this.position.y > canvas.height - this.crop.heightR
      ) {
        this.position.y -= 5;
      }
    } else {
      if (
        this.mode === "vertical" &&
        this.position.x > -this.crop.widthR + this.resize(110, "width")
      ) {
        this.position.x -= 5;
      }
      if (
        this.mode === "horizontal" &&
        this.position.y < canvas.height - this.resize(100, "height")
      ) {
        this.position.y += 5;
      }
    }
  }

  open(clientX, clientY) {
    if (this.mode === "horizontal") {
      if (this.next(clientX, clientY)) return true;
      if (this.before(clientX, clientY)) return true;
      if (this.selectCard(clientX, clientY)) return true;
    }
    if (this.openHolder(clientX, clientY)) return true;
    return false;
  }

  hoverCard({ clientX, clientY }) {
    for (let i = 0; i < this.cardsPotitions.length; i++) {
      const cardData = this.cardsPotitions[i];
      if (this.showCard(clientX, clientY, cardData)) return true;
    }
    return false;
  }

  selectCard(clientX, clientY) {
    let result = false;
    for (let i = 0; i < this.cardsPotitions.length; i++) {
      const cardData = this.cardsPotitions[i];
      if (
        clientX > cardData.position.x &&
        clientX < cardData.position.x + cardData.size.width &&
        clientY > cardData.position.y &&
        clientY < cardData.position.y + cardData.size.height
      ) {
        result = true;
        if (!cardData.isSelected) {
          activeCard = cardData;
          cardData.isSelected = true;
          upgradeTile = undefined;
        } else {
          activeCard = undefined;
          cardData.isSelected = false;
        }
      } else {
        cardData.isSelected = false;
      }
    }
    if (!result && activeCard) activeCard.isSelected = true;
    return result;
  }

  showCard(clientX, clientY, cardData) {
    if (
      clientX > cardData.position.x &&
      clientX < cardData.position.x + cardData.size.width &&
      clientY > cardData.position.y &&
      clientY < cardData.position.y + cardData.size.height
    ) {
      showCardDeck = cardData;
      return true;
    }
    showCardDeck = undefined;
    return false;
  }

  openHolder(clientX, clientY) {
    if (
      clientX > this.position.x &&
      clientX < this.position.x + this.crop.widthR &&
      clientY > this.position.y &&
      clientY < this.position.y + this.crop.heightR
    ) {
      this.isOpen = !this.isOpen;
      return true;
    }
    return false;
  }

  next(clientX, clientY) {
    const position = {
      x: this.position.x + this.crop.widthR / 2 + this.resize(80, "width"),
      y: this.position.y + this.resize(50, "height"),
    };

    if (
      clientX > position.x &&
      clientX < position.x + this.resize(60, "width") &&
      clientY > position.y &&
      clientY < position.y + this.resize(60, "height")
    ) {
      const resizeList = this.cards.slice(this.last + 5, this.last + 10);
      if (resizeList.length > 0) {
        this.last += 5;
        this.cardsForPage = resizeList;
        this.refreshPotitions();
      }
      return true;
    }
    return false;
  }

  before(clientX, clientY) {
    const position = {
      x: this.position.x + this.crop.widthR / 2 - this.resize(130, "width"),
      y: this.position.y + this.resize(50, "height"),
    };
    if (
      clientX > position.x &&
      clientX < position.x + this.resize(60, "width") &&
      clientY > position.y &&
      clientY < position.y + this.resize(60, "height")
    ) {
      const resizeList = this.cards.slice(this.last - 5, this.last);
      if (resizeList.length > 0) {
        this.cardsForPage = resizeList;
        this.last -= 5;
        this.refreshPotitions();
      }
      return true;
    }
    return false;
  }
}
