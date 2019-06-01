function a(x) {
  return function(y) {
    return function(z) {
      return function(p) {
        return console.log(x + y + z + p);
      };
    };
  };
}

a(2)(2)(2)(2);
