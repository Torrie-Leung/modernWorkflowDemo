//this file is gonna be responsible for interacting with the DOM.
console.log('dom file');

const body = document.querySelector('body');

export const styleBody = () => {
  body.style.background = 'peachpuff';
}

export const addTitle = (txt) => {
  const title = document.createElement('h1');
  title.textContent = txt;
  body.appendChild(title);
}

