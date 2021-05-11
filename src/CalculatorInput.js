export default class CalculatorInput {
	constructor(calculator, current, operator) {
		this.intialCurrent = current;
		this.intialOperator = operator;
		
		this.current = this.intialCurrent;
		this.operator = this.intialOperator;
		
		this.calculator = calculator;
		
		if (this.calculator.total === "error") {
			this.clear();
		}
	}

	clear() {
		this.calculator.clear();
		this.current = null;
		this.operator = "";
	}

	changeOperator(newOperator) {
		if (this.operator === "" || this.current === null) {
			this.operator = newOperator;
			return;
		}

		switch (this.operator) {
			case "+":
				this.calculator.add(this.current);
				this.current = null;
				break;
			case "-":
				this.calculator.subtract(this.current);
				this.current = null;
				break;
			case "*":
				this.calculator.multiply(this.current);
				this.current = null;
				break;
			case "/":
					this.calculator.divide(this.current);
					this.current = null;
				break;
		}

		this.operator = newOperator;
	}

	chooseNumber(value) {
		if (this.operator === "")
			this.calculator.total = Number(this.calculator.total + "" + value); // add digit
		else {
			if (this.current === null)
				this.current = value;
			else
				this.current = Number(this.current + "" + value); // add digit
		}
	}

	equals() {
		const reset = () => {
			this.current = null;
			this.operator = "";
		}

		if (this.current !== null) {
			if (this.operator === "+") {
				this.calculator.add(this.current);
				reset();
			}

			if (this.operator === "-") {
				this.calculator.subtract(this.current);
				reset();
			}

			if (this.operator === "*") {
				this.calculator.multiply(this.current);
				reset();
			}

			if (this.operator === "/") {
				this.calculator.divide(this.current);
				reset();
			}
		}
	}

} 