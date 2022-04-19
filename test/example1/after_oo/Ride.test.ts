import NormalFareCalculator from "../../../src/example1/after_oo/NormalFareCalculator";
import OvernightFareCalculator from "../../../src/example1/after_oo/OvernightFareCalculator";
import OvernightSundayFareCalculator from "../../../src/example1/after_oo/OvernightSundayFareCalculator";
import Ride from "../../../src/example1/after_oo/Ride";
import SundayFareCalculator from "../../../src/example1/after_oo/SundayFareCalculator";

let ride: Ride;

beforeEach(function () {
	const normalFareCalculator = new NormalFareCalculator();
	const sundayFareCalculator = new SundayFareCalculator(normalFareCalculator);
	const overnightSundayFareCalculator = new OvernightSundayFareCalculator(sundayFareCalculator);
	const overnightFareCalculator = new OvernightFareCalculator(overnightSundayFareCalculator);
	ride = new Ride(overnightFareCalculator);
});

test("Deve calcular o valor da corrida em horário normal", function () {
	ride.addSegment(10, new Date("2021-03-01T10:00:00"));
	const fare = ride.finish();
	expect(fare).toBe(21);
});

test("Deve calcular o valor da corrida em horário noturno", function () {
	ride.addSegment(10, new Date("2021-03-01T23:00:00"));
	const fare = ride.finish();
	expect(fare).toBe(39);
});

test("Deve calcular o valor da corrida em horário no domingo", function () {
	ride.addSegment(10, new Date("2021-03-07T10:00:00"));
	const fare = ride.finish();
	expect(fare).toBe(29);
});

test("Deve calcular o valor da corrida em horário no domingo noturno", function () {
	ride.addSegment(10, new Date("2021-03-07T23:00:00"));
	const fare = ride.finish();
	expect(fare).toBe(50);
});

test("Deve calcular o valor da corrida mínima", function () {
	ride.addSegment(3, new Date("2021-03-01T10:00:00"));
	const fare = ride.finish();
	expect(fare).toBe(10);
});

test("Deve retornar -1 se a distância for inválida", function () {
	expect(() => ride.addSegment(-3, new Date("2021-03-01T10:00:00"))).toThrow(new Error("Invalid Distance"));
});

test("Deve retornar -2 se a data for inválida", function () {
	expect(() => ride.addSegment(10, new Date("abcdef"))).toThrow(new Error("Invalid Date"));
});

test("Deve calcular o valor da corrida em múltiplos horários", function () {
	ride.addSegment(10, new Date("2021-03-01T21:00:00"));
	ride.addSegment(10, new Date("2021-03-01T22:00:00"));
	const fare = ride.finish();
	expect(fare).toBe(60);
});
