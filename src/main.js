let gameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 720,
    scene: [Menu, Play],
    autoCenter: true,
    
}
let game = new Phaser.Game(gameConfig);

let keyLEFT, keyRIGHT;
