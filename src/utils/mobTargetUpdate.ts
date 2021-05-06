import { Mob } from "../models/Mob";
import { hitTestPoints } from "./hitTestPoints";
import { TargetType } from "../models/enums/TargetType";
import { IPointData } from "@pixi/math";

export const mobTargetUpdate = (mob: Mob): void => {
    const explorerPos: IPointData = window.henrik.explorer.pos;
    if (hitTestPoints(mob.target, mob)) {
        mob.targetType = TargetType.Idle;
    }
    if (mob.targetType === TargetType.Idle) {
        mob.target = explorerPos;
    }
};
