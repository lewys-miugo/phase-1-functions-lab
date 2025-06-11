// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  // const hqBlock = 42;
  return Math.abs(someValue - 42);
}

function distanceFromHqInFeet(someValue) {
  const blocks = distanceFromHqInBlocks(someValue);
  return blocks * 264; // 1 block = 264 feet
}

function distanceTravelledInFeet(start, destination) {
  const blocks = Math.abs(start - destination);
  return blocks * 264; // 1 block = 264 feet
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  
  if (distance <= 400) {
    return 0; // Free for the first 400 feet
  } else if (distance > 400 && distance <= 2000) {
    const fare = (distance - 400) * 0.02; // $0.02 per foot after the first 400 feet
    return fare;
  } else if (distance > 2000 && distance <= 2500) {
    return 25; // Flat rate for distances over 2000 feet
  } else {
    return 'cannot travel that far'; // Not allowed to travel over 2500 feet
  }
}