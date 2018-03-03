var gameBoardArray = [
    [0,0,0],
    [1,1,1],
    [0,0,0]
];


for(var x=0; x<3; x++) {
    for (var y=0;y<3;y++) {
        let currentCell = gameBoardArray[x][y];
        if (currentCell === 1){
            gameBoardArray[x][y] = { 'alive':true,
                                     'neigborsAlive':0,
                                     'x':x,
                                     'y':y               
                                    }
        }else if(currentCell === 0) {
        gameBoardArray[x][y] =     {
                                    'alive':false,
                                     'neigborsAlive':0,
                                     'x':x,
                                     'y':y
                                    }
        } else {
            throw(`Invalid Entry: ${this.x},${this.y}`);
        }
            
    }
}

var checkNeighbors = function(target) {
    target.neigborsAlive = 0;
    let isVaild = function(x,y){
        if (x >= 0 && x<= 2 && y >= 0 && y <= 2){
            return true;
        }
        else return false;
    }
    if(isVaild(target.x-1, target.y)  && gameBoardArray[target["x"]-1][target["y"]].alive){
        target.neigborsAlive ++;
    }
    if(isVaild(target.x+1, target.y) && gameBoardArray[target["x"]+1][target["y"]].alive){
        target.neigborsAlive ++;
    }
    if(isVaild(target.x, target.y-1) && gameBoardArray[target["x"]][target["y"]-1].alive){
        target.neigborsAlive ++;
    }
    if(isVaild(target.x, target.y+1) && gameBoardArray[target["x"]][target["y"]+1].alive){
        target.neigborsAlive ++;
    }
    if(isVaild(target.x-1,target.y-1) && gameBoardArray[target["x"]-1][target["y"]-1].alive){
        target.neigborsAlive ++;
    }
    if(isVaild(target.x+1, target.y+1) && gameBoardArray[target["x"]+1][target["y"]+1].alive){
        target.neigborsAlive ++;
    }
    if(isVaild(target.x-1, target.y+1) && gameBoardArray[target["x"]-1][target["y"]+1].alive){
        target.neigborsAlive ++;
    }
    if(isVaild(target.x+1, target.y-1) && gameBoardArray[target["x"]+1][target["y"]-1].alive){
        target.neigborsAlive ++;
    }
}
let aliveNextRound = function(target){
    var thisCell = document.querySelector('#c'+target.x+target.y);
    if (target.alive){
        if(target.neigborsAlive < 2 || target.neigborsAlive > 3){
            target.alive = false;
           // thisCell.classList.remove('alive');
        }
    } else if(target.neigborsAlive === 3){
        target.alive = true;
       // thisCell.classList.add('alive');
    }
    if(target.alive) {
        thisCell.classList.add('alive');
   } else {
       thisCell.classList.remove('alive');
   }
}

var updateBoard = function() {
    gameBoardArray.forEach(function(row){
        row.forEach(checkNeighbors);
        });
       // debugger;
    gameBoardArray.forEach(function(row){
        row.forEach(aliveNextRound);
    });
}

var table = document.querySelector('table');
table.addEventListener('click', updateBoard);

updateBoard();