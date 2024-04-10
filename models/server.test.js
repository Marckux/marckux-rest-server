const request = require('supertest');
const Server = require('./server');

describe('Server class', () => {
  let server;

  beforeAll(() => {
    server = new Server();
    server.run();
  });

  afterAll(() => {
    server.close();
  });

  it('responds to / with index.html', done => {
    request(server.app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200, done);
  });

  it('responds to /api with Welcome to the API!', done => {
    request(server.app)
      .get('/api')
      .expect('Welcome to the API!', done);
  });
});