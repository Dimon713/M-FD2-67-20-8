let racquet1 = document.createElement('div');
racquet1.id = 'racquet1';
document.body.appendChild(racquet1);


class Racquet {
    constructor(selector, width, height, color, top, left, position) {
        this.$el = document.querySelector(`#${selector}`)
        this.$el.style.width = `${width}px`;
        this.$el.style.height = `${height}px`;
        this.$el.style.backgroundColor = color;
        this.$el.style.top = `${top}px`;
        this.$el.style.left = `${left}px`;
        this.$el.style.position = position;
        this.$el.y = 125;
        this.$el.speed = 0;
        this.$el.score = 0;

    }

}

racquet1 = new Racquet('racquet1', 15, 150, 'green', 125, 0, 'absolute');