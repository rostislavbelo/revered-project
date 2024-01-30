const initCards = () => {
  const cards = document.querySelectorAll('.cards__item');

  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('is-active');
    }, index * 500);
  });
};

export {initCards};
