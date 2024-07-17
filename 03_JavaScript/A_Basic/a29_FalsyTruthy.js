/*
    조건문 : Conditional Statements 에서

    거짓(Falsy) 으로 평가될때!
        false, 0, '', null, undefined, NaN   <-- 'Falsy 한 값'이라 한다

    참(Truthy) 으로 평가될때
        true, 37, 'Mark', {}, [], Infinity   <-- 'Truthy 한 값' 이라 한다

    https://developer.mozilla.org/ko/docs/Glossary/Truthy
    https://developer.mozilla.org/ko/docs/Glossary/Falsy

*/
function print(data){
    if(data)  // ← Truthy, Falsy 판정
        console.log(data, '-- Truthy 판정');
    else
        console.log(data, '-- Falsy 판정');
}

print(false);
print(0);
print(0.0);
print('');
print(null);
print(undefined);
print(NaN);

console.log();

print(true);
print(37);
print(-37);
print('Mark');
print(' ');
print({ a: 10, b: 20 });
print([10, 20, 30]);
print({});
print([]);

// Truthy, Falthy 판정 => true / false 로 변환
let value = { a: 1};
console.log(value);

// 1. 삼항연상자 사용
let truthy = value ? true : false;
console.log(truthy);

// 2. !! 사용하면 가능 (not 연산자)
console.log(!value);    // not value    => false
console.log(!!value);   // not not value => true

// -------------------------------------------------
console.log();
console.log("0" == 0);  // true
console.log(0 == []);   // true  숫자 비교 Number([]) 결과가 0이기 때문
// console.log(Number([]));
console.log("0" == []); // false 주소비교

// -------------------------------------------------
console.log([] + []);       // ""
console.log(true + true);   // 2
console.log(Number(true));  // 1
console.log(true - true);


console.log("\n[프로그램 종료]", '\n'.repeat(20));





































