import { initGame } from "./Data/data";
import { initGameRender } from "./Render/main.js";
import { GlobalEvent } from "./Events/global.js";

const globalState = initGame();

initGameRender(globalState);

