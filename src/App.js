import React, { useEffect, useState } from 'react';
import CalculatorComponent from './CalculatorComponent';
import Calculator from './Calculator';
import CalculatorInput from './CalculatorInput';

function App() {
	const [devState, setDevState] = useState(0);
	const calculatorHook = useCalculation();

	function useCalculation() {
		const[totalState, setTotalState] = useState(0);

		return {
			totalState: totalState,
			changeTotalState: value => { setTotalState(value); }
		}
	}

	let calculator = new Calculator();
	calculator.total = calculatorHook.totalState;
	
	let calculatorInputHook = useCalculatorInput();
	let calculatorInput = new CalculatorInput(calculator, calculatorInputHook.currentInputState, calculatorInputHook.operatorState);
	
	function useCalculatorInput() {
		const [currentInputState, setCurrentInputState] = useState(null);
		const [operatorState, setOperatorState] = useState("");
		
		return {
			currentInputState: currentInputState,
			operatorState: operatorState,
			changeCurrentInputState: value => setCurrentInputState(value),
			changeOperatorState: value => setOperatorState(value)
		}
	}

	function handleOperator_v2(operator) {
		calculatorInput.changeOperator(operator);
		updateStates();
	}

	function handleNumber_v2(value) {
		calculatorInput.chooseNumber(value);
		updateStates();
	}

	function handleClear_v2() {
		calculatorInput.clear();
		updateStates();
	}

	function handleEquals_v2() {
		calculatorInput.equals();
		updateStates();
	}

	function updateStates() {		
		calculatorInputHook.changeOperatorState(calculatorInput.operator);
		calculatorInputHook.changeCurrentInputState(calculatorInput.current);
		calculatorHook.changeTotalState(calculator.total);
	}
	
	return (
		<>
			<CalculatorComponent
				total={calculatorHook.totalState}
				current={calculatorInputHook.currentInputState}
				operator={calculatorInputHook.operatorState}

				handleEquals_v2={handleEquals_v2}
				handleClear_v2={handleClear_v2}
				handleOperator_v2={handleOperator_v2}
				handleNumber_v2={handleNumber_v2}
			/>

			{/* testing */}
			<button onClick={() => { setDevState(prevState => prevState + 1) }}>update</button>
			<div>t: {Math.floor(calculator.total * 10000) / 10000}</div>
			<div>o: {calculatorInputHook.operatorState}</div>
			<div>c: {calculatorInputHook.currentInputState}</div>			
		</>
	);
}

export default App;
