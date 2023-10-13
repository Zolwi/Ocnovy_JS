function calculateTriangleArea(a, b, c) {
var s = (a + b + c) / 2;
var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
return area;
}

var A = 5;
var B = 7;
var C = 8;
var triangleArea = calculateTriangleArea(A, B, C);
console.log("Площадь треугольника: " + triangleArea);