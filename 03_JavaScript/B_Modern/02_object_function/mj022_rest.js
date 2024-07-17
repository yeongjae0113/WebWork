/*
rest
  객체, 배열등의 정해지지 않은 수의 나머지 인자들을 받아옴
  비구조화할당(destructuring argument) 나 함수 파라미터에 사용 가능
  
  rest는 생김새는 spread 랑 비슷한데, 역할이 매우 다릅니다.

    https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/rest_parameters


*/

// 객체에서의 rest

{
  const purpleCuteSlime = {
    name: "슬라임",
    attribute: "cute",
    color: "purple"
  };
  console.log("purpleCuteSlime=",purpleCuteSlime);

  const {color, ...rest} = purpleCuteSlime;
  console.log("color=", color);   // 'purple'
  console.log(rest);    // color 를 제외한 나머지 key-value 들
  
  // 이름은 rest 가 아니어도 됌.
  const {attribute, ...slime} = rest;
  console.log("attribute=", attribute);   // 'cute'
  console.log("slime=", slime);

  const {color: c, ...r} = purpleCuteSlime;
  console.log(c);
  console.log(r);

}


// spread 가 다른 객체, 배열에 퍼뜨리는 역할(?)을 한다면,
// rest 는 나머지들(?) 모아오는 역할.
console.log()

// 배열에서의 rest
{
  const numbers = [0, 1, 2, 3, 4, 5, 6];

  const [zero, ...rest] = numbers;
  console.log("zero=", zero);   // 0
  console.log("rest=", rest);   // index 0번째 원소를 제외한 나머지를 모아옴.

  const [창성, 승욱, ...r] = numbers;   // 창성 = 0, 승욱 = 1, r = 나머지 (2, 3, 4, 5, 6)

  console.log('창성=', 창성);
  console.log("승욱=", 승욱);
  console.log("r=", r);

  // rest 가 앞에 올 수 없다. 반드시 마지막에 와야한다.
  // const [...rest, last] = numbers;
}

//────────────────────────────────────────────────────────────────────
console.log("\n[프로그램 종료]");