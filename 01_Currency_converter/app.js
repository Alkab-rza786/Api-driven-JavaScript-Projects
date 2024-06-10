
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector(".btn");
let fromCurrency = document.querySelector(".from select");
let toCurrency = document.querySelector(".to select");
let msg = document.querySelector(".msg");
let icon = document.querySelector(".icon");




for (let select of dropdowns) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "select";
        } else if (select.name === "to" && currCode === "INR") {
            newOption.selected = "select";
        }
        select.append(newOption);
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target)
    });
}

icon.addEventListener("click", () => {
    let temCode = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = temCode;
    updateFlag(fromCurrency);
    updateFlag(toCurrency);

    getExchangeRate();
})



const updateFlag = (element) => {
    let currCode = element.value;
    console.log(currCode);
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}



function getExchangeRate() {
    msg.innerText = " Getting Exchange Rate....."

    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = "1";
    }

    let url = `https://v6.exchangerate-api.com/v6/ad64e98597d71ae1948483b6/latest/${fromCurrency.value}`
    fetch(url).then(response => (response.json()).then(result => {

        let exchangeRate = result.conversion_rates[toCurrency.value]
        let totalExchangeRate = (amtVal * exchangeRate).toFixed(2);
        msg.innerText = `${amtVal} ${fromCurrency.value} = ${totalExchangeRate} ${toCurrency.value}`
    })).catch(() => {
        msg.innerText = "Something Went wrong"
    })
}



btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    getExchangeRate();
})


window.addEventListener("load", () => {
    getExchangeRate();
})
