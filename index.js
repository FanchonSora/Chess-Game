import { initGame } from "./Data/data";
import { initGameRender } from "./Render/main.js";

const globalState = initGame();

initGameRender(globalState);

function sample(obj) {
    obj[0] = {
        name: "arrayofsilicon",
    };
}

const samp = [];
sample(samp);
