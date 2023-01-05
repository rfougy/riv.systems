Array.prototype.sortCoords = function () {
  return this.sort((a, b) => (a[0] == b[0] ? a[1] - b[1] : a[0] - b[0]));
};

export {};
