const request = require("supertest")
const app = require('../app')
let server

beforeEach((done)=>{
    server = app.listen(done)
})

afterEach((done)=>{
    server.close(done)
})


describe("GET /", () => {
    test("Should confirm running of server", async () => {
        const res = await request(server).get("/")
        expect(res.statusCode).toBe(200)
    })
})

describe("POST /user", () => {
    test("Should confirm the identity of user", async () => {
        const res = await request(app).post("/user").send({ name: "Akash", password: "Sharma" })
        expect(res.statusCode).toBe(200)
        expect(res.body.success).toBe(true)
    })
})