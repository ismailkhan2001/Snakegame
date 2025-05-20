let snake = [{ x: 180, y: 180 }];
let direction = 'RIGHT';
let food = { x: 100, y: 100 };

function moveSnake() {
   let head = { ...snake[0] };

   switch (direction) {
      case 'UP':
         head.y -= 20;
         break;
      case 'DOWN':
         head.y += 20;
         break;
      case 'LEFT':
         head.x -= 20;
         break;
      case 'RIGHT':
         head.x += 20;
         break;
   }

   snake.unshift(head);
   snake.pop();
   renderGame();
}

function renderGame() {
   const snakeElement = document.getElementById('snake');
   snakeElement.style.top = `${ snake[0].y } px`;
   snakeElement.style.left = `${ snake[0].x } px`;
}

document.addEventListener('keydown', (e) => {
   if (e.key === 'ArrowUp') direction = 'UP';
   if (e.key === 'ArrowDown') direction = 'DOWN';
   if (e.key === 'ArrowLeft') direction = 'LEFT';
   if (e.key === 'ArrowRight') direction = 'RIGHT';
});

setInterval(moveSnake, 100);
function generateFood() {
  food = {
    x: Math.floor(Math.random() * 20) * 20,
    y: Math.floor(Math.random() * 20) * 20,
  };
  renderFood();
}

function renderFood() {
  const foodElement = document.getElementById('food');
  foodElement.style.top =` ${food.y}px`;
  foodElement.style.left = `${food.x}px`;
}

function checkCollision() {
  if (snake[0].x === food.x && snake[0].y === food.y) {
    snake.push({ ...snake[snake.length - 1] });
    generateFood();
  }
}

function moveSnake() {
  let head = { ...snake[0] };

  switch (direction) {
    case 'UP':
      head.y -= 20;
      break;
    case 'DOWN':
      head.y += 20;
      break;
    case 'LEFT':
      head.x -= 20;
      break;
    case 'RIGHT':
      head.x += 20;
      break;
  }

  snake.unshift(head);
  snake.pop();
  checkCollision();
  checkGameOver()
  renderGame();
}

setInterval(moveSnake, 100);
function checkGameOver() {
  const head = snake[0];

  // Check wall collisions
  if (head.x < 0 || head.x >= 400 || head.y < 0 || head.y >= 400) {
    alert('Game Over');
    resetGame();
  }

  // Check self collisions
  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      alert('Game Over');
      resetGame();
    }
  }
}

function resetGame() {
  snake = [{ x: 180, y: 180 }];
  direction = 'RIGHT';
  generateFood();
}

function moveSnake() {
  let head = { ...snake[0] };

  switch (direction) {
    case 'UP':
      head.y -= 20;
      break;
    case 'DOWN':
      head.y += 20;
      break;
    case 'LEFT':
      head.x -= 20;
      break;
    case 'RIGHT':
      head.x += 20;
      break;
  }

  snake.unshift(head);
  snake.pop();
  checkCollision();
  checkGameOver();
  renderGame();
}

setInterval(moveSnake, 100);