// Promise 를 생성할때 new Promise() 외에도 다음과 같은 방법이 있다.

  /*
    주어진 value가  Promise 객체인지 아닌지 알 수 경우가 있다.
    이때는 Promise.resolve(value) 를 사용해본다.


    Promise.resolve(value); // <-- 이것을 실행하면서 Promise 를 만들어냄
      이때 value 는
      1. Promise 객체일수도 있고
      2. 일반 값일수도 있다.
   
    Promise.resolve(value) 는 이후 연결된 then 메소드를 실행하게 되는데,
      - value 가 Promise 객체이면, resolve 된 then 메소드를 실행합니다.
      - value 가 Promise 객체가 아니면, value 를 인자로 보내면서 then 메소드 실행


    https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
*/
{
  // resolve(value)
  // value 가 Promise 객체가 아니면, value 를 인자로 보내면서 then 메소드 실행
  Promise.resolve().then(() => {   // resolve 에 전달된 것은 없음 ---> Promise 객체가 아님. / 곧바로 .then 메소드 실행
    console.log('then() 실행');
  });

  Promise.resolve('유인아').then((n) => {    // '유인아' 가 the 의 callback 인 n 으로 전달
    console.log('then() 실행 n=', n);
  });
}


{
  // 1. Promise 객체인 경우
  Promise.resolve(new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('베리베베');
    }, 1000);   // 비동기 작업 수행
  }))
  .then((data) => {   // Promise.resolve() 뒤의 .then() 에 resovle(value) 를 전달
    console.log('Promise 객체인 경우, resolve 된 결과를 받아서 then 이 실행됩니다.', data);
  });

  // 2. 일반 값인 경우
  Promise.resolve('bar').then(data => {   // Promise 가 아닌 일반 값인 경우 'bar' 가 data 로
    console.log('then 메소드가 없는 경우 fulfilled 됩니다', data);
  });


  // !! Promise 인 경우 resolve 의 값이 data 로 간다
  // !! Promise 가 아닌 일반 값인 경우 data 로 간다.

  // value 가 Promise 인지 아리면, 다른 일반 데이터인지..
  // 확실하지 않을때.. Promise.resolve() 로 넘긴다.
}

