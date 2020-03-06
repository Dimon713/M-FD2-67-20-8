function createClock() {
    let clock = document.getElementById('clock');
    let ctx = clock.getContext('2d');
    const centerClockX = clock.width / 2;
    const centerClockY = clock.height / 2;
    const width = clock.width;
    const height = clock.height;
    let pi = Math.PI;

    ctx.beginPath();
    let radiusClock = width / 2 - 2;
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'yellow';
    ctx.fillStyle = 'yellow';
    ctx.arc(centerClockX, centerClockY, radiusClock, 0, 2 * pi, false);
    ctx.stroke();
    ctx.fill();
    ctx.closePath()

    for (let i = 30; i <= 360; i += 30) {
        let angleClockFace = i / 180 * Math.PI;
        const axialRadiusDigits = 204;
        let radiusDigits = 30;
        let clockFaceX = centerClockX + axialRadiusDigits * Math.sin(angleClockFace);
        let clockFaceY = centerClockY - axialRadiusDigits * Math.cos(angleClockFace);
        let textSize = 30 + 'px';

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
        ctx.font = '30px Arial';
        ctx.textAlign = "center";
        ctx.fillText(i / 30, clockFaceX, clockFaceY);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    }

    let currenTime = new Date();
    let hours = currenTime.getHours();
    let minutes = currenTime.getMinutes();
    let seconds = currenTime.getSeconds();

    let angleHours = (hours % 12) * 30 + minutes * 0.5;
    let angleMinutes = minutes * 6;
    let angleSeconds = seconds * 6;

    let hoursLength = width / 3;
    let minutesLength = width / 2.2;
    let secondsLength = width / 2.2;

    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.strokeStyle = 'black';
    ctx.lineCap = 'round';
    ctx.moveTo(centerClockX, centerClockY);
    ctx.lineTo(centerClockX + hoursLength * Math.cos(pi / 2 - angleHours * (pi / 180)),
        centerClockY - hoursLength * Math.sin(pi / 2 - angleHours * (pi / 180)));
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = 'black';
    ctx.lineCap = 'round';
    ctx.moveTo(centerClockX, centerClockY);
    ctx.lineTo(centerClockX + minutesLength * Math.cos(pi / 2 - angleMinutes * (pi / 180)),
        centerClockY - minutesLength * Math.sin(pi / 2 - angleMinutes * (pi / 180)));
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'red';
    ctx.lineCap = 'round';
    ctx.moveTo(centerClockX, centerClockY);
    ctx.lineTo(centerClockX + secondsLength * Math.cos(pi / 2 - angleSeconds * (pi / 180)),
        centerClockY - secondsLength * Math.sin(pi / 2 - angleSeconds * (pi / 180)));
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.fillText(currenTime.toLocaleTimeString(), centerClockX, centerClockY * 0.6);
    ctx.font = '30px Arial';
    ctx.closePath();
}

setInterval('createClock()', 1000);