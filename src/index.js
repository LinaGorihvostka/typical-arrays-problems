
exports.min = function min(array) {

  let isArray = Array.isArray( array );

  if (!(isArray && array.length !== 0)) {
    return 0;
  } else {
    return Math.min.apply(null, array);
  }
};

exports.max = function max (array) {

  let isArray = Array.isArray( array );

  if (!(isArray && array.length !== 0)) {
    return 0;
  } else {
    return Math.max.apply(null, array);
  }
};

exports.avg = function avg (array) {

  let isArray = Array.isArray( array );
  let sumOfElements = 0;
  let averageValue = 0;

  if (!(isArray && array.length !== 0)) {
    return 0;
  } else {
    sumOfElements = array.reduce(function(sum, element) {
      return sum + element;
    }, 0);
    averageValue = sumOfElements / array.length;
    return averageValue;
  }
};