import { Sprite } from "@pixi/sprite";
import { ItemType } from "./enums/ItemType";

export class Item extends Sprite {
    type: ItemType = ItemType.Off;
}
