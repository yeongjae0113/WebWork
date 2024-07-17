// 문자열(string)은 쌍따옴표 혹은 홀따옴표로 감싼다.
console.log("Hello Javascript");    // ctrl + alt + n = 콘솔 입력
console.log('hello Javascript');    // alt + shift + 방향키 = 라인복사
console.log(100);
console.log(10, 20, 30);            // 한 칸씩 띄어서 출력

// ;
// 문장의 끝에 세미콜론으로 마무리
// JS 에서는 굳이 세미콜론은 안해도 되나,
// 어떤 경우에는 안하면 에러 발생할 수 있기에 가급적 붙여주는걸 추천.
console.log('다현', '신현', '가연',);
console.log(3.14, 0.2, 123.);

console.log(10 + 20);
console.log(10 - 20);
console.log(10 * 20);
console.log(10 / 20);

// 문자열 반복]
console.log('*'.repeat(20));

/*
프로그램 종료 code 값이 0 이면 정상 종료
    [Done] exited with code=0 in 0.145 seconds

에러가 발생하면 0 이외의 값으로 종료됨
*/


function sayName(name) {
    console.log(name);
    console.log(`제 이름은 ${name} 입니다`);
}
sayName('최영재')
sayName()


console.log('\n[프로그램 종료]', '\n'.repeat(10));

