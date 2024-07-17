function add(a, b){   // a 와 b 는 add 함수의 매개변수 (parameter)
    console.log('a =', a, ', b =', b)
    return a + b
}
let sum = 0

sum = add(1, 2)
console.log('sum =', sum) // 3

sum = add(10, 20, 30)  // 호출시 매개변수가 더 많은 경우 -> a, b (2개) 보다 매개변수인 10, 20, 30 (3개) 가 더 많을 때
console.log('sum =', sum) // 30 -> 매개변수가 더 적을 때에는 변수의 수 이상인 것들은 제외하고 계산 !

sum = add(10) // 호출시 매개변수가 더 적은 경우. 이경우 b 는 undefined 가 된다. -> undefined + 수 를 더해서 NaN
console.log('sum =', sum) // NaN

//------------------------------------------
//  함수의 기본 파라미터 (default function parameter)
//  https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters

let circleArea = function (r) {
  return Math.PI * r * r;
};

let area = circleArea(4);
console.log(area); // 50.26548245743669

// 매개변수가 없다면??
area = circleArea();
console.log(area);  // NaN

// 매개변수가 없다해도..
// 위와 같이 에러상황으로 가는것을 막으려면?


// 일단, 이전예제의 SCE 사용도 가능
circleArea = function (r) {
  let radius = r || 1;  // 1을 기본값으로
  return Math.PI * radius ** 2;   // ** -> 제곱 연산자
}

console.log()
console.log(circleArea(4))  // 반지름 4로 계산됨
console.log(circleArea())   // 반지름 1로 계산됨

// 함수 '기본 파라미터' 사용  --------> 위 코드와 같은 결과의 코드 !
circleArea = function(r = 1) {  // r = 1 은 전달이 안된 파라미터가 있다면 기본값으로 1을 준다.
  return Math.PI * r ** 2;
}

console.log()
console.log(circleArea(4))
console.log(circleArea());

// 화살표 함수도 가능 기본 파라미터 가능
circleArea = (r = 100) => Math.PI * r ** 2;   // r = 100 은 매개변수가 없다면 기본값 100으로 계산
console.log()
console.log(circleArea(4))
console.log(circleArea())

//--------------------------------------------------
let func = function(a, b, c) {
  console.log(`a = ${a}, b = ${b}, c = ${c}`);
}
func(10, 20, 30);

console.log("-".repeat(40))
func = function(a, b = 20, c = 30) {
  console.log(`a = ${a}, b = ${b}, c = ${c}`);
}
func(10);   // func(10) -> a의 값은 있지만 b,c 값을 안주어도 기본 파라미터로 위에 b = 20, c = 30 이라고 주어줘서 오류 없이 가능

console.log("-".repeat(40))
func = function(a = 10, b, c = 30) {
  console.log(`a = ${a}, b = ${b}, c = ${c}`);
}
func(20);   // 기본 파라미터로 a,c 값은 있고 b 값은 없는 상태에서 func(20) 을 해도 20 은 매개변수 a 에 값이 저장됨
// 결국 a = 20, b = undefined, c = 30 !



//────────────────────────────────────────────────────────────────────
// console.log("\n[프로그램 종료]", '\n'.repeat(20));
console.log("\n[프로그램 종료]");