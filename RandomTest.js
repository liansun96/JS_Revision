function calculateDepth(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return 0;
  }

  let maxDepth = 0;

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object') {
        const currentDepth = 1 + calculateDepth(obj[key]);
        maxDepth = Math.max(maxDepth, currentDepth);
      }
    }
  }

  return maxDepth;
}

// Example usage:
const nestedObject = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3
    }
  },
  f: 4
};

const depth = calculateDepth(nestedObject);
console.log("Depth of the nested object:", depth);
