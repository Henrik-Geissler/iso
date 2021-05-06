import { IPointData } from "@pixi/math";

export const hitTestPoints = (r1: IPointData, r2: IPointData) => {
    return 25 > Math.abs(r1.x - r2.x) + Math.abs(r1.y - r2.y);
};
