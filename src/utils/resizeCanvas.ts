import { Application } from "@pixi/app";
import { gameWidth, gameHeight } from "../states/app";

export function resizeCanvas(): void {
    const resize = () => {
        const app: Application = window.henrik.app;
        app.renderer.resize(window.innerWidth, window.innerHeight);
        app.stage.scale.x = window.innerWidth / gameWidth;
        app.stage.scale.y = window.innerHeight / gameHeight;
    };

    resize();

    window.addEventListener("resize", resize);
}
