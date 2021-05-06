import { Point } from "@pixi/math";

export const isFreeField = (dest: Point) => {
    const field = [Math.floor(dest.x / 50), Math.floor(dest.y / 50)];
    if (field[0] < 15) {
        return true;
    }
    return false;
};
