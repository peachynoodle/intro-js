function greet() {
    // get user input
    var name = prompt("What is your name?");
    var age = prompt("What is your age?");
    // write data to a specific part of a page (better than document.write)
    document.getElementById('message').innerHTML = "Hello, " + name + ". " + "I see that you're " + age + ".";
}

function changeColor() {
    // javascript can change CSS
    document.getElementById('message').style.backgroundColor = "#FFFF88";
}

function changeFont() {
    // javascript can change CSS
    document.getElementById('message').style.fontFamily = "Impact,Charcoal,sans-serif";
}

function rectanglePerimeter() {
    var base = prompt("What is the base of the rectangle?");
    var height = prompt("What is the height of the rectangle?");

    var perimeter = 2 * base + 2 * height;

    document.getElementById('answer').innerHTML = "The perimeter of the rectangle is " + perimeter + ".";
}

function triangleArea() {
    var base = prompt("What is the base of the triangle?");
    var height = prompt("What is the height of the triangle?");

    var area = (base * height)/2;

    document.getElementById('answer').innerHTML = "The area of the triangle is " + area + ".";
}

function circumference() {
    var radius = prompt("What is the radius of the circle?");

    var circumference = 2 * Math.PI * radius;

    document.getElementById('answer').innerHTML = "The circumference of the circle is " + circumference + ".";
}
