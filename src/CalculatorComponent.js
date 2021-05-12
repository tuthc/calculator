import React from "react";

function CalculatorComponent(props) {
	return (
		<>
			<div className="calculatorContainer">
				<div className="showDisplay">{props.current || props.total}</div>

				<div className="keypad">
					<button onClick={props.handleClear} id="clear">c</button>
					<button onClick={() => { props.handleOperator("/"); }} className="highlight">&divide;</button>
					<button onClick={() => { props.handleNumber(7); }}>7</button>
					<button onClick={() => { props.handleNumber(8); }}>8</button>
					<button onClick={() => { props.handleNumber(9); }}>9</button>
					<button onClick={() => { props.handleOperator("*"); }} className="highlight">&times;</button>
					<button onClick={() => { props.handleNumber(4); }}>4</button>
					<button onClick={() => { props.handleNumber(5); }}>5</button>
					<button onClick={() => { props.handleNumber(6); }}>6</button>
					<button onClick={() => { props.handleOperator("-"); }} className="highlight">&ndash;</button>
					<button onClick={() => { props.handleNumber(1); }}>1</button>
					<button onClick={() => { props.handleNumber(2); }}>2</button>
					<button onClick={() => { props.handleNumber(3); }}>3</button>
					<button onClick={() => { props.handleOperator("+"); }} className="highlight">+</button>
					<button onClick={() => { props.handleNumber(0); }}>0</button>
					<button onClick={props.handleEquals} className="highlight" id="equals">=</button>
				</div>

			</div>
		</>
	);
}

export default CalculatorComponent;