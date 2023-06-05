function checkSpam(str) {
  let upCaseStr = str.toUpperCase();
  return (upCaseStr.includes(("1xBet").toUpperCase()) || upCaseStr.includes(("XXX").toUpperCase()));
}
