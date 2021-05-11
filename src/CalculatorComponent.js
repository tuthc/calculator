import React from "react";

function CalculatorComponent(props) {
	return (
		<>
			<div className="calculatorContainer">
				<div className="showDisplay">{props.current || props.total}</div>

				<div className="keypad">
					<button onClick={props.handleClear_v2} id="clear">c</button>
					<button onClick={() => { props.handleOperator_v2("/"); }} className="highlight">&divide;</button>
					<button onClick={() => { props.handleNumber_v2(7); }}>7</button>
					<button onClick={() => { props.handleNumber_v2(8); }}>8</button>
					<button onClick={() => { props.handleNumber_v2(9); }}>9</button>
					<button onClick={() => { props.handleOperator_v2("*"); }} className="highlight">&times;</button>
					<button onClick={() => { props.handleNumber_v2(4); }}>4</button>
					<button onClick={() => { props.handleNumber_v2(5); }}>5</button>
					<button onClick={() => { props.handleNumber_v2(6); }}>6</button>
					<button onClick={() => { props.handleOperator_v2("-"); }} className="highlight">&ndash;</button>
					<button onClick={() => { props.handleNumber_v2(1); }}>1</button>
					<button onClick={() => { props.handleNumber_v2(2); }}>2</button>
					<button onClick={() => { props.handleNumber_v2(3); }}>3</button>
					<button onClick={() => { props.handleOperator_v2("+"); }} className="highlight">+</button>
					<button onClick={() => { props.handleNumber_v2(0); }}>0</button>
					<button onClick={props.handleEquals_v2} className="highlight" id="equals">=</button>
				</div>

			</div>
		</>
	);
}

export default CalculatorComponent;