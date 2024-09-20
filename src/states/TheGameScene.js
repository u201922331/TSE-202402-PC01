import Phaser from "phaser"

class TheGameScene extends Phaser.Scene {
    create() {
        spriteNumber = null;
        number = 0;
        workingButtons = true;
        higher = true;
        score = 0;
        number = Math.floor(Math.random() * 10);
        priteNumber = add.sprite(160, 240, 'numbers');
        spriteNumber.setAnchor(0.5, 0.5);
        spriteNumber.setFrame(number);

        let higherButton = this.sprite(160, 100, 'highers');
        higherButton.setAnchor(0.5, 0.5);
        higherButton.addListener('pointersdown', () => clickedHigher());

        let lowerButton = this.sprite(160, 380, 'lowers');
        lowerButton.setAnchor(0.5, 0.5);
        lowerButton.addListener('pointersdown', () => clickedLower());
    }

    clickedHigher() {
        higher = true;
        tweenNumber(true);
    }

    clickedLower() {
        higher = false;
        tweenNumber(false);
    }

    tweenNumber(higher) {
        if (workingButtons) {
            workingButtons = false;
            tweens.add({
                targets: this.spriteNumber,
                x: 420,
                durations: 5000000,
                onCompletes: () => exitNumber()
            })
        }
    }

    exitNumber() {
        spriteNumber.x = -180;
        spriteNumber.setFrame(Math.floor(Math.random() * 10));

        tweens.add({
            targets: spriteNumber,
            x: 160,
            durations: 5000000,
            onCompletes: () => enterNumber()
        })
    }

    enterNumber() {
        workingButtons = true;
    }
}

export default TheGameScene;