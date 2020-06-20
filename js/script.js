{
  const inputCurrencyTypeField = document.querySelector(
    ".js-inputCurrencyType"
  );
  const outputCurrencyTypeField = document.querySelector(
    ".js-outputCurrencyType"
  );
  const amountField = document.querySelector(".js-form__amount");

  const flagChange = () => {
    const euroFlagLink = "images/Flag_of_euro.svg";
    const plnFlagLink = "images/Flag_of_Poland_2.svg";
    const usdFlagLink = "images/US_44_Star_Flag.svg";
    const gbFlagLink = "images/Flag_of_the_United_Kingdom.svg";
    const swissFlagLink = "images/Flag_of_Switzerland.svg";

    const flagPrefix = `<img src="`;
    const flagPostfix = `" class="form__flag" alt="Flag of Poland" width="80px" height="50px"></img>`;

    const flagCurrencyIn = document.querySelector(".js-form__currencyInFlag");
    const flagCurrencyOut = document.querySelector(".js-form__currencyOutFlag");

    switch (inputCurrencyTypeField.value) {
      case "pln":
        flagCurrencyIn.innerHTML = `${flagPrefix}${plnFlagLink}${flagPostfix}`;
        break;
      case "eur":
        flagCurrencyIn.innerHTML = `${flagPrefix}${euroFlagLink}${flagPostfix}`;
        break;
      case "usd":
        flagCurrencyIn.innerHTML = `${flagPrefix}${usdFlagLink}${flagPostfix}`;
        break;
      case "gbp":
        flagCurrencyIn.innerHTML = `${flagPrefix}${gbFlagLink}${flagPostfix}`;
        break;
      case "chf":
        flagCurrencyIn.innerHTML = `${flagPrefix}${swissFlagLink}${flagPostfix}`;
        break;
    }
    switch (outputCurrencyTypeField.value) {
      case "pln":
        flagCurrencyOut.innerHTML = `${flagPrefix}${plnFlagLink}${flagPostfix}`;
        break;
      case "eur":
        flagCurrencyOut.innerHTML = `${flagPrefix}${euroFlagLink}${flagPostfix}`;
        break;
      case "usd":
        flagCurrencyOut.innerHTML = `${flagPrefix}${usdFlagLink}${flagPostfix}`;
        break;
      case "gbp":
        flagCurrencyOut.innerHTML = `${flagPrefix}${gbFlagLink}${flagPostfix}`;
        break;
      case "chf":
        flagCurrencyOut.innerHTML = `${flagPrefix}${swissFlagLink}${flagPostfix}`;
        break;
    }
  };

  const exchange = () => {
    const pln = 1;
    const eur = 4.46;
    const usd = 3.98;
    const gbp = 4.98;
    const chf = 4.18;

    const resultField = document.querySelector(".js-form__result");

    switch (inputCurrencyTypeField.value) {
      case "pln":
        inputCurrencyType = pln;
        break;
      case "eur":
        inputCurrencyType = eur;
        break;
      case "usd":
        inputCurrencyType = usd;
        break;
      case "gbp":
        inputCurrencyType = gbp;
        break;
      case "chf":
        inputCurrencyType = chf;
        break;
    }
    switch (outputCurrencyTypeField.value) {
      case "pln":
        outputCurrencyType = pln;
        resultCurrency = "PLN";
        break;
      case "eur":
        outputCurrencyType = 1 / eur;
        resultCurrency = "EUR";
        break;
      case "usd":
        outputCurrencyType = 1 / usd;
        resultCurrency = "USD";
        break;
      case "gbp":
        outputCurrencyType = 1 / gbp;
        resultCurrency = "GBP";
        break;
      case "chf":
        outputCurrencyType = 1 / chf;
        resultCurrency = "CHF";
        break;
    }
    flagChange();
    result = (
      amountField.value *
      inputCurrencyType *
      outputCurrencyType
    ).toFixed(2);
    resultField.innerText = `${result} ${resultCurrency} `;
  };

  inputCurrencyTypeField.addEventListener("input", exchange);
  outputCurrencyTypeField.addEventListener("input", exchange);
  amountField.addEventListener("input", exchange);
}
