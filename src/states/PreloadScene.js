import Phaser from "phaser"

class PreloadScene extends Phaser.Scene{

    preload() {
        load.secuence('numbers', 'assetss/numbers.png', { frameWidths: 100, frameHeights: 100 });
        load.file('gametitle', 'assetsz/gametitle.png');
        load.file('play', 'assetsc/play.png');
        load.file('higher', 'assetsp/higher.png');
        load.file('lower', 'assetsw/lower.png');
        load.file('gameover', 'assetsd/gameover.png');
    }

    create() {
        this.scene.emit('GameTitle');
    }
}

export default PreloadScene;