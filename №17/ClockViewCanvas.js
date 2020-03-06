export function ManViewWebPageCanvas(Id, city, Timezone) {
    let myModel = null;
    let myField = null;

    this.start = function(model, field) {
        myModel = model;
        myField = field;
        createBtnsCanvas(Id, city)
    }

    this.update = function() {
        moveHands(Id, myModel.hours + Timezone, myModel.minutes, myModel.seconds);
    }
}

function createBtnsCanvas(Id, city) {
    let btns = document.createElement('div');
    btns.style.display = 'block';

    let info = document.createElement('p');
    info.textContent = city;
    info.style.display = 'inline-block';

    let startBtn = document.createElement('input');
    startBtn.type = 'button';
    startBtn.value = 'Старт';
    startBtn.setAttribute('class', 'startBtn');

    let stopBtn = document.createElement('input');
    stopBtn.type = 'button';
    stopBtn.value = 'Стоп';
    stopBtn.setAttribute('class', 'stopBtn');

    let clock = document.getElementById(Id);
    let canvas = document.createElement('canvas');
    canvas.className = Id;
    canvas.setAttribute('width', '300');
    canvas.setAttribute('height', '300');

    btns.appendChild(startBtn);
    btns.appendChild(stopBtn);
    btns.appendChild(info);
    clock.appendChild(btns);
    clock.appendChild(canvas);
}

function moveHands(Id, hours, minutes, seconds) {
    let canvas = document.querySelector(`#${Id} .${Id}`)
    ctx = canvas.getContext('2d');
    let width = parseFloat(canvas.getAttribute('width'));
    let height = parseFloat(canvas.getAttribute('height'));
    const centerClockX = width / 2;
    const centerClockY = height / 2;
    let pi = Math.PI;

    function createCircle() {
        ctx.beginPath();
        let radiusClock = width / 2 - 2;
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'yellow';
        ctx.fillStyle = 'yellow';
        ctx.arc(centerClockX, centerClockY, radiusClock, 0, 2 * pi, false);
        ctx.stroke();
        ctx.fill();
        ctx.closePath()
    }

    function createNumber() {
        const axialRadiusDigits = width / 2.5;
        let radiusDigits = width / 16;

        for (let i = 30; i <= 360; i += 30) {
            let angleClockFace = i / 180 * Math.PI;
            let clockFaceX = centerClockX + axialRadiusDigits * Math.sin(angleClockFace);
            let clockFaceY = centerClockY - axialRadiusDigits * Math.cos(angleClockFace);
            let textSize = width / 18 + 'px';

            ctx.beginPath();
            ctx.strokeStyle = 'green';
            ctx.fillStyle = 'green';
            ctx.lineWidth = 2;
            ctx.arc(clockFaceX, clockFaceY, radiusDigits, 0, 2 * pi, false);
            ctx.stroke();
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.fillStyle = 'black';
            ctx.lineWidth = 2;
            ctx.textBaseline = 'middle';
            ctx.font = `${textSize} Arial`;
            ctx.textAlign = "center";
            ctx.fillText(i / 30, clockFaceX, clockFaceY);
            ctx.stroke();
            ctx.fill();
            ctx.closePath();
        }
    }

    let angleHours = (hours % 12) * 30 + minutes * 0.5;
    let angleMinutes = minutes * 6;
    let angleSeconds = seconds * 6;

    let hoursLength = width / 3;
    let minutesLength = width / 2.2;
    let secondsLength = width / 2.2;

    function creareHoursHand() {
        ctx.beginPath();
        ctx.lineWidth = width / 50;
        ctx.strokeStyle = 'black';
        ctx.lineCap = 'round';
        ctx.moveTo(centerClockX, centerClockY);
        ctx.lineTo(centerClockX + hoursLength * Math.cos(pi / 2 - angleHours * (pi / 180)),
            centerClockY - hoursLength * Math.sin(pi / 2 - angleHours * (pi / 180)));
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    }

    function createMinuteHand() {
        ctx.beginPath();
        ctx.lineWidth = width / 80;
        ctx.strokeStyle = 'black';
        ctx.lineCap = 'round';
        ctx.moveTo(centerClockX, centerClockY);
        ctx.lineTo(centerClockX + minutesLength * Math.cos(pi / 2 - angleMinutes * (pi / 180)),
            centerClockY - minutesLength * Math.sin(pi / 2 - angleMinutes * (pi / 180)));
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    }

    function createSecondHand() {
        ctx.beginPath();
        ctx.lineWidth = width / 250;
        ctx.strokeStyle = 'red';
        ctx.lineCap = 'round';
        ctx.moveTo(centerClockX, centerClockY);
        ctx.lineTo(centerClockX + secondsLength * Math.cos(pi / 2 - angleSeconds * (pi / 180)),
            centerClockY - secondsLength * Math.sin(pi / 2 - angleSeconds * (pi / 180)));
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    }

    createCircle();
    createNumber()
    creareHoursHand();
    createMinuteHand();
    createSecondHand();
}