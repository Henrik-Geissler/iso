import { IPointData } from "@pixi/math";
import { MobType } from "../models/enums/MobType";
import { Explorer } from "../models/Explorer";
import { Mob } from "../models/Mob";
import { hitTestPoints } from "./hitTestPoints";

export const playerCollision = (): void => {
    const explorer: Explorer = window.henrik.explorer;
    const collidedMob: Mob | undefined = collideMob(explorer.pos);
    switch (collidedMob?.type) {
        case MobType.User:
            console.log(collidedMob.type);
            break;
        case MobType.Dealer:
            console.log(collidedMob.type);
            break;
        case MobType.Cop:
            console.log(collidedMob.type);
            break;
        case MobType.Off:
        default:
            break;
    }
};

const collideMob = (position: IPointData): Mob | undefined => {
    const mobs: Mob[] = window.henrik.mobs;
    for (const each of mobs) {
        if (hitTestPoints(position, each)) {
            return each;
        }
    }
    return undefined;
};
