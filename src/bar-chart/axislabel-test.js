export function barAxisLabelCheck(selector) {
// check axis ticks and output text

  selector = selector || "svg > g > g.axis-x g.tick"
  test("check labels for "+selector, function (t) {
    $(selector).each(function () {
      var tick = $(this).text()
      t.ok(tick, selector+" tick = " + tick)
    })
    t.end()
  })
}