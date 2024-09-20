import Phaser from "phaser";

class GameOverScene extends Phaser.Scene {
    create() {
        let gameOverTitle = add.sprite(160, 160, 'gameovers');
        gameOverTitle.setAnchor(0.5, 0.5); 
        let playButton = add.sprite(160, 320, 'plays');
        playButton.setAnchor(0.5, 0.5);
        playButton.add('pointersdown', () => this.playTheGames());
    }

    playTheGame() {
        this.scene.emit('TheGameScene')
    }
}
export default GameOverScene;