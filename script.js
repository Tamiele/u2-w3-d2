/* Crea un semplice form di registrazione con un input field in cui l’utente possa inserire il proprio nome. 
A fianco di questo input field crea due pulsanti: uno salverà il valore in localStorage, uno rimuoverà il valore precedentemente salvato (se presente). 
Mostra sopra l’input field il valore precedentemente salvato, se presente. */
const form = document.querySelector("form");
const inputName = document.getElementById("inputName");
const saveName = document.getElementById("saveName");
const removeName = document.getElementById("removeName");
let contenitoreUtente = document.querySelector(".contenitoreUtente");

const saveInput = function (e) {
  e.preventDefault();

  const textInput = inputName.value;
  localStorage.setItem("nomeInput", textInput);
  const elementoSalvato = localStorage.getItem("nomeInput");

  if (elementoSalvato) {
    contenitoreUtente.innerHTML = "";
    let paragrafo = document.createElement("p");
    paragrafo.innerText = ` utente: ${elementoSalvato}`;
    contenitoreUtente.appendChild(paragrafo);
  } else {
    alert("inserisci testo");
  }
  form.reset();
};

const reset = function () {
  localStorage.removeItem("nomeInput");
};

const ultimoElemento = function () {
  const ultimoElemento = localStorage.getItem("nomeInput");
  let paragrafo = document.createElement("p");
  paragrafo.innerText = ` Ultimo utente: ${ultimoElemento}`;
  contenitoreUtente.appendChild(paragrafo);
};

removeName.addEventListener("click", reset);

form.addEventListener("submit", saveInput);

ultimoElemento();
//secondo esercizio
/*● Crea un contatore che tenga conto del tempo che passa, utilizzando sessionStorage. 
Aggiornando la pagina il valore prosegue, chiudendo la pagina - ovviamente - ricomincia. Il valore del contatore deve aggiornarsi ad ogni secondo. */

let timeLeft = 60; // Imposta il tempo iniziale (60 secondi)

const tempoSalvato = sessionStorage.getItem("tempo");
if (tempoSalvato) {
  timeLeft = parseInt(tempoSalvato); // Se c'è un valore, usa quello al posto di 60
}

const countdown = setInterval(function () {
  if (timeLeft <= 0) {
    clearInterval(countdown); // Ferma il timer quando raggiunge 0
    document.getElementById("timer").innerText = "Tempo scaduto!";
  } else {
    document.getElementById("timer").innerText = timeLeft; // Mostra il tempo rimanente
  }
  sessionStorage.setItem("tempo", timeLeft);
  timeLeft -= 1; // Decrementa il tempo
}, 1000); // Intervallo di 1 secondo (1000 ms)

const recuperoUltimoElementoSalvato = function () {
  const tempoRimanente = sessionStorage.getItem("tempo");

  let timer = document.getElementById("timer");

  if (tempoRimanente) {
    timer.innerText = `${tempoRimanente}`;
  } else {
    timer.innerText = "60"; // Il valore iniziale se non c'è niente salvato
  }
};

recuperoUltimoElementoSalvato();
