function tipper() {
    let submit = document.getElementById("tip-submit")
    submit.addEventListener("click", function doMath() {
        let billTotal = document.getElementById("bill-total").value
        let amountPeople = document.getElementById("amount-of-people").value
        let percentage = document.getElementById("percentage").value
        let total = document.getElementById("tip-total")
        percentage = percentage / 100
        billTotal = billTotal * percentage
        billTotal = billTotal / amountPeople
        total.innerText = "Tip Per Person: $" + Number(billTotal)
    })
}
function interestRate() {
    let submit = document.getElementById("interest-rate-submit")
    submit.addEventListener("click", function () {
        let principal = document.getElementById("principal").value
        let interestRate = document.getElementById("interest-rate").value
        let timePeriod = document.getElementById("time-period").value
        let total = document.getElementById("interest-rate-total")
        console.log("principal: " + principal)
        console.log("Interest rate: " + interestRate)
        console.log("Time Period: " + timePeriod)
        interestRate = interestRate / 100
        principal = principal * interestRate
        principal = principal / timePeriod
        total.innerText = "Total Per Month: $" + Number(principal)
    })
}
interestRate()
tipper()