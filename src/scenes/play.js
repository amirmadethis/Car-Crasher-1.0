class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        this.load.image('background', './assets/background.png' );
        this.load.image('playerCar', './assets/playerCar.png');
    }

    create() {
        let textConfig = {
            fontFamily: 'Akshar',
            fontSize : '24px',
            align: 'left',
            fixedWidth: 0,
            resolution: 2,
        }

        this.screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        this.screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;        

        this.background = this.add.tileSprite (this.screenCenterX, this.screenCenterY - 1600, 160, 4000, 'background').setOrigin(.5);
        this.add.text(this.screenCenterX + 100, this.screenCenterY - 100, "Game Play", textConfig);

        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        this.player = new PlayerCar (this, this.screenCenterX + 25, this.screenCenterY + 200, 'playerCar').setOrigin(0.5);
    }

    update() {
        this.background.tilePositionY -= .3;

        if (keyLEFT.isDown) {
            this.player.x -= this.player.speed;
        } else if (keyRIGHT.isDown) {
            this.player.x += this.player.speed;
        }
    }
}