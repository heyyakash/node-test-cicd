const request = require("supertest")
const index = require('../index')


describe("GET /", () => {
    it("Should confirm running of server", async () => {
        const res = await request(index).get("/")
        expect(res.statusCode).toBe(200)
        expect(res.body).toStrictEqual({ msg: "This Works" })
    })
})

describe("POST /user", () => {
    it("Should confirm the identity of user", async () => {
        const res = await request(index).post("/user").send({ name: "Akash", password: "Sharma" })
        expect(res.statusCode).toBe(200)
        expect(res.body.success).toBe(true)
    })
})