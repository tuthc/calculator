# reactcalculator
 
Calculator made with React

## Functions in Calculator.js:
.clear sets total to 0\
.add adds (value) to total\
.subtract subtracts (value) from total\
.multiply multiplies total by (value)\
.divide divides total by (value)\

## Functions in CalculatorInput.js:
.clear is called when the "c" key is clicked - sets total, current and operator to default values\
.changeOperator is called when an operator is clicked - the operator is set and a new total is calculated and set if necessary\
.chooseNumber is called when a number is clicked - the new number is added as a digit to current unless no operator is chosen, in which case it's added to total as a digit\
.equals is called when the "=" key is clicked - it calculates the current operation and sets current and operator to default values\