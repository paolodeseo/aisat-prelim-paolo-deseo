let canvas = document.getElementById('canvas')
canvas.width = window.innerWidth * 0.7;
canvas.height = window.innerHeight * 0.9;
let ctx = canvas.getContext("2d");


class Circle {
    constructor(x, y, radius, weight) {
            this.radius = radius;
            this.x = radius;
            this.y = radius;    
            this.weight = weight;
    }
    
    update() {
        this.y = this.y + this.weight;

        if (this.y > canvas.height) {
            this.y = 0;

            let random = parseInt((Math.random() * canvas.width) + 1);
            this.x = random;
        }

    }

    draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
            ctx.stroke();
            ctx.closePath();
                }
            }


function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

   
    for(let i = 0; i < group.length; i++) {
        group[i].update();
        group[i].draw();
    }

    //circle.update();
    //circle.draw();
    requestAnimationFrame(animate);

}

const circle = new Circle(0, 0, 20, 2);
const circle2 = new Circle(5, 5, 28, 3);
const circle3 = new Circle(5, 5, 35, 3);
const circle4 = new Circle(5, 5, 40, 4);
const circle5 = new Circle(5, 5, 42, 5);
const circle6 = new Circle(5, 5, 50, 6);
const circle7 = new Circle(5, 5, 55, 7);
const circle8 = new Circle(5, 5, 60, 8);
const circle9 = new Circle(5, 5, 66, 9);
const circle10 = new Circle(5, 5, 70, 10);

let group = [circle, circle2, circle3, circle4, circle5, circle6, circle7, circle8, circle9, circle10,] 
animate(); 


//let random = parseInt(Math.random() * 100)

//console.log(random) 

// ctx.arc(this.x, this.y, this.radius, 0, 2*MATH.PI);
//let ash = new Circle(5, 5, 50);

//console.log("yeah object: " + yeah.radius)
//console.log("ash object: " + ash.radius)
