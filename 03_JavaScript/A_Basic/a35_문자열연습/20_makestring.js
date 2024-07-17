/*******************************
 * 앞글자만 가져오기
 */

const input = [
    "The community at Code States might be the biggest asset", // -> TcaCSmbtba
    "i am a PROGRAMMER",     // -> iaaP
    "THAT ELEPHANT IS BIG",  // -> TEIB
]

function makeString(str){

    // // 방법 1
    // let words = str.split(' ');     // 문자열을 띄어쓰기를 기준으로 나눈다
    // let result = [];    // 새로운 배열 생성
    
    // for (let i = 0; i < words.length; i++) {    // for문을 이용해 i가 단어의 길이만큼 돈다
    //     result += words[i].charAt(0);   // 단어의 첫번째(0번째 index)를 result 배열에 저장
    // }

    // return result;  // 저장한 배열을 반환
    

    // 방법 2
    return str.trim().split(/\s+/).reduce((prev, cur) =>
        prev + cur.charAt(0),
        "")

}

input.forEach(e => console.log(makeString(e)));