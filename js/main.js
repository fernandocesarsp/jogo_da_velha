let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let button = document.querySelectorAll("buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("message p");
let secondPlayer;

// Contador de Jogadas 
let player1 = 0;
let player2 = 0;

// Adicionando o evento de click aos boxes
for(let i = 0; i < boxes.length; i++) {
    // Quando alguém clica na caixa 
    boxes[i].addEventListener("click", function() {

    let el = checkEl(player1, player2);


    // Verifica se já existe X ou O
    if(this.childNodes.length == 0) {
        let cloneEl = el.cloneNode(true);

        this.appendChild(cloneEl);

        // computador jogada
        if(player1 == player2) {
            player1++;
        } else {
            player2++;
        }

    }

    });

}

function checkEl(player1, player2) {

    if(player1 == player2) {
        // X 
        el = x;
     } else {
         // O
         el = o;
     }

     return el;

}