// 우선 함 보자
// 함수 '정의 먼저' 하고 '호출을 나중'
function hello1(){
    console.log('hello1() 호출')
}
hello1();

// '호출코드' 가 '정의코드' 보다 앞에 있따면 과연?
hello2();   // 호출을 먼저 해도 아래 정의된 코드가 동작한다?!
function hello2() {
    console.log('hello2() 호출 실행될까?');
}



function hello1() {
    console.log('hello1() 호출 ?');
}
hello1();
// 결과: 위에 있던 hello1() 호출 코드도 아래에서 정의된 것을 실행한다!

// 이유
// function 도 hoisting 이 발생한다!


console.log('----------------------------------------');
// 변수의 경우는 어떤가?
// 다음 3가지 경우를 보자
// 1)
// console.log('val_1 =', val_1);

// 2)
console.log('val_2 =', val_2);  // undefined, 아래에서의 '선언' 이 동작
var val_2;

// 3)
console.log('val_3 =', val_3);  // undefined, '선언' 은 올라오나, 값은 나중에 초기화. (값은 올라오지 않음)
var val_3 = 10;

// 4)
val_4++;
console.log('val_4', val_4);    // NaN
var val_4 = 20;

// 5)
val_5 = 20;
val_5++
console.log('val_5', val_5);    // 21
var val_5 = 40;

console.log();


//--------------------------------------------------------------------------------------


/*
    변수(함수) '선언'이 위로 올라오는 증상  
    이러한 현상을 hoisting 이라 하며,


   hoisting
     아래에 있는 '선언'을(만) 끌어올린다.


   hoisting 때문에 동작의 오류처럼 보이는 증상 겪게 됨


   Hoisting
    https://developer.mozilla.org/ko/docs/Glossary/Hoisting


    'hoisting' 현상은 JavaScript 처음부터 있어왔던 증상이다.
    그러나, 위 'hoisting' 이라는 용어 자체는
    ES2015(ES6) 이전에는 사용되지 않았음
*/


/*
    var 는 hoisting 발생  → 많은 혼란을 야기 시켰다.
    let, const 는 hoisting 이 발생 안한다.
*/

{
    console.log(`name = ${name}`);
    name = 'Mark';
    console.log(`name = ${name}`);
    var name = 'John';
}

{
    // console.log(`name = ${name}`);
    const name = 'Mark';
}

/*
    let, const 를 써야 하는 이유
        1. block scope
        2. hoisting 발생 안함.
   


    '선언' 후 '사용' 을 원칙으로 코드 작성 하자!
    '선언' 은 코드 상단에 몰아 배치시키다.
    '선언' 시 꼭 '초깃값' 을 주는 것이 좋은 코딩이다.
        - 코드의 명확성
        - undefined 회피.


    나중에 ESLint 라는 도구를 사욯아면
    hoisting 이 발생하는 곳에 경고 발생함
        https://eslint.org/
*/


//────────────────────────────────────────────────────────────────────
// console.log("\n[프로그램 종료]", '\n'.repeat(20));
console.log("\n[프로그램 종료]");
