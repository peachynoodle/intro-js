function rectangleArea(b, h)
{
    var a = b * h;

    return a;
}

function rectanglePerimeter(b, h)
{
    var p = 2 * b + 2 * h;

    return p;
}

function triangleArea(b, h)
{
    var a = b * h / 2;

    return a;
}

function trianglePerimeter(b, s1, s2)
{
    var p = b + s1 +s2;

    return p;
}

function trapezoidArea(base1, base2, h)
{
    var a = (base1 + base2) / 2 * h;

    return a;
}

function rectangleVolume(w, l, h)
{
    var v = w * l * h;

    return v;
}

function slope(x1, y1, x2, y2)
{
    var m = (y2 - y1) / (x2 - x1);

    return m;
}

function distance(x1, y1, x2, y2)
{
    var a = (x2 - x1)
    var b = (y2 - y1)

    var d = Math.sqrt (Math.pow (a , 2) + Math.pow(b, 2) );

    return d;
}
