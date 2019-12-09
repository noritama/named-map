const characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const genMap = (digit, ary) => {
  const map = {};
  let brk = false;

  // initialize
  const current = [];
  for (let i = 0; i < digit; i++) {
    current.push(characters[0]);
  }

  ary.forEach(val => {
    let key = '';
    for (let i = 0; i < current.length; i++) {
      key = `${current[i]}${key}`;
    }
    map[key] = val;

    for (let i = 0; i < current.length; i++) {
      if (current[i] !== characters[characters.length - 1]) {
        const index = characters.indexOf(current[i]);
        current[i] = characters[index + 1];
        break;
      } else {
        current[i] = characters[0];
      }
    }
  });

  return map;
};

module.exports = genMap;
