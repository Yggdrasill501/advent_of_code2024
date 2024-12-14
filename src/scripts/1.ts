import { readFileSync } from "fs";

const calculateTotalDistance = (
  leftList: number[],
  rightList: number[],
): number => {
  // Sort both lists
  const sortedLeft = [...leftList].sort((a, b) => a - b);
  const sortedRight = [...rightList].sort((a, b) => a - b);

  // Calculate the total distance
  return sortedLeft.reduce((totalDistance, leftValue, index) => {
    const rightValue = sortedRight[index];
    return totalDistance + Math.abs(leftValue - rightValue);
  }, 0);
};

const parseInput = (filePath: string): [number[], number[]] => {
  const data = readFileSync(filePath, "utf-8");
  const lines = data.trim().split("\n");
  const leftList: number[] = [];
  const rightList: number[] = [];

  lines.forEach((line) => {
    const [left, right] = line.split(/\s+/).map(Number);
    leftList.push(left);
    rightList.push(right);
  });

  return [leftList, rightList];
};

// Main function to execute the script
const main = () => {
  const [leftList, rightList] = parseInput("assets/1.txt"); // Adjust the file path as needed
  const totalDistance = calculateTotalDistance(leftList, rightList);
  console.log(`Total distance: ${totalDistance}`);
};

// Execute the main function
main();
