// é para jogar os novos elementos
let fatherElement = document.getElementById('fatherElement');
var title = document.getElementById('iTitle');
var image = document.getElementById('iCover');
var description = document.getElementById('iSynopsis');

// função de callback para atualização dinâmica
function generator(calFunction){
    showCards(calFunction);
}

function showCards() {
    // são os elementos que recebemos do formulario
    let titleS = title.value;
    let imageS = image.value;
    let descriptionS = description.value;
    
    let newCard = document.createElement('div');
    newCard.classList.add('item');
    newCard.innerHTML = `
        <h1>${titleS}</h1>
        <img src="${imageS}">
        <p>${descriptionS}</p>
    `
    fatherElement.appendChild(newCard);
}; 

// botão de envio
let sendButton = document.getElementById('send');
sendButton.addEventListener('click', (answer) => {
    if(title.value && description.value) {
    answer.preventDefault();
    generator();
    } else {
        answer.preventDefault();
        alert('Insira o título e a sinopse do livro.')
    }
}); 