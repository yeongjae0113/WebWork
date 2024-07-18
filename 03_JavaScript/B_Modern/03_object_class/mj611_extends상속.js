// 상속 : extends
// 이미 만들어진 클래스 활용

{
  class Parent {
    name = "Lee";
    hello() {
      console.log("hello", this.name);
    }
  }

  class Child extends Parent {
    // 부모의 name 과 hello 를 사용할 수 있다.
  }
  
  const p = new Parent();
  const c = new Child();
  console.log(p, c);

  c.hello();
  c.name = "김세진";
  c.hello();
}

// override
// 클래스의 상속 멤버 변수 및 함수 오버라이딩 추가
// 부모에서 구현된 함수나 변수를
// 자식에서 똑같이 구현하면 이를 '오버라이딩' 이라 함.
// 자식이 만든 함수가 부모에서 만들어져 있던 함수를 덮어쓰기 하는 셈
{
  class Parent {
    name = "Lee";
    hello() {
      console.log("hello", this.name);
    }
  }

  class Child extends Parent {
    age = 37;

    // 오버라이딩   --> 이름이 같으면 Override
    hello() {
      console.log('hello', this.name, this.age);
    }
  }

  const p = new Parent();
  const c = new Child();

  console.log(p, c);
  p.hello();
  c.hello();    // 오버라이딩 된 hello() 가 호출됨 !
}

// super
// 클래스의 상속 생성자 함수 변경
// 자식이 constructor 에 무언가 추가하고자 할때

{
  class Parent {
    name;
    constructor(name){
        this.name = name;
    }


    hello(){
        console.log('hello', this.name)
    }
  }

  class Child extends Parent {
    age;
    constructor(name, age) {
      // 상속관계에서 자식 생성자로 this 사용하려면 ?
      // super() 를 명시해야 한다 !
      super(name);
      // this.name = name;    // 에러다 !
      this.age = age;
    }

    hello() {
      console.log('hello', this.name, this.age);
    }
  }

  const c = new Child('유인아', 26);
}

// staic 상속
// static 도 정상적으로 상속된다
{
  class Parent {
    static age = 37;
  }

  class Child extends Parent{}

  console.log(Child, Parent);
  console.log(Parent.age, Child.age);
}

/*
    JS 의 상속 메커니즘

    부모    new       부모
    class  ─────────> Instance
      │                 │
      ↓                 ↓
    자식     new      자식
    class  ─────────> Inscance


*/

// class 는 결국
// 객체생성자 와 prototype, 상속 을
// 좀더 편리하게 사용하기 위함


// 앞으로
// 보통.. Babel 을 사용하시거나
// class 를 사용할수 있는 런타임에서 작업하시게 될겁니다.
// class 는 꼭 익혀두셔야 합니다.

//────────────────────────────────────────────────────────────────────
console.log("\n[프로그램 종료]");
