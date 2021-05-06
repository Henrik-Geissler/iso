import { Explorer } from "../models/Explorer";
import { keyboard } from "./keyboard";

export function initInputHandler(): void {
    const explorer: Explorer = window.henrik.explorer;
    const left = keyboard(37),
        up = keyboard(38),
        right = keyboard(39),
        down = keyboard(40);
    left.press = function () {
        explorer.vel.x = -1;
    };
    left.release = function () {
        if (explorer.vel.x === -1) {
            explorer.vel.x = 0;
        }
    };
    up.press = function () {
        explorer.vel.y = -1;
    };
    up.release = function () {
        if (explorer.vel.y === -1) {
            explorer.vel.y = 0;
        }
    };
    right.press = function () {
        explorer.vel.x = 1;
    };
    right.release = function () {
        if (explorer.vel.x === 1) {
            explorer.vel.x = 0;
        }
    };
    down.press = function () {
        explorer.vel.y = 1;
    };
    down.release = function () {
        if (explorer.vel.y === 1) {
            explorer.vel.y = 0;
        }
    };
}
