let gameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 720,
    scene: [Menu, Play],
    autoCenter: true,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: {y : 0}

        }
    }
}
let game = new Phaser.Game(gameConfig);

let keyLEFT, keyRIGHT;
