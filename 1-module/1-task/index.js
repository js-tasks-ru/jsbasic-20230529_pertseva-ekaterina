function factorial(n) {
  if (n === 0 || n === 1) return 1;
  let n2 =n;
  for (; n > 1; n--){
  n2 *= (n-1);
 }
 return n2;
}
