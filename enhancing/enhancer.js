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
  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
