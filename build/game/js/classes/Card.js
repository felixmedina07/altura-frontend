class Card extends Sprite {
  constructor({
    position = { x: 0, y: 0 },
    size = {
      width: 0,
      height: 0,
    },
    card = {
      supply,
      img: "",
      creationAnimation: "",
      animation: "",
      frames: {
        create: 0,
        shooting: 1,
      },
      name: "",
      isShooting: false,
      attack: 0,
      deffence: 0,
      attackSpeed: 0,
    },
  }) {
    super({
      position: position,
      imageSrc: card.card,
      frames: {
        maxX: 1,
        maxY: 1,
      },
    });
    this.size = size;
    this.position = position;
    this.card = card;
    this.isSelected = false;
  }

  roundRect(x, y, w, h, radius) {
    var r = x + w;
    var b = y + h;
    ctx.beginPath();
    ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
    ctx.lineWidth = "4";
    ctx.moveTo(x + radius, y);
    ctx.lineTo(r - radius, y);
    ctx.quadraticCurveTo(r, y, r, y + radius);
    ctx.lineTo(r, y + h - radius);
    ctx.quadraticCurveTo(r, b, r - radius, b);
    ctx.lineTo(x + radius, b);
    ctx.quadraticCurveTo(x, b, x, b - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.stroke();
  }
}
