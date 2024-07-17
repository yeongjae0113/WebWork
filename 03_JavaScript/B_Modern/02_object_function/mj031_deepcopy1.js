/**
 * Assignment VS. Shallow Copy VS. DeepCopy
 *    대입연산 vs.   얕은복사   vs. 깊은복사
 */

/**
 *
 *
 * Javascript 의 Primitive
 *    https://developer.mozilla.org/en-US/docs/Glossary/Primitive
 *
 * Javascript 의 Object
 *    https://developer.mozilla.org/en-US/docs/Glossary/Object
 *
 * Javascript 의 Object reference
 *     https://developer.mozilla.org/en-US/docs/Glossary/Object_reference
 *
 * JavaScript 의 data structure
 *   Primitive values
 *    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#primitive_values
 *
 *   Objects
 *    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#objects
 *
 */

console.log("[대입연산]");
{
  // 생각해보자
  let a = 10;
  let b = a;
  console.log(a, b);  // 10, 10

  a += 1;
  console.log(a, b);  // 11, 10

  let A = [1, 2, 3];
  let B = A;    // 대입연산, 객체의 복사가 아니라 주소(참조) 의 복사
  console.log(A, B);

  A[1] = 10;
  console.log(A, B);
}

/**
 * 얕은 복사란, 참조형 타입의 값이 바로 아래 단계의 값만 복사하는 방법이다.
 * 깊은 복사란, 참조형 타입 안의 모든 참조가 끊어지는 방법이다.
 * React의 경우 얕은 복사를 통해 state값을 비교하고, 변경 되었다면 리랜더링 한다.
 * Vue의 경우 깊은 복사를 통해 props로 내려온 데이터의 의존을 끊거나 data에 선언되어 있는 변수의 observer를 떼어내는데 사용한다.
 */
console.log("\n[얕은 복사]");
{
  // 얕은복사란 참조형 타입의 값이 바로 아래 단계의 값만 복사
  // 방법1: spread 연산 사용
  //  배열의 slice() 사용
  // 방법2: Object.assign() 사용
  // 방법3: for .. in 사용

  let x = [10, 20, 30];
  let y1 = x;   // 대입연산
  let y2 = [...x];    // spread 연산 (새로운 객체 생성) ---> 얕은 복사로 '새로운 객체'

  console.log(x, y1, y2);
  console.log(x === y1, x === y2, y1 === y2);   // true, false, false

  x[1] = 200;
  console.log(x, y1, y2);

  console.log("\n 얕은 복사의 한계");
  x = [1, 2, ['A', 'B', 'C']];
  y = [...x];   // 얕은 복사

  console.log(x, y);

  x[0] = 'K';
  console.log(x, y);
  y[2][2] = "F";
  console.log(x, y);

}

console.log("\n[DeepCopy]");
{
  // 방법1 : 재귀함수 사용
  // 방법2 : JSON.parse && JSON.stringify
  // 방법3 : Lodash 라이브러리 사용

  function deepCopy(object) {
    // TODO
  }
}

//────────────────────────────────────────────────────────────────────
console.log("\n[프로그램 종료]");
