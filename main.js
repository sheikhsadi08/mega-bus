// get ticket input value.
function getInputValue(ticketClass) {
  const ticket = document.getElementById(ticketClass + "-input");
  const ticketCount = parseInt(ticket.value);
  return ticketCount;
}

// ticket change handler.
function ticketChangeHandler(isIncrease, ticketClass) {
  const ticketInput = document.getElementById(ticketClass + "-input");
  const ticketCount = getInputValue(ticketClass);
  let ticketCountNew = ticketCount;
    if(isIncrease == true) {
      ticketCountNew = ticketCount + 1;
    } else if(isIncrease == false & ticketCountNew > 0) {
      ticketCountNew = ticketCount - 1;
    }
  ticketInput.value = ticketCountNew;
  calculateTotal();
}

// calculate total ticket price.
function calculateTotal(){
  const firstClassTicketCount = getInputValue("first-class");
  const economyCount = getInputValue("economy");

  const ticketPrice = firstClassTicketCount * 150 + economyCount * 100;
  const vat = ticketPrice * 0.1;
  const totalTicketPrice = ticketPrice + vat;

  document.getElementById("sub-total").innerText = ticketPrice;
  document.getElementById("vat").innerText = vat;
  document.getElementById("total").innerText = totalTicketPrice;
}



// ----------- first class ticket event handler ----------- //

// first class ticket increase.
function firstClassTicketIncrease(){
  ticketChangeHandler(true, "first-class");
}
const firstClassPlusBtn = document.getElementById("first-class-plus-btn");
firstClassPlusBtn.addEventListener("click", firstClassTicketIncrease);


// first class ticket decrease.
function firstClassTicketDecrease(){
  ticketChangeHandler(false, "first-class");
}
const firstClassMinusBtn = document.getElementById("first-class-minus-btn");
firstClassMinusBtn.addEventListener("click", firstClassTicketDecrease);



// ----------- economy class ticket event handler ----------- //

// economy class ticket increase.
function economyTicketIncrease(){
  ticketChangeHandler(true, "economy");
}
const economyPlusBtn = document.getElementById("economy-plus-btn");
economyPlusBtn.addEventListener("click", economyTicketIncrease);


// economy class ticket decrease.
function economyTicketDecrease(){
  ticketChangeHandler(false, "economy");
}
const economyMinusBtn = document.getElementById("economy-minus-btn");
economyMinusBtn.addEventListener("click", economyTicketDecrease);
