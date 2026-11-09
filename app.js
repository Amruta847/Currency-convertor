const Base_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
const dropdowns = document.querySelectorAll(".dropdown select");

for (let select of dropdowns) {
    for (Currcode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = Currcode;
        newOption.value = Currcode;
        if (select.name=== "from" && Currcode=== "USD") {
            newOption.selected = "selected";
        } else if (select.name=== "to" && Currcode=== "INR"){
             newOption.selected = "selected";
        }
        select.append(newOption);
    }

    select.addEventListener("change", (evt)) = () => {
        updateFlag(evt.target);
    };
};

const updateFlag = (element) => {
    let Currcode = element.value;
    let countryCode = countryList[Currcode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
}