'use strict';

const Post = (props) => {
  const element = document.createElement('div');
  element.classList.add('post');
  element.innerHTML = `<div class="post__text">
  ${props.text}
</div>
<button class="like-btn">
  <div class="like-icon"></div>
  <div>Like</div>
</button>
  `;

  const likeBtn = element.querySelector('.like-btn');
  likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle('like-btn--on');
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
