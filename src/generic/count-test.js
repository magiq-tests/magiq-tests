export function countCheck(selector, count) {
// check count of elements == count
  selector = selector || "g"
  var numOfBars = count || 0
  test("check number "+selector, function (t) {
    var count =$(selector).length
    t.equal(count, numOfBars,count+"<- count vs data.len() ->"+numOfBars);
    t.end();
  });

}