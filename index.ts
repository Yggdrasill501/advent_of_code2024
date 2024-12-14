import { readFileSync } from "fs";
import type { ChiefHistoriansLists } from "./src/types/types";

function readFile(path: string) {
  const data = readFileSync(path, "utf-8");
  return data;
}

function replaceSpacesWithComma(line: string): string {
  return line.replace(/\s+/g, ",");
}

function createLists() {
  const data = readFile("assets/1.txt");
  const lines = data.split("\n");
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const lineWithoutSpaces = replaceSpacesWithComma(line);
    return lineWithoutSpaces;
  }
}

function main() {
  const lists = createLists();
  console.log(typeof lists);
}
main();
