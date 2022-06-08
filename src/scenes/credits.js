class Credits extends Phaser.Scene {
    constructor() {
        super("creditsScene");
    }

    create() {
        let textConfig = {
            fontFamily: 'Arcade',
            fontSize : '48px',
            align: 'left',
            fixedWidth: 0,
            resolution: 2,
        }

        this.screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        this.screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;

        this.credits = this.add.text(this.screenCenterX, this.screenCenterY - 300, 'CREDITS', textConfig).setOrigin(0.5);
    }
}