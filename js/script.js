// é para jogar os novos elementos
let fatherElement = document.getElementById('fatherElement');
var title = document.getElementById('iTitle');
var image = document.getElementById('iCover');
var synopsis = document.getElementById('iSynopsis');
var author = document.getElementById('iAuthor');

// função de callback para atualização dinâmica
function generator(calFunction){
    showCards(calFunction);
    clean()
}

function showCards() {
    // são os elementos que recebemos do formulario
    
    let newCard = document.createElement('div');
    newCard.classList.add('item');
    newCard.innerHTML = `
        <h1>${title.value}</h1>
        <img src="${image.value}">
        <h3>${author.value}</h3>
        <p>${synopsis.value}</p>
    `
    fatherElement.appendChild(newCard);
}; 

let sendButton = document.getElementById('send');
let nameValidation = document.getElementById('nameValidation');
let synopsisValidation = document.getElementById('synopsisValidation');
// eventos do botão de envio
sendButton.addEventListener('click', (answer) => {
    answer.preventDefault();
    if (title.value && synopsis.value) {
        generator();
        nameValidation.innerText = null;
        synopsisValidation.innerText = null;
    } else if (title.value) {
        synopsisValidation.innerText = "Preencha a sinopse do livro";
        nameValidation.innerText = null;
    } else if (synopsis.value) {
        nameValidation.innerText = "Preencha o nome do livro";
        synopsisValidation.innerText = null
    } else {
        nameValidation.innerText = "Preencha o nome do livro"; 
        synopsisValidation.innerText = "Preencha a sinopse do livro";
    }
}); 

function clean() {
    let information = document.querySelectorAll('.info');
    for (let i of information) {
        i.value = null;
    }
    nameValidation.innerText = null;
    synopsisValidation.innerText = null;
}

