const array1 = [20, 35, 1, 98, 46, 5];
array1.reduce((a, b) => (a + b)) / array1.length; 
console.log()
//결과 : 205

// const numbers = [1, 2, 3, 4];

// const sum = numbers.reduce((acc, el, i) => {
//   console.log(`${i}번째 콜백함수`)
//   console.log(`acc: ${acc}`);
//   console.log(`el: ${el}`)
//   return el + acc;
// }, 0);

//   console.log(`${i}번째 콜백함수`)
//   console.log(`acc:`, acc);
//   console.log(`el:`, el);
const votes = ['엄마', '아빠', '아빠', '아빠', '엄마',
   '엄빠', '아마', '아마', '엄빠', '엄마', '아빠'];

const result = votes.reduce((acc, el) => {  // accelerator, element
    console.log(acc, el);
    acc[el] = (acc[el] || 0) + 1;
    return acc;
},[]);

// [{'엄마': 1, '아빠' }, '아빠', '아빠', '아빠', '엄마', '엄빠', '아마', '아마', '엄빠', '엄마', '아빠'];

console.log('---------------')
console.log('result:', result);

// arr = [1, 2, 3]   arr[0] = 1
// arr = { '가': 1, '나': 2 } arr['가'] = 1

// acc = { el: 1 }