'use strict';

const appElement = document.querySelector('#app');

const h1Element = document.createElement('h1');
h1Element.textContent = 'Novy nadpis';
h1Element.className = 'trida';
h1Element.addEventListener('click', () => {
  alert('kliknuto');
});

appElement.appendChild(h1Element);
