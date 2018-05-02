export function noDataCheck(selector) {
// check for text in div or text 
  selector = selector || "text "
  // if (config.data.length < 1) {
  test('check for no data condition in ' + selector, function (t) {
    var svgText = $(selector).text();
    // var divText = $("div text").text();
    t.ok(svgText, "No Data Available")
    t.end();
  })
  // }
}