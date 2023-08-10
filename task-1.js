
let student1 = {
    name: 'Іван',
    grades: {
      математика: 95,
      англійська: 85,
      історія: 90,
    },
  };
  
  let student2 = {
    name: 'Марія',
    grades: {
      математика: 80,
      англійська: 90,
      історія: 75,
    },
  };
  
  let student3 = {
    name: 'Петро',
    grades: {
      математика: 70,
      англійська: 85,
      історія: 80,
    },
  };
  
  function calcAllStudents(...args){
    let allStudents = [];
    for(const student of arguments){
        allStudents += student.name + ': ' + Object.values(student.grades) + ' ; ';
    }
    return allStudents.slice(0, allStudents.length -3)
  }
console.log(calcAllStudents( student1 , student2 , student3)); 