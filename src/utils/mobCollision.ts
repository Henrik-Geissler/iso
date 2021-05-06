import { MobType } from "../models/enums/MobType";
import { Mob } from "../models/Mob";
import { hitTestPoints } from "./hitTestPoints";
import { randomInt } from "./randomInt";

export const mobCollision = (mob: Mob): void => {
    if (mob.type === MobType.Off) return;
    const collidedMob: Mob | undefined = collideMob(mob);
    if (collidedMob) {
        switch (collidedMob?.type) {
            case MobType.User:
                collidedMob.x = 0;
                collidedMob.y = randomInt(0, 800);
            case MobType.Dealer:
            case MobType.Cop:
            case MobType.Off:
            default:
                break;
        }
    }
};

const collideMob = (mob: Mob): Mob | undefined => {
    const mobs: Mob[] = window.henrik.mobs;
    for (const each of mobs) {
        if (hitTestPoints(mob, each)) {
            if (mob != each) {
                return each;
            }
        }
    }
    return undefined;
};
