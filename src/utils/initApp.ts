import { Application } from "@pixi/app";
import { resizeCanvas } from "./resizeCanvas";

export function initApp(): void {
    const app: Application = window.henrik.app;
    document.body.appendChild(app.view);
    resizeCanvas();
}
