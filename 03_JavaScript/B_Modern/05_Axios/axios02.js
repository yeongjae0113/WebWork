const axios = require('axios');

async function action(name) {
    url = 'https://httpbin.org/get';
    const{ data } = await axios.get(url, {params: { name } });
    console.log(data.args.name);  // await 때문에 다 가져온 이후로 data 출력
}
// action 자체도 async 가 걸려있는 비동기라서 출력 순서가 랜덤

(async function(){
    action('이유나');
    action('이다혜');
    action('김다현');
    action('홍가연');
})();