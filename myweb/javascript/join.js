function joinForm() {   // 입력값 가져오기
    let userid = document.getElementById('userid').value.trim();
    let password = document.getElementById('password').value.trim();
    let passwordConfirm = document.getElementById('passwordConfirm').value.trim();
    let email = document.getElementById('email').value.trim();
    let emailDomain = document.getElementById('emailDomain').value.trim();
    let name = document.getElementById('name').value.trim();
    let birthdate = document.getElementById('birthdate').value.trim();
    let carrier = document.getElementById('carrier').value;
    let phone = document.getElementById('phone').value;
    let phone1 = document.getElementById('phone1').value.trim();
    let phone2 = document.getElementById('phone2').value.trim();

    // 오류 메세지 초기화
    clearErrors();  

    // 각 필드의 유효성 검사
    let check = true;

    if (userid.length < 6) {
        setError("useridError", "아이디는 최소 6자 이상이어야 합니다.")
    }

    if (password.length < 6) {
        setError("passwordError", "비밀번호는 최소 6자 이상이어야 합니다.");
        check = false;
    }

    if (passwordConfirm === "") {
        setError("passwordConfirmError", "비밀번호 확인을 입력하세요.");
        check = false;
    }

    if (password !== passwordConfirm) {
        setError("passwordConfirmError", "비밀번호가 일치하지 않습니다.");
        check = false;
    }

    if (email === "" || emailDomain === "") {
        setError("emailError", "이메일 주소를 입력하세요.");
        check = false;
    }

    let emailFull = email + "@" + emailDomain;
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(emailFull)) {
        setError("emailError", "유효한 이메일 주소를 입력하세요.");
        check = false;
    }

    if (name === "") {
        setError("nameError", "이름을 입력하세요.");
        check = false;
    }

    if (birthdate === "" || !/^\d{8}$/.test(birthdate)) {
        setError("birthdateError", "생년월일 8자리를 입력하세요.");
        check = false;
    }

    if (carrier === "") {
        setError("phoneError", "통신사를 선택하세요.");
        check = false;
    }

    if (phone === "" || phone1 === "" || phone2 === "") {
        setError("phoneError", "휴대전화 번호를 입력하세요.");
        check = false;
    }

    return check;
}

// 오류 메시지 표시 함수
function setError(id, errorMessage) {   // id = 오류 메세지를 표시할 id
    document.getElementById(id).textContent = errorMessage;
} 

// 오류 메시지 초기화 함수
function clearErrors() {
    let errorElements = document.querySelectorAll('.error');
    errorElements.forEach(element => {
        element.textContent = '';
    });
}