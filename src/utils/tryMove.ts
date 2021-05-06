import { IPointData } from "@pixi/math";
import { Vector } from "../models/Vector";
import { isFreeField } from "./isFreeField";

export const tryMove = (origin: IPointData, vx: number, vy: number, speed: number, delta: number): IPointData => {
    const vel = new Vector(vx, vy);
    vel.normalize();
    vel.multiply(speed * delta);
    const destV = vel.copy().add(origin);
    if (isFreeField(destV)) {
        return { x: destV.x, y: destV.y };
    }
    const destX = new Vector(vel.x, 0).add(origin);
    if (isFreeField(destX)) {
        return { x: destX.x, y: destX.y };
    }
    vel.x = 0;
    const destY = vel.add(origin);
    if (isFreeField(destY)) {
        return { x: destY.x, y: destY.y };
    }
    return { x: origin.x, y: origin.y };
};
