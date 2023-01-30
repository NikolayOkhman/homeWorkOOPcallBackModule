import { CreateHtml } from "./createHtml.js";
import { GetHtml } from "./getHtml.js";

document.getElementById("btn").addEventListener("click", () => {
   let a = new GetHtml();
   a.start();
});
