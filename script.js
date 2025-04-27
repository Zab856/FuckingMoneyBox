console.log("Hi!👽👍");

/* General stuff */ /* General stuff */ /* General stuff */

let total = 0;
const savedTotal = localStorage.getItem('total');
if (savedTotal !== null) {
  total = parseFloat(savedTotal);
}
document.getElementById('total').innerHTML = `Il tuo totale è: ${total.toFixed(2)}`;

function Add(num) {
  total += num;
  total = parseFloat(total.toFixed(2));
  document.getElementById('total').innerHTML = `Il tuo totale è: ${total.toFixed(2)}`;
  localStorage.setItem('total', total);
};

function Subtract(num) {
  if (total > 0) {
    total -= num;
    total = parseFloat(total.toFixed(2));
    document.getElementById('total').innerHTML = `Il tuo totale è: ${total.toFixed(2)}`;
    localStorage.setItem('total', total);
  };
};

function ResetTotal() {
  total = 0;
  document.getElementById('total').innerHTML = `Il tuo totale è: ${total.toFixed(2)}`;
  localStorage.removeItem('total');
};
