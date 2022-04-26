import { validate } from "../../../src/example2/before/cpf";

test("Deve validar um cpf válido", function () {
	const isValid = validate("935.411.347-80");
	expect(isValid).toBeTruthy();
});

test("Deve validar um cpf inválido com todos os números iguais", function () {
	const isValid2 = validate("111.111.111-11");
	expect(isValid2).toBeFalsy();
});

test("Deve validar um cpf inválido que seja nulo", function () {
	const isValid3 = validate(null);
	expect(isValid3).toBeFalsy();
});
