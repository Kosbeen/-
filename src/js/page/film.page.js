
import films from "../services/film.service";

const buttonAdd = document.querySelector('.film-cards-button-add')

const buttonAddAction = buttonAdd.addEventListener('click', e => {
    e.preventDefault
    showFilms()
})

function showFilms() {
    const filmsShow = films.getFilms().then(res => createTEmplate(res));
}

function createTEmplate(res) {
    console.log(res)
const template = document.querySelector('.film-cards-container');
const cardsAdd = res.forEach((el) => {
    const card = addCards(el)
    template.insertAdjacentHTML('afterbegin', card)
});

}

function addCards(el) {
    return `
    <div class="card-container-film id="${el.id}">
    <h1 class="card-title-film">${el.title}</h1>
    <ul class="card-list-film">
    <li class="film-card-list-item-1 card-list-item-all">Producer: ${el.producer}</li>
    <li class="film-card-list-item-2 card-list-item-all">Original title: ${el.original_title}</li>
    <li class="film-card-list-item-3 card-list-item-all">Romanced title: ${el.original_title_romancde}</li>
    <li class="film-card-list-item-4 card-list-item-all">Release date: ${el.release_date}</li>
    <li class="film-card-list-item-5 card-list-item-all">Running time: ${el.running_time}</li>
    <li class="film-card-list-item-6 card-list-item-all">Score: ${el.rt_score}</li>
    <p class="film-card-text">Description: ${el.description}</p>
    </ul>
    </div>
    `
}

export default buttonAddAction








