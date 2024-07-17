/******************************
 * 배열의 reduce : n개의 입력 => 1개의 출력 
 * reduce 함수는 잘 사용 할 줄 알면 정말 유용한 내장 함수입니다. 
 * 
 * reduce(callback함수)
 * reduce(callback함수, 초깃값)
 * 
 * reduce 함수를 누적계산결과'값'을 리턴한다
 * (previous, current) => 누적계산결과
 * (previous, current, index, array) => 누적계산결과
 *   - index: 현재 current 가 몇번째 인지 
 *   - array: 함수를 실행하는 배열 자신 
 * 
 * ES5 등장
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 */

// 아래 주어진 배열에 대하여 '총합'을 구하기
let numbers = [1, 2, 3, 4, 5]
let result, sum

// forEach() 사용
sum = 0;
numbers.forEach(n => sum += n);
console.log('sum =', sum);

// reduce(사용)
sum = numbers.reduce((prev, cur) => prev + cur);
console.log('sum =', sum);
// 총 4번 호출됨
// [1, 2, 3, 4, 5]
//   ↘↓
// [   3, 3, 4, 5]
//      ↘↓
// [      6, 4, 5]
//         ↘↓
// [        10, 5]
//            ↘↓
// [           15]

// 초기값 사용
sum = numbers.reduce((prev, cur) => prev + cur, 0);
// reduce 의 두번째 매개변수를 0 으로 주고 초기값을 0 으로 지정
console.log('sum =', sum);
// 총 5번 호출
// [0, 1, 2, 3, 4, 5]   초깃값 0 부터 시작
//   ↘↓
// [   1, 2, 3, 4, 5]
//      ↘↓
// [      3, 3, 4, 5]
//         ↘↓
// [         6, 4, 5]
//            ↘↓
// [           10, 5]
//               ↘↓
// [              15]

console.log('-'.repeat(20));

// reduce 가 진해되는 중간과정 확인해보기

sum = numbers.reduce((prev, cur, index) => {
    let result = prev + cur;
    console.log(`${index} : ${prev} + ${cur}`);
    return result;
}, 0);
console.log('sum =', sum);


//----------------------------------------------------
// 응용
// reduce 를 사용하여 평균 구하기
// hint : 마지막 원소의 경우 평균을 리턴.
//      index, array 활용
console.log('-'.repeat(20))


let avg = numbers.reduce((prev, cur, index) => {
    let result = prev + cur;
    if(index == numbers.length - 1) return parseInt(result / index);
    return result;
}, 0
);
console.log('avg =', avg)  // 3


//------------------------------------------------
//  원래 reduce : n개 -> 1개
//  그러나 다음의 동작도 가능하다.


// 각각의 원소에 x 2을 한 배열 구하기
// [1, 2, 3, 4, 5]  n개의 데이터로부터
// --> [ 2, 4, 6, 8, 10 ]  라는 1개의 '배열' 데이터 생성


result = numbers.reduce((prev, cur) => {
    prev.push(cur * 2);
    return prev;
}, []); // 초기값이 배열

console.log(result);  // [2, 4, 6, 8, 10]

// [[], 1, 2, 3, 4, 5] 시작할때 배열

// [[], 1, 2, 3, 4, 5]
//   ↘ ↓
// [  [2],  2, 3, 4, 5]
//       ↘ ↓
// [    [2, 4],3, 4, 5]
//         ↘  ↓
// [      [2,4,6], 4, 5]
//             ↘  ↓
// [        [2,4,6,8], 5]
//                 ↘  ↓
// [         [2,4,6,8,10]]

result = numbers.reduce((prev, cur) =>
    prev.push(cur * 2) && prev // SCE
, []); // 초깃값이 [] 배열!

console.log(result);

//----------------------------------------------------------
// filter 동작 을 reduce 로 만들어 보기
// [1, 2, 3, 4, 5]  에서 짝수만 걸러내기
//     ↓     ↓
// [   2,    4   ]
console.log();
result = numbers.reduce((prev, cur) =>{
    (cur % 2) || prev.push(cur);
    return prev;
}, []);
console.log(result);

