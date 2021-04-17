'use strict';

const Post = (props) => {
  const element = document.createElement('div');
  element.className = 'post';
  element.innerHTML = `<div class="post__text">
  ${props.text}
</div>
<button id="like-btn" class="like-btn">
  <div class="like-icon"></div>
  <div>Olajkovat</div>
</button>
  `;
  return element;
};

const appElement = document.querySelector('#app');

appElement.appendChild(Post({ text: 'Muj status' }));
appElement.appendChild(Post({ text: 'Muj status 2' }));

// const likeBtn = document.querySelector('#like-btn');
// likeBtn.addEventListener('click', () => {
//   likeBtn.classList.toggle('like-btn--on');
// });
