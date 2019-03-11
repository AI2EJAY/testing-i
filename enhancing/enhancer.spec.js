const enhancer = require('./enhancer.js');
// test away!
it("Repair increases durability to 100", () => {

    const item = {
        name :"Lambda Shield",
        durability : 87,
        enhancement : 2
      }
      expect(enhancer.repair(item).durability).toBe(100);
})

it("Succeed returns back an item that has been enhanced", () => {

    const item = {
        name :"Lambda Shield",
        durability : 87,
        enhancement : 2
      }
      const prevItem = {
          name: item.name,
          durability: item.durability,
          enhancement: item.enhancement -= 1
      }
      expect(enhancer.succeed(item).enhancement).toEqual(prevItem.enhancement + 1);
})
