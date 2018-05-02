export function barCountCheck(selector) {
// check count for selector
  selector = selector || "svg > g rect"
  test("check number of bars created", function (t) {
    var numOfBars = $(selector).length;
    t.ok(numOfBars, "Number of Bars =" + numOfBars)
    t.end();
  });
}