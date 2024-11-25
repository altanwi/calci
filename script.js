body {
    font-family: 'Roboto', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f4;
}

.calculator {
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
}

.calculator-screen {
    width: 100%;
    height: 80px;
    background-color: #252525;
    border: none;
    color: white;
    text-align: right;
    font-size: 2.5rem;
    padding: 0 10px;
    box-sizing: border-box;
}

.calculator-keys {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1px;
}

button {
    height: 80px;
    border: none;
    background-color: white;
    font-size: 1.5rem;
}

button.operator {
    background-color: #f0a500;
    color: white;
}

button.equal-sign {
    background-color: #6ab04c;
    color: white;
    grid-column: span 2;
}

button.all-clear {
    background-color: #eb4d4b;
    color: white;
}

button:active {
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
}



