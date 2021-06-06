const backButton = document.querySelector(".btn-back");

backButton.addEventListener('click', () => {
    history.back();
})