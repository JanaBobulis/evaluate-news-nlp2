import { app } from '../src/server/index' //link to server index.js
const supertest = require('supertest');
const { response } = require('express');
const request = supertest(app); //provide a high-level abstraction for testing HTTP, while still allowing you to drop down to the lower-level API provided by superagent.

describe('Testing post endpoint', () => {
    it('testing /test endpoint', async done => {
        const response = await request.get('/');
        expect(response.status).toBe(200); //code 200 means succeeded request
        expect(response.body).toBeDefined();
        done();
    });
})