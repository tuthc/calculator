export default class Calculator {
	constructor(total) {
		this.total = 0;

		this.clear();
		
		if (!this.total)
			this.total = 0 + total;
	}
	
	clear() { this.total = 0; }

	add(value) { this.total += value; }

	subtract(value) { this.total -= value; }

	multiply(value) { this.total *= value; }

	divide(value) {
		if (value !== 0) 
			this.total /= value;
		else 
			this.total = "error";
	}
}