import styles from './counter.module.css';
import './lessy.less';
console.log(stylesfoo);
export const initializeCounter = (doc = globalThis.document) => {
  const countElement = doc.getElementById('count');

  countElement.classList.add(styles.count);
  const incrementButton = doc.getElementById('increment');
  const decrementButton = doc.getElementById('decrement');

  let count = 0;

  const render = () => {
    countElement.textContent = count;
    if (count < 0) {
      import('./banner').then(({ displayBanner }) => {
        displayBanner();
      });
    }
    // else {
    //   import('./banner').then(({hideBanner }) => {
    //    hideBanner()
    //  });
    // }
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
