import { Container } from "@pixi/display";
import { Explorer } from "../models/explorer";
import { gameHeight, gameWidth } from "../states/app";

export function initExplorer(): void {
    const explorer: Explorer = window.henrik.explorer;
    const scene: Container = window.henrik.scene;
    explorer.vel.x = 0;
    explorer.vel.y = 0;
    explorer.width = 0;
    explorer.height = 0;

    scene.position.x = explorer.pos.x = gameWidth / 2 - explorer.width / 2;
    scene.position.y = explorer.pos.y = gameHeight / 2 - explorer.height / 2;
}
