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
  Cat.prototype.say = function() {
    console.log(`Cat: ${this.type}, ${this.name}, ${this.sound}`);
  }

  let dog = new Dog("멍멍이", "왈왈");
  dog.say();

  let cat = new Cat("소리", "ㄲRrr");
  cat.say();
}

{
  //------------------------------------------
  // 상속을 사용하는 경우
  //  prototype 을 이용한 객체 확장
  console.log("\n상속을 사용 하는 경우");

  function Animal(type, name, sound) {
    console.log(`Animal(${type}, ${name}, ${sound}) 생성`)
    this.type = type;
    this.name = name;
    this.sound = sound;
  }

  Animal.prototype.say = function() {
    console.log(`say(): ${this.sound}`);
  }
  Animal.prototype.sharedValue = 1;

  // ----------------------------------------------------------------------------------------
  // 생성자 상속
  // Animal.call 을 호출!
  //여기서 첫번째 인자에는 this 를 넣어주어야 하고,
  // 그 이후에는 Animal 객체 생성자 함수에서 필요로 하는 파라미터를 넣어주어야 합니다.


  // 추가적으로 prototype 을 공유해야 하기 때문에
  // 상속받은 객체 생성자 함수를 만들고 나서 prototype 값을 Animal.prototype 으로 설정해줍니다


  // Dog() 와 Cat() 을 Animal() 이
  // 가지고 있던것을 재사용함

  // -------------------------------------
  function Dog(name, sound, weight) {
    console.log(`Dog(${name}, ${sound}, ${weight}) 생성`)
    // call(this, 상속하는 부모 객체 생성자 파라미터들 ..)
    Animal.call(this, "개", name, sound);

    this.weight = weight;   // Dog 의 새로운 property
  }
  Dog.prototype = Animal.prototype;   // 부모의 prototype 에 연결

  function Cat(name, sound, color) {
    console.log(`Cat(${name}, ${sound}, ${color}) 생성`)
    Animal.call(this, '고양이', name, sound);
    this.color = color;
  }
  Cat.prototype = Animal.prototype;

  let dog = new Dog("멍멍이", "왈왈", 32.3);
  let cat = new Cat("소리", "웨에에엥", "white");

  console.log(dog);
  console.log(cat);

  dog.say();
  cat.say();

  console.log(dog.sharedValue);
  console.log(cat.sharedValue);

  Animal.prototype.sharedValue = 100;

  console.log(dog.sharedValue);   // (읽기 동작)
  console.log(cat.sharedValue);

  dog.sharedValue = 333;    // 이건 dog 객체에 sharedValue 를 추가하게 된다 ! (쓰기 동작)

  console.log(dog.sharedValue);
  console.log(cat.sharedValue);

  console.log();
  console.log(dog instanceof Dog);      // true
  console.log(dog instanceof Animal);   // true
  console.log(dog instanceof Object);   // true
  console.log(dog instanceof Cat);      // true

}

//────────────────────────────────────────────────────────────────────
console.log("\n[프로그램 종료]");
