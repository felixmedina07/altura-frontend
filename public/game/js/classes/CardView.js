class CardView {
  constructor() {}

  drawBigImage() {
    if (showCardDeck) {
      showCardDeck.drawBySegment(
        { imageX: 0, imageY: 0 },
        { x: resize(950, "width"), y: resize(200, "height") },
        {
          width: resize(604, "width"),
          height: resize(806, "height"),
        }
      );
    }
  }
  drawSmallImage() {
    if (upgradeTile) {
      ctx.fillStyle = "#fff";
      ctx.font = "15px built bold";
      ctx.fillText(
        upgradeTile.cardInfo.subName,
        upgradeTile.position.x,
        upgradeTile.position.y - resize(15, "height"),
        resize(400, "width")
      );
    }
  }
}
