export function ManModel() {
    let myView = null;
    let timerId = null;

    this.start = function(view) {
        myView = view;
        if (myView) {
            timerId = setInterval(() => this.updateView(), 1000);
        }
    }

    this.updateView = function() {
        this.currenTime = new Date();
        this.hours = this.currenTime.getHours() - 3;
        this.minutes = this.currenTime.getMinutes();
        this.seconds = this.currenTime.getSeconds();

        this.angleHours = (this.hours % 12) * 30 + this.minutes * 0.5;
        this.angleMinutes = this.minutes * 6;
        this.angleSeconds = this.seconds * 6;

        if (myView) {
            myView.update();
        }
    };

    this.startClock = function() {
        timerId = setInterval(() => this.updateView(), 1000);
    };

    this.stopClock = function() {
        clearInterval(timerId);
    };
};