/*
    화살표 함수 Arrow function (ES6 도입)
    함수를 정의하는 또 다른 방법

    [구문]
        (param1, param2, …, paramN) => { statements }
        (param1, param2, …, paramN) => expression
        // 다음과 동일함:  => { return expression; }
    
    [공식]    
        https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/%EC%95%A0%EB%A1%9C%EC%9A%B0_%ED%8E%91%EC%85%98

    ★ 화살표 함수는 this 가 바인딩(binding) 되지 않는다
      그래서, arrow function 은 생성자 함수로 사용 할수 없습니다.
*/

let add, sum;

add = function (a, b) {
    return a + b;
}
console.log(add(10, 20))

// 화살표 함수로 정의
add = (a, b) => {
    return a + b;
}

add = (a, b) => a + b;

sum = add(1, 2);
console.log(`sum = ${sum}`);

console.log(add);
console.log(add.toString());
console.log(typeof add);

const hello1 = name => {
    console.log(`hello1: ${name}!`)
}
hello1('아이언맨');


console.log("\n[프로그램 종료]", '\n'.repeat(20));


























