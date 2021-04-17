'use strict';

const Post = (props) => {
  const element = document.createElement('div');
  element.classList.add('post');
  element.innerHTML = `<div class="post__text">
  ${props.text}
</div>
<button class="like-btn">
  <div class="like-icon"></div>
  <div>Olajkovat</div>
</button>
  `;

  const likeBtn = element.querySelector('.like-btn');
  likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle('like-btn--on');
  });

  return element;
};

const appElement = document.querySelector('#app');

const post1Props = { text: 'Muj status 1' };
const post1 = Post(post1Props);
appElement.appendChild(post1);

appElement.appendChild(Post({ text: 'Muj status 2' }));
appElement.appendChild(Post({ text: 'Muj status 2' }));
appElement.appendChild(Post({ text: 'Muj status 2' }));
appElement.appendChild(Post({ text: 'Muj status 2' }));
