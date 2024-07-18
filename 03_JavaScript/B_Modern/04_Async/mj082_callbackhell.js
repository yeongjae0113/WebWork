// 콜백함수를 많이 쓸때 왜 복잡해지 상황을 보자

// 숫자 n 을 파라미터로 받아와서
// 다섯번에 걸쳐 1초마다 1씩 더해서
// 출력하는 작업을 setTimeout 으로 구현
{
    function increaseAndPrint(n, callback) {
        setTimeout(() => {
            const increased = n + 1;
            console.log(increased);
            if(callback) {
                callback(increased);
            }
        }, 1000);     // 1초 뒤 실행
    }

    increaseAndPrint(0, n => console.log("끝"));
    console.log();

    increaseAndPrint(0, n => {
        increaseAndPrint(n, n => {
            increaseAndPrint(n, n => {
                increaseAndPrint(n, n => {
                    increaseAndPrint(n, n => {
                        console.log("끝")
                    });
                });
            });
        });
    });

    console.log("비동기 다음 작업 진행...")
}

// Promise 를 사용하여 callback hell 을 벗어날수 있다.▷▷▷ to Next.