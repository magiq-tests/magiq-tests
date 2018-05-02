# About magiqTests

`magiqTests` is library for testing visual elements.
<!-- 
Install using:

    yarn install magiqtests
    # ... OR ...
    npm install --save magiqtests
 -->

- [generic.js](dist/generic.js): generic test cases for visuals
    - [magiq.gen.colorFillCheck(selector)](#magiqgencolorfillcheckselector) check for color fill
    - [magiq.gen.colorStrokeCheck(selector)](#magiqgencolorstrokecheckselector) check for color stroke
    - [magiq.gen.containerTextWrapCheck(selector,textSelector)](#magiqgencontainertextwrapcheckselectortextselector) check if the text-selector size exceeds the selector(container) size
    - [magiq.gen.countCheck(selector, count)](#magiqgencountcheckselector-count) check if the count of select == count(int)
    - [magiq.gen.svgDimensionCheck(selector, height, width)](#magiqgensvgdimensioncheckselector-height-width) check if selector height and width == hieght & widht
    - [magiq.gen.horizontalOverlapCheck(selector)](#magiqgenhorizontaloverlapcheckselector) check if any horizontal overlap exists
    - [magiq.gen.plotBoundaryCheck(selector, height, width)](#magiqgenplotboundarycheckselector-height-width) check all the plots are inside the container
    - [magic.gen.textCheck(selector)](#magicgentextcheckselector) check if text exists and print the same
    - [magiq.gen.textAlignCheck(selector,align)](#magiqgentextaligncheckselectoralign) check for text alignment
    - [magiq.gen.textWrapCheck(selector, length)](#magiqgentextwrapcheckselector-length) check if text < lenght
    - [magiq.gen.verticalOverlapCheck(selector)](#magiqgenverticaloverlapcheckselector) check if any vertical overlap exists

## magiq.gen.colorFillCheck(selector)

Example:

```
<script>
  magiq.gen.colorFillCheck("svg > g > path")
</script>
```

Pass arg viz. path, circle, rect etc. to check for the css("fill") property and print the same


## magiq.gen.colorStrokeCheck(selector)

Example:

```
<script>
  magiq.gen.colorStrokeCheck("svg > g > path")
</script>
```

Pass arg viz. path, circle, rect etc. to check for the css("stroke") property and print the same

## magiq.gen.containerTextWrapCheck(selector,textSelector)

Example:

```
<script>
  magiq.gen.containerTextWrapCheck("svg g rect","svg g rect text")
</script>
```

## magiq.gen.countCheck(selector, count)

Example:

```
<script>
  magiq.gen.countCheck("svg g rect.bar", 15)
</script>
```

## magiq.gen.svgDimensionCheck(selector, height, width)

Example:

```
<script>
  magiq.gen.svgDimensionCheck("svg", 500, 500)
</script>
```

## magiq.gen.horizontalOverlapCheck(selector)

Example:

```
<script>
  magiq.gen.horizontalOverlapCheck("svg x.axis")
</script>
```

## magiq.gen.plotBoundaryCheck(selector, height, width)

Example:

```
<script>
  magiq.gen.plotBoundaryCheck("svg g rect.bar", 500, 500)
</script>
```

## magic.gen.textCheck(selector)

Example:

```
<script>
  magic.gen.textCheck("svg text")
</script>
```

## magiq.gen.textAlignCheck(selector,align)

Example:

```
<script>
  magiq.gen.textAlignCheck("svg text","center")
</script>
```

## magiq.gen.textWrapCheck(selector, length)

Example:

```
<script>
  magiq.gen.textWrapCheck("svg rect text", 7)
</script>
```

## magiq.gen.verticalOverlapCheck(selector)

Example:

```
<script>
  magiq.gen.verticalOverlapCheck("svg g y.axis")
</script>
```