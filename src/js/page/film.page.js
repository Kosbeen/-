
import films from "../services/film.service";

const buttonAdd = document.querySelector('.film-cards-button-add');
const buttonRemove = document.querySelector('.film-cards-button-remove');

const buttonAddAction = buttonAdd.addEventListener('click', e => {
    e.preventDefault;
    showFilms()
})


function showFilms() {
    const filmsShow = films.getFilms().then(res => createTEmplate(res));
}

function createTEmplate(res) {
    const template = document.querySelector('.film-cards-container');
   for (let i = 0; i < res.length; i++) {
       const card = addCards(res[i]);
       template.insertAdjacentHTML('afterbegin', card)
   }
}

const filmContainer = document.querySelector('.film-cards-container');


export const buttonAddRemove = buttonRemove.addEventListener('click', e => {
    const filmContainerChildren = filmContainer.children;
    const filmCard = document.querySelectorAll('.card-container-film')
   for (let i = 0; i < filmCard.length; i++) {
       filmCard[i].remove()
   }
})



function addCards(el) {
    return `
    <div class="card-container-film id="${el.id}">
    <h1 class="card-title-film">${el.title}</h1>
    <ul class="card-list-film">
    <li class="film-card-list-item-1 card-list-item-all">Producer: ${el.producer}</li>
    <li class="film-card-list-item-2 card-list-item-all">Original title: ${el.original_title}</li>
    <li class="film-card-list-item-3 card-list-item-all">Romanced title: ${el.original_title_romanised}</li>
    <li class="film-card-list-item-4 card-list-item-all">Release date: ${el.release_date}</li>
    <li class="film-card-list-item-5 card-list-item-all">Running time: ${el.running_time}</li>
    <li class="film-card-list-item-6 card-list-item-all">Score: ${el.rt_score}</li>
    <p class="film-card-text">Description: ${el.description}</p>
    <div class="film-comment-button-container">
            <button class="film-comment-button">
              <a href="#" class="film-comment-button-link">Leave comment</a>
            </button>
          </div>
    </ul>
    </div>
    `
}



export default buttonAddAction








