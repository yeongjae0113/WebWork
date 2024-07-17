// object 를 초기화 하는 구문 (객체 초기자 : object initializer)
//  { property : value, propery : value ... }
let obj, a, b, c;

obj = { a: "foo", b: 42, c: {} };
console.log("obj =", obj);

a = "foo", b = 42, c = {};
obj = { a: a, b: b, c: c };     // 왼쪽의 a, b, c 는 키.. 오른쪽의 a, b, c 는 매개변수
console.log("obj =", obj);

// object 를 아래와 같이 정의해도 된다!
// ES6 의 object-shorthand 문법 (단축 속성명)이라고 부릅니다. (이름은 굳이 알아둘 필요는 없습니다..!)
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer

a = "foo", b = 42, c = {};
obj = {a, b, c};    // 속성명(property, key) 만 나열해도 된다!  언제? -> 동일 이름의 변수값이 정의되어 있다면 !!
console.log('obj =', obj);

console.log("-".repeat(40));
// obj = {a, b, c, d}; // 동일 이름의 변수가 정의되어 있지 않다면 에러 !

obj = {a, b, c, d: "유인아"};   // !!! d 가 변수값이 정의되어 있지 않지만 직접 d 에 값을 넣어주면 오류 아님 !!!
console.log('obj =', obj);


//────────────────────────────────────────────────────────────────────
// console.log("\n[프로그램 종료]", "\n".repeat(20));
console.log("\n[프로그램 종료]");
