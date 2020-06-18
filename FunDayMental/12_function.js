// example function
function wakeup() {
    console.log('Hello');
}

// การกำหนด พารามิตเตอร์แบบ druck type
// function พารามิเตอร์ 1 ตัว
function sayHello(name) {
    console.log('Hello '+name);
}

// function พารามิเตอร์หลายตัว
function calArea(width, height) {
    var area = width*height;
    return area;
}

// function expression
// เป็นการเก็บ funtion ไว้ในตัวแปล
var action = function (a, b) {
    return a*b;
}


// การเรียกใช้
wakeup();
sayHello('test');
// NaN ย่อมาจาก Not a Number
console.log("Area = "+calArea(12, 15));
console.log(action(5,10));