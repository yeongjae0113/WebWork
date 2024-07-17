function showPopup() {
    // dialog 요소를 찾아서 open() 메서드로 팝업을 연다
    document.getElementById("popupDialog").showModal();
}
function closePopup() {
    // dialog 요소를 찾아서 close() 메서드로 팝업을 닫는다
    document.getElementById("popupDialog").close();
}

function showPopup2() {
    document.getElementById("popupDialog2").showModal();
}
function closePopup2() {
    document.getElementById("popupDialog2").close();
}

function showPopup3() {
    document.getElementById("popupDialog3").showModal();
}
function closePopup3() {
    document.getElementById("popupDialog3").close();
}



function toggleAreaSelect() {
    const minClassNm = document.getElementById('MINCLASSNM');   // id가 MINCLASSNM 을 minclassNm 저장 
    const areaNm = document.getElementById('AREANM');           // id가 AREANM 을 areaNm 저장
    if (minClassNm.value) {          
        areaNm.disabled = false;     // minClassNm 에 value 가 있으면 false
    } else {    
        areaNm.disabled = true;      // minClassNm 에 value 가 없으면 반환 ture    
        return;                      // select 초기화    (disabled 은 true 일 때 select 비활성화)
    }
}





let selectedValue;   
let selectedValues;  
function sendValue() {
    selectedValue = document.getElementsByName('MINCLASSNM')[0].value.trim();   // 1번째 select 인 MINCLASSNM 저장 
    selectedValues = document.getElementsByName('AREANM')[0].value.trim();      // 2번째 select 인 AREANM 저장

        // select 태그에서 선택된 값을 가져온다

    if (selectedValue !== '' && selectedValues !== '') {
        window.location = '../html/reserve.html?MINCLASSNM=' + encodeURIComponent(selectedValue) + '&AREANM=' + encodeURIComponent(selectedValues);
        // 선택된 값이 있을 경우 URL에 파라미터를 추가
    } else {
        if (selectedValue === '') {
            alert('종목을 선택하세요');
        } else {
            alert('지역을 선택하세요');
        }
    }
}


var api_key = "6e5a58717364756439304e45686c71";  // 나의 키 값
var req_url = `http://openAPI.seoul.go.kr:8088/${api_key}/json/ListPublicReservationSport/`;

function getUrlParameter(name) {
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');  // RegExp 는 정규표현식에서 객체를 생성하는 생성자
    // url 에서 파라미터는 ? & 로 시작 요청인자는 ? 출력값은 &, name 은 파라미터의 변수명
    var results = regex.exec(location.search);
    // 가져온 regex 가 정말 쿼리스트링에 존재하는 변수들인지 확인하는 단계 (location = url 의 쿼리스트링 부분을 반환)
    return results === null ? '' : decodeURIComponent(results[1]);
    // result[0] 을 하면 첫번째 배열을 가져오는데 첫번째 배열에는 일치된 전체패턴인 전체문자열이 있기때문에 
}

let MINCLASSNM = '';
function loadData() {


    let MINCLASSNM = getUrlParameter('MINCLASSNM');     // url 에서 가져온 MINCLASSNM 값을 MINCLASSNM 으로
    let AREANM = getUrlParameter('AREANM');             // url 에서 가져온 AREANM 값을 AREANM 으로
    let qryStr = encodeURIComponent(MINCLASSNM);        // MINCALSSNM 을 인코딩해서 qryStr 으로
    let url = `${req_url}1/100/${qryStr}`;

    // AREANM이 존재할 경우에만 URL에 추가
    if (AREANM !== '') {
        url += `/${encodeURIComponent(AREANM)}`;
    }

    fetch(url)
        .then(response => response.json())              // url 로부터 데이터를 가져와 JSON으로 변환한 후, parseJSON 함수로 전달
        .then(jsonObj => parseJSON(jsonObj, AREANM));   // AREANM을 parseJSON 함수로 전달
}

function parseJSON(jsonObj, AREANM) {
    const table = [];
    table.push(
        `<table><colgroup>
        <col width=5%></col>
        <col width=6%></col>
        <col width=6%></col>
        <col width=30%></col>
        <col width=6%></col>
        <col width=5%></col>
        <col width=5%></col>
        <col width=auto></col>
        </colgroup>
        <tr class="th" style="background-color: mediumseagreen;">
        <th>예약</th><th>서비스상태</th><th>구장</th><th>구장명 / 접수날짜</th><th>지역명</th><th>이용시작시간</th><th>이용종료시간</th><th>이미지</th>
        </tr>`
    );
    let hasData = false; // 데이터가 있는지 여부를 확인하기 위한 변수
    if (jsonObj.ListPublicReservationSport && jsonObj.ListPublicReservationSport.row) {
        jsonObj.ListPublicReservationSport.row.forEach(function (list) {
            if (list.AREANM === AREANM) {   // AREANM이 존재할 경우에만 선택한 지역명에 해당하는 데이터를 출력
                hasData = true; // 데이터가 있는 경우 true로 설정
                table.push(`
                <tr class="custom-style">
                    <td style="text-align: center; background-color: #eefaeb;"><button class="select-button" onclick="reserveFromAPI('${list.MINCLASSNM}', '${list.SVCURL}')">선택</button></td>
                    <td class="SVCSTATNM" style="text-align: center; background-color: #eefaeb;">${list.SVCSTATNM}</td>
                    <td class="MINCLASSNM" style="text-align: center; background-color: #eefaeb;">${list.MINCLASSNM}</td>
                    <td class="SVCNM" style="text-align: center; background-color: #eefaeb;">${list.SVCNM}</td>
                    <td class="AREANM" style="text-align: center; background-color: #eefaeb;">${list.AREANM}</td>
                    <td class="V_MIN" style="text-align: center; background-color: #eefaeb;">${list.V_MIN}</td>
                    <td class="V_MAX" style="text-align: center; background-color: #eefaeb;">${list.V_MAX}</td>
                    <td class="IMGURL" style="text-align: center; background-color: #eefaeb;"><img src="${list.IMGURL}" alt="${list.MINCLASSNM}" style="width:550px; height:180px;"></td>
                </tr>
            `);
            }
        });

    }


    // 데이터가 없는 경우 메시지를 표시
    if (!hasData) {
        document.getElementById('demoJSON').innerHTML = "<p style='font-size: 25px; margin-left: 50px'>예약할 수 있는 구장이 없습니다.</p>";
    } else {
        // 데이터가 있는 경우에만 테이블을 표시
        table.push("</table>"); // table 태그 닫기 추가
        document.getElementById('demoJSON').innerHTML = table.join('\n');
    }


}


function reserveFromAPI(MINCLASSNM, SVCURL) {
    var confirmation = confirm(MINCLASSNM + " 예약을 시작합니다.");
    if (confirmation) {
        // 확인 버튼을 눌렀을 때
        window.location.href = SVCURL; // SVCURL로 이동
    }
}