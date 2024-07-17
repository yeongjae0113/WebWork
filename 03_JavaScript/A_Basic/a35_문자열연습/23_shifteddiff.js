/*******************************
 * 문자열 시프팅 차이값
 */

const input = [
// [first, second] 몇칸 이동했는지? / 아무 관계가 없으면 -1
    ["hello", "hello"],    // 0
    ["hello", "ohell"],    // 1     ohellohell
    ["hello", "lohel"],    // 2     lohellohel
    ["hello", "llohe"],    // 3     llohellohe
    ["hello", "elloh"],    // 4     ellohelloh
    ["hello", "elohl"],    // -1    elohlelohl

]

function shiftedDiff(first, second){
    
    const a = second + second;      // 변수 a에 second 두개를 합친다
    const b = a.indexOf(first);     // 변수 b에 합친 a에서 hello가 몇번째 index에 있는지 확인
    return b;   // 위에서 확인한 값인 b를 리턴
 
}

input.forEach(e => console.log(shiftedDiff(e[0], e[1])));