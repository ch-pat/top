const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// additions
const body = document.querySelector("body");    // select the body and put in a variable
const redp = document.createElement("p");       // create new node 'p' and put in a variable
redp.textContent = "Hey, I'm Red!";       
redp.style['color'] = 'red';                    // edit node 'p' (only in memory, still not on page)
body.appendChild(redp);                         // append under body, now p appears on page

const blueh3 = document.createElement("h3");
blueh3.textContent = "Hey, I'm blue h3!";
blueh3.style['color'] = 'blue';
body.appendChild(blueh3);

const bigdiv = document.createElement("div");
body.appendChild(bigdiv);                       // note that you can style the element _after_ adding it too
bigdiv.style['border'] = 'black 3px solid';
bigdiv.style['background-color'] = "pink";
const divh1 = document.createElement("h1");
const divp = document.createElement("p");
divh1.textContent = "I'm in a div!";
divp.textContent = "Me too!";
bigdiv.appendChild(divh1);
bigdiv.appendChild(divp);

// Events

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello");

const btn2 = document.querySelector("#btn2");
btn2.addEventListener('click', () => alert("Hello"));

const cleanUpButton = document.createElement("button");
body.appendChild(cleanUpButton);
cleanUpButton.textContent = "I clean up everything above me and become blue."

function cleanUp (ev) {
    body.removeChild(bigdiv);
    body.removeChild(redp);
    body.removeChild(blueh3);
    // Seems like addEventListener passes an 'event' ('ev' here) variable to the function it calls
    ev.target.style['background'] = 'blue';
    ev.target.style['color'] = 'white';
}

cleanUpButton.addEventListener('click', cleanUp);

// Add more stuff and test querySelectorAll

const box = document.createElement('div');
const b1 = document.createElement('button');
const b2 = document.createElement('button');
const b3 = document.createElement('button');

b1.textContent = "I am b1";
b2.textContent = "I am b2";
b3.textContent = "I am b3";
box.style['border'] = "solid 3px red";
box.classList.add("box");

body.appendChild(box);
box.appendChild(b1);
box.appendChild(b2);
box.appendChild(b3);

buttons = document.querySelectorAll(".box > button");
buttons.forEach( (button) => {
    button.addEventListener('click', () => alert(button.textContent))
});