var Geometry;
(function (Geometry) {
    function calculateArea(width, height) {
        return width * height;
    }
    Geometry.calculateArea = calculateArea;
    function calculatePerimeter(width, height) {
        return 2 * (width + height);
    }
    Geometry.calculatePerimeter = calculatePerimeter;
})(Geometry || (Geometry = {}));
console.log(Geometry.calculateArea(10, 20));
console.log(Geometry.calculatePerimeter(40, 30));