console.log('-'.repeat(20));
//-------------------------------------------------------
// reduce 응용
// 도전!
// 배열안의 알파벳은 각각 몇개가 있을까?
let alphabets = ["c", "a", "a", "b", "c", "a", "d", "e"];
// 결과 => { a: 3, b: 1, c: 2, d: 1, e: 1 }

{
    // reduce 사용안한 버전
    result = {};

    for(e of alphabets){
        result[e] && result[e]++;
        result[e] || (result[e] = 1);
    }
    console.log(result);
}

let count;
{
    // reduce 사용한 버전
    count = alphabets.reduce((prev, cur) => {
        prev[cur] && (prev[cur] += 1);
        prev[cur] || (prev[cur] = 1);
        return prev;
    }, {}); // 초기값 오브젝트

    count = alphabets.reduce((prev, cur) => {
        prev[cur] ? prev[cur] += 1 : prev[cur] = 1;
        return prev;
    }, {});

    console.log(count);
}


/**
 *  {}, c, a, a, b, c, a, d, e
 *    ↘ ↓  
 *   {c:1}, a, a, b, c, a, d, e
 *       ↘ ↓
 * {c:1, a:1}, a, b, c, a, d, e
 *          ↘ ↓
 *     {c:1, a:2}, b, c, a, d, e
 *               ↘ ↓
 *    {c:1, a:2, b:1}, c, a, d, e
 *                  ↘ ↓
 *       {c:2, a:2, b:1}, a, d, e
 *                      ↘ ↓
 *          {c:2, a:3, b:1}, d, e
 *                         ↘ ↓
 *          {c:2, a:3, b:1, d:1}, e
 *                             ↘ ↓
 *          {c:2, a:3, b:1, d:1, e:1}
 */

// -------------------------------------
console.log('-'.repeat(20));

// Key 오름차순 정렬
 console.log(Object.keys(count)); 

 Object.keys(count).sort().forEach(e => console.log(`${e}: ${count[e]}`));


// (빈도)Value 내림차순 정렬
console.log(Object.entries(count));
// 키와 벨류들의 배열의 배열

// 알파벳 오름차순 (Key 오름차순)
console.log('알파벳 오름차순 (Key 오름차순)');
console.log(Object.entries(count).sort((a, b) => {
    if(a[0] > b[0]) return 1;
    if(a[0] < b[0]) return -1;
    return 0;

}));
// a, b 의 타입 : 배열

// 알파벳 내림차순  
// [ [ 'e', 1 ], [ 'd', 1 ], [ 'c', 2 ], [ 'b', 1 ], [ 'a', 3 ] ]
console.log('알파벳 오름차순 (Key 내림차순)');
console.log(Object.entries(count).sort((a, b) => {
    if(a[0] < b[0]) return 1;
    if(a[0] > b[0]) return -1;
    return 0;

}));
    // 삼항연산자 사용
    // console.log(Object.entries(count).sort(
    // (a, b) => a[0] < b[0] ? 1 : a[0] > b[0] ? -1 : 0));


// 빈도수 오름차순 (value 오름차순)
// [ [ 'b', 1 ], [ 'd', 1 ], [ 'e', 1 ], [ 'c', 2 ], [ 'a', 3 ] ]
console.log('빈도수 오름차순 (value 오름차순)');
console.log(Object.entries(count).sort((a, b) => a[1] - b[1]))


// 빈도수 내림차순 (value 내림차순)
// [ [ 'a', 3 ], [ 'c', 2 ], [ 'b', 1 ], [ 'd', 1 ], [ 'e', 1 ] ]
console.log('빈도수 내림차순 (value 내림차순)');
console.log(Object.entries(count).sort((a, b) => b[1] - a[1]))





console.log("\n[프로그램 종료]", '\n'.repeat(20));