const request = require('supertest');
const app = require('./travis.js');

describe('Get route', () => {

	it('page should return hello world travis', async () => {

		const res = await request(app).get('/');

		expect(res.statusCode).toEqual(200);
		expect(res.body).toEqual('Hello world from Travis');
	});
});

afterAll(async () => {

	await app.close();
});
