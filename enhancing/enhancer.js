module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  const en = item.enhancement;

  if (en === 20) return { ...item };

  return { ...item, enhancement: en + 1 };
}

function fail(item) {
  const { enhancement, durability } = item;

  if (enhancement < 15) {
    return { ...item, durability: durability - 5 };
  } else if (enhancement > 16) {
    return { ...item, enhancement: enhancement - 1, durability: durability - 10 };
  } else {
    return { ...item, durability: durability - 10 };
  }
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
