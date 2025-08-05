namespace Geometry{
    export function calculateArea(width: number, height: number): number{
        return width * height;
    }

    export function calculatePerimeter(width: number, height: number): number{
        return 2*(width+height);
    }
}

console.log(Geometry.calculateArea(10,20));
console.log(Geometry.calculatePerimeter(40,30));