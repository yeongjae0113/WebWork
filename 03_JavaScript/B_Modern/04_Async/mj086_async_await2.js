{
  // 아래 코드 수행시 화면에 찍히는 순서들을 잘 보고, 생각해보자

  function p1(ms) {
    // Promise 를 리턴하는 함수를 await 로 사용 가능
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve(ms);
      }, ms);
    });
  }

  // TODO
}
{
  function p2(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve(ms);
      }, ms);
    });
  }

  // TODO
}

// Promise 객체가 rejected 된 경우의 처리를 위해
// try catch 를 이용한다.
{
  function p3(ms) {
    // TODO
  }

  // TODO
}

// async function 에서 return 되는 값은
// Promise.resolve 함수로 감싸서 리턴된다.
{
  function p4(ms) {

    // TODO
   
  }

  // TODO

}
