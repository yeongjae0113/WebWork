// Promise 를 생성할때 new Promise() 외에도 다음과 같은 방법이 있다.

/*
    Promise.resolve(value); // <-- 이것을 실행하면서 Promise 를 만들어냄
      이때 value 는
      1. Promise 객체일수도 있고
      2. 일반 값일수도 있다.
    
    value 가 Promise 객체인지 아닌지 알 수 없는 경우,
    사용하면 연결된 then 메소드를 실행합니다.

    value 가 Promise 객체이면, resolve 된 then 메소드를 실행합니다.
    value 가 Promise 객체가 아니면, value 를 인자로 보내면서 then 메소드 실행

    https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
*/

{
  // 1. Promise 객체인 경우
  // TODO
  // 2. 일반 값인 경우
  // TODO
  // value 가 Promise 인지 아리면, 다른 일반 데이터인지..
  // 확실하지 않을때.. Promise.resolve() 로 넘긴다.
}

