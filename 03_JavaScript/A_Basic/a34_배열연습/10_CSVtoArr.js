data = `height,weight,label
140,45,normal
145,72,fat
150,61,fat
137,56,fat
192,48,thin
175,77,fat`;
console.log(data);
/* 
    위 CSV 데이터를 아래와 같은 2차원배열로 만들기
    원소의 데이터 타입은 
      [number, number, string] 으로!
        
    [
        [140, 45, 'normal'],
        [145, 72, 'fat'], 
        [150, 61, 'fat'],
        [137, 56, 'fat'],
        [192, 48, 'thin'],
        [175, 77, 'fat']
    ] 
 */
    let a = data.split('\n').slice(1);
    
      const b = a.reduce((prev, cur) => {
      c = cur.split(',');
      let height = parseInt(c[0]);
      let weight = parseInt(c[1]);
      let label = c[2];
      prev.push([height, weight, label]);
      return prev;
    },[])
    console.log(b);


    // let a = data.split('\n');
    // let result = [];

    // for (let i = 0; i < a.length; i++) {
    //  let b = a[i].split(',');
    //  // 위에서 나눈 원소들을 , 기준으로 세등분
      
    //  let height = parseInt(b[0]);
    //  // height 를 number 형으로
    //  let weight = parseInt(b[1]);
    //  // weight 를 number 형으로
    //  let label = b[2]
    //  // label 은 그대로

    //   result.push([height, weight, label]);
    //   // height, weight, label을 배열로 묶어서 push 해줘야해서 [ ] 로 묶는다
    // }
    // result.shift();
    // // 맨 위 height, weight 는 number 형이 아니기 때문에 삭제
    // console.log(result);
  
//  reduce 활용!  (map, filter 조합도 가능)
//  정 힘들면 클래식하게 for, if 로도 해보시구요.


console.log("\n[프로그램 종료]", '\n'.repeat(20));






















