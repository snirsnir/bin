const error = document.querySelector('#error-msg');
const input = document.querySelector('#input');
const output = document.querySelector('#output');
const btn = document.querySelector('#btn');

function bin2Dec() {
  const regEx = /^[0-1]+$/;
  
  if (input.value.match(regEx)) {
    const binArr = input.value.split('').reverse();
    let decNumber = 0;
    
    binArr.forEach((item, index) => item === '1' ? decNumber += Math.pow(2, index) : void 0);
    
    output.value = decNumber.toString();
    output.style.cursor = 'text';
  } else {
    error.style.display = 'block';
  }
}

btn.addEventListener('click', () => {
  error.style.display = 'none';
  bin2Dec();
});