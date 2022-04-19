import { calculateRide } from "../../../src/example1/after_procedural/calculateRide";

test("Deve calcular o valor da corrida em horário normal", function () {
	const fare = calculateRide([ { distance: 10, date: new Date("2021-03-01T10:00:00") } ]);
	expect(fare).toBe(21);
});

test("Deve calcular o valor da corrida em horário noturno", function () {
	const fare = calculateRide([ { distance: 10, date: new Date("2021-03-01T23:00:00") } ]);
	expect(fare).toBe(39);
});

test("Deve calcular o valor da corrida em horário no domingo", function () {
	const fare = calculateRide([ { distance: 10, date: new Date("2021-03-07T10:00:00") } ]);
	expect(fare).toBe(29);
});

test("Deve calcular o valor da corrida em horário no domingo noturno", function () {
	const fare = calculateRide([ { distance: 10, date: new Date("2021-03-07T23:00:00") } ]);
	expect(fare).toBe(50);
});

test("Deve calcular o valor da corrida mínima", function () {
	const fare = calculateRide([ { distance: 3, date: new Date("2021-03-01T10:00:00") } ]);
	expect(fare).toBe(10);
});

test("Deve retornar -1 se a distância for inválida", function () {
	expect(() => calculateRide([ { distance: -3, date: new Date("2021-03-01T10:00:00") } ])).toThrow(new Error("Invalid Distance"));
});

test("Deve retornar -2 se a data for inválida", function () {
	expect(() => calculateRide([ { distance: 10, date: new Date("abcdef") } ])).toThrow(new Error("Invalid Date"));
});

test("Deve calcular o valor da corrida em múltiplos horários", function () {
	const fare = calculateRide([ 
		{ distance: 10, date: new Date("2021-03-01T21:00:00") },
		{ distance: 10, date: new Date("2021-03-01T22:00:00") } 
	]);
	expect(fare).toBe(60);
});