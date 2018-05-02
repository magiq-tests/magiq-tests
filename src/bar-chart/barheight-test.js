export function barHeightCheck(selector) {
// check individual bar height
  selector = selector || "svg > g > rect"
  test('check individual plot height', function (t) {
    $(selector).each(function () {
      var cy = $(this).attr("cy")
      t.ok(cy >= 0, "Plot height")
    })
    t.end()
  })

}