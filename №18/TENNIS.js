let tennis = document.createElement('div');
tennis.id = 'tennis';
tennis.style.width = '700px';
tennis.style.height = '600px';
tennis.style.display = 'block';

let court = document.createElement('div');
court.id = 'court';
court.style.width = '700px';
court.style.height = '400px';
court.style.border = '1px solid black';
court.style.backgroundColor = '#F0EE7E';
court.style.display = 'block';
court.style.position = 'relative';

let btn = document.createElement('input');
btn.id = 'btn';
btn.type = 'button';
btn.value = 'старт!';
btn.style.width = '100px';
btn.style.height = '30px';
btn.style.fontSize = '20px';
btn.style.position = 'absolute';

let score = document.createElement('div');
score.style.fontSize = '50px';
score.style.textAlign = 'center';
score.id = 'score';
let score1 = document.createElement('span');
score1.id = 'score1';
score1.textContent = '0';
let score2 = document.createElement('span');;
score2.id = 'score2';
score2.textContent = '0';
let blank = document.createTextNode(':');

let racquet1 = document.createElement('div');
racquet1.id = 'racquet1';

let racquet2 = document.createElement('div');
racquet2.id = 'racquet2';

let ball = document.createElement('div');
ball.id = 'ball';


document.body.appendChild(tennis);
tennis.appendChild(btn);
tennis.appendChild(score);
score.appendChild(score1);
score.appendChild(blank);
score.appendChild(score2);
tennis.appendChild(court);
court.appendChild(racquet1);
court.appendChild(racquet2);
court.appendChild(ball);


class Racquet {
    constructor(selector, width, height, color, position, top, left) {
        this.$el = document.querySelector(`#${selector}`)
        this.$el.style.width = `${width}px`;
        this.$el.style.height = `${height}px`;
        this.$el.style.backgroundColor = color;
        this.$el.style.position = position;
        this.$el.style.top = `${top}px`;
        this.$el.style.left = `${left}px`;

        this.y = 125;
        this.speed = 0;
        this.score = 0;
    }
}

class Ball {
    constructor(selector, width, height, borderRadius, color, position, top, left) {
        this.$el = document.querySelector(`#${selector}`)
        this.$el.style.width = `${width}px`;
        this.$el.style.height = `${height}px`;
        this.$el.style.borderRadius = `${borderRadius}px`;
        this.$el.style.backgroundColor = color;
        this.$el.style.position = position;
        this.$el.style.left = `${top}px`;
        this.$el.style.top = `${left}px`;

        this.x = 325;
        this.y = 175;
        this.speedX = 0;
        this.speedY = 0;
    }
}

racquet1 = new Racquet('racquet1', 15, 150, 'green', 'absolute', 125, 0);
racquet2 = new Racquet('racquet2', 15, 150, 'blue', 'absolute', 125, 685);
ball = new Ball('ball', 50, 50, 25, 'red', 'absolute', 325, 175);

document.addEventListener('keydown', function(event) {
    if (event.keyCode === 16) {
        racquet1.speed = -10;
    };
    if (event.keyCode === 17) {
        racquet1.speed = 10;
    };
    if (event.keyCode === 38) {
        racquet2.speed = -10;
    };
    if (event.keyCode === 40) {
        racquet2.speed = 10;
    };
});

document.addEventListener('keyup', function(event) {
    if (event.keyCode === 16) {
        racquet1.speed = 0;
    };
    if (event.keyCode === 17) {
        racquet1.speed = 0;
    };
    if (event.keyCode === 38) {
        racquet2.speed = 0;
    };
    if (event.keyCode === 40) {
        racquet2.speed = 0;
    };
});

function moveObject() {
    racquet1.y += racquet1.speed;
    racquet2.y += racquet2.speed;

    ball.x += ball.speedX;
    ball.y += ball.speedY;

    if (racquet1.y <= 0) {
        racquet1.y = 0;
    };

    if (racquet2.y <= 0) {
        racquet2.y = 0;
    };

    if (racquet1.y > 250) {
        racquet1.y = 250;
    };

    if (racquet2.y > 250) {
        racquet2.y = 250;
    };

    if (ball.x <= 0 || ball.x >= 650) {
        ball.speedX = -ball.speedX;
    };

    if (ball.y <= 0 || ball.y >= 350) {
        ball.speedY = -ball.speedY;
    };

    if (ball.x <= 15) {
        if (ball.y > racquet1.y && ball.y < racquet1.y + 150) {
            ball.speedX = -ball.speedX;
        } else {
            ball.x = 0;
            racquet2.score++;
            stopGame()
        };
    };

    if (ball.x >= 635) {
        if (ball.y > racquet2.y && ball.y < racquet2.y + 150) {
            ball.speedX = -ball.speedX;
        } else {
            ball.x = 650;
            racquet1.score++;
            stopGame()
        };
    };

    document.querySelector('#racquet1').style.top = `${racquet1.y}px`;
    document.querySelector('#racquet2').style.top = `${racquet2.y}px`;

    document.querySelector('#ball').style.left = `${ball.x}px`;
    document.querySelector('#ball').style.top = `${ball.y}px`;

    document.querySelector('#score1').textContent = racquet1.score;
    document.querySelector('#score2').textContent = racquet2.score;
}

function startBall() {
    ball.x = 325;
    ball.y = 175;

    let random = randomInteger(-1, 1);
    if (random === 0) {
        random = -1;
    }
    ball.speedX = random * 5;
    ball.speedY = random * 5;
};

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

let timerId;

function startGame() {
    stopGame();
    racquet1.y = 125;
    racquet2.y = 125;
    timerId = setInterval(moveObject, 25);
};

function stopGame() {
    clearInterval(timerId);
};

document.querySelector('#btn').addEventListener('click', () => {
    startGame();
    startBall();
});