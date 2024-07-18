{
  // 아래 코드 수행시 화면에 찍히는 순서들을 잘 보고, 생각해보자

  function p1(ms) {
    // Promise 를 리턴하는 함수를 await 로 사용 가능
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('p1_1] Promise fulfilled 작업완료');
        return resolve(ms);
      }, ms);
    });
  }

  // main() 함수를 async 로 선언 (비동기로 동작)
  // await 는 async 안에서 선언하여 사용가능
  async function main() {
    console.log('p1_2] 1000mx 기다리기 시작')
    const ms = await p1(1000);    // await: 비동기 작업 종료(fultilled) 기다렸다가 진행
                                  // awiat 하면 reslove(value) 의 value 값 리턴 ! (Promise 를 리턴하는게 아니라 !)
    console.log('p1_3] 실행완료', ms, 'ms 후');
  }

  p = main();   // async 함수는 비동기로 진행한다.
  console.log('p =', p);    // async 함수는 Promise 객체 리턴
  console.log('p1_4] main() 다음 작업');
}
{
  function p2(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve(ms);
      }, ms);
    });
  }

  // 아래와 같이 작성 가능
  (async function() {
    console.log(`p2_2] 2000ms 기다리기 시작`);
    const ms = await p2(2000); // await 종료 기다렸다가 다음 실행
    console.log(`p2_3] 실행완료 ${ms} ms 후`)
  })();

  console.log('p2_4] 다음 작업으로');
  // async, await 의 장점은 비동기 로직에서의 코드가
  // '아래 방향으로' 흘러가게 작성 가능하다는 것입니다.
}

// Promise 객체가 rejected 된 경우의 처리를 위해
// try catch 를 이용한다.
{
  function p3(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // return resolve(ms);  // 정상적으로 끝나면
        console.log('p3_1] Promise rejected 됨');
        reject(new Error('이유이유')); // 에러가 발생하면
      }, ms);
    })
  }
  (async function() {
    try {
      console.log(`p3_2] 3000ms 기다리기 시작`);
      const ms = await p3(3000);  // 정상적으로 끝나면 ..
      console.log(`p3_3] 실행완료 ${ms} ms 후`)
    } catch(error) {    // reject(reason) 의 reason 이 넘어온다.
      console.log('p3_4] catch', error.message);
    }
  })();

  console.log('p3_5] 다음 작업으로');
}

// async function 에서 return 되는 값은
// Promise.resolve 함수로 감싸서 리턴된다.
{
  function p4(ms) {
    // Promise 를 리턴하는 함수를 await 로 사용 가능
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve(ms);  // 정상적으로 끝나면
        // reject(new Error('이유이유')); // 에러가 발생하면
      }, ms);
    })
  }

  async function main() {
    // 다음 3가지 결과 비교해보기 ! => await main() 이 무엇을 리턴하는지 보기.
    // 1)
    // return p4(4000);    // resolve(value) 의 value 값 리턴
    
    // 2)
    // return 'Mark';    // <-- 'Mark' 값을 Promise.resolve 함수로 감싸서 리턴하게 된다.

    // 3)
    const ms = await p4(1000);
    return `${ms} ms 뒤에 Mark`;    // Promise.resolve 함수로 감싸서 return 하게 된다.
  }

  (async function(){
    try {
      console.log(`p4] 4000ms 기다리기 시작`);
      const result = await main(); // 정상적으로 끝나면 ..
      console.log(`p4] 실행완료 결과 - ${result}`)
    } catch (error) { // reject() 의 Error 가 넘어온다
      console.log(error);
    } finally {  // 마지막에 항상 실행할 finally
      console.log('finally');
    }

  })();

}
