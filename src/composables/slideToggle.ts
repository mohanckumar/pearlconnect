import { slideUp } from "./slideUp.ts";
import { slideDown } from "./slideDown.js";

export function slideToggle(elm: any, duration = 300) {
  if (window.getComputedStyle(elm).display === "none") {
    slideDown(elm, duration);
  } else {
    slideUp(elm, duration);
  }
}
