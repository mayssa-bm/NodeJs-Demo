// ****************************************************************
// first test using the JEST library
// ****************************************************************
describe("Testing our nodeJS app", () => {
    it("Testing using Github Actions", () => {
        // expecting 3 functions and receiving 3
        //  this test will pass unless the value changes
        expect(3).toBe(3);
    });
});