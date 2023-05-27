// function setup (){
//     frameRate(2.5);
//     createCanvas(500, 500);
//     background('#acacac');
// }
// var i = 0
// var a = 0
// function draw (){
//     background('#acacac')
//     fill(0,255,0);
//     if(i===1 && a===1){
//         ellipse(150,250,50,50);
//         ellipse(350,250,50,50);
//         i=0
//     }
//     else if(i===1 && a===2){
//         ellipse(150,250,50,50);
//         i=0
//     }
//     else if(i===1 && a===3){
//         ellipse(350,250,50,50);
//         i=0
//     }
//     else if (i===1 && a===0){i=0}
//     else{i=1}
//     //leftArrow(350,250)
// }

var matrix = [
    [1, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 6, 6, 6, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 2],
    [0, 0, 0, 0, 0, 4, 2, 0, 0, 0, 0, 0, 0, 0, 6, 2, 6, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0],
    [0, 0, 0, 4, 2, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 6, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 6, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 4, 3, 0, 0, 4, 0, 0, 0, 1, 6, 2, 6, 0, 5, 0, 0, 5, 0, 0, 3, 0, 0, 0, 0, 0, 0, 1, 0, 2, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 6, 1, 6, 0, 0, 0, 3, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 4, 1, 0, 1, 0, 0, 0, 0, 3, 6, 0, 6, 0, 5, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 3, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 3, 6, 0, 6, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 4, 3, 0, 1, 0, 0, 3, 0, 0, 6, 0, 6, 0, 0, 0, 0, 5, 0, 0, 3, 0, 1, 0, 0, 3, 0, 0, 0, 0, 0, 0],
    [0, 0, 2, 4, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 6, 0, 0, 0, 2, 0, 0, 1, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 6, 0, 2, 0, 5, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 6, 0, 6, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 4, 1, 0, 0, 0, 1, 4, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 5, 4, 0, 2, 0, 0, 2, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 2, 1, 4, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 3, 0, 0, 0, 2],
    [0, 0, 0, 4, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 5, 0, 0, 0, 0, 0, 0, 2, 0, 0],
    [0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 5, 0, 0, 5, 2, 0, 0, 0, 5, 1, 5, 0, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 5, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 4, 4, 0, 0, 3, 0, 0, 0, 0, 0, 0, 1, 0, 2, 0, 0, 5, 0, 0, 0, 0, 0, 3, 0, 5, 0, 0, 0, 0, 1, 0, 2, 0, 0],
    [0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 3, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 3, 0, 1, 0, 0, 0, 4, 3, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 3, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 5, 0, 0, 0, 0, 3, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 4, 0, 0, 0, 0, 3, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 3, 0, 1, 0, 0, 3, 0, 0, 0, 5, 0, 4, 5, 0, 0, 0, 0, 0, 3, 0, 1, 0, 0, 3, 0, 0, 0, 0, 0, 0],
    [0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 2, 5, 0, 1, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 0, 0, 2, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 4, 0, 4, 0, 2, 0, 0, 2, 0, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 4, 4, 0, 0, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0]
];

class creatures{
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        this.energy = 10;
        this.directions = [
         [this.x - 1, this.y - 1],
         [this.x    , this.y - 1],
         [this.x + 1, this.y - 1],
         [this.x - 1, this.y    ],
         [this.x + 1, this.y    ],
         [this.x - 1, this.y + 1],
         [this.x    , this.y + 1],
         [this.x + 1, this.y + 1]
        ];
    }
}

class Grass extends creatures{
    chooseCell(character) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0  && x < matrix[0].length && y >=0 && y < matrix.length){
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if(newCell && this.multiply >= 5){
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 1;
 
            var newGrass = new Grass(newX, newY, 1);
            grassArr.push(newGrass);
            this.multiply = 0;
        }
 
    }    
     
}

