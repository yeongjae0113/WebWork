// JavaScript 는 선언문으로 
// var, let, const 3가지가 있다.


// 변수 선언, 여전히 var 사용 가능.
var v1 = 100;
console.log('v1 =', v1)

v2 = 200;   // var 없이도 선언은 가능.
console.log(`v2 = ${v2}`)

var v1 = 300;   // 동일 이름의 변수 중복 선언 가능.
console.log(`v1 = ${v1}`)

// ★ var 는 '오늘날 js' 에서는 그닥 권장하지 않습니다.

/*
   ES6 부터 let, const 소개.  (IE9, IE10 와 같은 구형브라우저는 지원안함)
    변수 선언 --> let
    상수 선언 --> const  


    let 
        동일이름 변수 중복 선언 불가
        https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/let
            ↑ 처음이라면 함 보자.

    const
        한번 선언 + 초기화 하면 값 변경 불가.
        https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/const

    이들은 block scope 를 가진다.
        { ... }
*/

let value = 177
console.log(`value = ${value}`);

const C1 = 1;
console.log(`C1 = ${C1}`);

// const object
const MY_OBJECT = { 'key': 'value' };
console.log(MY_OBJECT);

// key 값은 보호되지 않는다.
MY_OBJECT.key = '유인아';
console.log(MY_OBJECT);

// const object 덮어쓰기 는 에러 !
// MY_OBJECT = { '고양이': '베리베리' };

Object.freeze(MY_OBJECT);   // objext.freeze() 를 사용하면 key 값이 변하지 않음 !!
MY_OBJECT.key = '김다현';   // 에러는 발생하지 않는다.
console.log(MY_OBJECT);    // 그러나 변경되지도 않는다.

// 배열에도 똑같이 적용됩니다
const MY_ARRAY = [];
console.log(MY_ARRAY);

// 배열에 아이템을 삽입하는건 가능합니다
MY_ARRAY.push('A');     // ["A"]
console.log(MY_ARRAY);

// ------------------------------------------------
// ★ JavaScript 에선 object 나 array 는 가급적 const 로 선언하는 것을 추천함
//  - 뜻하지 않게 type 변경되는 것을 미연에 방지할수 있다.


let car1 = {type: "Fiat", model: "500", color: "white"};
car1 = "Fiat";      // object 가 string 으로 바뀐다


const car2 = {type:"Fiat", model:"500", color:"white"};
// car2 = "Fiat";      // 불가!



//────────────────────────────────────────────────────────────────────
// console.log("\n[프로그램 종료]", '\n'.repeat(20));
console.log("\n[프로그램 종료]", '\n');
