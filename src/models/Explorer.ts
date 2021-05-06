import { IPointData } from "@pixi/math";
import { ExplorerState } from "./enums/ExplorerState";

export type Explorer = {
    pos: IPointData;
    vel: IPointData;
    width: number;
    height: number;
    state: ExplorerState;
};
