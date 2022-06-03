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
        this.load.image('reset', './assets/reset.png');
    }

    create() {

        // config for text
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
        this.pauseButton = this.add.image(64, 64,'pauseButton').setOrigin(0.5);
        this.pauseButton.setInteractive();
        this.pauseButton.on('pointerdown', () => {
            this.pauseUnpause();
        });
        
        // adding reset button
        this.resetButton = this.add.image(64, 125,'reset').setOrigin(0.5);
        this.resetButton.setInteractive();
        this.resetButton.on('pointerdown', () => {
            this.resetGame();
        });    

        // add boundry sprite
        this.leftSide = this.add.tileSprite(this.screenCenterX - 188, this.screenCenterY - 4800, 101, 12000, 'leftSide').setOrigin(0.5);
        this.rightSide = this.add.tileSprite(this.screenCenterX + 181, this.screenCenterY - 4800, 115, 12000, 'rightSide').setOrigin(0.5);

        // add street sprite
        this.street = this.add.tileSprite(this.screenCenterX, this.screenCenterY - 4800, 320, 12000, 'street').setOrigin(0.5);

        // add text 
        this.add.text(this.screenCenterX + 290, this.screenCenterY - 40, "How To Play", textConfig);
        this.add.text(this.screenCenterX + 270, this.screenCenterY, "left⬅️|➡️right", textConfig);

        // establishing keybind
        this.keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

        // create player
        this.player = new PlayerCar (this, this.screenCenterX + 25, this.screenCenterY + 200, 'playerCar').setOrigin(0.5);

        this.pauseText = this.add.text(this.screenCenterX, this.screenCenterY, "PAUSED", textConfig).setOrigin(0.5);
        this.pauseText.alpha = 0;

        // add physics to boundries
        this.physics.add.existing(this.leftSide, true);
        this.physics.add.existing(this.rightSide, true);

        // add physics to player
        this.physics.add.existing(this.player, false);
        this.player.body.collideWorldBounds = true;
        this.player.body.setAllowGravity(false);

        // setting size for collision size for boundries
        this.leftSide.body.setSize(55,12000);
        this.rightSide.body.setSize(40,12000);

        // add collision between player and boundries
        this.physics.add.collider(this.player, this.leftSide, () => {
            console.log('collided left');
        });
        this.physics.add.collider(this.player, this.rightSide, () => {

            console.log('collided right');
        });

        this.enemySprites = ['cars1' , 'cars2', 'cars3', 'cars4', 'schoolbus', 'trucks1', 'trucks2', 'trucks3', 'trucks4', 'trucks5'];

        this.physics.add.collider(this.player, this.enemy, () => {
            this.player.alpha = 0;
        });
        
        this.time.addEvent({
            delay:500,
            callback: () => {
                this.spawnObstacles();
            },
            loop: true
        })
    }

    update() {



        // move car when pressing LEFT or RIGHT arrow keys
        if (this.keyLEFT.isDown && (!this.gameIsPaused) && (!this.keyDOWN.isDown && !this.keyUP.isDown))  {
            this.player.body.setVelocityX(-this.player.speed);
        } else if (this.keyRIGHT.isDown && (!this.gameIsPaused) && (!this.keyDOWN.isDown && !this.keyUP.isDown)) {
            this.player.body.setVelocityX(this.player.speed);
        } else if (this.keyUP.isDown && (!this.gameIsPaused) && (!this.keyLEFT.isDown && !this.keyRIGHT.isDown)) {
            this.player.body.setVelocityY(-this.player.speed);
        } else if (this.keyDOWN.isDown && (!this.gameIsPaused) && (!this.keyLEFT.isDown && !this.keyRIGHT.isDown)) {
            this.player.body.setVelocityY(this.player.speed);
        } else {
            this.player.body.setVelocityX(0);
            this.player.body.setVelocityY(0);
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

    resetGame() {
        this.registry.destroy(); // destroy registry
        this.events.off();       // disable all active events
        this.scene.restart();    // restart current scene
    }

    spawnObstacles() {
            this.enemy = new Obstacle(this, Phaser.Math.Between(this.screenCenterX - 150, this.screenCenterX + 150), -50, Phaser.Math.RND.pick(this.enemySprites));
            this.physics.add.existing(this.enemy);
            this.physics.add.overlap(this.enemy, this.player, (obj1, obj2) => {
                obj1.destroy();
        });
    }
}