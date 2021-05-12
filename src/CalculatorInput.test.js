import Calculator from "./Calculator";
import CalculatorInput from "./CalculatorInput";

test("CalculatorInput's constructor", () => {
	let calculator = new Calculator();

	let calculatorInput = new CalculatorInput(calculator, null, "")
	expect(calculatorInput.current).toBe(null);
	expect(calculatorInput.operator).toBe("");
	expect(calculatorInput.calculator).toBe(calculator);

	// with undefined current and operator
	calculatorInput = new CalculatorInput(calculator)
	expect(calculatorInput.current).toBe(null);
	expect(calculatorInput.operator).toBe("");

	// with calculator.total = "error" (from dividing with 0)
	calculator.total = "error";
	calculatorInput = new CalculatorInput(calculator, 5, "*");
	expect(calculatorInput.current).toBe(null);
	expect(calculatorInput.operator).toBe("");

	// with random values
	calculatorInput = new CalculatorInput(calculator, 5, "*");
	expect(calculatorInput.current).toBe(5);
	expect(calculatorInput.operator).toBe("*");
	expect(calculatorInput.calculator).toBe(calculator);
	
	calculator.total = 5;
	calculatorInput = new CalculatorInput(calculator, 10, "+");
	expect(calculatorInput.current).toBe(10);
	expect(calculatorInput.operator).toBe("+");
	expect(calculatorInput.calculator.total).toBe(5);
});

test("CalculationInput's clear", () => {
	let calculator = new Calculator();

	calculator.total = 5;
	let calculatorInput = new CalculatorInput(calculator, 10, "+");

	calculatorInput.clear();
	expect(calculatorInput.current).toBe(null);
	expect(calculatorInput.operator).toBe("");
	expect(calculatorInput.calculator.total).toBe(0);
});

test("CalculationInput's chooseNumber", () => {
	let calculator = new Calculator();
	let calculatorInput = new CalculatorInput(calculator);

	// if operator = "" 
	calculatorInput.chooseNumber(5);
	expect(calculatorInput.calculator.total).toBe(5);
	expect(calculatorInput.current).toBe(null);
	
	calculatorInput.chooseNumber(7); // add digit
	expect(calculatorInput.calculator.total).toBe(57);
	expect(calculatorInput.current).toBe(null);

	// if operator != "" & if current = null
	calculatorInput.operator = "+";
	calculatorInput.chooseNumber(6);
	expect(calculatorInput.calculator.total).toBe(57);
	expect(calculatorInput.current).toBe(6);
	
	// if operator != "" & if current = null
	calculatorInput.operator = "+";
	calculatorInput.chooseNumber(2); // add digit
	expect(calculatorInput.calculator.total).toBe(57);
	expect(calculatorInput.current).toBe(62);
});

test("CalculationInput's equals", () => {
	let calculator = new Calculator();
	let calculatorInput = new CalculatorInput(calculator);

	// if current = null & if operator = ""
	calculatorInput.calculator.total = 0;
	calculatorInput.operator = "";
	calculatorInput.current = null;
	calculatorInput.equals();
	expect(calculatorInput.calculator.total).toBe(0);
	expect(calculatorInput.operator).toBe("");
	expect(calculatorInput.current).toBe(null);
	
	// if current = null & if operator != ""
	calculatorInput.calculator.total = 0;
	calculatorInput.operator = "*";
	calculatorInput.current = null;
	calculatorInput.equals();
	expect(calculatorInput.calculator.total).toBe(0);
	expect(calculatorInput.operator).toBe("*");
	expect(calculatorInput.current).toBe(null);

	// if current != null & if operator = ""
	calculatorInput.calculator.total = 0;
	calculatorInput.operator = "";
	calculatorInput.current = 50;
	calculatorInput.equals();
	expect(calculatorInput.calculator.total).toBe(0);
	expect(calculatorInput.operator).toBe("");
	expect(calculatorInput.current).toBe(50);

	// if current != null & if operator != ""
	calculatorInput.calculator.total = 0;
	calculatorInput.operator = "+";
	calculatorInput.current = 7;
	calculatorInput.equals();
	expect(calculatorInput.calculator.total).toBe(7);
	expect(calculatorInput.operator).toBe("");
	expect(calculatorInput.current).toBe(null);

	// - 
	calculatorInput.calculator.total = 10;
	calculatorInput.operator = "-";
	calculatorInput.current = 4;
	calculatorInput.equals();
	expect(calculatorInput.calculator.total).toBe(6);
	expect(calculatorInput.operator).toBe("");
	expect(calculatorInput.current).toBe(null);

	// *
	calculatorInput.calculator.total = 12;
	calculatorInput.operator = "*";
	calculatorInput.current = 3;
	calculatorInput.equals();
	expect(calculatorInput.calculator.total).toBe(36);
	expect(calculatorInput.operator).toBe("");
	expect(calculatorInput.current).toBe(null);

	// /
	calculatorInput.calculator.total = 20;
	calculatorInput.operator = "/";
	calculatorInput.current = 5;
	calculatorInput.equals();
	expect(calculatorInput.calculator.total).toBe(4);
	expect(calculatorInput.operator).toBe("");
	expect(calculatorInput.current).toBe(null);

});

test("CalculationInput's changeOperator", () => {
	let calculator = new Calculator();
	let calculatorInput = new CalculatorInput(calculator);

	// if operator = "" & if current != null
	calculatorInput.calculator.total = 0;
	calculatorInput.operator = "";
	calculatorInput.current = 5;
	calculatorInput.changeOperator("*");
	expect(calculatorInput.calculator.total).toBe(0);
	expect(calculatorInput.operator).toBe("*");
	expect(calculatorInput.current).toBe(5);

	// if operator != "" & if current = null
	calculatorInput.calculator.total = 0;
	calculatorInput.operator = "*";
	calculatorInput.current = null;
	calculatorInput.changeOperator("+");
	expect(calculatorInput.calculator.total).toBe(0);
	expect(calculatorInput.operator).toBe("+");
	expect(calculatorInput.current).toBe(null);

	// if operator != "" & if current != null
	calculatorInput.calculator.total = 0;
	calculatorInput.operator = "-";
	calculatorInput.current = 8;
	calculatorInput.changeOperator("+");
	expect(calculatorInput.calculator.total).toBe(-8);
	expect(calculatorInput.operator).toBe("+");
	expect(calculatorInput.current).toBe(null);

	// -
	calculatorInput.calculator.total = 22;
	calculatorInput.operator = "+";
	calculatorInput.current = 8;
	calculatorInput.changeOperator("-");
	expect(calculatorInput.calculator.total).toBe(30);
	expect(calculatorInput.operator).toBe("-");
	expect(calculatorInput.current).toBe(null);

	// *
	calculatorInput.calculator.total = 15;
	calculatorInput.operator = "/";
	calculatorInput.current = 3;
	calculatorInput.changeOperator("*");
	expect(calculatorInput.calculator.total).toBe(5);
	expect(calculatorInput.operator).toBe("*");
	expect(calculatorInput.current).toBe(null);

	// /
	calculatorInput.calculator.total = 14;
	calculatorInput.operator = "*";
	calculatorInput.current = 10;
	calculatorInput.changeOperator("/");
	expect(calculatorInput.calculator.total).toBe(140);
	expect(calculatorInput.operator).toBe("/");
	expect(calculatorInput.current).toBe(null);
});