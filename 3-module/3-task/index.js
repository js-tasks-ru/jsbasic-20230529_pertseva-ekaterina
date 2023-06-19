function camelize(str) {
  if (str.length = 0) return "";
  let arr2 = str.split("-").map((i, index)=>index == 0 ? i : i.charAt(0).toUpperCase()+i.substr(1)).join("");
  return  arr2;
}
