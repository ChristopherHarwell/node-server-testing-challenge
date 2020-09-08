const db = require('../data/dbConfig.js');
const Hobbits = require("./hobbitsModel.js");

describe("hobbits model", () => {
    describe('insert', () => {
        beforeAll(async () => {
            await db('hobbits').truncate();
        })
        it("should insert the provided hobbits into the db", async () => {
            await Hobbits.insert({name: 'gaffer'});
            await Hobbits.insert({name: 'sam'});

            const hobbits = await db('hobbits');
            expect(hobbits).toHaveLength(2);
        });

        it("should return the hobbit we inserted", async () => {
            let hobbit = await Hobbits.insert({name: 'sam'});
            expect(hobbit.name).toBe('sam');

            hobbit = await Hobbits.insert({name: 'gaffer'});
            expect(hobbit.name).toBe('gaffer');
        })
    })

    describe('delete', () => {
        beforeEach(async () => {
            await Hobbits.getAll();
        
        })
        it("should delete the provided hobbits from the db", async () => {
            await Hobbits.remove(1);
            await Hobbits.remove(2);

            const hobbits = await db('hobbits');
            expect(hobbits).toHaveLength(2);
        });

        it("should return the hobbit we deleted", async () => {
            let hobbit = await Hobbits.getAll();
            expect(hobbit[0].id).toBe(3);
            expect(hobbit[1].id).toBe(4);

        })
    })
})