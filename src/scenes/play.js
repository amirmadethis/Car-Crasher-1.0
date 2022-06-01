class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        this.load.image('background', './assets/background.png' );
        this.load.image('playerCar', './assets/playerCar.png');
        this.load.image('pauseButton', './assets/pauseButton.png');
        this.load.image('leftSide', './assets/leftSide.png');
        this.load.image('rightSide', './assets/rightSide.png');
        this.load.image('street', './assets/street.png');
        this.load.image('cars1', './assets/cars1.png');
        this.load.image('cars2', './assets/cars2.png');
        this.load.image('cars3', './assets/cars3.png');
        this.load.image('cars4', './assets/cars4.png');
        this.load.image('schoolbus', './assets/schoolbus1.png');
        this.load.image('trucks1', './assets/trucks1.png');
        this.load.image('trucks2', './assets/trucks2.png');
        this.load.image('trucks3', './assets/trucks3.png');
        this.load.image('trucks4', './assets/trucks4.png');
        this.load.image('trucks5', './assets/trucks5.png');
    }

    create() {


        let textConfig = {
            fontFamily: 'Akshar',
            fontSize : '24px',
            align: 'left',
            fixedWidth: 0,
            resolution: 2,
        }

        // find center of screen
        this.screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        this.screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;

        // game over flag
        this.gameIsOver = false

        // game paused flag
        this.gameIsPaused = false

        // adding pause button
        this.pauseButton = this.add.image(32, 32,'pauseButton').setOrigin(0.5);
        this.pauseButton.setInteractive();
        this.pauseButton.on('pointerdown', () => {
            this.pauseUnpause();
        });        

        // create background
        //this.background = this.add.tileSprite(this.screenCenterX, this.screenCenterY - 1600, 160, 4000, 'background').setOrigin(.5);
        

        this.leftSide = this.add.tileSprite(this.screenCenterX - 188, this.screenCenterY - 4800, 101, 12000, 'leftSide').setOrigin(0.5);

        this.rightSide = this.add.tileSprite(this.screenCenterX + 181, this.screenCenterY - 4800, 115, 12000, 'rightSide').setOrigin(0.5);

        this.street = this.add.tileSprite(this.screenCenterX, this.screenCenterY - 4800, 320, 12000, 'street').setOrigin(0.5);

       

        // add text 
        this.add.text(this.screenCenterX + 265, this.screenCenterY - 40, "How To Play", textConfig);
        this.add.text(this.screenCenterX + 244, this.screenCenterY, "left⬅️|➡️right", textConfig);

        // establishing keybind
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        // create player
        this.player = new PlayerCar (this, this.screenCenterX + 25, this.screenCenterY + 200, 'playerCar').setOrigin(0.5);

        this.pauseText = this.add.text(this.screenCenterX, this.screenCenterY, "PAUSED", textConfig).setOrigin(0.5);
        this.pauseText.alpha = 0;
    }

    update() {

        // move car when pressing LEFT or RIGHT arrow keys
        if (keyLEFT.isDown && (!this.gameIsPaused)) {
            this.player.x -= this.player.speed;
        } else if (keyRIGHT.isDown && (!this.gameIsPaused)) {
            this.player.x += this.player.speed;
        }

        // pause scrolling of background if game is paused
        if (!this.gameIsOver && !this.gameIsPaused) {
            this.leftSide.tilePositionY -= .5;
            this.rightSide.tilePositionY -= .5;
            this.street.tilePositionY -= .5;
        } else {
            this.leftSide.tilePositionY -= 0;
            this.rightSide.tilePositionY -= 0;
            this.street.tilePositionY -= 0;
        }

    }

    pauseUnpause() {
        if (this.gameIsPaused) {
            this.gameIsPaused = false
            this.pauseText.alpha = 0
        } else if (!this.gameIsPaused) {
            this.gameIsPaused = true
            this.pauseText.alpha = 1
        }
    }
}