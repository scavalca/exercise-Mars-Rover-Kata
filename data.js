// Declaracao dos obejtos

let rover = {
    x : 0,
    y : 0,
    direction : "N",
    travelLog : [[0, 0]]
  }

// Declaração do grid 10x10

let grid = [
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]

// Declaração das funções que fazem o robo virar para direita ou esquerda

function turnLeft(robot) {  
    switch(robot.direction) {
      case "N" :
        robot.direction = "W";
        break;
      case "W" :
        robot.direction = "S";
        break;
      case "S" :
        robot.direction = "E";
        break;
      case "E" :
        robot.direction = "N";
        break;
    } 
    return robot.direction;
}
  
function turnRight(robot) { 
    switch(robot.direction) {
      case "N" :
        robot.direction = "E";
        break;
      case "E" :
        robot.direction = "S";
        break;
      case "S" :
        robot.direction = "W";
        break;
      case "W" :
        robot.direction = "N"
        break;
    }
    return robot.direction;
} 

// Declaração das funções para o robo ir para frente ou para trás

function moveForward(robot) {
    let auxX = robot.x;
    let auxY = robot.y;
    switch(robot.direction) 
    {
        case "W" :
            auxX--;
            break;
        case "E" :
            auxX++;
            break;
        case "N" :
            auxY--;
            break;
        case "S" :
            auxY++;
            break;
    }
    if (podeMover(auxX,auxY)){
        robot.x = auxX;
        robot.y = auxY;
    }
    else {
        console.log('bateu em algum lugar');
    }

    return robot;
}


function moveBackward(robot) {
    let auxX = robot.x;
    let auxY = robot.y;
    switch(robot.direction) 
    {
        case "W" :
            auxX++;
            break;
        case "E" :
            auxX--;
            break;
        case "N" :
            auxY++;
            break;
        case "S" :
            auxY--;
            break;
    }
    if (podeMover(auxX,auxY)){
        robo.x = auxX;
        robo.y = auxY;
    }
    else {
        console.log('bateu em algum lugar');
    }
    return robot;
}

// Declaração da função para verificação de comandos
  
function commands(robot, ordem) {
    for (let i = 0; i < ordem.length; i++){
      let play = ordem[i];
      console.log ('Comando Atual: ' + play);
      if (play === "f") {
        robot = moveForward(robot);
      } else if (play === "b") {
        robot = moveBackward(robot);
      } else if (play === "r") {
        robot.direction = turnRight(robot);
      } else if (play === "l") {
        robot.direction = turnLeft(robot);
      } else {}
      console.log ('Estou apontando para direção: ' + robot.direction + ' e estou na posição: ' + robot.x + ','+ robot.y);
    }
    return robot;
  }

// Declaração da função de verificação de obstaculos

function podeMover(x,y){  
    let bateuParede;
    let bateuObstaculo;
    let resultado = false;
    if ((x < 0) || (x>9) || (y < 0) || (y > 9)) {
      bateuParede = true;
    } if ((grid[y][x] === 1)) {
      bateuObstaculo = true;
    } if (!bateuParede && !bateuObstaculo) { // Só pode mover se os dois forem falsos
        resultado = true;
    }
    return resultado;
}

// Chamadas das funções

console.log ('Estou apontando para direção: ' + rover.direction + ' e estou na posição: ' + rover.x + ','+ rover.y);
rover.direction = turnLeft(rover);
console.log ('Chamei o TunrLeft');

console.log ('Estou apontando para direção: ' + rover.direction + ' e estou na posição: ' + rover.x + ','+ rover.y);
rover.direction = turnLeft(rover);
console.log ('Chamei o TunrLeft');

console.log ('Estou apontando para direção: ' + rover.direction + ' e estou na posição: ' + rover.x + ','+ rover.y);
rover.direction = turnLeft(rover);
console.log ('Chamei o TunrLeft');

console.log ('Estou apontando para direção: ' + rover.direction + ' e estou na posição: ' + rover.x + ','+ rover.y);
rover = moveForward(rover);
console.log ('Chamei o MoveForward');

console.log ('Estou apontando para direção: ' + rover.direction + ' e estou na posição: ' + rover.x + ','+ rover.y);
rover = moveForward(rover);
console.log ('Chamei o MoveForward');

console.log ('Estou apontando para direção: ' + rover.direction + ' e estou na posição: ' + rover.x + ','+ rover.y);
console.log ('Vou chamar o Commmadns');
rover = commands(rover, 'rffrfflfrff');
console.log ('Estou apontando para direção: ' + rover.direction + ' e estou na posição: ' + rover.x + ','+ rover.y);