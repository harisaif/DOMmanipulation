const container = document.querySelector('#container');

// const content = document.createElement('div');
// content.classList.add('content');
// content.textContent = 'This is the glorious text-content';

// container.appendChild(content);

// create, append and style p tag
const content = document.createElement('p');
content.classList.add('pText');
content.textContent = "Hey I'm red!";

container.appendChild(content);

content.style.color = 'red';

// create, append and style h3

const header3 = document.createElement('h3');
header3.classList.add('header3');
header3.textContent = "I'm a blue h3!";
container.appendChild(header3);

header3.style.color = 'blue';

//create, append and style a div

const divTag = document.createElement('div');
divTag.classList.add('border');
divTag.style.border = '2px solid black';

container.appendChild(divTag);

//create and append h1 to div
const divH1 = document.createElement('h1');
divH1.classList.add('divH1');
divH1.textContent = "I'm in a div.";
divTag.appendChild(divH1);

//create and append p to div
const divp = document.createElement('p');
divp.classList.add('divp');
divp.textContent = "ME TOO!";
divTag.appendChild(divp);


const buttons = document.querySelectorAll('button');

buttons.forEach( (button) =>{
    button.addEventListener('click', () =>{
        alert(button.id);
    });
});