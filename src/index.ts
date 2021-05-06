import { Container, Sprite, Application, Loader, Point, IPointData } from "pixi.js";
import { loadGameAssets } from "./utils/loadGameAssets";
import "./style.css";
import { tryMove } from "./utils/tryMove";
import { keyboard } from "./utils/keyboard";
import { randomInt } from "./utils/randomInt";
import { hitTestPoints } from "./utils/hitTestPoints";
import { getBird } from "./utils/getBird";

declare const VERSION: string;

export const gameWidth = 800;
export const gameHeight = 600;

export const app = new Application({
    backgroundColor: 0xd3d3d3,
    width: gameWidth,
    height: gameHeight,
    transparent: false,
    resolution: 1,
});

const stage = app.stage;

window.onload = async (): Promise<void> => {
    await loadGameAssets();

    document.body.appendChild(app.view);

    resizeCanvas();

    initGame();
    const birdFromSprite = getBird();
    birdFromSprite.anchor.set(0.5, 0.5);
    birdFromSprite.position.set(gameWidth / 2, gameHeight / 2);

    stage.addChild(birdFromSprite);

    //Start the game loop
    app.ticker.add((delta) => gameLoop(delta));
};

function resizeCanvas(): void {
    const resize = () => {
        app.renderer.resize(window.innerWidth, window.innerHeight);
        app.stage.scale.x = window.innerWidth / gameWidth;
        app.stage.scale.y = window.innerHeight / gameHeight;
    };

    resize();

    window.addEventListener("resize", resize);
}

const resources = Loader.shared.resources;
//Define variables that might be used in more
//than one function
let state: (delta: number) => void,
    explorer: any,
    treasure,
    dungeon,
    door,
    gameScene: Container,
    id,
    mobFrameCounter = 0,
    mobFrameFlip = false;
const blobs: Sprite[] = [],
    numberOfBlobs = 10;
function initGame() {
    //Make the game scene and add it to the stage
    gameScene = new Container();
    app.stage.addChild(gameScene);
    //Make the sprites and add them to the `gameScene`
    //Create an alias for the texture atlas frame ids
    id = resources["images/treasureHunter.json"].textures;
    //Dungeon
    dungeon = new Sprite(id!["dungeon.png"]);
    gameScene.addChild(dungeon);
    //Door
    door = new Sprite(id!["door.png"]);
    door.position.set(32, 0);
    gameScene.addChild(door);
    //Explorer
    explorer = new Sprite(id!["explorer.png"]);
    explorer.vx = 0;
    explorer.vy = 0;
    gameScene.addChild(explorer);
    //Treasure
    treasure = new Sprite(id!["treasure.png"]);
    treasure.x = gameScene.width - treasure.width - 48;
    treasure.y = gameScene.height / 2 - treasure.height / 2;
    gameScene.addChild(treasure);
    //Make the blobs
    const spacing = 48,
        xOffset = 150;
    //Make as many blobs as there are `numberOfBlobs`
    for (let i = 0; i < numberOfBlobs; i++) {
        //Make a blob
        const blob = new Sprite(id!["blob.png"]);
        //Space each blob horizontally according to the `spacing` value.
        //`xOffset` determines the point from the left of the screen
        //at which the first blob should be added
        const x = spacing * i + xOffset;
        //Give the blob a random y position
        const y = randomInt(0, app.stage.height - blob.height);
        //Set the blob's position
        blob.x = x;
        blob.y = y;
        //Set the blob's vertical velocity. `direction` will be either `1` or
        //`-1`. `1` means the enemy will move down and `-1` means the blob will
        //move up. Multiplying `direction` by `speed` determines the blob's
        //vertical direction
        //Push the blob into the `blobs` array
        blobs.push(blob);
        //Add the blob to the `gameScene`
        gameScene.addChild(blob);
    }
    //Capture the keyboard arrow keys
    const left = keyboard(37),
        up = keyboard(38),
        right = keyboard(39),
        down = keyboard(40);
    //Left arrow key `press` method
    left.press = function () {
        //Change the explorer's velocity when the key is pressed
        explorer.vx = -1;
    };
    //Left arrow key `release` method
    left.release = function () {
        //If the left arrow has been released, and the right arrow isn't down,
        //and the explorer isn't moving vertically:
        //Stop the explorer
        if (explorer.vx === -1) {
            explorer.vx = 0;
        }
    };
    //Up
    up.press = function () {
        explorer.vy = -1;
    };
    up.release = function () {
        if (explorer.vy === -1) {
            explorer.vy = 0;
        }
    };
    //Right
    right.press = function () {
        explorer.vx = 1;
    };
    right.release = function () {
        if (explorer.vx === 1) {
            explorer.vx = 0;
        }
    };
    //Down
    down.press = function () {
        explorer.vy = 1;
    };
    down.release = function () {
        if (explorer.vy === 1) {
            explorer.vy = 0;
        }
    };
    gameScene.position.x = explorer.x = gameWidth / 2 - explorer.width / 2;
    gameScene.position.y = explorer.y = gameHeight / 2 - explorer.height / 2;
    //Set the game state
    state = play;
}

function gameLoop(delta: number) {
    //Update the current game state:
    state(delta);
}

function play(delta: number) {
    playerMove(delta);
    mobMove(delta);
}

const playerMove = (delta: number) => {
    //use the explorer's velocity to make it move
    [explorer.x, explorer.y] = tryMove(explorer, explorer.vx, explorer.vy, 1, delta);
    gameScene.pivot.x = explorer.x;
    gameScene.pivot.y = explorer.y;
};
const mobMove = (delta: number) => {
    mobFrameFlip = !mobFrameFlip;
    for (let index = mobFrameFlip ? 0 : 1; index < blobs.length; index += 2) {
        const thisFrameblobs = blobs[index];
        [thisFrameblobs.x, thisFrameblobs.y] = tryMove(
            thisFrameblobs,
            explorer.x - thisFrameblobs.x,
            explorer.y - thisFrameblobs.y,
            1,
            delta
        );
    }
    mobFrameCounter = (mobFrameCounter + 1) % numberOfBlobs;
    const thisFrameblob = blobs[mobFrameCounter];
    if (hitTestPoints(explorer, thisFrameblob)) {
        thisFrameblob.alpha = 0.5;
    } else {
        thisFrameblob.alpha = 1;
    }
};
