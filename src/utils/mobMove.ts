import { tryMove } from "./tryMove";
import { numberOfMobs } from "../states/app";
import { Mob } from "../models/Mob";
import { hitTestPoints } from "./hitTestPoints";
import { TargetType } from "../models/enums/TargetType";

export const mobMove = (delta: number, mobFrameFlip: boolean): void => {
    const mobs: Mob[] = window.henrik.mobs;
    for (let index = mobFrameFlip ? 0 : 1; index < numberOfMobs; index += 2) {
        const thisFrameblobs = mobs[index];
        ({ x: thisFrameblobs.x, y: thisFrameblobs.y } = tryMove(
            thisFrameblobs,
            thisFrameblobs.target.x - thisFrameblobs.x,
            thisFrameblobs.target.y - thisFrameblobs.y,
            1,
            delta
        ));
        for (let index2 = index + 1; index2 < numberOfMobs; index2++) {
            if (hitTestPoints(thisFrameblobs, mobs[index2])) {
                thisFrameblobs.target = {
                    x: thisFrameblobs.x + (thisFrameblobs.x - mobs[index2].x),
                    y: thisFrameblobs.y + (thisFrameblobs.y - mobs[index2].y),
                };
                thisFrameblobs.targetType = TargetType.Forced;
            }
        }
    }
};
