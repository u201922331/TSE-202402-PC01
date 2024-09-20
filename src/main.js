import PreloadScene from "./states/PreloadScene";
import GameTitleScene from "./states/GameTitleScene";
import TheGameScene from "./states/TheGameScene";
import GameOverScene from "./states/GameOverScene";

let config = {
    width: 320,
    height: 480,
    scene: [PreloadScene,GameTitleScene,TheGameScene,GameOverScene],
    scale:{
        mode: Phaser.FIT,
        autoCenter: Phaser.CENTER_BOTH
    }
}
new Phaser.Game(config);