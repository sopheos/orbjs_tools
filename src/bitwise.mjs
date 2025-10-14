
/**
 * @param {number} origin 
 * @param {number} value 
 * @returns {boolean}
 */
function has(origin, value) {
  return !!(origin & value);
}

/**
 * @param {number} origin 
 * @param {number} value 
 * @returns {number}
 */
function add(origin, value) {
  if (!has(origin, value)) {
    return origin + value;
  }
  return origin;
}

/**
 * @param {number} origin 
 * @param {number} value 
 * @returns {number}
 */
function del(origin, value) {
  if (has(origin, value)) {
    return origin - value;
  }
  return origin;
}

export const Bitwise = {
  has,
  add,
  del,
};
