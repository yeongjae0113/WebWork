// getter & getter
// 일반적으로 클래스 '내부적으로만' 사용하는 변수명을
// _name 과 같이 언더바로 작명하는 경우 많음
// _ 언더바로 시작하는 변수명에 readonly 동작시킬수 있는 것이 있슴.
// 이런 용도의 멤버변수를 외부에서 접근할때 getter, setter를 통해 접근

{
  class A {
    _name = 'no name';

    get name() {
      console.log('[A getter 호출]');
      return `${this._name}@@`;
    }

     set name(value){
      console.log('[A setter 호출]');
      this._name = value + '!!!';
    }
  }

  const a = new A();
  console.log(a);

  a._name = '유인아';
  console.log(a);

  console.log(a._name);
  console.log(a.name);   // '읽기' 동작에서 getter 가 자동 호출됨.

  a.name = '송유신';     // '쓰기' 동작에서 setter 가 자동 호출됨.
  console.log(a);
}

// readonly
{
  class B {
    _name = 'no name';

    get name() {
      console.log('[B getter 호출]');
      return `${this._name}@@`;
    }

    // setter 없다!
  }

  const b = new B();
  console.log(b);

  b.name = 'Mark';    // 문법에 에러가 아니다 ?
                      // 원래 이렇게 하면, .name 속성이 새로 추가되어야 하는데?
  console.log(b);   // B { _name: 'no name' }  <- .name 속성이 추가되어있진 않다
                    // setter 가 없기 때문에 name 은 마치 readonly 처럼 동작한다

  b._name = '유인아';
  console.log(b);
}

// ※ 진정한 readonly 를 만드려면 closure 를 활용하는 것이 좋다
//      (함수형 프로그래밍에서 ...)


{
  class C {
    _name = 'no name';

    set name(value) {
      this._name = value;
    }
    
    get aaa() {
      return `${this._name} aaa`;
    }
    get bbb() {
      return `${this._name} bbb`;
    }
    get ccc() {
      return `${this._name} ccc`;
    }
  }

  const c1 = new C();
  c1.name = '유인아';

  console.log(c1.aaa);
  console.log(c1.bbb);
  console.log(c1.ccc);
}

console.log("\n[프로그램 종료]");
