export class ManControllerButtons {
    constructor(model) {
        this.startModel = function() {
            model.startClock();
        };

        this.stopModel = function() {
            model.stopClock();
        };
    };

    start(field) {
        this.myField = field;
        this.btnStart = this.myField.querySelector('.startBtn');
        this.btnStart.addEventListener('click', this.startModel);

        this.btnStop = this.myField.querySelector('.stopBtn');
        this.btnStop.addEventListener('click', this.stopModel);
    };
};