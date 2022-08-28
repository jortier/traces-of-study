const largestProductOfThree = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  let numbers = arr.slice().sort((a, b) => a - b);

  if(arr.length === 3){
    return arr.reduce((prev, next) => prev * next);
  }else{
    let result = 1;
    let num1 = [];
    let num2 = [];
    
    numbers.map(i => {
      if(i < 0){
        num1.push(i);
      }else if(i > 0){
        num2.push(i);
      }
    });

    if(num1.length === 0){
      return num2[num2.length - 1] * num2[num2.length - 2] * num2[num2.length - 3];
    }else if(num2.length === 0){
      return num1[num1.length - 1] * num1[num1.length - 2] * num1[num1.length - 3];
    }else if(num1.length >= 2 && num2.length <= 2){
      return num1[0] * num1[1] * num2[num2.length - 1];
    }

    return result;
  }
};

let result1 = largestProductOfThree([-1, 2, -5, 7]);
console.log(result1);
let result2 = largestProductOfThree([2, 1, 3, 7]);
console.log(result2);
let result3 = largestProductOfThree([1, 2, 3]);
console.log(result3);