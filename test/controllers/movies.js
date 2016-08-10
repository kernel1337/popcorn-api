const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = require("chai");

const Index = require("../../build/index");
const { port } = require("../../build/config/constants");

chai.use(chaiHttp);

/** @test {Movies} */
describe("Movies:", ()=> {

  let page, movie;

  before(() => {
    page = 1;
    movie = "tt1375666";
  });

  /** @test {Movies#getMovies} */
  it("GET /movies", done => {
    chai.request(`http://localhost:${port}`)
      .get("/movies")
      .then(res => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        done();
      }).catch(err => done(err));
  });

  /** @test {Movies#getPage} */
  it("GET /movies/:page", done => {
    chai.request(`http://localhost:${port}`)
      .get(`/movies/${page}`)
      // .query()
      .then(res => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        done();
      }).catch(err => done(err));
  });

  /** @test {Movies#getMovie} */
  it("GET /movie/:id", done => {
    chai.request(`http://localhost:${port}`)
      .get(`/movie/${movie}`)
      .then(res => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        done();
      }).catch(err => done(err));
  });

  /** @test {Movies#getRandomMovie} */
  it("GET /random/movie", done => {
    chai.request(`http://localhost:${port}`)
      .get("/random/movie")
      .then(res => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        done();
      }).catch(err => done(err));
  });

});
