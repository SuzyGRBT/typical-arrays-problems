
exports.min = function min (array) {
  if (typeof array !== "undefined" && array.length) {
    let minValue = Math.min.apply(null, array);
    return minValue;
    } else {
    return 0;
    };
};

exports.max = function max (array) {

  if (typeof array !== "undefined" && array.length) {
    let maxValue = Math.max.apply(null, array);
    return maxValue;
    } else {
    return 0;
  };
};

exports.avg = function avg (array) {
  if (typeof array !== "undefined" && array.length) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
    sum += array[i];
    };
    return sum / array.length;
    };
    return 0;
};
