export function verticalOverlapCheck(selector) {
// check if list of vertical elements overlap eachother
  selector = selector || "svg > g"
  test("check overlap", function (t) {
    var topArr = []
    var botArr = []
    var textArr = []
    $(selector).each(function () {
      var top = ((this).getBoundingClientRect().top)
      var bot = ((this).getBoundingClientRect().bottom)
      var text = $(this).text()
      topArr.push(top);
      botArr.push(bot);
      textArr.push(text)

    })

    for (var i = 1; i < topArr.length; i++) {
      t.ok((botArr[i - 1] > topArr[i]), "Overlap Check =" + textArr[i])

    }
    t.end()
  })
}