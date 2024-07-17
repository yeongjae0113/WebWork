/*******************************
 * 가장 긴 단어 찾기
 */

const input = [
    "I am a Student",     // ->  Student
    "That elephant is big",  // -> elephant
]

function longestWord(str) {

    // 방법 1
        // let words = str.split(' ');     // 문자열을 공백기준으로 자름
        // let longest = words[0];         // 첫번째 단어를 가장 큰 단어로 넣어줌
        
        // for (let i = 1; i < words.length; i++) {    // // 각 단어를 순회하며 가장 긴 단어 찾기
           
        //     if (words[i].length > longest.length) { 
        //         longest = words[i];     // i의 단어가 longest에 있는 단어보다 길면 i가 longest로
        //     }
        // }
        
        // return longest;     // 저장한 longest 반환
        

        // 방법 2
        return str.trim().split(/\s+/).reduce((prev, cur) => 
            cur.length > prev.length ? cur : prev, "")

}

input.forEach(e => console.log(longestWord(e)));