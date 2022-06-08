class Difficulties extends Phaser.Scene {
    constructor() {
        super("difficultiesScene");
    }

    preload() {

    }

    create() {

        let textConfig = {
            fontFamily: 'Arcade',
            fontSize : '48px',
            align: 'left',
            fixedWidth: 0,
            resolution: 2,
        }

        // find center of screen
        this.screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        this.screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;

        this.difficultyTitleText = this.add.text(this.screenCenterX, this.screenCenterY - 100, "DIFFICULTY", textConfig).setOrigin(0.5);

        this.easyDifficulty = this.add.text(this.screenCenterX - 275, this.screenCenterY, "EASY", textConfig).setOrigin(0.5);
        this.easyDifficulty.setInteractive();
        this.easyDifficulty.on("pointerover", () => {
            this.easyDifficulty.setColor('#FF0000');  
        });
        this.easyDifficulty.on("pointerout", () => {
            this.easyDifficulty.setColor('#FFFFFF');  
        });
        this.easyDifficulty.on("pointerdown", () => {
            this.scene.start("playEasyScene")
        });

        this.normalDifficulty = this.add.text(this.screenCenterX - 125, this.screenCenterY, "NORMAL", textConfig).setOrigin(0.5);
        this.normalDifficulty.setInteractive();
        this.normalDifficulty.on("pointerover", () => {
            this.normalDifficulty.setColor('#FF0000');  
        });
        this.normalDifficulty.on("pointerout", () => {
            this.normalDifficulty.setColor('#FFFFFF');  
        });
        this.normalDifficulty.on("pointerdown", () => {
            this.scene.start("playNormalScene")
        });

        this.hardDifficulty = this.add.text(this.screenCenterX + 35, this.screenCenterY, "HARD", textConfig).setOrigin(0.5);
        this.hardDifficulty.setInteractive();
        this.hardDifficulty.on("pointerover", () => {
            this.hardDifficulty.setColor('#FF0000');  
        });
        this.hardDifficulty.on("pointerout", () => {
            this.hardDifficulty.setColor('#FFFFFF');  
        });
        this.hardDifficulty.on("pointerdown", () => {
            this.scene.start("playHardScene")
        });

        this.nightmareDifficulty = this.add.text(this.screenCenterX + 225, this.screenCenterY, "NIGHTMARE", textConfig).setOrigin(0.5);
        this.nightmareDifficulty.setInteractive();
        this.nightmareDifficulty.on("pointerover", () => {
            this.nightmareDifficulty.setColor('#FF0000');  
        });
        this.nightmareDifficulty.on("pointerout", () => {
            this.nightmareDifficulty.setColor('#FFFFFF');  
        });
        this.nightmareDifficulty.on("pointerdown", () => {
            this.scene.start("playNightmareScene")
        })

        this.backButton = this.add.text(this.screenCenterX - 400, this.screenCenterY + 300, '↩️',textConfig).setOrigin(0.5);
        this.backButton.setInteractive();
        this.backButton.on('pointerdown', () => {
            this.scene.start('menuScene');
        })

   }
}