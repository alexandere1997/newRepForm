const radioBTN = document.querySelectorAll(".box__rb input"),
    optionBtn = document.querySelector(".box__list select"),
    plan = document.querySelector(".box__plan p span"),
    box__price = document.querySelector(".box__price span");
let func = () => {
    radioBTN.forEach(item => {
        item.addEventListener("change", (e) => {
            console.log(item.value)
            price = e.target.dataset.price
            plan.innerHTML = item.value;
            box__price.innerHTML = price;
            optionBtn.removeAttribute("disabled")
        })
    })
    optionBtn.addEventListener("change", () => {
        let indexCount = optionBtn.options[optionBtn.selectedIndex].text;
        let countPrice = box__price.innerHTML * indexCount;
        box__price.innerHTML = countPrice;
        optionBtn.setAttribute("disabled", "disabled")
    })
}

func();
      