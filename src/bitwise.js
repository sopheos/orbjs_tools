function has(origin, value) {
  return !!(origin & value);
}

function add(origin, value) {
  if (!has(origin, value)) {
    return origin + value;
  }
  return origin;
}

function del(origin, value) {
  if (has(origin, value)) {
    return origin - value;
  }
  return origin;
}

export default {
  has,
  add,
  del,
};
