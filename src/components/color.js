function getColor(ageNum) {
  const arr = ["red", "blue", "green"];
  if (ageNum < 25) {
    return arr[0]; //red
  } else if ((ageNum >= 25) & (ageNum < 35)) {
    return arr[1]; //blue
  } else if (ageNum >= 35) {
    return arr[2]; //green
  }
}

export default getColor;
