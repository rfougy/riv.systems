Array.prototype.sortCoords = function () {
  return this.sort(function (a, b) {
    if (a[0] == b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });
};

export {};
