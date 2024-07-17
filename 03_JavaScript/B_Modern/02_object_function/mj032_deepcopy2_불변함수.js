// 얕은 복사  (JS 쪽에선 이를 깊은 복사라 하기도 한다.)

// 불변함수 (immutable function)
//  호출 원본을 변화시키지 않고 새로운 객체를 리턴하는 함수


// concat, filter, map, slice, spread 연산자

console.log("1. spread op.");
{
  const a = [1, 2, 3];
  const b = a;

  console.log(a == b);    // true -> 주소가 같다.

  const c = [...a];
  console.log(a == c);    // false -> 얕은 복사 (새로운 객체) 

  c.push(4);
  console.log(`a: ${a}`);
  console.log(`c: ${c}`);

  // object 도 spread 를 사용하면 얕은 복사 발생
  const a2 = {id:1, name:"홍길동"};
  const b2 = a2;
  console.log(a2 == b2);  // true
  
  const b3 = {...a2};
  console.log(a2 == b3);  // false

  // name 값만 변경된 새로운 객체 리턴
  const b4 = {...a2, name: "유인아"};
  console.log(b4);

  // 변경하고 싶은 데이터가 다음과 같이 주어지면 ?
  const data = {name: "베리베리"};  // 변경 하고싶은 값
  const b5 = {...a2, ...data};
  console.log(b5);

  // a2.name = '베리베리';

}

console.log("\n2. concat 사용");
{
  const a = [1, 2, 3];
  const b = a.concat(4);    // 얕은 복사  -> concat 은 새로운 배열을 만들어서 return (concat = 불변함수 / 원본을 변화시키지 않음)
  console.log(`a: ${a}`);   // 변경되지 않음. ( 1, 2, 3 )
  console.log(`b: ${b}`);   // 변경됨 ( 1, 2, 3, 4 )

  // spread 사용하여 앞 뒤로 추가 가능
  const c = [0, ...a, 5];
  console.log(`c: ${c}`);
}

console.log("\n3. push() 를 사용하면?");
{
  const a = [1, 2, 3];
  const b = a;
  b.push(4);    // push 는 원본을 변환시킴 (push = 불변함수 아님)
  console.log(`a: ${a}`);
  console.log(`b: ${b}`);
}

console.log("\n4. filter()");
{
  const a = [1, 2, 3];
  const b = a.filter(x => x !== 1);   // filter 의 결과는 새로운 객체 (filter = 불변함수)
  console.log(`a: ${a}`);
  console.log(`b: ${b}`);
}

/*
 ※ React 에서 불변함수 사용할때
    filter() 는 주로 '삭제' 할때 사용
    concat() 은 주로 '추가' 할때 사용
    spread 는 주로 '복사' + '추가' 할때 사용
    중간에 삽입하려면 slice 를 해야 한다.
 */

console.log("\n5. slice 잘라내기");
{
  const a = [1, 2, 3];
  const b = a.slice(0, 2);    // 새로운 배열을 return (slice = 불변함수)
  console.log(`a: ${a}`);     // slice(0, 2) = 인덱스 0 ~ 2 전까지 복사
  console.log(`b: ${b}`);

  let c;
  c = [a.slice(0, 2)];    // 배열 1개 (원소 1개)
  console.log(c);
  c = [...a.slice(0, 2)];
  console.log(c);

  // 중간에 삽입하기
  // [1, 2, 3] => [1, 2, 4, 3]
  c = [...a.slice(0, 2), 4, ... a.slice(2)];    // slice(0, 2) = 인덱스 0 ~ 1, slice(2) = 인덱스 2
  console.log(c);   // 결과 -> (1, 2,) 4, (3)
}

console.log("\n6. map()");
{
  const a = [1, 2, 3];
  const b = a.map(x => x * 2);    // map = 불변함수
  console.log(`a: ${a}`);
  console.log(`b: ${b}`);
 
}

// React 불변 함수..
console.log("\n7 수정하기");
{
  // 우선 아래와 같은 데이터를 서버로부터 받아온 상태라 하자
  const users = [
    { id: 1, name: "John", phone: "111-1111" },
    { id: 2, name: "Susan", phone: "222-2222" },
    { id: 3, name: "Kelly", phone: "333-3333" },
  ];

  console.log(users);

  // 이후 다음과 같은 변경사항이 들어왔다.
  // id:2 회원의 name 을 변경
  let updateUserDto = {id: 2, name: "유인아"};

  // 이건 어떻게 ?
  users[1].name = updateUserDto.name;
  console.log(users);

    // 그러나 위와 같이 하면 안된다
    // 왜?  기존 데이터가 변경되었다.
    // 이렇게 하면 react 연산 최적화가 안된다.

    // map + spread
    const newUsers = users.map(user => user.id === updateUserDto.id ? {...user, ...updateUserDto} : user);
    console.log('newUsers=', newUsers);

    console.log(users == newUsers);   // false -> newUsers 는 map 의 결과이기 때문에 다름.
    console.log(users[0] == newUsers[0]);   // [0] 은 기존 데이터
    console.log(users[1] == newUsers[1]);   // [1] 은 새로운 데이터
    console.log(users[2] == newUsers[2]);   // [2] 는 기존 데이터
}

//────────────────────────────────────────────────────────────────────
console.log("\n[프로그램 종료]");
