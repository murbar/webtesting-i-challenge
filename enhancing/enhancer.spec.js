const enhancer = require('./enhancer.js');
// test away!

describe('repair', () => {
  it('should restore item durability to 100', () => {
    const { durability } = enhancer.repair({});
    expect(durability).toBe(100);
  });
});

