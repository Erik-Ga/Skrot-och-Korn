window.onload = () =>
  document.querySelectorAll(".input-x")
  .forEach(input=>input.addEventListener("change",calculatePrize));


function calculatePrize()
{
    let sum = 0;
    document.querySelectorAll(".input-x")
    .forEach(input=>sum += (input.checked? 
    Number.parseFloat(input.getAttribute("data-price")):0));
    document.getElementById("total").value = sum;
  }