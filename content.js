let queryResult = document.querySelectorAll("[aria-label='Đăng nhãn dán']");
console.log(queryResult);
queryResult.forEach(item => {
    item.parentElement.addEventListener('click', alert("Hey! I just clicked the button."));
})
