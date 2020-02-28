function createClock() {
    let svg = document.getElementById('clock');
    let widthSvg = parseFloat(svg.getAttribute('width'));
    let heightSvg = parseFloat(svg.getAttribute('height'));
    const svgNS = 'http://www.w3.org/2000/svg';

    let circle = document.createElementNS(svgNS, 'circle');
    circle.setAttribute('cx', widthSvg / 2);
    circle.setAttribute('cy', heightSvg / 2);
    circle.setAttribute('r', widthSvg > heightSvg ? heightSvg / 2 : widthSvg / 2);
    circle.setAttribute('fill', 'yellow');
    circle.setAttribute('stroke', 'none');
    svg.appendChild(circle);
    let getBoundingClientRect = circle.getBoundingClientRect();
    let centerClockX = getBoundingClientRect.left + getBoundingClientRect.width / 2;
    let centerClockY = getBoundingClientRect.top + getBoundingClientRect.height / 2;

    let digitalClock = document.createElementNS(svgNS, 'text');
    digitalClock.setAttribute('x', centerClockX);
    digitalClock.setAttribute('y', centerClockY * 0.6);
    digitalClock.setAttribute('id', 'digitalClock');
    digitalClock.setAttribute('font-size', 30);
    digitalClock.setAttribute('text-anchor', 'middle');
    digitalClock.setAttribute('dominant-baseline', 'central');
    svg.appendChild(digitalClock);

    for (let i = 30; i <= 360; i += 30) {
        let clockFace = document.createElementNS(svgNS, 'circle');
        let axialRadiusDigits = 204;
        let radiusDigits = 30;
        let angleClockFace = i / 180 * Math.PI;
        let clockFaceX = centerClockX + axialRadiusDigits * Math.sin(angleClockFace);
        let clockFaceY = centerClockY - axialRadiusDigits * Math.cos(angleClockFace);
        clockFace.setAttribute('cx', clockFaceX);
        clockFace.setAttribute('cy', clockFaceY);
        clockFace.setAttribute('r', radiusDigits);
        clockFace.setAttribute('fill', 'green');
        svg.appendChild(clockFace);

        let text = document.createElementNS(svgNS, 'text');
        text.setAttribute('x', clockFaceX);
        text.setAttribute('y', clockFaceY);
        text.textContent = i / 30;
        text.setAttribute('font-size', 30);
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('dominant-baseline', 'central');
        svg.appendChild(text);
    }

    let hoursHand = document.createElementNS(svgNS, 'line');
    hoursHand.setAttribute('x1', centerClockX);
    hoursHand.setAttribute('y1', centerClockY * 1.2);
    hoursHand.setAttribute('x2', centerClockX);
    hoursHand.setAttribute('y2', centerClockY * 0.4);
    hoursHand.setAttribute('id', 'hoursHand');
    hoursHand.setAttribute('stroke', 'black');
    hoursHand.setAttribute('stroke-width', 10);
    hoursHand.setAttribute('stroke-linecap', 'round');
    svg.appendChild(hoursHand);

    let minuteHand = document.createElementNS(svgNS, 'line');
    minuteHand.setAttribute('x1', centerClockX);
    minuteHand.setAttribute('y1', centerClockY * 1.2);
    minuteHand.setAttribute('x2', centerClockX);
    minuteHand.setAttribute('y2', centerClockY * 0.2);
    minuteHand.setAttribute('id', 'minuteHand');
    minuteHand.setAttribute('stroke', 'black');
    minuteHand.setAttribute('stroke-width', 6);
    minuteHand.setAttribute('stroke-linecap', 'round');
    svg.appendChild(minuteHand);

    let secondHand = document.createElementNS(svgNS, 'line');
    secondHand.setAttribute('x1', centerClockX);
    secondHand.setAttribute('y1', centerClockY * 1.2);
    secondHand.setAttribute('x2', centerClockX);
    secondHand.setAttribute('y2', centerClockY * 0.2);
    secondHand.setAttribute('id', 'secondHand');
    secondHand.setAttribute('stroke', 'red');
    secondHand.setAttribute('stroke-width', 2);
    secondHand.setAttribute('stroke-linecap', 'round');
    svg.appendChild(secondHand);
}

function moveHands() {
    let currenTime = new Date();
    let hours = currenTime.getHours();
    let minutes = currenTime.getMinutes();
    let seconds = currenTime.getSeconds();

    let angleHours = (hours % 12) * 30 + minutes * 0.5;
    let angleMinutes = minutes * 6;
    let angleSeconds = seconds * 6;

    let widthSvg = parseFloat(document.getElementById('clock').getAttribute('width')) / 2;
    let heightSvg = parseFloat(document.getElementById('clock').getAttribute('height')) / 2;

    document.getElementById('digitalClock').textContent = currenTime.toLocaleTimeString();
    document.getElementById('hoursHand').setAttribute('transform', `rotate(${angleHours} ${widthSvg} ${heightSvg})`);
    document.getElementById('minuteHand').setAttribute('transform', `rotate(${angleMinutes} ${widthSvg} ${heightSvg})`);
    document.getElementById('secondHand').setAttribute('transform', `rotate(${angleSeconds} ${widthSvg} ${heightSvg})`);
}
createClock();
window.onload = moveHands();
setInterval(function() {
    moveHands();
}, 1000);