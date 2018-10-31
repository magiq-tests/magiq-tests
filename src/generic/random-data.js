export function getRandomInt(min, max) {
  if (min == null || max == null) { min = 0; max = 100; }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomString() {
  var text = ""; var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < getRandomInt(); i++) { text += possible.charAt(Math.floor(Math.random() * possible.length)); }
  return text;
}
