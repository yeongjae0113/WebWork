/**
 * computed property names
 * 
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names
 * 
 * 
 *  object initializer syntax 에서는 computed property names 를 지원한다
 *  object property 에 [..] 사용하여 계산된 결과값으로 object property 지정 가능 
 */

// 과연 아래와 같은 것이 가능할까?
{
  let [name1, name2, name3] = ["a", "b", "c"];    // 여기서 name1, name2, name3 는 키

  const obj1 = {    // 여기서 name1, name2, name3 는 obj1 의 변수
    name1: "alpha",
    name2: "beta",
    name3: "gamma",
  }
  // 과연 이렇게 만들어졌을까?
  // ---> { a: 'alpha', b: 'beta', c: 'gamma' } ?
  console.log('obj1= ', obj1);

  // computed property names 를 사용하면 !
  const obj2 = {
    [name1]: "alpha",
    [name2]: "beta",
    [name3]: "gamma",
  }
  console.log('obj2= ', obj2);
}

{
  let i = 0;
  const obj = {
    [`foo${++i}`]: i,
    [`foo${++i}`]: i,
    [`foo${++i}`]: i,
  }
  console.log(obj);

}

{
  const items = ["A", "B", "C"];
  const obj = {
    [items]: "Hello",   // toString 값
  };
  console.log("obj=", obj);
  console.log("items=", items)
  console.log("obj[A,B,C]=", obj["A,B,C"])
}

{
  const param = "size";
  const config = {
    [param]: 12,
    [`mobile${param.charAt(0).toUpperCase()}${param.slice(1)}`]: 4,
  }
  console.log("config=", config);
}

//────────────────────────────────────────────────────────────────────
// console.log("\n[프로그램 종료]", '\n'.repeat(20));
console.log("\n[프로그램 종료]");

