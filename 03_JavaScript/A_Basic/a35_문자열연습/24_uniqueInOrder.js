/*******************************
 * 연속되지 않은 문자들 모으기
 */

const input = [
    "all good tree", // ['a', 'l', ' ', 'g', 'o', 'd', ' ', 't', 'r', 'e']
    "AAA AAAA AA AAA",  // ['A', ' ', 'A' ,' ', 'A', ' ', 'A']
    "i AM a BOY",  // ['i', ' ', 'A', 'M',' ', 'a', ' ', 'B', 'O', 'Y']
]

function uniqueInOrder(str){
    let result = [];    // 새로운 배열 선언
    for (let i = 0; i < str.length; i++) {  // for문을 돌려 i가 str길이만큼 돌게함
        if (str[i] !== str[i + 1]) {    // i번째 글자와 i+1번째 글자가 같지 않으면 위에 만들어준 배열에 저장
            result.push(str[i])
        }
    }
    return result;  // 그 배열을 반환
    

}

input.forEach(e => console.log(uniqueInOrder(e)));