/*
  함수 인자와 spread

  파라미터(parameter) : 함수에서 받아오는 '매개변수'
  인자(argument)  : 함수 호출 시 보내는 값
*/
{
  function myFunction(a) {
    // 여기서 a 는 파라미터
    console.log(a);
  }

  myFunction("hello world"); // 여기서 'hello world' 는 인자
}

{
  function sum(...rest) {
    return rest.reduce((acc, cur) => acc + cur, 0);
  }
  console.log(sum(1, 2, 3, 4, 5, 6));   // 6개의 인자

  const numbers = [10, 20, 30, 40, 50, 60];
  console.log(sum(numbers));    // 배열을 인자로 매개변수에 보내면 ? -> 배열 1개가 전달

    // 배열 안의 모든 원소를 호출시 인자로 보내주고 싶다면?
    let result = sum(
      numbers[0],
      numbers[1],
      numbers[2],
      numbers[3],
      numbers[4],
      numbers[5]
    );
    // ↑ 매우 불편하다.
    console.log(result);
  
    // '호출' 시 함수 인자에 spread 사용 가능 !
    result = sum(...numbers);   // 6개의 인자로 전달된다.
    console.log(result);

}

// ※ 파이썬의 args packing, args unpacking 과 비슷.

console.log();

// spread, rest 퀴즈
//------------------------------------------
// 함수에 n 개의 숫자들이 파라미터로 주어졌을 때, 
// 그 중 가장 큰 값을 리턴하세요


function max(...rest){
  return rest.reduce((acc, cur) => {  // reduce() 함수 = 배열의 각 요소 순회
    return acc > cur ? acc : cur;     // acc 가 cur 보다 크면 acc 리턴, acc 가 작으면 cur 리턴 (삼항 연산자)
  })
}

const data = [1, 2, 3, 4, 10, 5, 6, 7]
const result = max(...data)  // data 가 인자로 넘겨져야 한다
console.log("result=", result)   // 결과는 10

//────────────────────────────────────────────────────────────────────

function max1(...rest){
  rest.sort((a,b) => b - a);    // b - a 를 해서 양수면 b 가 a 의 앞으로, 음수면 b 가 a 뒤로 (sort 내림차순)
  return rest[0];   // 내림차순을 한 배열에 1번째 배열 index 0 을 리턴
}

const data1 = [1, 2, 3, 4, 10, 5, 6, 7]
const result1 = max1(...data1)  // data 가 인자로 넘겨져야 한다
console.log("result1=", result1)   // 결과는 10
// console.log(data1)
//────────────────────────────────────────────────────────────────────
console.log("\n[프로그램 종료]");