class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }
    preload() {
        this.load.image('playButton', './assets/sprites/playButton.png')
    }

    create() {
        // game title text config
        let gameTitleTextConfig = {
            fontFamily: 'Akshar',
            fontSize : '48px',
            align: 'left',
            fixedWidth: 0,
            resolution: 2,
        }

        // find center of screen
        this.screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        this.screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;

        // initialize spacebar key
        this.keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        // create 'Game Menu' text
        this.add.text(this.screenCenterX,  this.screenCenterY- 50, "Game Menu", gameTitleTextConfig).setOrigin(0.5);

       // create 'Play' button
        this.playButton = this.add.sprite(this.screenCenterX, this.screenCenterY + 50, 'playButton').setOrigin(0.5);
        this.playButton.setInteractive();
        this.playButton.on('pointerdown', () => {
            this.scene.start('difficultiesScene')
        });
    }
}