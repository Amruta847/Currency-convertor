const Base_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");

const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");

const btn = document.querySelector("form button");

const msg = document.querySelector(".msg");

// Creating dropdown options
for (let select of dropdowns) {
    for (let Currcode in countryList) {
        let newOption = document.createElement("option");

        newOption.innerText = Currcode;
        newOption.value = Currcode;

        if (select.name === "from" && Currcode === "USD") {
            newOption.selected = true;
        } else if (select.name === "to" && Currcode === "INR") {
            newOption.selected = true;
        }

        select.append(newOption);
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

// Updating flags
const updateFlag = (element) => {
    let Currcode = element.value;
    let countryCode = countryList[Currcode];

    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;

    let img = element.parentElement.querySelector("img");

    img.src = newSrc;
};

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if (amtVal=== "" || amtVal <1) {
        amtVal = 1;
        amount.value = "1";
    }

    const URL = `${Base_URL}/${fromCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
    let finalAmount = amtVal * rate;
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount.toFixed(2)} ${toCurr.value}`;

});
let amountInput = document.querySelector(".amount input");
amountInput.value = "1";

btn.click();