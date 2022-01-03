// Code your solution here
const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
const reducer = (accumulator, item) => accumulator+item;
let totalBatteries = batteryBatches.reduce(reducer);