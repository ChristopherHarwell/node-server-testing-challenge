const request = require("supertest");
const server = require("./server.js");

describe("server.js", () => {
    describe("GET /", () => {
        let res = {};
        beforeAll(async() => {
            res = await request(server).get("/");
        });

        it("should return 200 ok", async () => {
            expect(res.status).toBe(200);
        });

        it("should return a JSON object", async () => {
            //   const res = await request(server).get("/");
              expect(res.type).toBe('application/json');
          })
    });
})