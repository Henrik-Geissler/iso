import { IPointData } from "@pixi/math";
import { Vector } from "../models/Vector";
import { isFreeField } from "./isFreeField";

export const tryMove = (origin: IPointData, vx: number, vy: number, speed: number, delta: number) => {
    const vel = new Vector(vx, vy);
    vel.normalize();
    vel.multiply(speed * delta);
    const destV = vel.copy().add(origin);
    if (isFreeField(destV)) {
        return [destV.x, destV.y];
    }
    const destX = new Vector(vel.x, 0).add(origin);
    if (isFreeField(destX)) {
        return [destX.x, destX.y];
    }
    vel.x = 0;
    const destY = vel.add(origin);
    if (isFreeField(destY)) {
        return [destY.x, destY.y];
    }
    return [origin.x, origin.y];
};
