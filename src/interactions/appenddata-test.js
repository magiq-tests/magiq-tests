export function appendDataCheck(selector) {
// Append data to text field generating random string
  selector = selector || "textarea"

  test("check if data is appended at " + selector, function (t) {
    $(selector).each(function () {
      var res = $(this);
      var text = makeid();
      res.append()
      t.ok(res, "Text "+text)
    })
    t.end();
  })
}

function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < Math.random(); i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
