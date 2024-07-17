/*********************************************
 * every(판별함수)  ES5 등장
 *   배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트
 * 
 *   판별함수의 리턴값은 Truthy / Falsy 를 리턴해야 한다
 * 
 *   판별함수의 매개변수 (element, index, array)
 * 
 *   리턴값은 true / false
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/every
 */
console.log('[every]')
let arr1 = [1, 30, 39, 29, 10, 13];

// 배열의 모든 값들이 40 미만인가요?
console.log(arr1.every(e => e < 40));

// 배열의 모든 값들이 홀수인가요?
console.log(arr1.every(e => e % 2  === 1))

const isBig = function(e) {
    return e >= 10;
}

console.log([12, 5, 8, 130, 44].every(isBig));
console.log([12, 50, 80, 130, 44].every(isBig));




/**********************************************
 * 배열.some(판별함수)
 *  배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트
 * 
 *  판별함수의 리턴값은 Truthy / Falsy 를 리턴해야 한다
 * 
 *  판별함수의 매개변수 (element, index, array)
 * 
 *  리턴값은 true / false
 * 
 * ES5 소개
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/some
 */
console.log('-'.repeat(20));
console.log('[some()]');
arr1 = [1, 2, 3, 4, 5];

// 배열값 중에 3의 배수가 있습니까?
console.log(arr1.some(e => e % 3 === 0));

console.log(arr1.some((e, i) => {
    console.log(`[${i}]: ${e}`)
    return e % 3 === 0
}));


console.log("\n[프로그램 종료]", '\n'.repeat(20));

