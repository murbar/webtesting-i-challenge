const enhancer = require('./enhancer.js');
// test away!

describe('repair', () => {
  it('should restore item durability to 100', () => {
    const { durability } = enhancer.repair({});
    expect(durability).toBe(100);
  });
});

describe('succeed', () => {
  it('should not change item when enhancement is 20', () => {
    const { enhancement } = enhancer.succeed({ enhancement: 20 });
    expect(enhancement).toBe(20);
  });

  it('should increment item enhancement when enhancement is less than 20', () => {
    const { enhancement } = enhancer.succeed({ enhancement: 1 });
    expect(enhancement).toBe(2);
  });

  it('should not change item durability', () => {
    const { durability } = enhancer.succeed({ durability: 50 });
    expect(durability).toBe(50);
  });
});
