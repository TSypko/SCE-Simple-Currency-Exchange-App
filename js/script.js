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

  const pln = 1;
  const eur = 4.4532;
  const usd = 3.9395;
  const gbp = 4.9256;
  const chf = 4.1702;

  const exchangeValueIn = (rateIn) => {
    switch (rateIn.value) {
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
    switch (rateOut.value) {
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

  const setCurrency = (currencyType) => {
    switch (currencyType.value) {
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
  const calculateResult = (amount, rateIn, rateOut) => {
    return amount * rateIn * rateOut;
  };
  const setResult = () => {
    const inputCurrencyType = exchangeValueIn(inputCurrencyTypeField);
    const outputCurrencyType = exchangeValueOut(outputCurrencyTypeField);
    currencyFlagSelect(inputCurrencyTypeField, outputCurrencyTypeField);

    const result = calculateResult(
      amountField.value,
      inputCurrencyType,
      outputCurrencyType
    );
    const resultField = document.querySelector(".js-form__result");
    const resultCurrency = setCurrency(outputCurrencyTypeField);

    resultField.innerText = `${result.toFixed(2)} ${resultCurrency} `;
  };
  inputCurrencyTypeField.addEventListener("input", setResult);
  outputCurrencyTypeField.addEventListener("input", setResult);
  amountField.addEventListener("input", setResult);
}
