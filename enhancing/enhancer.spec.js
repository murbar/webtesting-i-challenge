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

describe('fail', () => {
  it('should decrement durability by 5 if enhancement is less than 15', () => {
    const { durability } = enhancer.fail({ enhancement: 10, durability: 10 });
    expect(durability).toBe(5);
  });

  it('should decrement durability by 10 if enhancement is greater than or equal to 15', () => {
    const { durability } = enhancer.fail({ enhancement: 16, durability: 15 });
    expect(durability).toBe(5);
  });

  it('should also decrement enhancement by 1 if enhancement is greater than 16', () => {
    const { enhancement, durability } = enhancer.fail({ enhancement: 18, durability: 15 });
    expect(durability).toBe(5);
    expect(enhancement).toBe(17);
  });
});
