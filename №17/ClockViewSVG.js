export class ManViewWebPageSVG {
    constructor(Id, city, Timezone) {
        this.Id = Id;
        this.city = city;
        this.Timezone = Timezone;
    }

    start(model, field) {
        this.myModel = model;
        this.myField = field;

        this.viewClockSVG(this.Id, this.city);

        this.hoursHand = this.myField.querySelector('.hoursHand');
        this.minuteHand = this.myField.querySelector('.minuteHand');
        this.secondHand = this.myField.querySelector('.secondHand');
        this.widthSvg = this.myField.getAttribute('width');
        this.heightSvg = this.myField.getAttribute('height');
    }

    update() {
        this.hoursHand.setAttribute('transform', `rotate(${this.myModel.angleHours+this.Timezone*30} ${this.widthSvg/2} ${this.heightSvg/2})`);
        this.minuteHand.setAttribute('transform', `rotate(${this.myModel.angleMinutes} ${this.widthSvg/2} ${this.heightSvg/2})`);
        this.secondHand.setAttribute('transform', `rotate(${this.myModel.angleSeconds} ${this.widthSvg/2} ${this.heightSvg/2})`);
    }

    viewClockSVG(Id, city) {
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
        clock.setAttribute('width', '300');
        clock.setAttribute('height', '300');
        const svgNS = 'http://www.w3.org/2000/svg';
        let svg = document.createElementNS(svgNS, 'svg');
        let widthSvg = clock.getAttribute('width');
        let heightSvg = clock.getAttribute('height');
        let centerClockX = widthSvg / 2;
        let centerClockY = heightSvg / 2;

        let digitalClockHeight = widthSvg / 4.5;
        let hoursHandBegin = centerClockY * 1.2;
        let hoursHandEnd = centerClockY * 0.4;
        let minuteHandBegin = centerClockY * 1.2;
        let minuteHandEnd = centerClockY * 0.2;
        let secondHandBegin = centerClockY * 1.2;
        let secondHandEnd = centerClockY * 0.2;

        svg.setAttribute('width', widthSvg);
        svg.setAttribute('height', heightSvg);
        btns.appendChild(startBtn);
        btns.appendChild(stopBtn);
        btns.appendChild(info);
        clock.appendChild(btns);
        clock.appendChild(svg);

        function createCircle() {
            let circle = document.createElementNS(svgNS, 'circle');
            circle.setAttribute('cx', widthSvg / 2);
            circle.setAttribute('cy', heightSvg / 2);
            circle.setAttribute('r', widthSvg > heightSvg ? heightSvg / 2 : widthSvg / 2);
            circle.setAttribute('fill', 'yellow');
            circle.setAttribute('stroke', 'none');
            svg.appendChild(circle);
        }

        function createDigitalClock() {

            for (let i = 30; i <= 360; i += 30) {
                let clockFace = document.createElementNS(svgNS, 'circle');
                let axialRadiusDigits = widthSvg / 2.5;
                let radiusDigits = widthSvg / 16;
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
                text.setAttribute('class', 'text');
                text.setAttribute('font-size', widthSvg / 16);
                text.setAttribute('text-anchor', 'middle');
                text.setAttribute('dominant-baseline', 'central');
                svg.appendChild(text);
            }
        }

        function creareHoursHand() {
            let hoursHand = document.createElementNS(svgNS, 'line');
            hoursHand.setAttribute('x1', centerClockX);
            hoursHand.setAttribute('y1', hoursHandBegin);
            hoursHand.setAttribute('x2', centerClockX);
            hoursHand.setAttribute('y2', hoursHandEnd);
            hoursHand.setAttribute('stroke', 'black');
            hoursHand.setAttribute('stroke-width', widthSvg / 50);
            hoursHand.setAttribute('stroke-linecap', 'round');
            hoursHand.setAttribute('class', 'hoursHand');
            svg.appendChild(hoursHand);
        }

        function createMinuteHand() {
            let minuteHand = document.createElementNS(svgNS, 'line');
            minuteHand.setAttribute('x1', centerClockX);
            minuteHand.setAttribute('y1', minuteHandBegin);
            minuteHand.setAttribute('x2', centerClockX);
            minuteHand.setAttribute('y2', minuteHandEnd);
            minuteHand.setAttribute('stroke', 'black');
            minuteHand.setAttribute('stroke-width', widthSvg / 80);
            minuteHand.setAttribute('class', 'minuteHand');
            minuteHand.setAttribute('stroke-linecap', 'round');
            svg.appendChild(minuteHand);
        }

        function createSecondHand() {
            let secondHand = document.createElementNS(svgNS, 'line');
            secondHand.setAttribute('x1', centerClockX);
            secondHand.setAttribute('y1', secondHandBegin);
            secondHand.setAttribute('x2', centerClockX);
            secondHand.setAttribute('y2', secondHandEnd);
            secondHand.setAttribute('stroke', 'red');
            secondHand.setAttribute('stroke-width', widthSvg / 250);
            secondHand.setAttribute('stroke-linecap', 'round');
            secondHand.setAttribute('class', 'secondHand');
            svg.appendChild(secondHand);
        }
        createCircle()
        createDigitalClock();
        creareHoursHand();
        createMinuteHand();
        createSecondHand();
    };
};