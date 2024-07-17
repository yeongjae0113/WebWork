/*******************************
 * 영어문장에서 각 단어 첫글자만 대문자 만들기
 */

const input = [
    "i am a PROGRAMMER",     // -> I Am A Programmer
    "THAT ELEPHANT IS BIG",  // -> That Elephant Is Big
]

function letterCapitalize(str){
    const sentence = str.toLowerCase().trim().split(/\s+/);
    return sentence.reduce((prev, cur) => {
        prev.push(cur[0].toUpperCase() + cur.slice(1));
        return prev;
    }, []).join(' ');
}


// function letterCapitalize(str) {
//     const words = str.trim().split(/\s+/); // 공백을 기준으로 문자열 분리
    
//     // reduce 메서드 사용
//     const result = words.reduce((acc, word) => {
//         const a = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); // 단어의 첫 글자를 대문자로 변환하고 나머지는 소문자로 변환
//         return acc + (acc.length > 0 ? " " : "") + a; // 누적 값에 현재 변환된 단어를 추가 (첫 단어가 아니라면 공백 추가)
//     }, ""); // 초기값을 빈 문자열로 설정
    
//     return result;
// }

// function letterCapitalize(str){

//     let result = str.toLowerCase();     // 다 소문자로 만들기
//     let words = result.split(' ');      // 한글자마다 칸 나누기

//     for (let i = 0; i < words.length; i++) {        // for문을 이용해 첫 글자를 대문자로 바꾸기
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);    // substring(1)을 사용해 대문자 이후 온 글자들을 다 붙히기
//     }

//     result = words.join(' ');   // 띄어쓰기로 문자 연결하기
//     return result;
// }
input.forEach(e => console.log(letterCapitalize(e)));