export function genericTests(config) {
// set of few basic checks
  var placeholder = config.placeholder || "svg"
  var width = config.width || 500
  var height = config.height || 500
  test('Libraries Check', function (t) {
    t.ok((window.jQuery && window._ && window.d3 && window.test), "All Libraries Loaded")
    t.end();
  });

  test('check if SVG is created', function (assert) {
    assert.notEqual(null, getSvg(), "SVG");
    assert.end();
  });

  test('check SVG height and width', function (assert) {
    assert.equal(height, parseInt(getSvg().attr('height')), "height")
    assert.equal(width, parseInt(getSvg().attr('width')), "width")
    assert.end();
  });

  if (config.data.length < 1) {
    test('check for no data condition in ' + placeholder, function (t) {
      var svgText = $(config.placeholder).text();
      // var divText = $("div text").text();
      t.ok(svgText, "No Data Available")
      t.end();
    })
  }

  function getSvg() {
    return $(placeholder);
  }

}