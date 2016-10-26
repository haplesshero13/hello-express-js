var request = require('request');

describe("GET /", function(){
  it("responds with 200", function(done){
    request('http://localhost:3000', function (error, response, body) {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});

describe("GET /foo", function(){
  it("responds with 'bar'", function(done){
    request('http://localhost:3000/foo', function (error, response, body) {
      expect(response.body).toBe('bar');
      done();
    });
  });
});
