
            let api_key = "Tkk%2Ba1byt5md4%2B53olL1XuHY0SB6%2BxJjgjockyMjRDzPAWOcEvDRl0yorsIawcOFEcTyjGzr6faMqZ0iQDimQQ%3D%3D";

            let currentPage = 1;
            let totalPages = 0; 

            function fetchMedicineData(pageNo) {  //페이지 번호를 받아와서 해당 페이지의 데이터 가져오기
                if (!pageNo) {
                    pageNo = currentPage;
                } else {
                    currentPage = pageNo;
                }

                let ITEM_NAME = encodeURIComponent(document.querySelector('input[name = "item_name"]').value.trim()); //의약품 이름
                let ENTP_NAME = document.querySelector('input[name = "ENTP_NAME"]').value.trim(); //기업 이름
                let SPCLTY_PBLC = document.querySelector('select[name="SPCLTY_PBLC"]').value.trim(); //전문/일반

                let url = `https://apis.data.go.kr/1471000/DrugPrdtPrmsnInfoService05/getDrugPrdtPrmsnInq05?serviceKey=${api_key}&pageNo=${pageNo}&numOfRows=20&type=json&entp_name=${ENTP_NAME}&item_name=${ITEM_NAME}&spclty_pblc=${SPCLTY_PBLC}`;

                fetch(url) //API 가져와서 JSON으로 변환
                    .then(response => response.json())
                    .then(data =>
                        displayMedicineData(data)); //displayMedicineData() 호출하여 표시
            };

            //가져온 데이터 테이블로 만들어서 화면에 표시
            function displayMedicineData(data) {
                const table = [];
                table.push("<tr><th>의약품 이름</th><th>기업이름</th><th>일반/전문</th><th>허가/신고/심사</th></tr>");

                for (let medicine of data.body.items) {
                    table.push(`
            <tr>
                <td>${medicine.ITEM_NAME}</td>
                <td>${medicine.ENTP_NAME}</td>
                <td>${medicine.SPCLTY_PBLC}</td>
                <td>${medicine.PERMIT_KIND_CODE}</td>
            </tr>
        `);
                }

                document.getElementById('medicineTable').innerHTML = table.join('\n');
                totalPages = Math.ceil(data.body.totalCount / 20); //총 의약품수를 한페이지에 보여지는 의약품 수로 나누어서 전체 페이지수 계산
                createPagination(); //페이지수 기반으로 페이지네이션 생성
                /* document.getElementById('currentPage').innerText = `페이지: ${currentPage}`; */
            }

            //페이지네이션 생성
            function createPagination() {
                const pageNav = document.getElementById('pageNav');
                pageNav.style.display = 'block'; 
                const pagination = document.getElementById('pagination');
                pagination.innerHTML = ''; //요소 비우기

                //이전버튼
                const prevButton = document.createElement('li'); // 새로운 <li>요소 생성
                prevButton.classList.add('page-item');  // prevButton에 page-item 클래스 추가 (부트스트랩 스타일 적용)
                if (currentPage === 1) { 
                    prevButton.classList.add('disabled');//현재 페이지가 1일때 이전 버튼 비활성화
                }
                const prevButtonLink = document.createElement('button'); //새로운 button요소 생성
                prevButtonLink.classList.add('page-link'); // prevButton에 page-link클래스 추가 (부트스트랩 스타일 적용)
                prevButtonLink.textContent = '이전';
                prevButtonLink.onclick = function () { 
                    if (currentPage > 1) { //현재페이지가 1보다 큰 경우 이전페이지의 데이터를 가져옴
                        fetchMedicineData(currentPage - 1);
                    }
                };
                prevButton.appendChild(prevButtonLink); //prevButton요소의 자식으로 prevButtonLink추가
                pagination.appendChild(prevButton);

                // 페이지넘버 버튼
                // const startPage = Math.max(1, currentPage); //시작페이지 
                // const endPage = Math.min(totalPages, currentPage + 9); //끝 페이지
                const startPage = currentPage - (currentPage - 1) % 10;  //시작페이지 1 ~ 10 1 11 ~ 20 11
                const endPage = startPage + 9; //끝 페이지 1 ~ 10 10 11 ~ 20 20

                for (let i = startPage; i <= endPage; i++) { //시작부터 끝 페이지까지 반복하여 이를 통해 페이지번호 생성
                    const pageItem = document.createElement('li');
                    pageItem.classList.add('page-item');
                    const pageLink = document.createElement('button');
                    pageLink.classList.add('page-link');
                    pageLink.textContent = i;
                    pageLink.onclick = function () {
                        fetchMedicineData(i);
                    };
                    if (i === currentPage) {
                        pageItem.classList.add('active');
                    }
                    pageItem.appendChild(pageLink);
                    pagination.appendChild(pageItem);
                }

                // 다음버튼
                const nextButton = document.createElement('li');
                nextButton.classList.add('page-item');
                if (currentPage === totalPages) {
                    nextButton.classList.add('disabled');
                }
                const nextButtonLink = document.createElement('button');
                nextButtonLink.classList.add('page-link');
                nextButtonLink.textContent = '다음';
                nextButtonLink.onclick = function () {
                    if (currentPage < totalPages) {
                        fetchMedicineData(currentPage + 1);
                    }
                };
                nextButton.appendChild(nextButtonLink);
                pagination.appendChild(nextButton);
            }

            //이전버튼을 눌렀을때 
            function prevPage() {
                if (currentPage > 1) {  //현재 페이지가 1보다 큰 경우 이전페이지를 가져옴
                    fetchMedicineData(currentPage - 1);
                }
            }

            //다음버튼을 눌렀을때
            function nextPage() {
                if (currentPage < totalPages) { //현재 페이지가 전체페이지수 미만인 경우 다음페이지를 가져옴
                    fetchMedicineData(currentPage + 1);
                }
            }

            //토글 이벤트리스너
            document.addEventListener('DOMContentLoaded', function () {
                const navbarToggle = document.getElementById('navbar-toggle');
                const navbarLinks = document.getElementById('navbar-links');

                navbarToggle.addEventListener('click', function () {
                    navbarLinks.classList.toggle('active');
                });
            });
     