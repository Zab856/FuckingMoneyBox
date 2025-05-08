console.log("Hi!👽👍");

// Inizializzazione // Inizializzazione

let total = Number(localStorage.getItem('total')) || 0;
let theme = localStorage.getItem('theme') || 'dark';

updateTotal();
showTotal();
themeSwitch();


// addEventListener // addEventListener

document.querySelectorAll('.addCoin-btn').forEach(button => {
  button.addEventListener('click', () => {
    const value = parseFloat(button.getAttribute('data-value'));
    addCoin(value);
  }); // addCoin-btn
});
document.querySelectorAll('.removeCoin-btn').forEach(button => {
  button.addEventListener('click', () => {
    const value = parseFloat(button.getAttribute('data-value'));
    removeCoin(value);
  }); // removeCoin-btn
});
document.getElementById('resetTotal-btn').addEventListener('click', () => {
  total = 0;
  localStorage.setItem('total', total.toFixed(2));
  updateTotal(); // resetTotal-btn
  showTotal();
});
document.getElementById('showTotal-btn').addEventListener('click', () => {
  let visibility = localStorage.getItem('visibility') || 'off';
  visibility = (visibility === 'off') ? 'on' : 'off';
  localStorage.setItem('visibility', visibility);
  showTotal(); // showTotal-btn
});
document.getElementById('themeSwitch-btn').addEventListener('click', () => {
  theme = localStorage.getItem('theme') || 'dark';
  theme = (theme === 'dark') ? 'light' : 'dark';
  localStorage.setItem('theme', theme);
  themeSwitch(); // themeSwitch-btn
});


// function // function // function

function addCoin(value) {
  total = parseFloat((total + value).toFixed(2));
  updateTotal();
  showTotal();
};
function removeCoin(value) {
  if ((total - value) >= 0) {
    total = parseFloat((total - value).toFixed(2));
    updateTotal();
    showTotal();
  };
};

function updateTotal() {
  localStorage.setItem('total', total.toFixed(2));
};

function showTotal() {
  const visibility = localStorage.getItem('visibility') || 'off';

  if (visibility === 'on') {
    document.getElementById('total').innerHTML = `Your total is: ${total.toFixed(2)}`;
    document.getElementById('visibility-off').classList.add('hidden');
    document.getElementById('visibility').classList.remove('hidden');
  } else {
    document.getElementById('total').innerHTML = `Your total is: ***`;
    document.getElementById('visibility-off').classList.remove('hidden');
    document.getElementById('visibility').classList.add('hidden');
  };
};
function themeSwitch() {
  if (theme === 'light') {
    document.body.classList.add('lightMode');
    document.getElementById('moon-stars').classList.add('hidden');
    document.getElementById('wb-twilight').classList.remove('hidden');
  } else {
    document.body.classList.remove('lightMode');
    document.getElementById('moon-stars').classList.remove('hidden');
    document.getElementById('wb-twilight').classList.add('hidden');
  };
};