class GrassEater extends creatures{
    getNewCoordinates(){
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character){
        var found = [];
        this.getNewCoordinates();
        for (var i in this.directions){
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
                if (matrix[y][x] == character){
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    move(){
        this.getNewCoordinates();
        var cells = this.chooseCell(0);
        var newCell = random(cells);
        if (newCell){
            matrix[this.y][this.x] = 0;
            var newX = newCell[0];
            var newY = newCell[1];
            this.x = newX;
            this.y = newY;
            matrix[this.y][this.x] = 2;
        }
    }

    eat(){
        this.getNewCoordinates();
        var cells = this.chooseCell(1);
        var newCell = random(cells);
        if (newCell){
            this.energy++;
            matrix[this.y][this.x] = 0;
            var newX = newCell[0];
            var newY = newCell[1];
            this.x = newX;
            this.y = newY;
            matrix[this.y][this.x] = 2;
            for (var i in grassArr){
                if (newX == grassArr[i].x && newY == grassArr[i].y){
                    grassArr.splice(i, 1);
                    break;
                }
            }
        }
        else{
            this.energy--;
            this.move()
        }
    }
    mul(){
        this.getNewCoordinates();
        var cells = this.chooseCell(0);
        var newCell = random(cells);
        if ((newCell) && (this.energy >= 8)){
            var newX = newCell[0];
            var newY = newCell[1];
            var grE = new GrassEater(newX, newY, this.index);
            grassEaterArray.push(grE);
            matrix[newY][newX] = 2;
            this.energy = 3;
        }
        else if (this.energy <= 0){
            this.die()
        }
        else{
            this.eat()
        }
    }


    die(){
        matrix[this.y][this.x] = 0;
        for (var i in grassEaterArray){
            if (this.x == grassEaterArray[i].x && this.y == grassEaterArray[i].y){
                grassEaterArray.splice(i, 1);
                break;
            }
        }
    }
}

class Predator extends creatures{
    getNewCoordinates(){
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character){
        var found = [];
        this.getNewCoordinates();
        for (var i in this.directions){
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
                if (matrix[y][x] == character){
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    move(){
        this.getNewCoordinates();
        var cells = this.chooseCell(0);
        var newCell = random(cells);
        if (newCell){
            matrix[this.y][this.x] = 0;
            var newX = newCell[0];
            var newY = newCell[1];
            this.x = newX;
            this.y = newY;
            matrix[this.y][this.x] = 3;
        }
    }

    eat(){
        this.getNewCoordinates();
        var cells = this.chooseCell(2);
        var newCell = random(cells);
        if (newCell){
            this.energy++;
            matrix[this.y][this.x] = 0;
            var newX = newCell[0];
            var newY = newCell[1];
            this.x = newX;
            this.y = newY;
            matrix[this.y][this.x] = 3;
            for (var i in grassEaterArray){
                if (newX == grassEaterArray[i].x && newY == grassEaterArray[i].y){
                    grassEaterArray.splice(i, 1);
                    break;
                }
            }
        }
        else{
            this.energy--;
            this.move()
        }
    }
    mul(){
        this.getNewCoordinates();
        var cells = this.chooseCell(0);
        var newCell = random(cells);
        if ((newCell) && (this.energy >= 4)){
            var newX = newCell[0];
            var newY = newCell[1];
            var Pr = new Predator(newX, newY, this.index);
            predatorArr.push(Pr);
            matrix[newY][newX] = 3;
            this.energy = 5;
        }
        else if (this.energy <= 0){
            this.die()
        }
        else{
            this.eat()
        }
    }
    die(){
        matrix[this.y][this.x] = 0;
        for (var i in predatorArr){
            if (this.x == predatorArr[i].x && this.y == predatorArr[i].y){
                predatorArr.splice(i, 1);
                break;
            }
        }
    }
}

class PredatorEater extends creatures{
    getNewCoordinates(){
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character){
        var found = [];
        this.getNewCoordinates();
        for (var i in this.directions){
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
                if (matrix[y][x] == character){
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    move(){
        this.getNewCoordinates();
        var cells = this.chooseCell(0);
        var newCell = random(cells);
        if (newCell){
            matrix[this.y][this.x] = 0;
            var newX = newCell[0];
            var newY = newCell[1];
            this.x = newX;
            this.y = newY;
            matrix[this.y][this.x] = 4;
        }
    }

    eat(){
        this.getNewCoordinates();
        var cells = this.chooseCell(3);
        var newCell = random(cells);
        if (newCell){
            this.energy++;
            matrix[this.y][this.x] = 0;
            var newX = newCell[0];
            var newY = newCell[1];
            this.x = newX;
            this.y = newY;
            matrix[this.y][this.x] = 4;
            for (var i in predatorArr){
                if (newX == predatorArr[i].x && newY == predatorArr[i].y){
                    predatorArr.splice(i, 1);
                    break;
                }
            }
        }
        else{
            this.energy--;
            this.move()
        }
    }
    mul(){
        this.getNewCoordinates();
        var cells = this.chooseCell(0);
        var newCell = random(cells);
        if ((newCell) && (this.energy >= 8)){
            var newX = newCell[0];
            var newY = newCell[1];
            var Pr = new PredatorEater(newX, newY, this.index);
            predatorEaterArr.push(Pr);
            matrix[newY][newX] = 4;
            this.energy = 5;
        }
        else if (this.energy <= 0){
            this.die()
        }
        else{
            this.eat()
        }
    }
    die(){
        matrix[this.y][this.x] = 0;
        for (var i in predatorEaterArr){
            if (this.x == predatorEaterArr[i].x && this.y == predatorEaterArr[i].y){
                predatorEaterArr.splice(i, 1);
                break;
            }
        }
    }
}

class PredatorEaterEater extends creatures{
    getNewCoordinates(){
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character){
        var found = [];
        this.getNewCoordinates();
        for (var i in this.directions){
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
                if (matrix[y][x] == character){
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    move(){
        this.getNewCoordinates();
        var cells = this.chooseCell(0);
        var newCell = random(cells);
        if (newCell){
            matrix[this.y][this.x] = 0;
            var newX = newCell[0];
            var newY = newCell[1];
            this.x = newX;
            this.y = newY;
            matrix[this.y][this.x] = 5;
        }
    }

    eat(){
        this.getNewCoordinates();
        var cells = this.chooseCell(3);
        var newCell = random(cells);
        if (newCell){
            this.energy++;
            matrix[this.y][this.x] = 0;
            var newX = newCell[0];
            var newY = newCell[1];
            this.x = newX;
            this.y = newY;
            matrix[this.y][this.x] = 5;
            for (var i in predatorArr){
                if (newX == predatorEaterEaterArr[i].x && newY == predatorEaterEaterArr[i].y){
                    predatorEaterEaterArr.splice(i, 1);
                    break;
                }
            }
        }
        else{
            this.energy--;
            this.move()
        }
    }
    mul(){
        this.getNewCoordinates();
        var cells = this.chooseCell(0);
        var newCell = random(cells);
        if ((newCell) && (this.energy >= 8)){
            var newX = newCell[0];
            var newY = newCell[1];
            var Pr = new PredatorEaterEater(newX, newY, this.index);
            predatorEaterEaterArr.push(Pr);
            matrix[newY][newX] = 4;
            this.energy = 5;
        }
        else if (this.energy <= 0){
            this.die()
        }
        else{
            this.eat()
        }
    }
    die(){
        matrix[this.y][this.x] = 0;
        for (var i in predatorEaterEaterArr){
            if (this.x == predatorEaterEaterArr[i].x && this.y == predatorEaterEaterArr[i].y){
                predatorEaterEaterArr.splice(i, 1);
                break;
            }
        }
    }
}

class PredatorEaterEaterEater extends creatures{
    getNewCoordinates(){
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character){
        var found = [];
        this.getNewCoordinates();
        for (var i in this.directions){
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
                if (matrix[y][x] == character){
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    move(){
        this.getNewCoordinates();
        var cells = this.chooseCell(0);
        var newCell = random(cells);
        if (newCell){
            matrix[this.y][this.x] = 0;
            var newX = newCell[0];
            var newY = newCell[1];
            this.x = newX;
            this.y = newY;
            matrix[this.y][this.x] = 6;
        }
    }

    eat(){
        this.getNewCoordinates();
        var cells = this.chooseCell(3);
        var newCell = random(cells);
        if (newCell){
            this.energy++;
            matrix[this.y][this.x] = 0;
            var newX = newCell[0];
            var newY = newCell[1];
            this.x = newX;
            this.y = newY;
            matrix[this.y][this.x] = 6;
            for (var i in predatorEaterEaterEaterArr){
                if (newX == predatorEaterEaterEaterArr[i].x && newY == predatorEaterEaterEaterArr[i].y){
                    predatorEaterEaterEaterArr.splice(i, 1);
                    break;
                }
            }
        }
        else{
            this.energy--;
            this.move()
        }
    }
    mul(){
        this.getNewCoordinates();
        var cells = this.chooseCell(0);
        var newCell = random(cells);
        if ((newCell) && (this.energy >= 8)){
            var newX = newCell[0];
            var newY = newCell[1];
            var Pr = new PredatorEaterEaterEater(newX, newY, this.index);
            predatorEaterEaterEaterArr.push(Pr);
            matrix[newY][newX] = 6;
            if (season == 1){
                this.energy = 5;
            }
            //this.energy = 5;
        }
        else if (this.energy <= 0){
            this.die()
        }
        else{
            this.eat()
        }
    }
    die(){
        matrix[this.y][this.x] = 0;
        for (var i in predatorEaterEaterEaterArr){
            if (this.x == predatorEaterEaterEaterArr[i].x && this.y == predatorEaterEaterEaterArr[i].y){
                predatorEaterEaterEaterArr.splice(i, 1);
                break;
            }
        }
    }
}

var side = 30;
var grassArr = [];
var grassEaterArray = [];
var predatorArr = [];
var predatorEaterArr = [];
var predatorEaterEaterArr = [];
var predatorEaterEaterEaterArr = [];
var season = 0;
var weather = 0;
function setup(){
    frameRate(20);
    
    background('#acacac');
    for(var y=0;y<matrix.length;y++){
        for (var x=0;x<matrix[y].length;x++){
            if (matrix[y][x] == 1) {
                var grass=new Grass(x,y)
                grassArr.push(grass)
            }  
            else if (matrix[y][x] == 2){
                var grassE=new GrassEater(x,y)
                grassEaterArray.push(grassE);
            }
            else if (matrix[y][x] == 3){
                var pred=new Predator(x,y)
                predatorArr.push(pred);
            }
            else if (matrix[y][x] == 4){
                var predE=new PredatorEater(x,y)
                predatorEaterArr.push(predE);
            }
            else if (matrix[y][x] == 5){
                var predEE=new PredatorEaterEater(x,y)
                predatorEaterEaterArr.push(predEE);
            }
            else if (matrix[y][x] == 6){
                var predEE = new PredatorEaterEaterEater(x,y)
                predatorEaterEaterEaterArr.push(predEE);
            }
        }  
    }
    createCanvas(matrix.length * side, matrix.length * side);
}

var grassNum
var predatorNum
var grassEaterNum
var predatorEaterNum
var predatorEaterEaterNum
var predatorEaterEaterEaterNum

var counts = []

function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1 && weather == 0) {
                fill("green");
            }
            else if (matrix[y][x] == 1 && weather == 1) {
                fill("darkgreen");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("lightblue");
            }
            else if (matrix[y][x] == 4) {
                fill("red");
            }
            else if (matrix[y][x] == 5) {
                fill("black");
            }
            else if (matrix[y][x] == 6) {
                fill("orange");
            }
            rect(x * side, y * side, side, side);
        }
    }
    for (var i in grassArr){
        grassArr[i].mul();
    }
    for (var i in grassEaterArray){
        grassEaterArray[i].mul();
    }
    for (var i in predatorArr){
        predatorArr[i].mul();
    }
    for (var i in predatorEaterArr){
        predatorEaterArr[i].mul();
    }
    for (var i in predatorEaterEaterArr){
        predatorEaterEaterArr[i].mul();
    }
    for (var i in predatorEaterEaterEaterArr){
        predatorEaterEaterEaterArr[i].mul();
    }
    grassNum = grassArr.length
    grassEaterNum = grassEaterArray.length
    predatorNum = predatorArr.length
    predatorEaterNum = predatorEaterArr.length
    predatorEaterEaterNum = predatorEaterEaterArr.length
    predatorEaterEaterEaterNum = predatorEaterEaterEaterArr.length

    document.getElementById("grass").innerHTML = grassNum
    document.getElementById("grassEater").innerHTML = grassEaterNum
    document.getElementById("predator").innerHTML = predatorNum
    document.getElementById("predatorEater").innerHTML = predatorEaterNum
    document.getElementById("predatorEaterEater").innerHTML = predatorEaterEaterNum
    document.getElementById("predatorEaterEaterEater").innerHTML = predatorEaterEaterEaterNum

    counts = [grassNum, grassEaterNum, predatorNum, predatorEaterNum, predatorEaterEaterNum, predatorEaterEaterEaterNum]
}

var seasonShow = document.getElementById("season1")
var weatherShow = document.getElementById("weather1")

function seasonChange(){
    if(season == 0){
        season = 1
        seasonShow.innerHTML = "summer"
    }
    else{
        season = 0
        seasonShow.innerHTML = "winter"
    }
}
function weatherChange(){
    if(weather == 0){
        weather = 1
        weatherShow.innerHTML = "rain"
    }
    else{
        weather = 0
        weatherShow.innerHTML = "sunny"
    }
}

var seasonButton = document.getElementById("season0")
seasonButton.addEventListener("click", seasonChange)

var weatherButton = document.getElementById("weather0")
weatherButton.addEventListener("click", weatherChange)