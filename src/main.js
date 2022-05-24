let gameConfig = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    scene: [Menu, Play],
    autoCenter: true,
}
let game = new Phaser.Game(gameConfig);
