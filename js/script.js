{
  const inputCurrencyTypeField = document.querySelector(
    ".js-inputCurrencyType"
  );
  const outputCurrencyTypeField = document.querySelector(
    ".js-outputCurrencyType"
  );
  const amountField = document.querySelector(".js-form__amount");

  const currencyFlagLinkSelect = (field) => {
    const plnFlagLink = `images/Flag_of_Poland_2.svg"  alt="Flag of Poland"`;
    const euroFlagLink = `images/Flag_of_euro.svg"  alt="Flag of Euro"`;
    const usdFlagLink = `images/US_44_Star_Flag.svg"  alt="Flag of US"`;
    const gbpFlagLink = `images/Flag_of_the_United_Kingdom.svg"  alt="Flag of GB"`;
    const swissFlagLink = `images/Flag_of_Switzerland.svg"  alt="Flag of Swiss"`;
    const flagPrefix = `<img src="`;
    const flagPostfix = ` class="form__flag" width="80px" height="50px">`;

    switch (field.value) {
      case "pln":
        return `${flagPrefix}${plnFlagLink}${flagPostfix}`;
      case "eur":
        return `${flagPrefix}${euroFlagLink}${flagPostfix}`;
      case "usd":
        return `${flagPrefix}${usdFlagLink}${flagPostfix}`;
      case "gbp":
        return `${flagPrefix}${gbpFlagLink}${flagPostfix}`;
      case "chf":
        return `${flagPrefix}${swissFlagLink}${flagPostfix}`;
    }
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

  let inputCurrencyType;
  let outputCurrencyType;
  let resultCurrency;
  const pln = 1;
  const eur = 4.4532;
  const usd = 3.9395;
  const gbp = 4.9256;
  const chf = 4.1702;
  const resultField = document.querySelector(".js-form__result");

  let exchangeValueIn = (valueIn) => {
    switch (valueIn.value) {
      case "pln":
        return (inputCurrencyType = pln);
      case "eur":
        return (inputCurrencyType = eur);
      case "usd":
        return (inputCurrencyType = usd);
      case "gbp":
        return (inputCurrencyType = gbp);
      case "chf":
        return (inputCurrencyType = chf);
    }
  };
  let exchangeValueOut = (valueOut) => {
    switch (valueOut.value) {
      case "pln":
        return (outputCurrencyType = pln);
      case "eur":
        return (outputCurrencyType = 1 / eur);
      case "usd":
        return (outputCurrencyType = 1 / usd);
      case "gbp":
        return (outputCurrencyType = 1 / gbp);
      case "chf":
        return (outputCurrencyType = 1 / chf);
    }
  };
  let setCurrency = (currency) => {
    switch (currency.value) {
      case "pln":
        return (resultCurrency = "PLN");
      case "eur":
        return (resultCurrency = "EUR");
      case "usd":
        return (resultCurrency = "USD");
      case "gbp":
        return (resultCurrency = "GBP");
      case "chf":
        return (resultCurrency = "CHF");
    }
  };
  let setResult = () => {
    exchangeValueIn(inputCurrencyTypeField);
    exchangeValueOut(outputCurrencyTypeField);
    setCurrency(outputCurrencyTypeField);
    currencyFlagSelect(inputCurrencyTypeField, outputCurrencyTypeField);
    result = amountField.value * inputCurrencyType * outputCurrencyType;
    resultField.innerText = `${result.toFixed(2)} ${resultCurrency} `;
  };
  inputCurrencyTypeField.addEventListener("input", setResult);
  outputCurrencyTypeField.addEventListener("input", setResult);
  amountField.addEventListener("input", setResult);
}
