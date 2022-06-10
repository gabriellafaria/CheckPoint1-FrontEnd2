// é para jogar os novos elementos
let fatherElement = document.getElementById('fatherElement');

// função de callback para atualização dinâmica
function generate(calFunction){
    showCards(calFunction);
}

function showCards() {
    // são os elementos que recebemos do formulario
    var title = document.getElementById('iTitle').value;
    var image = document.getElementById('iCover').value;
    var description = document.getElementById('iSynopsis').value;
    
    let newCard = document.createElement('div');
    newCard.classList.add('item');
    newCard.innerHTML = `
        <h1>${title}</h1>
        <img src="${image}">
        <p>${description}</p>
    `
    fatherElement.appendChild(newCard);
}; 

// botão de envio
let sendButton = document.getElementById('send');
sendButton.addEventListener('click', (answer) => {
    answer.preventDefault();
    generate();
}); 