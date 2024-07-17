// 햄버거 아이콘 클릭 시 메뉴 보이거나 숨기기

function toggleMenu() {
    var menu = document.getElementById("top_menu1");
    console.log(menu)
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}
