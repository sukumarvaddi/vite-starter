import styles from './counter.module.css';
import './lessy.less';
import steveImage from './steve-after-a-workshop.jpg?h=400&format=webp&as=metadata';

export const initializeCounter = (doc = globalThis.document) => {
  const countElement = doc.getElementById('count');

  countElement.classList.add(styles.count);
  const incrementButton = doc.getElementById('increment');
  const decrementButton = doc.getElementById('decrement');
  const content = document.querySelector('#content');

  let count = 0;

  const render = () => {
    countElement.textContent = count;
    if (count < 0) {
      import('./banner').then(({ displayBanner }) => {
        displayBanner();
      });
    } else {
      import('./banner').then(({ hideBanner }) => {
        hideBanner();
      });
    }
    const imageElement = document.createElement('img');
    imageElement.src = steveImage.src;
    content.appendChild(imageElement);
  };

  const increment = () => {
    count++;
    render();
  };

  const decrement = () => {
    count--;
    render();
  };

  incrementButton.addEventListener('click', increment);
  decrementButton.addEventListener('click', decrement);

  render();

  return () => {
    incrementButton.removeEventListener('click', increment);
    decrementButton.removeEventListener('click', decrement);
  };
};
