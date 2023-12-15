// 정적인 함수 선언 방식

function divide(number) {
  if(typeof(number) === "number") {
    return `${number / 10}`;
  }
}

const divideResult = divide(100)
console.log(divideResult)