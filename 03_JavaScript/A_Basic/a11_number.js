/*
    Number 타입
    JavaScript 의 숫자타입은 Number 타입 '오직 한가지'뿐이다
    Number 는 소숫점이 있을수도(실수) / 없을수도(정수) 있다
    Number 는 항상 64bit floating point 데이터로 저장된다.
    Number의 정밀도(precision)
        - 정수는 15자리까지 정확도 유지
        - 소수점 이하 17자리 정확도 유지
        - 실수간의 연산은 언제나 100% 정확하지 않다 (정밀도 문제)
    Number가 가질 수 있는 가장 큰 값은 1.8E308
    
    일반적으로 리터럴(literal) 로 Number 생성
        ex) 176, 0b101, 013, 0x0A ...

    JavaScript 에선 Number 뿐 아니라 모든 데이터가 내부적으로 object 로 다루어지기 때문에
    property 나 method (함수) 사용이 가능하다.

    NaN (Not a Number) : Number 연산이 안되는 경우 NaN 이 결과값으로 나온다.
    Infinity : 무한대 값

    https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number
*/

let num1, num2, num3;

// 정밀도
num1 = 999999999999999;
num2 = 9999999999999999;
console.log(num1);
console.log(num2);

console.log(123 === 123.0);
console.log(0.2 + 0.1 === 0.3);
console.log(0.2 + 0.1);

// NaN
num1 = 100 / "10";
console.log(num1);
num1 = 100 / "애플";
console.log(num1);

// NaN 과의 산술 연산 결과는 NaN 이다.
num1 = NaN;
num2 = Number.NaN;

console.log(num1);
console.log(num1 + 5);
console.log(num1 + "5");


/********************************** 
 * 진법 리터럴
 *  0x 로 시작 16진법(hexadecimal)
 *  0 으로 시작 8진법 (octal)
 *  0b 로 시작 2진법 (binary)
 */
console.log('-'.repeat(20))
console.log('[진법리터럴, toString]');

num1 = 24;
console.log(num1, typeof (num1));

let str = num1.toString();
console.log(str, typeof str);

// 24.toString();  // 숫자 리터럴에 . 사용 불가.
(24).toString();
(9.7).toString();

// 진법에 따른 변환 toString(radix)
num1 = 76;
console.log(num1.toString());
console.log(num1.toString(2));
console.log(num1.toString(8));
console.log(num1.toString(16));



/*******************
 * 일반적으로 Number 는 숫자 literal 을 통해 생성되나,
 * object 로서 Number 를 생성할수 있다  (new 사용)  <-- 매우 비추함!  예측하지 못하는 동작과 성능 이슈
 *  
 */
console.log('-'.repeat(20));
console.log('[Number() 로 생성하기]');

num1 = 123;
num2 = new Number(123);
num3 = new Number(123);

console.log(num1 + num2);
console.log(typeof num1, typeof num2);

console.log(num1 == num2);
console.log(num1 === num2);

console.log(num2 == num3);  // false
console.log(num2 === num3);  // false, JS 에서 다른 object 끼리의 비교는 언.제.나 false

console.log(num2  == num2);



/*********************************
 * Number 의 메소드(method) 들 
 */
//  console.log('-'.repeat(20));
//  console.log('[Number 의 메소드들]');


// toFixed(n)
//  소숫점 이하 n자리까지 표현한 '문자열' 결과  (이하 반올림)
//  https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed

num1 = Math.PI;

console.log(num1);
console.log(num1.toFixed(2));   // "3.14" 리턴값이 string!
console.log(num1.toFixed(3));   // "3.142"


// toExponential() 메서드는 숫자를 지수 표기법으로 표기해 반환합니다.
//  https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential

// TODO

// toPrecision(n)
//  Number 객체를 지정된 정밀도로 나타내는 문자열을 반환한다.
//  n : 유효 자릿수
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision

num1 = 123.456;
console.log(num1);
console.log(num1.toPrecision(4));
console.log(num1.toPrecision(8));

/****************************************
 * number 로 변환하는 방법 3가지
 * 
 *  Number() '함수'
 *  parseInt()
 *  parseFloat()
 * 
 *  다양한 경우에서 사용자가 입력한 값은 문자열(string) 타입으로 입력된다
 * 이의 산술연산을 하거나 Number 메소드를 적용하려면 number로 변환해야 한다
 */
 console.log('-'.repeat(20));
 console.log('Number 변환하기');

num1 = "3.141592";
// console.log(num1.toFixed(2));
console.log(parseFloat(num1));  // 3.141592 number
console.log(parseInt(num1));    // 3    number

console.log(parseFloat(num1).toFixed(2));   // "3.14" string

num2 = "hello";
console.log(parseFloat(num2));  // NaN.

console.log(parseint("-10"));
console.log(parseint("-10.33"));    // -10 number (소숫점 이하 절삭)
console.log(parseint("10"));
console.log(parseint("10.33"));

console.log(parseInt("10 20 30"));  // 앞부분부터 정수 변환 가능한 부분까지 변환
console.log(parseInt("12살"));
console.log(parseInt("방년28"));    // string 이 먼저 시작하기때문에 NaN

// Number() '함수' 를 사용.
console.log(Number("10"));
console.log(Number("    10"));
console.log(Number("10    "));
console.log(Number("   10    "));
console.log(Number("10.33"));
console.log(Number("10,33"));   // NaN
console.log(Number("10 33"));   // NaN

console.log(Number(true));  // 1
console.log(Number(false)); // 0
console.log(Number([]));    // 0
console.log(Number)([11, 22, 33]);  // NaN
console.log(Number({}));    // NaN



/***********************************  
 * Number 의 property
 *   https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number#static_properties
 * 
 * Number 의 static 메소드
 *   https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number#%EC%A0%95%EC%A0%81_%EB%A9%94%EC%86%8C%EB%93%9C
 */
//  console.log('-'.repeat(20));
//  console.log('Number 의 property, static 메소드');

// property
console.log(1 / 0);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

// Number.isInteger() 정수 여부인지
console.log(Number.isInteger(3));       // true
console.log(Number.isInteger(3.1));     // false
console.log(Number.isInteger(3.0));     // true





console.log("\n[프로그램 종료]", '\n'.repeat(20));


