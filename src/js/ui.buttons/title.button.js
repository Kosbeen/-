
const button = document.querySelector('.title-button');

const buttonOnClick =  button.addEventListener('click', (e) => {
    e.preventDefault()
    const imgTemplate = document.querySelector('.img-totoro-container');
    const imagePicture = addPicture();
    imgTemplate.insertAdjacentHTML('afterbegin', imagePicture);
})

function addPicture() {
return `
<img src="">
<div>Ghbdtn</div>
`
}

export default buttonOnClick;
