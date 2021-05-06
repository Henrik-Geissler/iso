import { numberOfMobs } from "../states/app";
import { playerMove } from "./playerMove";
import { Mob } from "../models/Mob";
import { playerCollision } from "./playerCollision";
import { mobCollision } from "./mobCollision";
import { mobMove } from "./mobMove";
import { mobTargetUpdate } from "./mobTargetUpdate";

export function walking(delta: number): void {
    playerMove(delta);
    playerCollision();
    const mobs: Mob[] = window.henrik.mobs;
    const mobFrameCounter: number = window.henrik.tmpState.mobFrameCounter;
    mobMove(delta, mobFrameCounter % 2 === 0);
    mobCollision(mobs[mobFrameCounter]);
    window.henrik.tmpState.mobFrameCounter = (mobFrameCounter + 1) % numberOfMobs;
    mobTargetUpdate(mobs[mobFrameCounter]);
}
