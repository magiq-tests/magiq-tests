export function textCheck(selector) {
// get text from seledctor and print
  selector = selector || "svg text"

  test("label check for " + selector, function (t) {
    try {
      $(selector).each(function () {
        var text = ($(this).text());
        t.ok(text, "Text:" + text)
      })
    } catch (err) {
      t.fail("No Text:" + err)
    }
    t.end();
  })
}