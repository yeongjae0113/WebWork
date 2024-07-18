/*
클래스 class

클래스라는 기능은 C++, Java, C#, PHP 등의 
다른 프로그래밍 언어에는 있는 기능인데 

자바스크립트에는 없었기 때문에 
예전 자바스크립트 (ES5) 에서는 
클래스 문법이 따로 없었기 때문에 위에서 작성한 코드처럼 
객체 생성자 함수를 사용하여 비슷한 작업을 구현해왔습니다.

ES6 에서부터는 class 라는 문법이 추가되었는데요, 
우리가 객체 생성자로 구현했던 코드를 조금 더 명확하고, 
깔끔하게 구현 할 수 있게 해줍니다. 

추가적으로, 상속도 훨씬 쉽게 해줄 수 있습니다.

  https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes

  
  clsss 가 .. 새로운 상속등의 모델(새로운 언어 기능?)을 제공하는건 아님!
  기존의 프로토타입 기반의 방식을 좀더 '명료하게' 사용할 수 있도록 하는
  일종의 '도우미' 정도라고 보면 된다.

*/

//------------------------------------------------------------
console.log()
// class를 만드는 2가지 방식
{
  // 1. 선언적 방식
  class A {}
  console.log(new A());
  
  // 2. class 표현식을 변수에 할당
  const B = class { }
  console.log(new B());

  // ↓ 선언적 방식이지만 hoisting 은 발생하지 않는다.
  // new C();
  class C { }

}

// constructor
// 최초 초깃값을 객체 안에 집어넣기
console.log('\n생성자');
{
  class B {
    constructor() {
      console.log('B() 생성자 호출');
    }
  }

  console.log(new B());

  // 매개변수 받는 생성자
  class C {
    constructor(name, age) {
      console.log(`C(${name}, ${age}) 생성자 호출`);
    }
  }

  console.log(new C('홍가연', 25));
}


// 프로퍼티 property 
console.log()
{
  // 방법1 : consturctor 에서 property 명시
  class A {
    constructor(name, age) {
      // this.  <--- 객체의 property 가 된다.
      this.name = name;
      this.age = age;
    }
  }

  let a1 = new A('유인아', 26);
  let a2 = new A('이다혜');

  console.log(a1.name, a1.age);
  console.log(a2.name, a2.age);
  
  // 방법2: class field 를 직접 기술
  class B {
    name;   //  <--- this.name.  초기값이 없으면 각각 undefined 로 초기화.
    age;
  }
  
  console.log(new B());
  
  class C {
    name = '유인아';    // 초기값 설정
    age = 26;          // 초기값 설정
  }

  console.log(new C());


  class C2 {
    name = '이다혜';    // 초기값 설정
    age = 26;          // 초기값 설정

    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    // 함수 추가 (메소드)
    hello(greeting) {   // function 이나 메소드를 쓸 때 굳이 function 안 써도됌 !
      console.log(`hello() 호출 ${greeting}, ${this.name}, ${this.age}`, this);
    }

    // 화살표 함수로 정의 가능한가 ?  ---> this 가 가능하다 !
    hello2 = (greeting) => {
      console.log(`hello() 호출 ${greeting}, ${this.name}, ${this.age}`, this);
    }
  }
  // 생성자를 통해 생성이 되었기 때문에
  // 매개변수 없이 생성하려면 constructor(name ='이다혜, age ='26') 이런식으로 default 파라미터를 줘야함
  console.log(new C2());    // C2 { name: undefined, age: undefined }
  console.log(new C2("임예나", 21));
  
  new C2("강민정", 26).hello("안녕");
  new C2("김예현", 26).hello2("좋은아침");
}

//────────────────────────────────────────────────────────────────────
console.log("\n[프로그램 종료]");

