const { application } = require('express');
const supertest = require('supertest');
const app = require('../app.js');

const request = supertest(app);

describe('Endpoints respond to requests', () => {
    it('Returns data and status 200 on request to "/"', () => {
      return request.get('/').then((response) => {
              expect(response.status).toBe(200);
              expect(response.text).toBe('Hello, world!');
          });
    });

    it('Returns data and status 201 on request to "/users"', () => {
        return request.post('/users').then((response) => {
                expect(response.status).toBe(201);
                expect(response.headers).toBe("content-type:application/json");
            });
      });
  });

