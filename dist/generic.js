(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.magiq = global.magiq || {}, global.magiq.gen = {})));
}(this, (function (exports) { 'use strict';

function colorFillCheck(selector,myColor) {
// check fill color aqgainst color
  selector = selector || "svg";
  // myColor = myColor || "#000"

  test('check color-fill for ' + selector, function (t) {

    $(selector).each(function () {
      var fill = ($(this).attr("fill")) || ($(this).css("fill"));
      if(myColor){
        t.equal(fill, myColor, "Color-Fill = " + fill);
      }else{
        t.ok(fill, "Color-Fill = " + fill);
      }
    });

    t.end();
  });

}

function colorStrokeCheck(selector,myColor) {

  selector = selector || "svg";
  // myColor = myColor || "Black"

  test('check color-stroke for ' + selector, function (t) {

    $(selector).each(function () {
      var stroke = ($(this).attr("stroke")) || ($(this).attr("stroke"));
      if(myColor){
        t.equal(stroke, myColor, "Color-Stroke = " + stroke);
      }else{
        t.ok(stroke, "Color-Stroke = " + stroke);
      }
    });

    t.end();
  });

}

function containerTextWrapCheck(selector,textSelector) {
// check if text is contaied in the parent element or overflowing
  selector = selector || 'g  rect';
  textSelector = textSelector || "g text"; 
  test("check text-wrap", function (t) {
    var textArr = [], rectArr = [];
    $(textSelector).each(function () {
      var text = ((this).getBoundingClientRect());
      textArr.push(text);
    });
    $(selector).each(function () {
      var rect = ((this).getBoundingClientRect());
      rectArr.push(rect);
    });

    _.each(textArr, function (d, i) {
      // var txtWidth = textArr[i].width;
      // var rctWidth = rectArr[i].width;
      // t.ok((txtWidth <= rctWidth), "txt" + txtWidth + "rect" + rctWidth);
      var width = textArr[i].width <= rectArr[i].width;
      var height = textArr[i].height <= rectArr[i].height;
      t.ok((width && height), "Text-Wrap/Text-overflow " + "Vertical-" + height + " Horizontal-" + width);
    });

    t.end();
  });

}

function countCheck(selector, count) {
// check count of elements == count
  selector = selector || "g";
  var numOfBars = count || 0;
  test("check number "+selector, function (t) {
    var count =$(selector).length;
    t.equal(count, numOfBars,count+"<- count vs data.len() ->"+numOfBars);
    t.end();
  });

}

function svgDimensionCheck(selector, height, width) {
// check if selector dimension match given height and width
  selector = selector || "svg";
  height = height || 500;
  width = width || 500;
  
  test('check SVG height and width', function (assert) {
    assert.equal(height, parseInt($(selector).css('height')), "height");
    assert.equal(width, parseInt($(selector).css('width')), "width");
    assert.end();
  });


}

function genericTests(config) {
// set of few basic checks
  var placeholder = config.placeholder || "svg";
  var width = config.width || 500;
  var height = config.height || 500;
  test('Libraries Check', function (t) {
    t.ok((window.jQuery && window._ && window.d3 && window.test), "All Libraries Loaded");
    t.end();
  });

  test('check if SVG is created', function (assert) {
    assert.notEqual(null, getSvg(), "SVG");
    assert.end();
  });

  test('check SVG height and width', function (assert) {
    assert.equal(height, parseInt(getSvg().attr('height')), "height");
    assert.equal(width, parseInt(getSvg().attr('width')), "width");
    assert.end();
  });

  if (config.data.length < 1) {
    test('check for no data condition in ' + placeholder, function (t) {
      var svgText = $(config.placeholder).text();
      // var divText = $("div text").text();
      t.ok(svgText, "No Data Available");
      t.end();
    });
  }

  function getSvg() {
    return $(placeholder);
  }

}

function horizontalOverlapCheck(selector) {
// check if any list of horizontal elemnts overlap eachother
  selector = selector || "svg > g";
  test("check overlap", function (t) {
    var leftArr = [];
    var rightArr = [];
    var textArr = [];
    $(selector).each(function () {
      var left = ((this).getBoundingClientRect().left);
      var right = ((this).getBoundingClientRect().right);
      var text = $(this).text();
      leftArr.push(left);
      rightArr.push(right);
      textArr.push(text);

    });

    for (var i = 1; i < leftArr.length; i++) {
      t.ok((rightArr[i - 1] < leftArr[i]), "Overlap Check =" + textArr[i]);

    }
    t.end();
  });
}

function noDataCheck(selector) {
// check for text in div or text 
  selector = selector || "text ";
  // if (config.data.length < 1) {
  test('check for no data condition in ' + selector, function (t) {
    var svgText = $(selector).text();
    // var divText = $("div text").text();
    t.ok(svgText, "No Data Available");
    t.end();
  });
  // }
}

function plotBoundaryCheck(selector, height, width, attrX, attrY) {
// check if selector is contained in args
  selector = selector || "g";
  height = height || 500;
  width = width || 500;
  attrX = attrX || "x";
  attrY = attrY || "y";

  test("Individual plot check", function (t) {
    $(selector).each(function () {
      var cy = ($(this).attr(attrX));
      var cx = ($(this).attr(attrY));
      t.ok(cy >= 0 && cy < height, "plot(y) =" + cy);
      // t.ok(cy >= 0, "Height boundary check");
      t.ok(cx >= 0 && cx < width, "plot(x) =" + cx);
    });
    t.end();
  });

}

function textCheck(selector) {
// get text from seledctor and print
  selector = selector || "svg text";

  test("label check for " + selector, function (t) {
    try {
      $(selector).each(function () {
        var text = ($(this).text());
        t.ok(text, "Text:" + text);
      });
    } catch (err) {
      t.fail("No Text:" + err);
    }
    t.end();
  });
}

function textAlignCheck(selector,align) {
// check if text has the given alignment
  selector = selector || "text";
  align = align || "center";
  test("check text-"+align, function (t) {
    var anchor;
    $(selector).each(function () {
      anchor = ($(this).attr("text-anchor")) || ($(this).css("text-anchor"));
      t.ok((anchor == align), "Text Anchor:" + anchor);
      // t.ok((anchor == "middle"), "Text Anchor:" + anchor)
    });
    t.end();
  });


}

function textWrapCheck(selector, length) {
// text should not exceed the given length
  selector = selector || "text";
  length = length || 5;

  test("text-wrap check for " + selector, function (t) {
    try {
      $(selector).each(function () {
        var text = ($(this).text());
        t.ok(text.length<=length, "Text:" + text);
      });
    } catch (err) {
      t.fail("No Text:" + err);
    }
    t.end();
  });
}

function verticalOverlapCheck(selector) {
// check if list of vertical elements overlap eachother
  selector = selector || "svg > g";
  test("check overlap", function (t) {
    var topArr = [];
    var botArr = [];
    var textArr = [];
    $(selector).each(function () {
      var top = ((this).getBoundingClientRect().top);
      var bot = ((this).getBoundingClientRect().bottom);
      var text = $(this).text();
      topArr.push(top);
      botArr.push(bot);
      textArr.push(text);

    });

    for (var i = 1; i < topArr.length; i++) {
      t.ok((botArr[i - 1] > topArr[i]), "Overlap Check =" + textArr[i]);

    }
    t.end();
  });
}

function getRandomInt(min, max) {
  if (min == null || max == null) { min = 0; max = 100; }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomString() {
  var text = ""; var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < getRandomInt(); i++) { text += possible.charAt(Math.floor(Math.random() * possible.length)); }
  return text;
}

//Generic

exports.colorFillCheck = colorFillCheck;
exports.colorStrokeCheck = colorStrokeCheck;
exports.containerTextWrapCheck = containerTextWrapCheck;
exports.countCheck = countCheck;
exports.svgDimensionCheck = svgDimensionCheck;
exports.genericTests = genericTests;
exports.horizontalOverlapCheck = horizontalOverlapCheck;
exports.noDataCheck = noDataCheck;
exports.plotBoundaryCheck = plotBoundaryCheck;
exports.textCheck = textCheck;
exports.textAlignCheck = textAlignCheck;
exports.textWrapCheck = textWrapCheck;
exports.verticalOverlapCheck = verticalOverlapCheck;
exports.getRandomInt = getRandomInt;
exports.getRandomString = getRandomString;

Object.defineProperty(exports, '__esModule', { value: true });

})));
