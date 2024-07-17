/*
    클로저는 자신이 생성될때의 환경(Lexical Environment) 를 기억해야 하므로
    메모리 차원에서 손해볼수 있다.

    그러나, 다음과 같은 상황에선 적극적으로 활용해야 한다

    1. '상태' 유지
    2. 전역변수 사용 억제
    3. 정보 은닉
*/

/*
    클로저를 사용하면서 자주하는 실수
*/

// 예제
function Counter() {
  // 카운트를 유지하기 위한 자유 변수
  var counter = 0; 

  // TODO
}

// TODO

//────────────────────────────────────────────────────────────────────
console.log("\n[프로그램 종료]", "\n".repeat(20));