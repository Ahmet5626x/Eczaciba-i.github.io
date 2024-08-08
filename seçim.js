function changePage() {
    var select = document.getElementById("menu");
    var selectedValue = select.options[select.selectedIndex].value;
    if (selectedValue) {
        window.location.href = selectedValue;
    }
}