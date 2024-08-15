import bannerStyles from './banner.module.css';

const bannerContainer = document.getElementById('bannerContainer');
export const displayBanner = () => {
  const textElement = document.createTextNode('Too Low!');
  bannerContainer.classList.add(bannerStyles.danger);
  bannerContainer.appendChild(textElement);
  bannerContainer.style.display = 'block';
};

export const hideBanner = () => {
  bannerContainer.removeChild(bannerContainer.firstChild);
  bannerContainer.classList.remove(bannerStyles.danger);
};
