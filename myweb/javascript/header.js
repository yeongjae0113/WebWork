// 헤더를 불러와 삽입하는 함수

function loadFooter() {
    fetch('header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('헤더 못불러온다');
            }
            return response.text();
        })
        .then(html => {
            document.getElementById("header").innerHTML = html;
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
        });
}
loadFooter(); // 함수 실행