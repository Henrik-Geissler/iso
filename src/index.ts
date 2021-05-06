import { Container, Sprite, Loader, Application } from "pixi.js";
import { loadGameAssets } from "./utils/loadGameAssets";
import "./style.css";
import { randomInt } from "./utils/randomInt";
import { getBird } from "./utils/getBird";
import { initInputHandler } from "./utils/initInputHandler";
import { Explorer } from "./models/Explorer";
import { initExplorer } from "./utils/initExplorer";
import { gameWidth, gameHeight, numberOfMobs } from "./states/app";
import { initApp } from "./utils/initApp";
import { initState } from "./utils/initState";
import { Mob } from "./models/Mob";
import { Item } from "./models/Item";
import { walking } from "./utils/walking";

declare const VERSION: string;

declare global {
    interface Window {
        henrik: {
            app: Application;
            explorer: Explorer;
            scene: Container;
            mobs: Mob[];
            items: Item[];
            tmpState: {
                mobFrameCounter: number;
            };
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

let state: (delta: number) => void, treasure, dungeon, door, id;
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
    const mobs: Mob[] = window.henrik.mobs;
    for (let i = 0; i < numberOfMobs; i++) {
        const blob = new Mob([id!["blob.png"], id!["treasure.png"]]);
        const x = spacing * i + xOffset;
        const y = randomInt(0, stage.height - blob.height);
        blob.x = x;
        blob.y = y;
        blob.type = randomInt(0, 4);
        blob.quest = randomInt(0, 4);
        mobs.push(blob);
        scene.addChild(blob);
    }
    initExplorer();
    initInputHandler();
    state = walking;
}
function gameLoop(delta: number) {
    state(delta);
}
