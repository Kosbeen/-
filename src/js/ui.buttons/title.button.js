import totoro from '../../img/totoro.jpg'
const button = document.querySelector('.title-button');

const buttonOnClick =  button.addEventListener('click', (e) => {
    e.preventDefault()
    const imgTemplate = document.querySelector('.container-totoro-img');
    const imagePicture = addPicture();
    imgTemplate.insertAdjacentHTML('afterbegin', imagePicture);
})

function addPicture() {
return `
<img class="totoro-img" src="${totoro}">
`
}

export default buttonOnClick;
