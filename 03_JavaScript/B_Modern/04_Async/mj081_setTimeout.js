/*
  동기 vs 비동기

  이런 작업들을 비동기로 처리한다
  Ajax Web API 요청: 만약 서버쪽에서 데이터를 받와아야 할 때는, 
    '요청(request)' 을 하고 서버에서 '응답(response)'을 할 때 까지 
    대기를 해야 하는데, 
    이 대기 시간이 긴 경우 이와 같은 작업을 비동기적으로 처리합니다.
  ex)
    파일 읽기: 주로 서버 쪽에서 파일을 읽어야 하는 상황
    암호화/복호화: 이 또한 시간이 어느정도 걸리는 경우가 있다.
    작업 예약: 단순히 어떤 작업을 몇초 후에 스케쥴링 해야 하는 상황
              setTimeout 을 사용하여 비동기적으로 처리합니다
*/

console.log("동기화된 작업(기본)");
{
  function work() {
    // 아래의 for문이 수행되는 경과시간 측정하기
    const start = Date.now(); // 현재날짜->Timestemp (ms)
    for (let i = 0; i < 1000000000; i++) {}
    const end = Date.now(); // 현재날짜 -> Timestamp (ms)
    console.log("[A] 작업 종료", end - start + "ms");
  }

  console.log("[A]", "작업 시작!");
  work();
  console.log("[A]", "다음 작업"); // 위의 work() 가 끝난 다음에야 이 라인이 수행됨.
}

console.log();

// setTimeout(func, [delay(ms)])
// 주어진 함수를 비동기로 진행
//   setTimeout(함수, 경과시간ms)
//    https://developer.mozilla.org/ko/docs/Web/API/WindowTimers/setTimeout

// console.log("setTimeout() 사용");
{
  function work() {
    // TODO
  }

  // console.log("[B]", "작업 시작!");
  // work();
  // console.log("[B]", "다음 작업");
}

console.log();

/*
 work 함수가 끝난 다음에 어떤 작업을 처리하고 싶다면 어떻게 해야 할까요? 
 이럴 땐, 콜백 함수를 파라미터로 전달해주면 됩니다. 
 콜백 함수란, 함수 타입의 값을 파라미터로 넘겨줘서, 
 파라미터로 받은 함수를 특정 작업이 끝나고 호출을 해주는 것을 의미합니다.
 */
// console.log("callback() 지정하기");
{
  // 매개변수로 함수를 받게 만든다
  function work(TODO) {
    // TODO
  }

  // TODO
}
