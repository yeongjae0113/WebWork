/*
    object

    property : value 쌍으로 구성된 데이터

    {property:value, property:value, ...}

    property 는 중복될수 없다.
    value 는 어떠한 타입도 될수 있다.
        : number, string, array, function, object..

    사실 JavaScript 의 모든 데이터의 실체는 object 이다.
    
    ※일반적으로  object 변수는 는 const 로 선언한다
    그러나 이번단원에서 진도 편의상 let 등을 사용하기도 하겠습니다
 */

let obj1, obj2, obj3, result;


const car = { type: "Fiat", model: "500", color: "white" };

console.log(car);
console.log("제 자동차는 " + car);
console.log(car.toString());


/* object 의 property 사용하기
    방법1 : objectName.propertyName
    방법2 : objectName["propertyName"] 
*/
console.log('-'.repeat(20));
console.log('[object 의 property]');

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
};

console.log(person.firstName);
console.log(person['firstName']);

console.log(typeof person);
console.log(typeof person.firstName);
console.log(typeof person.age);

let a = 'firstName';
let b = 'age';

console.log(person[a])
console.log(person[b])

console.log(person.address);

// 값 변경하기
console.log('변경전', person);
person.firstName = 'Jane';
console.log('변경후', person);

// person 을 const 로 선언 했는데 property 변경 가능?  
// person 을 바꾸지 못한다는 거지 person 의 property 를 변경 못한다는 게 아니다
// person = { name: 'hello' };  // person 을 변경하려 하면 에러!

// property 추가.
person.email = "Jane@mail.com";
console.log('추가후', person);

// property 삭제. delete 연산자
delete (person.email);
console.log('삭제후', person);

// property 는 중복 불가
obj1 = {
    score: 100,
    score: 200,
    'score': 300,  // property 를 문자열로 표기해도 OK
    Score: 400,
}
console.log(obj1);

console.log()

// property name 으로 가능한 것들.
obj2 = {
    name: 'John',
    'name': 'Susan',
    100: '점수',  // number 가능!
    3.14: '가능',
    true: 'boolean 도 된다!',
    undefined: 'undefined 가 된다고?',
    // [10, 20, 30]: '배열 안되요',  // 배열이나 object 는 안되요.
};
console.log(obj2);
console.log(obj2[100], obj2['100']);
console.log(obj2[true], obj2[undefined]);


// value 는 어떠한 타입도 가능.
console.log('-'.repeat(20));

obj2 = {
    name: 'John',
    age: 34,
    height: 172.3,
    married: false,
    score: [100, 97, 33],
    family: {
        spouser: "Jane",
        children: ['가영', '준영', '구영', '최영'],
    },
};

console.log(obj2);
console.log(obj2.score[1]);
console.log(obj2.family.children[2]);
console.log(obj2['family']['children'][2]);

/****************************************************
 *  object method 와 this
 * object 의 value 는 어떠한 타입도 가능하다
 * 즉, 함수도 object 의 property value 로 가능하다
 * object 의 property 함수를 메소드(method) 라 부른다.
 * object 안에서 this 는 '자기자신객체', 즉, 해당 object 가 참조(혹은 바인딩) 된 객체를 말한다
 */
console.log('-'.repeat(20));
console.log('[object method 와 this]');

obj3 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,

    // this 가 명시되지 않으면 동작 안함.
    // 동일 object 내의 property 사용하려면 this 꼭!
    fullName: function () {
        // return 'Hello';
        return `${this.id}] ${this.firstName} ${this.lastName}`;
    },
};
console.log(obj3.fullName());

// 위 코드에서 this 는 obj3 를 참조
// 즉 this.firstName => obj3.firstName 이 동작.

console.log();
let x = {
    name: "kim",
    age: 34,
    height: 172.3,
    score: [94, 35, 79],
    getTotal: function () {
        // return this.score[0] + this.score[1] + this.score[2];

        let sum = 0;
        for (i = 0; i < this.score.length; i++) {
            sum += this.score[i];
        }
        return sum;
    },
    getAvg: function () {
        return this.getTotal() / this.score.length;
    },
};

console.log(x.getTotal()); // score 배열의 총점
console.log(x.getAvg()); // score 배열의 평균

obj1 = {
    score: [100, 200, 300],
}

obj1.getTotal = x.getTotal;
console.log(obj1.getTotal());

/**
 *  this 의 정체!
 *  JS code 를 소유한(own) object다!  즉 this 는 '특정 object' 를 '참조' 한다.
 * '어떤 object 를 참조하나?' → this 가 사용(호출) 되는 시점마다 '다르다'.
 *  (JS 의 this 가 다른 언어의 this에 비해 직관적으로 이해하기 어려운면이 있습니다)
 *
 *  가령
 * - 'object method' 내의 this 는 함수를 소유한(own) object 참조
 * - function 내의 this 는 global object 참조
 * - strict mode 에서 function 내의 this 는 undefined
 * - this 단독인 경우 global object 참조
 * - event 에선 this 는 event 가 발생한 element 객체
 * - '생성자(constructor) 안'에서의 this 는 그 자체가 값을 갖고 있진 않다.
 *    단지, 생성된 새로운 object에서 치환된다.
 *    즉 new 로 생성된 새로운 object 가 바로 this 가 된다.
 * - call(), apply(), bind() 와 같은 메소드에선 this 는 어떠한 object 를 참조하게 할수 있다.
 *
 * this 는 변수가 아니다!! 키워드다!!  따라서 this 의 값을 수정할수 없다
 */

// 참고: https://www.w3schools.com/js/js_this.asp

console.log();
// 배열의 원소도 어떠한 타입도 가능!
x = [
    "kim", 34, 172.3,
    { kor: 94, eng: 35, math: 79 },
    [
        {
            address: '서울',
            year: 1998,
            {
            address: '제주',
            year: 2012,
        },
    ],
    function () { return "소리소리" },
    function () { return this[3]['kor'] + this[3]['eng'] + this[3]['math'] },
    function () {
        i = 0; i < this[4].length; i++)
        console.log(this[4][i].address)
    },
];
console.log(x);
console.log(x[3].eng, x[3]['eng']);
console.log(x[4][1]['year']);
console.log(x[5]());
console.log(x[6]());  // { kor: 94, eng: 35, math: 79 } 의 점수 합
x[7]();  // '서울' '제주' 출력

console.log("\n[프로그램 종료]", '\n'.repeat(20));