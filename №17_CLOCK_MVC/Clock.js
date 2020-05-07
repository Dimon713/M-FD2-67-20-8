export class ManModel {

    start(view) {
        this.myView = view;
        if (this.myView) {
            this.timerId = setInterval(() => this.updateView(), 1000);
        }
    }

    updateView() {
        this.currenTime = new Date();
        this.hours = this.currenTime.getHours() - 3;
        this.minutes = this.currenTime.getMinutes();
        this.seconds = this.currenTime.getSeconds();

        this.angleHours = (this.hours % 12) * 30 + this.minutes * 0.5;
        this.angleMinutes = this.minutes * 6;
        this.angleSeconds = this.seconds * 6;

        if (this.myView) {
            this.myView.update();
        }
    };

    startClock() {
        this.timerId = setInterval(() => this.updateView(), 1000);
    };

    stopClock() {
        clearInterval(this.timerId);
    };
};