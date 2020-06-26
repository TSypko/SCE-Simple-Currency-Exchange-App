{
  const currencyFromField = document.querySelector(".js-inputCurrencyType");
  const currencyToField = document.querySelector(".js-outputCurrencyType");
  const amountField = document.querySelector(".js-form__amount");

  const pln = 1;
  const eur = 4.4532;
  const usd = 3.9395;
  const gbp = 4.9256;
  const chf = 4.1702;

  const exchangeValueIn = (rateIn) => {
    switch (rateIn) {
      case "pln":
        return pln;
      case "eur":
        return eur;
      case "usd":
        return usd;
      case "gbp":
        return gbp;
      case "chf":
        return chf;
    }
  };

  const exchangeValueOut = (rateOut) => {
    switch (rateOut) {
      case "pln":
        return pln;
      case "eur":
        return 1 / eur;
      case "usd":
        return 1 / usd;
      case "gbp":
        return 1 / gbp;
      case "chf":
        return 1 / chf;
    }
  };

  const setCurrency = (currencyName) => {
    switch (currencyName) {
      case "pln":
        return "PLN";
      case "eur":
        return "EUR";
      case "usd":
        return "USD";
      case "gbp":
        return "GBP";
      case "chf":
        return "CHF";
    }
  };

  const currencyFlagImageSelect = (flagLink) => {
    switch (flagLink) {
      case "pln":
        return `images/Flag_of_Poland_2.svg"  alt="Flag of Poland"`;
      case "eur":
        return `images/Flag_of_euro.svg"  alt="Flag of Euro"`;
      case "usd":
        return `images/US_44_Star_Flag.svg"  alt="Flag of US"`;
      case "gbp":
        return `images/Flag_of_the_United_Kingdom.svg"  alt="Flag of GB"`;
      case "chf":
        return `images/Flag_of_Switzerland.svg"  alt="Flag of Swiss"`;
    }
  };

  const currencyFlagLinkSelect = (flagImage) => {
    const flagLink = currencyFlagImageSelect(flagImage);
    return `<img src="${flagLink} class="form__flag" width="80px" height="50px">`;
  };

  const currencyFlagSelect = (fieldIn, fieldOut) => {
    const currencyFlagFieldIn = document.querySelector(
      ".js-form__currencyInFlag"
    );
    const currencyFlagFieldOut = document.querySelector(
      ".js-form__currencyOutFlag"
    );
    currencyFlagFieldIn.innerHTML = currencyFlagLinkSelect(fieldIn);
    currencyFlagFieldOut.innerHTML = currencyFlagLinkSelect(fieldOut);
  };

  const calculateResult = (amount, rateIn, rateOut) =>
    amount * rateIn * rateOut;

  const setResult = () => {
    const rateIn = currencyFromField.value;
    const rateOut = currencyToField.value;
    const amount = +amountField.value;
    const currencyFrom = exchangeValueIn(rateIn);
    const currencyTo = exchangeValueOut(rateOut);
    currencyFlagSelect(rateIn, rateOut);
    return calculateResult(amount, currencyFrom, currencyTo);
  };

  const writeResult = () => {
    const resultCurrency = setCurrency(currencyToField.value);
    const result = setResult();
    const resultField = document.querySelector(".js-form__result");
    resultField.innerText = `${result.toFixed(2)} ${resultCurrency} `;
  };
  currencyFromField.addEventListener("input", writeResult);
  currencyToField.addEventListener("input", writeResult);
  amountField.addEventListener("input", writeResult);
}
