let gameConfig = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [Menu, Play],
    autoCenter: true,
}
let game = new Phaser.Game(gameConfig);

let keyLEFT, keyRIGHT;
