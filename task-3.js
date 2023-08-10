const findBestEmployee = function (employees) {
  let numbersCount = [];
  numbersCount = Object.values(employees);
  // console.log(numbersCount);
  let mostActive = numbersCount[0];
  // console.log(numbersCount[0]);
  for (let i = 0; i < numbersCount.length; i++) {
    if (numbersCount[i] > mostActive) {
      mostActive = numbersCount[i];
    }
  }
  let employeeCount = [];
  employeeCount = Object.keys(employees);
  let mostActiveEmployee = employeeCount[0];
  for (let index = 0; index < employeeCount.length; index++) {
    if (index === numbersCount.indexOf(mostActive)) {
      mostActiveEmployee = employeeCount[index];
    }
  }
  return mostActiveEmployee;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
