class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        this.load.image('background', './assets/background.png' );
    }

    create() {
        let menuTextConfig = {
            fontFamily: 'Akshar',
            fontSize : '48px',
            align: 'left',
            fixedWidth: 0,
            resolution: 2,
        }

        this.screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        this.screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;        

        this.background = this.add.tileSprite (this.screenCenterX, this.screenCenterY, 160, 4000, 'background').setOrigin(.5);
        this.add.text(this.screenCenterX + 200, this.screenCenterY - 100, "Game Play", menuTextConfig);
        
    }

    update() {
        this.background.tilePositionY -= .5;
    }
}