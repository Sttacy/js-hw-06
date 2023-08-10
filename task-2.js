const countProps = function (obj) {
    let valueArray = [];
    valueArray = Object.values(obj)
    console.log(valueArray.length);
  };
  
  
//   Викличи функції для перевірки працездатності твоєї реалізації.
   
  (countProps({})); // 0
  
  (countProps({ name: 'Mango', age: 2 })); // 2
  
  (countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
  
  