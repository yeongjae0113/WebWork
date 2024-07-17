/*
spread 와 rest
ES6 에서 도입된 spread 와 rest 

spread (전개구문)
  배열 과 같은 iterable 한 객체를
    0개 이상의 원소 또는 요소로 펼칠수있습니다.
      (즉 0개 이상의 key-calue 상으로 객체 확장)

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax

  기존 객체를 '복사'하고, 그리고 뭔가 더 추가하고자 할때 사용

spread 구문]
  함수 호출:
    myFunction(...iterableObj);
  
  배열 리터럴과 문자열:
    [...iterableObj, '4', 'five', 6];

  객체 리터럴(ECMAScript 2018에서 추가)
    let objClone = { ...obj };
*/

{
  const slime = {
    name: "슬라임"
  };

  const cuteSlime = {
    name: "슬라임",
    style: "cute" // property 추가
  };

  const purpleCuteSlime = {
    name: "슬라임",
    style: "cute",
    color: "purple" // property 또 추가..
  };

  console.log(slime);
  console.log(cuteSlime);
  console.log(purpleCuteSlime);
}

// 기존의 객체에서 만들어진 속성을 사용하여
// '새로운' 객체를 만들때 spread 를 사용하면 편리
// ...  : spread 연산자
console.log();

{
  const slime = {
    name: "슬라임"
  };

  const cuteSlime = {
    ...slime,   // 기존 slime 의 key-value 쌍이 spread() 된다 = 전개 된다.
    style: "cute",
  }

  const purpleCuteSlime = {
    ...cuteSlime,    // 기존 cuteSlime 의 key-value 쌍(들)이 spread 된다. = 전개 된다.
    color: "Purple",
  }

  console.log(slime);
  console.log(cuteSlime);
  console.log(purpleCuteSlime);


  // spread 연산자로 생성된 객체는 복제된 '새로운' 객체
  const smallSlime = {
    ...slime,
  }
  console.log(slime === smallSlime);  // 이것은 각각의 object 의 value 가 같냐는 것이 아니라. object 의 주소가 같냐는 코드 (!! slime 과 smallSlime 은 다른 object 객체)


  // 기존 object 의 property 값을 변경한 '새로운' 객체 생성
  const greenCuteSlime = {
    ...purpleCuteSlime,   // 이미 color 값이 있었는데 ?
    color: "Green",       // color 값 덮어쓰기 !!
  }
  console.log(greenCuteSlime);


  // spread() 순서 주의.
  const pinkCuteSlime = {
    color: "Pink",
    color: "black",
    color: "유인아",
    ...purpleCuteSlime,   // color 값은 그냥 Purple 이나 (나중에 덮어쓰기.)
  } 
  console.log(pinkCuteSlime);
}


// 만약 spread 를 사용하지 않으면 어떨까?
console.log();
{
  const slime = {
    name: "슬라임"
  };

  const cuteSlime = slime;    // cuteSlime 은 slime 과 같은 동일 객체를 '참조'
  cuteSlime.style = "cute";

  console.log(slime);
  console.log(cuteSlime);
  console.log(slime === cuteSlime);   // true 동일 객체
}

console.log()
// spread 연산자는 배열에서도 사용 할 수 있습니다.
{
  const animals = ["베리", "베베", "소리"];
  const others = [...animals, "유인아"];    // animals 배열의 원소(들)이 전개(spread) 된다.

  console.log(animals);
  console.log(others);
  console.log(animals === others);
}

// 배열에서 spread 연산자를 여러번 사용 할 수도 있습니다.
{
  const names = ["다현", "신현", "가연"];
  const newNames = [...names, "예현", ...names]

  console.log("names=", names);
  console.log("newName=", newNames);
}

//────────────────────────────────────────────────────────────────────
console.log("\n[프로그램 종료]");