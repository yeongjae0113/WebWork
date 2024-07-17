$(document).ready(function() {
    $("form").submit(function(event) {
        let isValid = true;
        $(".error").remove();

        const userid = $("input[name='userid']").val().trim();
        const password = $("input[name='password']").val().trim();
        const regex = /^[a-zA-Z0-9]+$/;

        if (userid === "" || !regex.test(userid)) {
            $("input[name='userid']").after(alert('아이디를 다시 입력해주세요'));
            isValid = false;
        } else if (password === "" || !regex.test(password)) {
            $("input[name='password']").after(alert('비밀번호를 다시 입력해주세요'));
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault(); // 폼 제출 중지
        }
    });
});