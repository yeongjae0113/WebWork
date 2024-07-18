/*
fulfilled 되거나 rejected 된 후에 최종적으로 실행된 것이 있다면
.finally() 를 설정하고. 함수를 인자로 넣습니다.
*/

{
  function p(n) {
    return new Promise((resolve, reject) => {
      console.log(`1] p(${n}) Promise 생성`);
      // pending 상태


      setTimeout(() => {
        (n % 2 === 0) && resolve('짝수 두산이 짱이야');
        (n % 2 === 0) || reject("홀수 기아가 쵝오야!");
      }, 1000);
    });
  }

  p(1)
    .then((message) => {
      console.log('4] fulfilled', message);
    })
    .catch((error) => {
      console.log('5] rejected:', error)
    })
    .finally(() => {
      console.log('6] 삼성이 최고야!');
    })
  ;

  console.log("7] 다음 작업...");
}
