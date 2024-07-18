// 객체를 만드는 또다른 방법
// new Object()    <-- 그닥 권장하는 방법은 아님

// Object() 는 JavaScript 에서
// 가장 기초가 되는 객체 입니다.
// JavaScript 의 내장 객체

//-------------------------------------------------
// 프로토타입 체인★
// .prototype

{
    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.hello = function () {
            console.log(`hello ${this.name}`);
        }
    }

    const p = new Person('임예나', 21);
    p.hello();

    console.log(p.toString());      // 내가 만들지 않아도 존재한다?

    // .prototype
    console.log(Person.prototype);
    console.log(Person.prototype.toString);     // [Function: toString]
    console.log(Person.prototype.consturctor);  // [Function: toString]
    console.log(Person.hello);      // undefined? ---> 없다 ..?
    console.log(Person.prototype.hello);    // undefined ---> 여기도 없다. hello 는 어디에 ?0
            // hello 는 prototype 에 생기는게 아니다 !
            // 생성된 객체에 생기는 것이다 !  ->  ex) new Object()
}

console.log('*'.repeat(30));

{
    function Person(name, age) {
        this.name = name;
        this.age = age;

        // hello 함수는 여기서 정의하지 않을 것임 !
    }

    Person.prototype.hello = function() {
        console.log(`hello ${this.name}, ${this.age}`);
    }

    const p1 = new Person('이가영', 23);
    p1.hello();

    const p2 = new Person('최은정', 23);
    p2.hello();

    console.log(Person.prototype.hello);

    console.log(p1 instanceof Person);
    console.log(p1 instanceof Object);
        // Person 은 Object 의 prototype 에 연결되어 있기에
        // Person 또한 Object 타입이다.
}

// protytype 은 JS 에서 매우 중요!!!
//  JS 언어 는 prototype 을 아는것에서부터 시작한다.


// JavaSCript 다 ES6 부터 class 를 지원하긴 하나
// JS 가 객체지향 언어 기능을 가지게 되었다는 뜻은 아니다.
// class 도 결국 prototype 체인 기능을 활용하여 구현할 뿐이다.

    
//────────────────────────────────────────────────────────────────────
console.log("\n[프로그램 종료]");











