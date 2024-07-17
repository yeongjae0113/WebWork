/*******************************
 * isogram : 중복글자 없는 단어
 * isogram 여부 판단하기 (true/false)
 */

const input = [
    "Dermatoglyphics", // -> true
    "programmer",      // -> false
    "Cocktail",         // -> false  대소문자 동일
    "isogram",         // -> true
]

function isIsogram(str){
    str = str.toLowerCase();    // 비교하기 위해 다 소문자로 변환

    for (let i = 0; i < str.length; i++) {  // 무슨 문자가 있는지 확인
        for (let a = i + 1; a < str.length; a++) {  // 겹치는 문자가 있는지 확인
            if (str[i] == str[a]) {
                return false;   // 겹치는 문자가 있다면 false
            }
        }
    }
    return true;    // 겹치는 문자가 없다면 true
 

}

input.forEach(e => console.log(isIsogram(e)));