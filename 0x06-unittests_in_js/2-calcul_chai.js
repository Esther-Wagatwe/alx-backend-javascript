function calculateNumber(type, a, b) {
  if (type !== 'SUM' && type !== 'SUBTRACT' && type !== 'DIVIDE') {
    throw new Error('Invalid type');
  }
  
  const A = Math.round(a);
  const B = Math.round(b);

  if(type == 'SUM') {
    return (A + B);
  } else if(type == 'SUBTRACT') {
    return (A - B)
  } else if(type == 'DIVIDE') {
    if(B == 0) {
      return 'Error'
    }
    return (A / B)
  }
}

module.exports = calculateNumber;
