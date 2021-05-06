import { Application } from "@pixi/app";
import { Container } from "@pixi/display";
import { gameWidth, gameHeight } from "../states/app";

export function initState(): void {
    window.henrik = {
        app: new Application({
            backgroundColor: 0xd3d3d3,
            width: gameWidth,
            height: gameHeight,
            //transparent: false,
            resolution: 1,
        }),
        explorer: {
            vel: {
                x: 0,
                y: 0,
            },
            pos: {
                x: 0,
                y: 0,
            },
            width: 0,
            height: 0,
        },
        scene: new Container(),
    };
}
