class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        this.load.image('background', './assets/background.png' );
        this.load.image('playerCar', './assets/playerCar.png');
        this.load.image('pauseButton', './assets/pauseButton.png');
    }

    create() {
        let textConfig = {
            fontFamily: 'Akshar',
            fontSize : '24px',
            align: 'left',
            fixedWidth: 0,
            resolution: 2,
        }

        this.gameIsOver = false
        this.gameIsPaused = false

        this.pauseButton = this.add.image(32, 32,'pauseButton').setOrigin(0.5);
        this.pauseButton.setInteractive();
        this.pauseButton.on('pointerdown', () => {
            this.pauseUnpause();
        });

        // find center of screen
        this.screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        this.screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;        

        // create background
        this.background = this.add.tileSprite (this.screenCenterX, this.screenCenterY - 1600, 160, 4000, 'background').setOrigin(.5);

        // add text 
        this.add.text(this.screenCenterX + 145, this.screenCenterY - 40, "How To Play", textConfig);
        this.add.text(this.screenCenterX + 125, this.screenCenterY, "left⬅️|➡️right", textConfig);

        // establishing keybind
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        // create player
        this.player = new PlayerCar (this, this.screenCenterX + 25, this.screenCenterY + 200, 'playerCar').setOrigin(0.5);
    }

    update() {

        // move car when pressing LEFT or RIGHT arrow keys
        if (keyLEFT.isDown && (!this.gameIsPaused)) {
            this.player.x -= this.player.speed;
        } else if (keyRIGHT.isDown && (!this.gameIsPaused)) {
            this.player.x += this.player.speed;
        }

        if (!this.gameIsOver && !this.gameIsPaused) {
            this.background.tilePositionY -= .3;
        } else {
            this.background.tilePositionY -= 0;
        }

    }

    pauseUnpause() {
        if (this.gameIsPaused) {
            this.gameIsPaused = false
        } else if (!this.gameIsPaused) {
            this.gameIsPaused = true
        }
    }
}