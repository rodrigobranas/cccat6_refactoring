import { calc } from "../../../src/example1/before/calc";

test("Deve calcular o valor da corrida em horário normal", function () {
	const fare = calc([ { dist: 10, ds: new Date("2021-03-01T10:00:00") } ]);
	expect(fare).toBe(21);
});

test("Deve calcular o valor da corrida em horário noturno", function () {
	const fare = calc([ { dist: 10, ds: new Date("2021-03-01T23:00:00") } ]);
	expect(fare).toBe(39);
});

test("Deve calcular o valor da corrida em horário no domingo", function () {
	const fare = calc([ { dist: 10, ds: new Date("2021-03-07T10:00:00") } ]);
	expect(fare).toBe(29);
});

test("Deve calcular o valor da corrida em horário no domingo noturno", function () {
	const fare = calc([ { dist: 10, ds: new Date("2021-03-07T23:00:00") } ]);
	expect(fare).toBe(50);
});

test("Deve calcular o valor da corrida mínima", function () {
	const fare = calc([ { dist: 3, ds: new Date("2021-03-01T10:00:00") } ]);
	expect(fare).toBe(10);
});

test("Deve retornar -1 se a distância for inválida", function () {
	const fare = calc([ { dist: -3, ds: new Date("2021-03-01T10:00:00") } ]);
	expect(fare).toBe(-1);
});

test("Deve retornar -2 se a data for inválida", function () {
	const fare = calc([ { dist: 10, ds: new Date("abcdef") } ]);
	expect(fare).toBe(-2);
});

test("Deve calcular o valor da corrida em múltiplos horários", function () {
	const fare = calc([ 
		{ dist: 10, ds: new Date("2021-03-01T21:00:00") },
		{ dist: 10, ds: new Date("2021-03-01T22:00:00") } 
	]);
	expect(fare).toBe(60);
});
