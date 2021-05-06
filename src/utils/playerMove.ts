import { Container } from "pixi.js";
import { tryMove } from "./tryMove";
import { Explorer } from "../models/Explorer";

export const playerMove = (delta: number): void => {
    const explorer: Explorer = window.henrik.explorer;
    const scene: Container = window.henrik.scene;
    explorer.pos = tryMove(explorer.pos, explorer.vel.x, explorer.vel.y, 1, delta);
    scene.pivot.x = explorer.pos.x;
    scene.pivot.y = explorer.pos.y;
};
