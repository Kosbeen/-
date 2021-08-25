import locations from "../services/services";

;
const resultData = locations.getSeries().then(res => titleTemplate(res.data));

const {title,original_title, director,description} = resultData;
export function titleTemplate({title,original_title,original_title_romanised,director,description}) {
 const template = document.querySelector('.container-totoro');
 const card = addCard({title,original_title,original_title_romanised,director,description});
 template.insertAdjacentHTML('afterbegin', card)
}

function addCard({title,original_title,original_title_romanised,director,description}) {
    return `
    <div class="card">
         <h1 class="card-title">${title}</h1>
         <ul class="card-list">
           <li class="card-list-item-original-title card-item">${original_title}</li>
           <li class="card-list-item-director card-item">Producer: ${director}</li>
           <li class="card-list-item-original-title-romanced card-item">${original_title_romanised}</li>
           <li class="card-list-item-description card-item">${description}</li>
         </ul>
       </div>
    `
}



