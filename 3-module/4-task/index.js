function showSalary(users, age) {
  let  usersArrray = users.filter(user => user.age <= age);
  let str = "";
  usersArrray.forEach((element, index) => {
   index == usersArrray.length-1 ? str += `${element.name}, ${element.balance}` : str += `${element.name}, ${element.balance}\n`;
  });
  return str
}
