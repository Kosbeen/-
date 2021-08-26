import buttonOnClick from "./title.button";

const imgButton = document.querySelector('.title-button-remove')

const imgButtonOnClick = imgButton.addEventListener('click', (e) => {
e.preventDefault();
const imgAtPage = document.querySelector('.totoro-img')
if (imgAtPage) {
    imgAtPage.remove()
}
})

function removeImg() {
    
}

export default imgButtonOnClick;