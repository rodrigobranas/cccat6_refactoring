import { validateCpf } from "../../../src/example2/after/cpf";

test("Deve validar um cpf válido", function () {
	const isValid = validateCpf("935.411.347-80");
	expect(isValid).toBeTruthy();
});

const wrongSameDigitCpf = [
	"111.111.111-11",
	"222.222.222-22",
	"333.333.333-33"
];

test.each(wrongSameDigitCpf)("Deve validar um cpf inválido com todos os números iguais", function (cpf) {
	const isValid2 = validateCpf(cpf);
	expect(isValid2).toBeFalsy();
});

test("Deve validar um cpf inválido que seja nulo", function () {
	const isValid3 = validateCpf(null);
	expect(isValid3).toBeFalsy();
});

test("Deve validar um cpf válido sem pontos e traços", function () {
	const isValid = validateCpf("93541134780");
	expect(isValid).toBeTruthy();
});

test("Deve validar um cpf válido com alguns pontos", function () {
	const isValid = validateCpf("935.411.34780");
	expect(isValid).toBeTruthy();
});
