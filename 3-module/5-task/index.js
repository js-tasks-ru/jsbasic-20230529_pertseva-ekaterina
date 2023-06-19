function getMinMax(str) {
  let arr = str.split(" ").map(Number).filter(i=>!Number.isNaN(i));
  return {
    min: Math.min(...arr),
    max: Math.max(...arr),
   }
}
