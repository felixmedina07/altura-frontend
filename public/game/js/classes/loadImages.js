class LoadGameImage {
  constructor() {}

  async getDummyCard() {
    const result = await fetch(`${SERVER_URL}/card/all?name=NOOB`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const cards = await result.json();
    return cards.card;
  }

  async getCards() {
    if (!urlParams.has("token")) return;
    const token = urlParams.get("token");
    const result = await fetch(`${SERVER_URL}/deck/my-deck-active`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const decks = await result.json();
    return decks.deck.cards || [];
  }

  async getCardsImages() {
    const promises = [];
    for (let i = 0; i < this.cards.length; i++) {
      const card = this.cards[i];
      promises.push(
        new Promise((resolve, reject) => {
          const image = new Image();
          image.src = card.card;
          const name = `${card.name} ${card.subName}`;
          image.onload = () => {
            resolve({ image, name: name.replace(" ", "_") });
          };
          image.onerror = (e) => {
            console.log(e);
            reject(e);
          };
        })
      );
    }

    const data = await Promise.allSettled(promises);

    for (let i = 0; i < this.cards.length; i++) {
      const card = this.cards[i];
      card.card = data[i].value.image;
    }
  }

  async loadImages() {
    this.cards = (await this.getCards()) || (await this.getDummyCard());
    await this.getCardsImages();
    const promises = [];
    let imageObject = {};
    for (let i = 0; i < gameImagesNames.length; i++) {
      promises.push(
        new Promise((resolve, reject) => {
          const image = new Image();
          image.src = gameImagesNames[i].link;
          image.onload = () => {
            resolve({ image, name: gameImagesNames[i].name });
          };
          image.onerror = (e) => {
            console.log(e);
            reject(e);
          };
        })
      );
    }

    const data = await Promise.allSettled(promises);
    data.forEach((e) => {
      imageObject[e.value.name] = e.value.image;
    });

    return imageObject;
  }
}
