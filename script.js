// Append value to the display
function appendValue(value) {
  const display = document.getElementById('calcDisplay');
  if (display.value === '0') {
    display.value = value;
  } else {
    display.value += value;
  }
}

// Clear the display
function clearDisplay() {
  const display = document.getElementById('calcDisplay');
  display.value = '';
}

// Delete the last character
function deleteLast() {
  const display = document.getElementById('calcDisplay');
  display.value = display.value.slice(0, -1);
}

// Calculate the result of the expression
function calculate() {
  const display = document.getElementById('calcDisplay');
  try {
    display.value = eval(display.value.replace('÷', '/').replace('×', '*'));
  } catch (error) {
    display.value = 'Error';
  }
}

// Calculate square root
function calculateSqrt() {
  const display = document.getElementById('calcDisplay');
  display.value = Math.sqrt(parseFloat(display.value));
}

// Calculate square
function calculateSquare() {
  const display = document.getElementById('calcDisplay');
  display.value = Math.pow(parseFloat(display.value), 2);
}

// Calculate logarithm
function calculateLog() {
  const display = document.getElementById('calcDisplay');
  display.value = Math.log10(parseFloat(display.value));
}

// Calculate sine
function calculateSin() {
  const display = document.getElementById('calcDisplay');
  display.value = Math.sin(parseFloat(display.value) * Math.PI / 180);
}

// Calculate cosine
function calculateCos() {
  const display = document.getElementById('calcDisplay');
  display.value = Math.cos(parseFloat(display.value) * Math.PI / 180);
}

// Calculate tangent
function calculateTan() {
  const display = document.getElementById('calcDisplay');
  display.value = Math.tan(parseFloat(display.value) * Math.PI / 180);
}

// Calculate power
function calculatePower() {
  const display = document.getElementById('calcDisplay');
  display.value += '**'; // Add exponentiation symbol
}





