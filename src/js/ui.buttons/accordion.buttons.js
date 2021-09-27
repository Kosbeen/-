import films from "../services/film.service";
import axios from "axios";

export const button = document.querySelectorAll('.accordion-button');
export const panel = document.querySelector('.panel');


export const accordionActivation =  button.forEach(e => { 
    e.addEventListener('click', el => {
        e.classList.toggle('.accordion-active');
        const sib = e.nextElementSibling
        if (sib.style.display === "block") {
            sib.style.display = "none"
        } else {
            sib.style.display = "block"
        }
    })
})

export const accordionElements = films.getFilms().then(res => distrElements(res));

function distrElements(data) {
    const panel = document.querySelectorAll('.panel-list');
    panel.forEach(e => {
       for (let i = 0; i < data.length; i++) {
          if (e.id === data[i].id) {
            const {title,original_title,producer,original_title_romanised,rt_score,release_date,running_time,description} = data[i]
            const template = insertTemplate({title,original_title,producer,original_title_romanised,rt_score,release_date,running_time,description})
            e.insertAdjacentHTML('afterend',template);
          }
       }
    })
  
}
function insertTemplate({title,original_title,producer,original_title_romanised,rt_score,release_date,running_time,description}) {
    return `
    <li class="panel-list-item-title"></li>
                <li class="panel-list-item-original-title">${original_title}</li>
                <li class="panel-list-item-original-title-romanised">${original_title_romanised}</li>
                <li class="panel-list-item-producer">${producer}</li>
                <li class="panel-list-item-release-date">${release_date}</li>
                <li class="panel-list-item-running-time">${running_time}</li>
                <li class="panel-list-item-rt-score">${rt_score}</li>
                <li class="panel-list-item-description">
                  <p class="panel-descrition">${description}</p>
                </li>
    `  
}



