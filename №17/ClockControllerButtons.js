export function ManControllerButtons() {
    var myModel = null;
    var myField = null;

    this.start = function(model, field) {
        myModel = model;
        myField = field;

        let buttonStart = myField.querySelector('.startBtn');
        buttonStart.addEventListener('click', this.startModel);

        let btnStop = myField.querySelector('.stopBtn');
        btnStop.addEventListener('click', this.stopModel);
    };

    this.startModel = function() {
        myModel.startClock();
    };

    this.stopModel = function() {
        myModel.stopClock();
    };
};