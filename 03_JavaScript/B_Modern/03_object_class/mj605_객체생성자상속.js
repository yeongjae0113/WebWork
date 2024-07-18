/*
    JavaScript 는 객체지향언어가 아니다. 그래서 상속도 없다.  
    그러나 prototype 을 이용한 객체확장을 통해
    상속과 같은 메커니즘 구현이 가능하다
*/
/*
객체 생성자 상속받기
예를 들어서 우리가 Cat 과 Dog 라는 새로운 객체 생성자를 만든다고 가정해봅시다. 
그리고, 해당 객체 생성자들에서 Animal 의 기능을 재사용한다고 가정해봅시다. 
그렇다면, 이렇게 구현 할 수 있습니다.
*/

//------------------------------------------
// 상속을 사용하지 않는 경우
{
  console.log('상속을 사용하지 않는 경우');

  function Dog(name, sound) {
    this.type = '개';
    this.name = name;
    this.sound = sound;
  }

  function Cat(name, sound) {
    this.type = '고영희';
    this.name = name;
    this.sound = sound;
  }

  Dog.prototype.say = function() {
    console.log(`Dog: ${this.type}, ${this.name}, ${this.sound}`);
  }

  let dog = new Dog("멍멍이", "왈왈");
  dog.say();
}

{
  //------------------------------------------
  // 상속을 사용하는 경우
  //  prototype 을 이용한 객체 확장
  //console.log("\n상속을 사용 하는 경우");
  // TODO
}

//────────────────────────────────────────────────────────────────────
console.log("\n[프로그램 종료]", "\n".repeat(20));
