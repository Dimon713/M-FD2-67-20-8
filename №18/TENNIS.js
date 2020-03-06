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
racquet1.style.width = '15px';
racquet1.style.height = '150px';
racquet1.style.backgroundColor = 'green';
racquet1.style.position = 'absolute';
racquet1.style.top = '125px';
racquet1.style.left = '0px';

let racquet2 = document.createElement('div');
racquet2.id = 'racquet2';
racquet2.style.width = '15px';
racquet2.style.height = '150px';
racquet2.style.backgroundColor = 'blue';
racquet2.style.position = 'absolute';
racquet2.style.top = '125px';
racquet2.style.right = '0px';

let ball = document.createElement('div');
ball.id = 'ball';
ball.style.width = '50px';
ball.style.height = '50px';
ball.style.borderRadius = '25px';
ball.style.backgroundColor = 'red';
ball.style.position = 'absolute';
ball.style.left = '325px';
ball.style.top = '175px';

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

function Racquet() {
    this.y = 125;
    this.speed = 0;
    this.score = 0;
};

racquet1 = new Racquet();
racquet2 = new Racquet();

function Ball() {
    this.x = 175;
    this.y = 325;
    this.speedX = 0;
    this.speedY = 0;
}

ball = new Ball();

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
    ball.x = 175;
    ball.y = 325;
    let way = randomInteger(-2, 2);
    if (way === 0) {
        startBall();
    }

    ball.speedX = 3;
    ball.speedY = way * 2;
};

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

let timerId;

function startGame() {
    timerId = setInterval(moveObject, 25);
};

function stopGame() {
    clearInterval(timerId);
};

document.querySelector('#btn').addEventListener('click', () => {
    startGame();
    startBall();
});