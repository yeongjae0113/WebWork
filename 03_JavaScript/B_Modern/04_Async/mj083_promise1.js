/*
  Promise 객체 :
    
    '비동기' 작업 처리를 편리하게 하기 위한 문법
    Promise 객체는 비동기 작업이 맞이할 
    미래의 '완료' 또든 '실패'의 그 결과 값을 나타냅니다.

    https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise


  ES6 부터는 JavaScript표준 내장 객체로 추가됨
  ※ 과거에는 promise 가 라이브러리로 존재했슴

  Promise 를 사용하여 CallBack hell 을 벗어날수 있다.
*/

// ES6 부터 JavaScript 표준 내장 객체로 추가됨
console.log(Promise); // 표준 내장 객체다!  [Function: Promise]

/*
생성자를 통해서 Promise 객체를 만들 수 있습니다.
생성자의 인자로 executor 라는 함수를 이용합니다.

  new Promise(executor함수);

executor 함수는 resolve 와 reject 를 인자롤 가집니다
  (resolve, reject) => { ... }

resolve 와 reject 는 함수입니다.
  resolve(), reject()

즉, 아래와 같은 형태
  new Promise(executor함수(resolve, reject) => {});


Promise 는 다음중 하나의 상태를 가집니다.
  1. 대기(pending): 이행하거나 거부되지 않은 초기 상태.
  2. 이행(fulfilled): 연산이 성공적으로 완료됨.
  3. 거부(rejected): 연산이 실패함.

생성자를 통해 Promise 객체를 만드는 순간 pending (대기) 상태라고 합니다.
  new Promise((resolve, reject) => {});   // <-- pending 상태 돌입!

pending 상태에서, executor 함수 인자중 하나인 resolve 함수를 실행하면
fulfilled (이행) 상태가 됩니다.

pending 상태에서, executor 함수 인자중 하나인 reject 함수를 실행하면
rejected (거부) 상태가 됩니다.

상태 전환 (참조)
  https://mdn.mozillademos.org/files/8633/promises.png

*/

// pending 상태에서, executor 함수 인자중 하나인 resolve 함수를 실행하면
// fulfilled (이행) 상태가 됩니다.

new Promise((resolve, reject) => {
  // pending 상태 ..
  // 비동기적인 상황 ..
  // ... (작업 수행)
  // 정상적으로 마무리 후
  resolve();    // 첫 번째 매개변수인 resolve 호출  ---> fulfilled 상태 전환
});


// pending 상태에서, executor 함수 인자중 하나인 reject 함수를 실행하면
// rejected (거부) 상태가 됩니다.

new Promise((resolve, reject) => {
  // pending 상태. 비동기 상태
  // ...
  // 어떤 예외/에러 상황에서
  // reject()   // rejected 상태로 돌입.
  // ※ node.js 에선 rejected 상태 처리 안하면 UnhandledPromiseRejection 발생
});

//---------------------------------------------
// 다음의 Promise 객체는 1000ms 후에 fulfilled 됩니다.

new Promise((resolve, reject) => {

  // pending, 비동기 상태

  setTimeout(() => {
    resolve();    // 1초 뒤 resolve() 실행 -> fulfilled 상태로 전환
  }, 1000);

});

//----------------------------------------
// p라는 Promise 객체가 fulfilled 되는 시점에 p.then(callback) 안에 설정한
// callback 함수가 실행됩니다.

{
  const p = new Promise((resolve, reject) => {
    console.log('p1] Promise 생성 : pending 상태');
    // pending 상태


    setTimeout(() => {
      console.log('p2] fulfilled 상태로 전환');
      resolve();   //  fulfilled 상태로 전환
    }, 1000);


  });

  // .then(callback)
  // 위의 Promise 객체가 fulfilled 상태가 되면 실행
  p.then(() => {
    console.log('p3] 1000ms 후에 fulfilled 되었습니다');
  });

  console.log('p4] 언제 찍힐까?');
}

//---------------------------------------------------------------
// console.log('c] 다음 코드')

/*
    then 함수에서 다시 Promise 객체를 리턴하는 방법을 통해
    체이닝 하면, 비동기 작업을 순차적으로 아래로 표현할수 있다.
    then 에 함수를 넣는 '여러 다양한 방법'을 확인해봅시다.
*/

// TODO
