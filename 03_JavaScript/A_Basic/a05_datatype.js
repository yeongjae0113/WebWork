/*
    JS의 자료형(data type) : https://www.w3schools.com/js/js_datatypes.asp
	
    타입
    https://www.w3schools.com/js/js_typeof.asp

        값을 갖고 있는 5개 타입
            number : 숫자 타입
            string : 문자열 타입
            boolean : 논리 타입 (true, false)        
            object : 객체 타입
            function : 함수 타입

        6가지 object 타입
            Object : 객체
            Array : 배열
            Date
            String 
            Number
            Boolean

        값을 갖고 있지 않은 타입 2가지
            undefined : 타입이 지정되지 않음
            null : 데이터가 없는 object

        
    JS 는 dynamic type 을 지원하는 언어다.
*/

console.log('-'.repeat(20));
console.log('[number, string, undefined]');
let x;
console.log('x =', x, typeof x);    // undefined, undefined

x = 5;
console.log('x =', x, typeof x);    // 5 number

x = "John";
console.log('x =', x, typeof x);    // John string

x = undefined;
console.log('x =', x, typeof x);    // undefined, undefined

x = "10" + 10;
console.log('x =', x, typeof x);    // 1010 string

x = "10" * 10;  // 100(number) 헐?  이건 왜 number 형변환이 되는데?
console.log('x =', x, typeof x);

x = "10" - 2;
console.log('x =', x, typeof x);

x = "10" > 2;  // 비교 연산에서도 형변환?
console.log('x =', x, typeof x);

x = "10" > "2";   // 코드값 비교함.
console.log('x =', x, typeof x);  // false

x = NaN;
console.log('x =', x, typeof x);

x = "a" * 10;
console.log('x =', x, typeof x);  // NaN

x = 10 / 0;
console.log('x =', x, typeof x);    //  0 으로 나누면 infinity


/*
 * 배열 (array)
 * 
 * [ .. ]  bracket 으로 감싸고
 * 그 안에 배열 원소(item) 들이 콤마로 나열됨. 
 */
console.log('-'.repeat(20));
console.log('array (배열)');

x = [10, 20, 30];
console.log('x =', x, typeof x);
console.log('x[0] =', x[0]);
console.log('x[1] =', x[1]);
console.log('x[2] =', x[2]);
console.log('x[3] =', x[3]);    // index 벗어나면 indefined!
console.log('x.length =', x.length);

x = [
    100,
    200,
    300,    // 마지막 콤마 허용.
]


/*
 * 오브젝트, 객체 (object)
 * { .. }  curly brace 로 감싸고
 * name:value 쌍이 콤마로 구분되어 나열됨.
 * name:value 쌍 을 object 의 property 라고 한다.
 */
console.log('-'.repeat(20))
console.log('[object (오브젝트)]')

const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

console.log('person =', person, typeof (person));

// property name 을 사용하여 value 접근
console.log(person['firstName']);   // 방법 1  배열 안 [ fistName ] 을 가져오라는 것. java에서의 index 와 같은 구조 => 자바스크립트는 스트링도 가능 
console.log(person.firstName);      // 방법 2
console.log(person.address);        // undefined.   없는 property name.

// empty object
x = {};
console.log('x =', x, typeof x);

// null
x = null;
console.log('x =', x, typeof x);

// undefined, NaN, null, Infinity 가 출력되고 있다면 무언가 잘못 만들어졌다는 뜻이다.



console.log("\n[프로그램 종료]", '\n'.repeat(20));  // '\n' 을 20번 반복(repeat)  한다