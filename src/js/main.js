const menuBtn = document.querySelector('.toggle_btn');
const categoryBtn = document.querySelector('.category_container');
import { cards } from "./cards.js";
menuBtn.addEventListener('click', () => {
    categoryBtn.classList.toggle('active');
});

const overlay = document.querySelector('.overlay');

const allCards = [];
const cardsContainer = document.querySelector('.card_container');


// cards.forEach(card => {
//     let div = `<div class="card" data-html='${card.html}' data-css='${card.css}' data-type='${card.type}'>
//     ${card.html}
//     <div class="getBtn">GET Code</div>
//     <style>
//     ${card.css}
//     </style>
//     </div>`;
//     cardsContainer.insertAdjacentHTML('beforeend', div);
//     allCards.push(cardsContainer.lastElementChild);

// });

cards.forEach(card => {
    let cardContainer = document.createElement('div');
    cardContainer.setAttribute('class', 'card');
    cardContainer.setAttribute('data-type', card.type);
    let newDiv = document.createElement('div');
    newDiv.classList.add('shadow');

    let shadowRoot = newDiv.attachShadow({ mode: 'open' });

    let cardHtml = document.createElement('div');
    cardHtml.innerHTML = card.html;
    shadowRoot.appendChild(cardHtml);

    let style = document.createElement('style');
    style.textContent = card.css;
    shadowRoot.appendChild(style);


    let getBtn = document.createElement('div');
    getBtn.setAttribute('class', 'getBtn');
    getBtn.textContent = 'GET Code';
    cardContainer.appendChild(getBtn);


    cardContainer.appendChild(newDiv);
    cardsContainer.appendChild(cardContainer);
    allCards.push(cardContainer);
});


allCards.forEach((card) => {
    card.addEventListener('click', (event) => {
        if (event.target.classList.contains('getBtn')) {
            const shadow = card.querySelector('.shadow');
            const shadowRoot = shadow.shadowRoot;

            const htmlCode = shadowRoot.querySelector('div').innerHTML;
            const cssCode = shadowRoot.querySelector('style').textContent;

            overlay.classList.add('active');
            copyCode(htmlCode, cssCode);
        }
    });
});

const htmlBtn = document.querySelector('.htmlbtn');
const cssBtn = document.querySelector('.cssbtn');
const copyCode = (html, css) => {
    htmlBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(html);
        htmlBtn.innerHTML = '<span class="material-icons-outlined">done </span>&nbsp;HTML Copied';
        setTimeout(() => {
            htmlBtn.innerHTML = `<img src="src/images/html.png" alt="HTML" />Copy HTML`;
        }, 1000);
    });
    cssBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(css);
        cssBtn.innerHTML = '<span class="material-icons-outlined">done </span>&nbsp;CSS Copied! ';
        setTimeout(() => {
            cssBtn.innerHTML = `<img src="src/images/css.png" alt="HTML" />Copy CSS`;
        }, 1000);
    });

};

overlay.addEventListener('click', removeOverlay);

function removeOverlay(event) {
    if (event.target.classList.contains("overlay")) {
        overlay.classList.remove('active');
    }
}



const liBtns = document.querySelectorAll('.menu_list li');
const sorryMsg = document.querySelector('.sorryMsg');

liBtns.forEach(liBtn => {
    allCards.forEach(card => {
        let cardType = card.getAttribute("data-type");
        sorryMsg.classList.remove('active');
        liBtn.addEventListener("click", () => {
            liBtns.forEach(btn => btn.classList.remove('active'));
            liBtn.classList.add('active');
            let filterText = liBtn.getAttribute("data-filter");

            const totalChildren = document.querySelectorAll(`[data-type="${filterText}"]`).length;

            if (totalChildren > 0 || filterText === "all") {
                sorryMsg.classList.remove('active');
            }
            else {
                sorryMsg.classList.add('active');
            }

            if (filterText === cardType || filterText === "all") {
                card.style.display = 'grid';
            } else {
                card.style.display = 'none';
            }
        });
    });

});
