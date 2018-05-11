export function svgDimensionCheck(selector, height, width) {
// check if selector dimension match given height and width
  selector = selector || "svg"
  height = height || 500;
  width = width || 500;
  
  test('check SVG height and width', function (assert) {
    assert.equal(height, parseInt($(selector).css('height')), "height")
    assert.equal(width, parseInt($(selector).css('width')), "width")
    assert.end();
  });


}