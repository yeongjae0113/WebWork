console.log('\n-- Scope --')
/*
    자바스크립트의 Scope : 변수 가 유효한 범위
    JS 의 Scope 는 총 3가지

    Global (전역) Scope: 코드의 모든 범위에서 사용 가능
    Function (함수) Scope: 함수 안에서만 사용 가능
    Block (블록) Scope: if, for, switch 등 특정 블록 내부에서만 사용 가능

    let, const 는 block scope 
    var 는 function scope

    ES6 부터 등장한 const, let 를 더 선호하는 이유 (추천)
        function scope 보다는 
        block scope 가 훨~씬 직관적이기 때문!

    ※ 단. 기존 (과거의) 코드, 라이브러리를 사용하는 경우가 있슴
*/

// 블럭 외부에서 선언
const outer1 = 100
let outer2 = 200
var outer3 = 300
outer4 = 400

// 블럭
{
    console.log("블럭안") 

   // let, const 바깥블럭에서 선언한건 안쪽 블럭에서 사용 가능
   console.log(`\touter1 = ${outer1}`)  
   console.log(`\touter2 = ${outer2}`)
   console.log(`\touter3 = ${outer3}`)
   console.log(`\touter4 = ${outer4}`)

   // 블럭 중첩
   { outer2++;
        { outer2++;
            { outer2++;
                console.log(`\t\touter2 = ${outer2}`)
            }
        }
    }

    // 블럭 안에서 선언
    const name1 = 'Mark'
    let name2 = "Tommy"
    var name3 = "Jane"
    name4 = "Kim"

    console.log('블럭 안')
    console.log(`\tname1 = ${name1}`)
    console.log(`\tname2 = ${name2}`)
    console.log(`\tname3 = ${name3}`)
    console.log(`\tname4 = ${name4}`)
}

console.log('블럭 밖')
// let, const 는 선언된 block 바깥에서 사용 못함 !
// console.log(`name1 = ${name1}`)
// console.log(`name2 = ${name2}`)

// var 가 let, const 와 다른점! 
// var 는 바로 이경우는 '전역 스코프' 로 동작한다.
console.log(`name3 = ${name3}`)
console.log(`name4 = ${name4}`)

// ※ 어색하고 이상하다..  그러니 가급적 let const 를 사용하자.


// 함수 블럭의 경우
console.log('-'.repeat(20));
console.log('[함수 블럭의 경우]');


function sayJob(){
    const job1 = "프로그래머"  // block scope
    let job2 = "기획자"  // block scope
    var job3 = "디자이너"  // 함수 안에서 선언한 var 는 function scope 함수 안에서만 사용 가능
    job4 = "마케터"   // 함수 안에서 var 없이 선언한 변수는 global scope


    console.log("sayJob() 함수 안")
    console.log("\tjob1 =", job1)
    console.log("\tjob2 =", job2)
    console.log("\tjob3 =", job3)
    console.log("\tjob4 =", job4)
}

console.log("sayJob() 호출 전");
// console.log("\t job1 =", job1);
// console.log("\t job2 =", job2);
// console.log("\t job3 =", job3);
// console.log("\t job4 =", job4);

sayJob();   // 함수 호출

console.log("sayJob() 호출 후");
// console.log("\t job1 =", job1);     // 에러 ! -> block  scope 이기 때문에.
// console.log("\t job2 =", job2);     // 에러 ! -> block  scope 이기 때문에.
// console.log("\t job3 =", job3);     // 함수 안에서 var 로 선언한건 함수 끝나면 소멸 (function scope !)
console.log("\t job4 =", job4);


//────────────────────────────────────────────────────────────────────
// console.log("\n[프로그램 종료]", '\n'.repeat(20));
console.log("\n[프로그램 종료]", '\n');