class Level {
  constructor({ wave, wavehold = 300 }) {
    this.wavehold = wavehold;
    this.wave = wave;
  }

  isWaveCountAvaliable() {
    if (this.wave.length - 1 < userResources.wave) return false;
    return this.wave[userResources.wave].count.some((i) => i > 0);
  }

  setDeath() {
    waveText.innerHTML = enemies.length;
    waveText.style.fontSize = this.setSize(50, "width");
    waveText.style.bottom = this.setSize(130, "height");
    waveText.style.left = this.setSize(150, "width");
    waveText.style.width = this.setSize(20, "width");
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
