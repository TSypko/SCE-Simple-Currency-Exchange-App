{
  const currencies = [
    {
      name: `pln`,
      rate: 1,
      flagLink: `images/Flag_of_Poland_2.svg"  alt="Flag of Poland"`
    },
    {
      name: `eur`,
      rate: 4.4532,
      flagLink: `images/Flag_of_euro.svg"  alt="Flag of Euro"`
    },
    {
      name: `usd`,
      rate: 3.9395,
      flagLink: `images/US_44_Star_Flag.svg"  alt="Flag of US"`
    },
    {
      name: `gbp`,
      rate: 4.9256,
      flagLink: `images/Flag_of_the_United_Kingdom.svg"  alt="Flag of GB"`
    },
    {
      name: `chf`,
      rate: 4.1702,
      flagLink: `images/Flag_of_Switzerland.svg"  alt="Flag of Swiss"`
    },
  ];


  const currencyFlagLinkSelect = (flagLink) => {
    return `<img src="${flagLink} class="form__flag" width="80px" height="50px">`;
  };

  const renderCurrencyFlag = (fieldIn, fieldOut) => {
    const currencyFlagFieldIn = document.querySelector(
      ".js-form__currencyInFlag"
    );
    const currencyFlagFieldOut = document.querySelector(
      ".js-form__currencyOutFlag"
    );
    currencyFlagFieldIn.innerHTML = currencyFlagLinkSelect(fieldIn);
    currencyFlagFieldOut.innerHTML = currencyFlagLinkSelect(fieldOut);
  };

  const currencyFromField = document.querySelector(".js-inputCurrencyType");
  const currencyToField = document.querySelector(".js-outputCurrencyType");
  const amountField = document.querySelector(".js-form__amount");

  const writeResult = () => {

    const fromCurrencyIndex = currencies.findIndex(({ name }) => name === currencyFromField.value);
    const toCurrencyIndex = currencies.findIndex(({ name }) => name === currencyToField.value);

    const currencyFrom = currencies[fromCurrencyIndex];
    const currencyTo = currencies[toCurrencyIndex];

    renderCurrencyFlag(currencyFrom.flagLink, currencyTo.flagLink);

    const result = (+amountField.value * currencyFrom.rate * (1 / currencyTo.rate));
    const resultField = document.querySelector(".js-form__result");
    resultField.innerText = `${result.toFixed(2)} ${currencyTo.name} `;

  };

  currencyFromField.addEventListener("input", writeResult);
  currencyToField.addEventListener("input", writeResult);
  amountField.addEventListener("input", writeResult);
}