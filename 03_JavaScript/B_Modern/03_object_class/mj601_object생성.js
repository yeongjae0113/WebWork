// 객체 object

// 함수 or 클래스 (틀)  --->  객체, 개체, object 생성
//                           생성된 객체를 (인스턴스)라고도 함

//-------------------------------------------------
// 생성자 함수로 객체 만들기
//     (틀)                  (인스턴스)
// function () {}  ----->   new 함수()


{
    function A() {}
    console.log(A());       // A() 함수 호출
    const a = new A();      // A 객체 생성
    console.log(a);
}

console.log()
// 객체의 속성 (property) 추가하기
{
    function B(name, age) {
        console.log(`B(name=${name}, age= ${age})`);
        this.name = name;       // this -> b1 에 연결
        this.age = age;         // this -> b1 에 연결
 
        this.hello = function(greeting = "안녕") {
            console.log(`hello() 호출: ${greeting}, name= ${this.name}, age= ${this.age}`);
        }
    }

    const b1 = new B('유인아', 27);     // 생성된 objeft 의 this 는 b1 에 연결
    console.log(b1);
    console.log(b1.name, b1.age);
    b1.hello();
    b1.hello("굿모닝~");

    new B('이다혜', 25).hello("오잉?");
}


//────────────────────────────────────────────────────────────────────
console.log("\n[프로그램 종료]", "\n".repeat(20));























