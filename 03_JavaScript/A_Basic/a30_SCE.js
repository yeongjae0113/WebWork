// &&, || 연산자에 대해 생각해보자

// boolean 에서 true = 1 false = 0
let result;

result = true && false;
console.log(result);

result = true || false;     //
console.log(result);

result = true && 'hello';   // 앤드 연산자는 왼쪽값이 true 면 오른쪽 값도 true
console.log(result);

result = 0 && 'hello';
console.log(result);

result = 'hello' || 'byte';
console.log(result);

result = null || '소리';
console.log(result);

/*****************************************************
 * Short Circuit Evaluation (단축평가)  (혹은 Lazy Evalutaion 이라고도 한다)
 * 
 * 표현식1 && 표현식2
 *  표현식1 이 Falsy 이면 && 의 결과값은 표현식1
 *  표현식1 이 Truthy 이면 && 의 결과값은 표현식2
 * 
 * 표현식1 || 표현식2
 *  표현식1 이 Falsy 이면 || 의 결과값은 표현식2
 *  표현식1 이 Truthy 이면 || 의 결과값은 표현식1
 */

let n = 5;
(n % 5 == 0) && console.log('5의 배수');
(n % 5) || console.log('5의 배수');

// console.log(console.log('조정현'));

n = 3;
(n % 5 == 0) || console.log('5의 배수가 아닙니다');
(n % 5) && console.log('5의 배수가 아닙니다');

/*****************************************
 * SCE 는 
 * React 등에서 '조건부 렌더링' 등을 할때 많이 사용하는 문법이다
 * 특정 값이 유효할때만 수행해야 하는 상황
 */
console.log('-'.repeat(20));

// 다음과 같은 함수가 정의되었다고 하자.
let getName = function (animal) {
  return animal.name;
}

let cat = {name: "베리"};
console.log(getName(cat));

// 그러나..
cat = null;
// console.log(getName(cat));

getName = function(animal) {
    // 매개변수 검증에 sce 사용

    // if(animal)
    //      return animla.name;

    return animal && animal.name;
}

console.log(getName(cat));  // null.. 일단 에러나진 않는다

cat = {age: 5};
console.log(getName(cat));  // undefined

/*********************************
 * || or 연산의 경우
 * 
 * || 연산자로 코드 단축시키기
 * || 연산자는 만약 어떤 값이 Falsy 하다면 대체로 사용 할 값을 지정해줄 때 매우 유용하게 사용 할 수 있습니다.
 */

getName = function(animal) {
    const name = animal && animal.name;       // SCE 로 매개변수 검증
    return name || "이름이 없는 동물입니다";    // SCE 로 대체값
}

console.log(getName(cat));
console.log(getName({}));
console.log(getName(null));
console.log(getName(undefined));
console.log(getName({ year: 2024}));


console.log("\n[프로그램 종료]", '\n'.repeat(20));



























