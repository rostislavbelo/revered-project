const initPrice = () => {

  const btnCurrency = document.querySelectorAll('.cards__price-currency');
  const priceValueElements = document.querySelectorAll('.cards__price-value');
  const btnTime = document.querySelectorAll('.cards__price-time');

  let priceValues = [];

  priceValueElements.forEach((el) => {
    priceValues.push(el.textContent);
  });

  let currencyCyrrent = '$';
  let timeCyrrent = '/Months';

  const TimeCoefficient =
  {
    '/Months': 1,
    '/Day': 30,
  };

  const changeCurrency = () => {
    btnCurrency.forEach((el) => {
      el.textContent = currencyCyrrent;
    });
  };

  const changeTime = () => {
    btnTime.forEach((el) => {
      el.textContent = timeCyrrent;
    });
  };

  const changePrice = (rate) => {
    priceValueElements.forEach((value, index) => {
      value.textContent = String(Math.ceil(Number(priceValues[index] * rate / TimeCoefficient[timeCyrrent])));
    });
  };

  const changeValues = () => {
    if (currencyCyrrent === '$') {
      currencyCyrrent = '₽';
      changeCurrency();
      changePrice(90);
    } else if (currencyCyrrent === '₽') {
      currencyCyrrent = '€';
      changeCurrency();
      changePrice(0.85);
    } else {
      currencyCyrrent = '$';
      changeCurrency();
      changePrice(1);
    }
  };

  btnCurrency.forEach((btn) => {
    btn.addEventListener('click', () => {
      changeValues();
    });
  });

  const changeValuesOfTime = () => {
    if (currencyCyrrent === '$') {
      changePrice(1);
    } else if (currencyCyrrent === '₽') {
      changePrice(90);
    } else {
      changePrice(0.85);
    }
  };

  btnTime.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (timeCyrrent === '/Months') {
        timeCyrrent = '/Day';
        changeTime();
        changeValuesOfTime();
      } else {
        timeCyrrent = '/Months';
        changeTime();
        changeValuesOfTime();
      }
    });
  });
};

export {initPrice};
