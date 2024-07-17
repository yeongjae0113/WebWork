//함수 파라미터에서의 rest
//rest 를 함수파라미터에서 사용 할 수도 있습니다.

// 예) 우리가 파라미터로 넣어준 모든 값들을
// 합해주는 함수를 만들기

{
  function sum(a, b, c, d, e, f, g) {
    return a + b + c + d + e + f + g;
  }
  // 호출시 매개변수가 다 차있으면 작동 하겠지만...
  console.log(sum(1, 2, 3, 4, 5, 6, 7)); // 28

  // 만약 하나라도 빠지면?
  console.log(sum(1, 2, 3, 4, 5, 6));    // NaN
}

{
  // 그렇다면 호출시 매개변수가 빠질 경우를 대비하여..
  function sum(a, b, c, d, e, f, g) {
    let sum = 0;
    if (a) sum += a;
    if (b) sum += b;
    if (c) sum += c;
    if (d) sum += d;
    if (e) sum += e;
    if (f) sum += f;
    if (g) sum += g;
    return sum;
  }

  let result = sum(1, 2, 3, 4, 5, 6, 7);
  console.log(result);

  result = sum(1, 2, 3, 4, 5, 6); // 매개변수 빠져도 동작 ok
  console.log(result);
}

console.log();

// rest 사용
{

  // 매개변수로 넘어온 인자들을 하나의 '배열' 로 받는다.
  function sum(... rest) {
    console.log(rest);    // rest 의 타입은 배열 []
    return rest.reduce((acc, cur) => acc + cur, 0);
  }

  console.log(sum(1, 2, 3, 4, 5, 6));

}

//────────────────────────────────────────────────────────────────────
console.log("\n[프로그램 종료]");
