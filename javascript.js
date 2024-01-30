let display = document.getElementById("display");
        let expression = 0;

        function appendToDisplay(value) {
            expression += value;
            display.innerHTML = expression;
        }

        function clearDisplay() {
            expression = 0;
            display.innerHTML = "0"; 
        }

        function calculateResult() {
            try {
                const result = expression;
                expression = result;
                display.innerHTML = result;
            } catch (error) {
                display.innerHTML = "Error";
            }
        }
