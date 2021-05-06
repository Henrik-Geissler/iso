import { Texture } from "@pixi/core";
import { IPointData } from "@pixi/math";
import { AnimatedSprite, FrameObject } from "@pixi/sprite-animated";
import { MobState } from "./enums/MobState";
import { MobType } from "./enums/MobType";
import { QuestType } from "./enums/QuestType";
import { TargetType } from "./enums/TargetType";

export class Mob extends AnimatedSprite {
    type: MobType = MobType.Off;
    state: MobState = MobState.Off;
    target: IPointData = { x: 0, y: 0 };
    targetType: TargetType = TargetType.Off;
    quest: QuestType = QuestType.Off;
    constructor(textures: Texture[] | FrameObject[], autoUpdate?: boolean) {
        super(textures, autoUpdate);
    }
}
