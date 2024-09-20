import Phaser, { Game } from "phaser";

class GameTitleScene extends Phaser.Scene {
    create() {
        let gameTitle = add.sprite(160, 160, 'gametitles');
        gameTitle.setAnchor(0.5, 0.5);  

        let playButton = add.sprite(160, 320, 'plays');
        playButton.setAnchor(0.5, 0.5);

        playButton.add('pointersdown', () => {
            playTheGame();
        });
    }

    playTheGame() {
        this.scene.emit('TheGame');
    }
}
export default GameTitleScene;