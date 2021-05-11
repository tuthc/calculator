import Calculator from "./Calculator";

test("Calculator's inital total", () => {
	let calculator = new Calculator(); 		// undefined
	expect(calculator.total).toBe(0);		// = 0

	calculator = new Calculator(null)		// null
	expect(calculator.total).toBe(0);		// = 0

	calculator = new Calculator(0); 		// 0
	expect(calculator.total).toBe(0);		// = 0

	calculator = new Calculator(5);			// 5
	expect(calculator.total).toBe(5);		// = 5
})

test("Calculator's clear", () => {
	let calculator = new Calculator(10);	// 10

	calculator.clear();						// 0
	expect(calculator.total).toBe(0);		// = 0

	calculator.add(5); 						// 0 + 5
	calculator.clear(); 					// 0
	expect(calculator.total).toBe(0);		// = 0
});

test("Calculator's add", () => {
	let calculator = new Calculator(0); 	// 0

	calculator.add(5); 						// 0 + 5
	expect(calculator.total).toBe(5); 		// = 5

	calculator.add(11); 					// 5 + 11
	expect(calculator.total).toBe(16); 		// = 16

	calculator.add(-3); 					// 16 + (-3)
	expect(calculator.total).toBe(13); 		// = 13
});

test("Calculator's subtract", () => {
	let calculator = new Calculator(0); 	// 0
	
	calculator.subtract(5); 				// 0 - 5
	expect(calculator.total).toBe(-5);		// = -5

	calculator.subtract(123);				// (-5) - 123
	expect(calculator.total).toBe(-128);	// = -128

	calculator.subtract(-10);				// (-128) - (-10)
	expect(calculator.total).toBe(-118);	// = -118
});

test("Calculator's multiply", () => {
	let calculator = new Calculator(1);		// 1

	calculator.multiply(5);					// 1 * 5
	expect(calculator.total).toBe(5);		// = 5

	calculator.multiply(3);					// 5 * 3
	expect(calculator.total).toBe(15);		// = 15

	calculator.multiply(-2);				// 15 * (-2)
	expect(calculator.total).toBe(-30);		// = -30
});

test("Calculator's divide", () => {
	let calculator = new Calculator(20);	// 20

	calculator.divide(2);					// 20 / 2
	expect(calculator.total).toBe(10);		// = 10

	calculator.divide(5);					// 10 / 5
	expect(calculator.total).toBe(2);		// = 2
	
	calculator.divide(0);					// 2 / 0
	expect(calculator.total).toBe("error");	// = "error" 
});