const FIRST_DIGIT_FACTOR = 10;
const SECOND_DIGIT_FACTOR = 11;

export function validateCpf (rawCpf: string | null | undefined) {
	if (!rawCpf) return false;
	const cpf = cleanCpf(rawCpf);
	if (isInvalidLength(cpf)) return false;
	if (isIdenticalDigits(cpf)) return false;
	const calculatedCheckDigit1 = calculateCheckDigit(cpf, FIRST_DIGIT_FACTOR);
	const calculatedCheckDigit2 = calculateCheckDigit(cpf, SECOND_DIGIT_FACTOR);
	let checkDigit = extractCheckDigit(cpf);
	const calculatedCheckDigit = `${calculatedCheckDigit1}${calculatedCheckDigit2}`;
	return checkDigit === calculatedCheckDigit;
}

function cleanCpf (cpf: string) {
	return cpf.replace(/\D/g, "");
}

function isInvalidLength (cpf: string) {
	return cpf.length !== 11;
}

function isIdenticalDigits (cpf: string) {
	const [firstDigit] = cpf;
	return [...cpf].every(digit => digit === firstDigit);
}

function calculateCheckDigit (cpf: string, factor: number) {
	const total = [...cpf].reduce((total, digit) => {
		if (factor > 1) total += parseInt(digit) * factor--;
		return total;
	}, 0);
	const rest = total%11;
	return (rest < 2) ? 0 : 11 - rest;
}

function extractCheckDigit (cpf: string) {
	return cpf.slice(-2);
}
