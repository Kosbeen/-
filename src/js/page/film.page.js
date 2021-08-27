

import films from "../services/film.service";

const buttonAdd = document.querySelector('.film-cards-button-add')

const buttonAddAction = buttonAdd.addEventListener('click', e => {
    e.preventDefault
    showFilms()
})

function showFilms() {
    const filmsShow = films.getFilms().then(res => createTEmplate(res));
}

// function filmReduce(res) {
// const reduceFilms = res.reduce((acc,el,index) => {
//     acc[index] = el
//     return acc
// },{});

// const {0: {title}} = reduceFilms

// console.log(title  )
// const template = document.querySelector('.film-cards-container');
// const templateElemnt = cardTemplate(reduceFilms)
// }

// function cardTemplate(reduceFilms) {

// }


function createTEmplate(res) {
const template = document.querySelector('.film-cards-container');
const cardsAdd = res.forEach(el => {
    const card = addCards(el.title)
});
template.insertAdjacentHTML('afterbegin', cardsAdd)
}

function addCards(el) {
    return `
    <div> ${el.title}</div>
    `
}

export default buttonAddAction








