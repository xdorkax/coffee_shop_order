import { createEl } from "../scripts/utils/utils.js";

export function createSwitch() {
  const label = createEl("label", { className: "switch" });
  const input = createEl("input", { type: "checkbox" });
  const span = createEl("span", { className: "slider round" });

  label.appendChild(input);
  label.appendChild(span);

  return label;
}