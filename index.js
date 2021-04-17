'use strict';

const Post = (props) => {
  return `<div class="post">
        <div class="post__text">
          ${props.text}
        </div>
        <button id="like-btn" class="like-btn">
          <div class="like-icon"></div>
          <div>Olajkovat</div>
        </button>
      </div>`;
};

document.querySelector('#app').innerHTML = Post({ text: 'Muj status' });
document.querySelector('#app').innerHTML += Post({ text: 'Muj status 2' });

const likeBtn = document.querySelector('#like-btn');
likeBtn.addEventListener('click', () => {
  likeBtn.classList.toggle('like-btn--on');
});
