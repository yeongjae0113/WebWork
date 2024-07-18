//---------------------------------------------
// static 변수, 함수
// 클래스의 변수와 함수에 적용되는 키워드
//  new 없이도 사용가능하다.  -->  클래스이름.이름
console.log("\n[static]");

class A {
  username = '유인아';
  static age = 37;
  static hello() {
    console.log(A.age);
  }
}

console.log(A);
console.log(A.age);
console.log(A.name);    // A  <--- class 의 .name 속성
A.hello();

console.log('🫥'.repeat(20));

class B {
  age = 37;   // non-static
  static hello() {
    console.log(this.age);
  }
}

console.log(B);
console.log(B.age);   //undefined
B.hello();    // undefined

// new B().hello();    // 에러 !  static 은 new 생성된 객체로 사용 불가 !
                       // static 은 객체에 소속된 멤버가 아니다.

// .name 값도 static 이다.  변경 가능 !
class C {
  static name = '다현';
}

console.log(C);
console.log(C.name);
              
console.log("\n[프로그램 종료]");
