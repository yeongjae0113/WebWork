// Destructuring Assigment (ES6 에서 등장) 문법
// '비구조화할당' 혹은 '구조분해할당' 이라고 번역이 됨.
// 객체변수.속성  <-- 좀더 편리하게 다룰수 있다.
// '비구조화할당 문법'
//   다른말로 '객체 구조 분해'

// 공식
// https://www.ecma-international.org/ecma-262/6.0/#sec-destructuring-assignment
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

// 추가 참조
// https://velog.io/@public_danuel/destructuring-assignment
// 비구조화 할당, 잘 사용하면 코드 깔끔해진다

const ironMan = {
  name: "스타크",
  actor: "로다주",
  alias: "아이언맨"
};

const captainAmerica = {
  name: "스티브",
  actor: "크리스에반스",
  alias: "캡틴그놈"
};

{
  let actor = ironMan.actor
  let name = ironMan.name
  console.log(`배우: ${actor}, 이름: ${name}`)  // 배우: 로다주, 이름: 스타크
}

//---------------------------------------------
// 객체의 구조분해
{
  let {actor, name} = ironMan;
  // 실제로 아래와 같이 ironMan 의 속성들이 분해(destructure)되어 대입(assign)된다.
  // let actor = ironMan.actor
  // let name = ironMan.name
  console.log(`배우: ${actor}, 이름: ${name}`)  // 배우: 로다주, 이름: 스타크

  // 해당 property 명으로 변수 선언 해야 한다.  그렇지 않으면 undefined 값이 들어온다.
  let {베리, 베베} = captainAmerica;
  console.log(`베리: ${베리}, 베베: ${베베}`)   // -> undefined, undefiined
}

{
  // object 정의한 순서와 무관

  let {alias, name, actor} = ironMan;   // 변수들의 순서는 상관없다.
  console.log(`별칭: ${alias}, 이름: ${name}, 배우: ${actor}`)  // 별칭: 아이언맨, 이름: 스타크, 배우: 로다주

}
//----------------------------------------------------------------------
console.log('-'.repeat(20))
{
  let object = {a: 1, b: 2};
  let {a, b} = object;
  console.log(a, b)   // 1, 2

  // 함수 정의시 파라미터에도 비구조화 할당 가능
  console.log();
  let print = function ({a, b}) {   // 함수를 정의하는데 파라미터에도 비구조화 할당 (a, b)
    console.log(`print(a=${a}, b=${b}) 호출`);
  };
  print(object);    // 호출 시점에서 구조분해 발생
  object = {a: 10}; // a 값은 10 으로 전달됐지만 b 값은 전달된 값이 없음 -> a = 10, b = undefined
  print(object);    // 분해할 값이 없는 b 는 undefined 로 남아있게 된다

  // 분해할 값이 없을 때 '기본값' 적용하려면 ?
  print = function ({a, b}) {
    b = b || 2;   // b 의 기본값 2
    console.log(`print(a=${a}, b= ${b}}) 호출`)
  }
  print(object);

  print = function ({a, b = 2}) {   // DEFAULT parameter 사용 !
    console.log(`print(a=${a}, b= ${b}}) 호출 (default param 사용)`)
  }
  print(object);

  console.log
  let {c, d = 2} = {c: 111, e: 222}   // d = 2 로 지정
  console.log(`c= ${c}, d= ${d}`);    // 구조분해 받을 parameter 가 없으면 d 는 2로
}

//----------------------------------------------------------------------
console.log()

// 비구조화 할당시 이름 바꾸기
// 이번에는, 비구조화 할당을 하는 과정에서
// 선언 할 값의 이름을 바꾸는 방법을 알아보겠습니다.
{

  const animal = {
    name: "멍멍이",
    type: "개"
  };


  let nickname = animal.name;
  console.log(nickname); // 멍멍이

  let {name: nickname2} = animal; // object 명을 왼쪽, 새로운 변수명을 오른쪽 -> object name 명이 새로운 변수명인 nickname2 로 
  // 속성명: 새로운 이름의 변수
  console.log(nickname2);

}

//--------------------------------------
// 배열 비구조화 할당
// 비구조화 할당은 객체에만 할 수 있는 것이 아닙니다.
// 배열에서도 할 수 있다!
console.log('-'.repeat(20))
{

  console.log('\n 배열의 비구조화 할당');
  const array = [1, 2];

  let [one, two] = array;
    // 아래와 같이 배열 원소 순서대로 구조 분해되어 대입된다
  // let one = array[0]
  // let two = array[1]

  console.log(one, two);  // 1, 2

  let [a, b, c] = array;
  console.log(a, b, c);   // c 의 기본값과 파라미터가 없어서 c 는 undefined

  let [가영 ,준영, 구영 = 123] = array;   // 구조분해 할당을 받지 못했을 경우 구영 = 123 처럼 기본값을 주면 값을 그대로 받음
  console.log(가영, 준영, 구영);

  // 배열 비구조화 할당 구문을 사용하면 변수값 교환 (swap) 가능 !
  let aaa = 10, bbb = 30;
  [aaa, bbb] = [bbb, aaa];  // 비구조화 할당 구문
  // -> 배열의 각각의 원소가 분해되어 aaa 와 bbb 가 바뀜
  console.log(`aaa= ${aaa}, bbb= ${bbb}`);

}


console.log('-'.repeat(40));
{
  //--------------------------
  // 깊은 값 비구조화 할당
  // 객체의 깊숙한 곳에 들어있는 값을 꺼내는 방법
  // Nested object and array destructuring
  //  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Nested_object_and_array_destructuring
  
  console.log('\n깊은값 비구조화 할당');

  const deepObject = {  // deepObject 의 객체 파라미터는 2개 -> state, value
                        // state 의 속성 파라미터는 1개 -> information / information 의 속성 파라미터는 2개 (name, languages)
    state: {
      information: {
        name: "frogteam",
        languages: ["korean", "english", "chinese"]
      }
    },
    value: 5
  };


  //  name, languages, value 값들을 밖으로 꺼내주고 싶다면
  // 어떻게 해야 할까요? 이럴땐 두가지 해결 방법이 있습니다


  // 방법1. 첫번째는 비구조화 할당 문법을 '두번' 사용하는 것
  const {name, languages} = deepObject.state.information
  const {value} = deepObject;

  console.log(name, languages, value);

  // 방법2. object shorthand + destructuring assignmnet
  const extracted = {
    name,   // name: name
    languages,  // languages: languages
    value,  // value: value
  };
  console.log(extracted);


  {
    const {
      state: {
        information: {name, languages}
      },
      value
    } = deepObject;   // 비구조화 할당


    const extracted = {
      name,
      languages,
      value,
    }
    console.log(extracted);
  }

  
  {
    const {
      state: {
        information: {
          name,
          languages: [은정, 민정, 조정, 한정 = '한우'],
        }
      },
      value
    } = deepObject;   // 비구조화 할당


    const extracted = {
      name,
      languages,
      은정,
      민정,
      조정,
      한정,
      value,
    }
    console.log(extracted);
  }

}

//────────────────────────────────────────────────────────────────────
// console.log("\n[프로그램 종료]", '\n'.repeat(20));
console.log("\n[프로그램 종료]");



