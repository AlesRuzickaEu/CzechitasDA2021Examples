'use strict';

const Post = (props) => {
  const element = document.createElement('div');
  element.classList.add('post');

  const textElement = document.createElement('div');
  textElement.className = 'post__text';
  textElement.innerText = props.text;
  element.appendChild(textElement);

  const buttonElement = document.createElement('button');
  buttonElement.className = 'like-btn';
  buttonElement.innerHTML = `<div class="like-icon"></div>
  <div>Like</div>`;
  element.appendChild(buttonElement);

  buttonElement.addEventListener('click', () => {
    buttonElement.classList.toggle('like-btn--on');
  });

  return element;
};

const appElement = document.querySelector('#app');

fetch('https://jsonplaceholder.typicode.com/comments')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((comment) => {
      appElement.appendChild(Post({ text: comment.body }));
    });
  });
