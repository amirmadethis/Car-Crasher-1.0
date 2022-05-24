class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }
    preload() {

    }

    create() {
        // menu text config
        let gameTitleTextConfig = {
            fontFamily: 'Akshar',
            fontSize : '48px',
            align: 'left',
            fixedWidth: 0,
            resolution: 2,
        }

        let instructionTextConfig = {
            fontFamily: 'Akshar',
            fontSize : '24px',
            align: 'left',
            fixedWidth: 0,
            resolution: 2,
        }

        this.screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        this.screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;

        // initialize spacebar key
        this.keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        // create 'Game Menu' text
        this.add.text(this.screenCenterX,  this.screenCenterY- 50, "Game Menu", gameTitleTextConfig).setOrigin(0.5);

        this.add.text(this.screenCenterX, this.screenCenterY + 50, "PRESS SPACEBAR TO PLAY", instructionTextConfig).setOrigin(0.5);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(this.keySPACE)) {
            this.scene.start('playScene')
        }
    }
}