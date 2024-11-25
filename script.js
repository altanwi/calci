// Function to append a value to the display
function appendValue(value) {
  const display = document.getElementById('calcDisplay');
  display.value += value;
}

// Function to clear the display
function clearDisplay() {
  const display = document.getElementById('calcDisplay');
  display.value = '';
}

// Function to delete the last character from the display
function deleteLast() {
  const display = document.getElementById('calcDisplay');
  display.value = display.value.slice(0, -1);
}

// Function to evaluate the calculation
function calculate() {
  const display = document.getElementById('calcDisplay');
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}


