import { Container, Sprite, Loader, Application } from "pixi.js";
import { loadGameAssets } from "./utils/loadGameAssets";
import "./style.css";
import { tryMove } from "./utils/tryMove";
import { randomInt } from "./utils/randomInt";
import { hitTestPoints } from "./utils/hitTestPoints";
import { getBird } from "./utils/getBird";
import { initInputHandler } from "./utils/initInputHandler";
import { Explorer } from "./models/Explorer";
import { initExplorer } from "./utils/initExplorer";
import { gameWidth, gameHeight } from "./states/app";
import { initApp } from "./utils/initApp";
import { initState } from "./utils/initState";
import { playerMove } from "./utils/playerMove";

declare const VERSION: string;

declare global {
    interface Window {
        henrik: {
            app: Application;
            explorer: Explorer;
            scene: Container;
        };
    }
}
let stage: Container;

window.onload = async (): Promise<void> => {
    await loadGameAssets();
    initState();
    initApp();
    const app: Application = window.henrik.app;
    stage = app.stage;

    initGame();
    const birdFromSprite = getBird();
    birdFromSprite.anchor.set(0.5, 0.5);
    birdFromSprite.position.set(gameWidth / 2, gameHeight / 2);

    stage.addChild(birdFromSprite);

    //Start the game loop
    app.ticker.add((delta) => gameLoop(delta));
};

const resources = Loader.shared.resources;

let state: (delta: number) => void,
    treasure,
    dungeon,
    door,
    id,
    mobFrameCounter = 0,
    mobFrameFlip = false;
const blobs: Sprite[] = [],
    numberOfBlobs = 10;
function initGame() {
    const scene: Container = window.henrik.scene;
    stage.addChild(scene);
    id = resources["images/treasureHunter.json"].textures;

    dungeon = new Sprite(id!["dungeon.png"]);
    scene.addChild(dungeon);

    door = new Sprite(id!["door.png"]);
    door.position.set(32, 0);
    scene.addChild(door);
    treasure = new Sprite(id!["treasure.png"]);
    treasure.x = scene.width - treasure.width - 48;
    treasure.y = scene.height / 2 - treasure.height / 2;
    scene.addChild(treasure);
    const spacing = 48,
        xOffset = 150;
    for (let i = 0; i < numberOfBlobs; i++) {
        const blob = new Sprite(id!["blob.png"]);
        const x = spacing * i + xOffset;
        const y = randomInt(0, stage.height - blob.height);
        blob.x = x;
        blob.y = y;
        blobs.push(blob);
        scene.addChild(blob);
    }
    initExplorer();
    initInputHandler();
    state = play;
}
function gameLoop(delta: number) {
    state(delta);
}
function play(delta: number) {
    playerMove(delta);
    mobMove(delta);
}
const mobMove = (delta: number) => {
    const explorer: Explorer = window.henrik.explorer;
    mobFrameFlip = !mobFrameFlip;
    for (let index = mobFrameFlip ? 0 : 1; index < blobs.length; index += 2) {
        const thisFrameblobs = blobs[index];
        ({ x: thisFrameblobs.x, y: thisFrameblobs.y } = tryMove(
            thisFrameblobs,
            explorer.pos.x - thisFrameblobs.x,
            explorer.pos.y - thisFrameblobs.y,
            1,
            delta
        ));
    }
    mobFrameCounter = (mobFrameCounter + 1) % numberOfBlobs;
    const thisFrameblob = blobs[mobFrameCounter];
    if (hitTestPoints(explorer.pos, thisFrameblob)) {
        thisFrameblob.alpha = 0.5;
    } else {
        thisFrameblob.alpha = 1;
    }
};
