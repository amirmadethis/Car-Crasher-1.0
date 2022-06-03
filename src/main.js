let gameConfig = {
    type: Phaser.AUTO,
    width: 900,
    height: 720,
    scene: [Menu, Play],
    autoCenter: true,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: {y : 200}

        }
    }
}
let game = new Phaser.Game(gameConfig);

let keyLEFT, keyRIGHT;
