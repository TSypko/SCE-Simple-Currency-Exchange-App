let pln = 1;
let eur = 4.46;
let usd = 3.98;
let gbp = 4.98;
let chf = 4.18;

let amountField = document.querySelector(".js-form__amount");
let resultField = document.querySelector(".js-form__result");

let inputCurrencyTypeField = document.querySelector(".js-inputCurrencyType");
let outputCurrencyTypeField = document.querySelector(".js-outputCurrencyType");

//flags
let flagCurrencyIn = document.querySelector(".js-form__currencyInFlag");
let flagCurrencyOut = document.querySelector(".js-form__currencyOutFlag");

let euroFlagLink =
  "images/Flag_of_euro.svg";
let plnFlagLink =
  "images/Flag_of_Poland_2.svg";
let usdFlagLink =
  "images/US_44_Star_Flag.svg";
let gbFlagLink =
  "images/Flag_of_the_United_Kingdom.svg";
let swissFlagLink =
  "images/Flag_of_Switzerland.svg";

let flagPrefix = `<img src="`;
let flagPostfix = `" class="form__flag" alt="Flag of Poland" width="80px" height="50px"></img>`;

let exchange = () => {
  switch (inputCurrencyTypeField.value) {
    case "pln":
      inputCurrencyType = pln;
      flagCurrencyIn.innerHTML = `${flagPrefix}${plnFlagLink}${flagPostfix}`;
      break;
    case "eur":
      inputCurrencyType = eur;
      flagCurrencyIn.innerHTML = `${flagPrefix}${euroFlagLink}${flagPostfix}`;
      break;
    case "usd":
      inputCurrencyType = usd;
      flagCurrencyIn.innerHTML = `${flagPrefix}${usdFlagLink}${flagPostfix}`;
      break;
    case "gbp":
      inputCurrencyType = gbp;
      flagCurrencyIn.innerHTML = `${flagPrefix}${gbFlagLink}${flagPostfix}`;
      break;
    case "chf":
      inputCurrencyType = chf;
      flagCurrencyIn.innerHTML = `${flagPrefix}${swissFlagLink}${flagPostfix}`;
      break;
  }
  switch (outputCurrencyTypeField.value) {
    case "pln":
      outputCurrencyType = pln;
      resultCurrency = "PLN";
      flagCurrencyOut.innerHTML = `${flagPrefix}${plnFlagLink}${flagPostfix}`;
      break;
    case "eur":
      outputCurrencyType = 1 / eur;
      resultCurrency = "EUR";
      flagCurrencyOut.innerHTML = `${flagPrefix}${euroFlagLink}${flagPostfix}`;
      break;
    case "usd":
      outputCurrencyType = 1 / usd;
      resultCurrency = "USD";
      flagCurrencyOut.innerHTML = `${flagPrefix}${usdFlagLink}${flagPostfix}`;
      break;
    case "gbp":
      outputCurrencyType = 1 / gbp;
      resultCurrency = "GBP";
      flagCurrencyOut.innerHTML = `${flagPrefix}${gbFlagLink}${flagPostfix}`;
      break;
    case "chf":
      outputCurrencyType = 1 / chf;
      resultCurrency = "CHF";
      flagCurrencyOut.innerHTML = `${flagPrefix}${swissFlagLink}${flagPostfix}`;
      break;
  }

  result = (amountField.value * inputCurrencyType * outputCurrencyType).toFixed(
    2
  );
  resultField.innerText = `${result} ${resultCurrency} `;
};

inputCurrencyTypeField.addEventListener("input", exchange);
outputCurrencyTypeField.addEventListener("input", exchange);
amountField.addEventListener("input", exchange);
